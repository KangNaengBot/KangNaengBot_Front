/**
 * 시간표 상태 관리 Store
 */
import { create } from "zustand";
import type {
  Course,
  Schedule,
  AmbiguousCourse,
  ScheduleFilters,
  ScheduleError,
  SavedSchedule,
  Day,
} from "@/types";
import { scheduleService } from "@/api";
import i18n from "@/i18n";

type ScheduleStatus =
  | "idle"
  | "parsing"
  | "confirming"
  | "generating"
  | "complete"
  | "error";

interface ScheduleState {
  // 모드 상태
  isScheduleMode: boolean;
  status: ScheduleStatus;

  // 과목 선택
  userInput: string;
  parsedCourses: Course[];
  ambiguousCourses: AmbiguousCourse[];
  confirmedCourses: Course[];

  // 필터 설정
  filters: ScheduleFilters;

  // 생성 결과
  generatedSchedules: Schedule[];
  activeScheduleIndex: number;

  // Canvas UI
  isCanvasOpen: boolean;

  // 저장 기능
  savedSchedules: SavedSchedule[];

  // 에러 상태
  error: ScheduleError | null;

  // Actions
  enterScheduleMode: () => void;
  exitScheduleMode: () => void;
  setFilters: (filters: Partial<ScheduleFilters>) => void;
  parseCoursesFromMessage: (
    sessionId: string,
    message: string
  ) => Promise<void>;
  selectAmbiguousCourse: (ambiguousIndex: number, courseIndex: number) => void;
  confirmAllCourses: () => void;
  generateSchedules: (sessionId: string) => Promise<void>;
  setActiveSchedule: (index: number) => void;
  openCanvas: () => void;
  closeCanvas: () => void;
  saveSchedule: (name?: string) => void;
  deleteSavedSchedule: (id: string) => void;
  clearError: () => void;
  reset: () => void;
}

const DEFAULT_FILTERS: ScheduleFilters = {
  maxCredits: null,
  emptyDays: [],
  excludePeriods: [],
  preferCompact: false,
};

export const useScheduleStore = create<ScheduleState>((set, get) => ({
  // Initial State
  isScheduleMode: false,
  status: "idle",
  userInput: "",
  parsedCourses: [],
  ambiguousCourses: [],
  confirmedCourses: [],
  filters: DEFAULT_FILTERS,
  generatedSchedules: [],
  activeScheduleIndex: 0,
  isCanvasOpen: false,
  savedSchedules: [],
  error: null,

  // Actions
  enterScheduleMode: () => {
    set({
      isScheduleMode: true,
      status: "idle",
      parsedCourses: [],
      ambiguousCourses: [],
      confirmedCourses: [],
      generatedSchedules: [],
      error: null,
    });
  },

  exitScheduleMode: () => {
    set({
      isScheduleMode: false,
      status: "idle",
      isCanvasOpen: false,
    });
  },

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }));
  },

  parseCoursesFromMessage: async (sessionId, message) => {
    set({ status: "parsing", userInput: message, error: null });

    try {
      const response = await scheduleService.parseCourses(sessionId, message);

      // 추출된 필터 적용
      const extractedFilters = response.extractedFilters;

      set((state) => ({
        status: "confirming",
        parsedCourses: response.courses,
        ambiguousCourses: response.ambiguous,
        filters: {
          ...state.filters,
          ...(extractedFilters.emptyDays && {
            emptyDays: extractedFilters.emptyDays as Day[],
          }),
          ...(extractedFilters.excludePeriods && {
            excludePeriods: extractedFilters.excludePeriods,
          }),
        },
      }));

      // 파싱 실패 시
      if (
        response.courses.length === 0 &&
        response.ambiguous.length === 0 &&
        response.notFound.length > 0
      ) {
        set({
          status: "error",
          error: {
            type: "parse_failed",
            message: i18n.t("schedule.error.noCourseFound"),
            retryable: true,
          },
        });
      }
    } catch {
      set({
        status: "error",
        error: {
          type: "parse_failed",
          message: i18n.t("schedule.error.parseFailed"),
          retryable: true,
        },
      });
    }
  },

  selectAmbiguousCourse: (ambiguousIndex, courseIndex) => {
    set((state) => {
      const newAmbiguous = [...state.ambiguousCourses];
      if (newAmbiguous[ambiguousIndex]) {
        newAmbiguous[ambiguousIndex] = {
          ...newAmbiguous[ambiguousIndex],
          selectedIndex: courseIndex,
        };
      }
      return { ambiguousCourses: newAmbiguous };
    });
  },

  confirmAllCourses: () => {
    const { parsedCourses, ambiguousCourses } = get();

    // 이미 확정된 과목 + 애매한 과목 중 선택된 것들
    const confirmed: Course[] = [...parsedCourses];

    ambiguousCourses.forEach((amb) => {
      if (amb.selectedIndex !== null && amb.candidates[amb.selectedIndex]) {
        confirmed.push(amb.candidates[amb.selectedIndex]);
      }
    });

    set({ confirmedCourses: confirmed });
  },

  generateSchedules: async (sessionId) => {
    const { confirmedCourses, filters } = get();

    if (confirmedCourses.length === 0) {
      set({
        status: "error",
        error: {
          type: "no_courses",
          message: i18n.t("schedule.error.noCoursesSelected"),
          retryable: true,
        },
      });
      return;
    }

    set({ status: "generating", error: null });

    try {
      const courseIds = confirmedCourses.map((c) => c.id);
      const response = await scheduleService.generateSchedules(
        sessionId,
        courseIds,
        filters
      );

      if (!response.success || response.schedules.length === 0) {
        set({
          status: "error",
          error: {
            type: response.fallback?.reason || "generation_failed",
            message:
              response.fallback?.suggestions?.join(", ") ||
              i18n.t("schedule.error.generationFailed"),
            retryable: true,
          },
        });
        return;
      }

      set({
        status: "complete",
        generatedSchedules: response.schedules,
        activeScheduleIndex: 0,
      });
    } catch {
      set({
        status: "error",
        error: {
          type: "generation_failed",
          message: i18n.t("schedule.error.generationFailed"),
          retryable: true,
        },
      });
    }
  },

  setActiveSchedule: (index) => {
    const { generatedSchedules } = get();
    if (index >= 0 && index < generatedSchedules.length) {
      set({ activeScheduleIndex: index });
    }
  },

  openCanvas: () => set({ isCanvasOpen: true }),
  closeCanvas: () => set({ isCanvasOpen: false }),

  saveSchedule: (name) => {
    const { generatedSchedules, activeScheduleIndex, savedSchedules } = get();
    const schedule = generatedSchedules[activeScheduleIndex];

    if (!schedule) return;

    const savedSchedule: SavedSchedule = {
      ...schedule,
      id: `saved-${Date.now()}`,
      savedAt: new Date().toISOString(),
      name: name || `시간표 ${savedSchedules.length + 1}`,
      isFavorite: false,
    };

    set((state) => ({
      savedSchedules: [savedSchedule, ...state.savedSchedules],
    }));

    // localStorage에도 저장
    try {
      const stored = localStorage.getItem("kangnaeng-saved-schedules");
      const existing = stored ? JSON.parse(stored) : [];
      localStorage.setItem(
        "kangnaeng-saved-schedules",
        JSON.stringify([savedSchedule, ...existing])
      );
    } catch {
      // localStorage 실패 시 무시
    }
  },

  deleteSavedSchedule: (id) => {
    set((state) => ({
      savedSchedules: state.savedSchedules.filter((s) => s.id !== id),
    }));

    // localStorage에서도 삭제
    try {
      const stored = localStorage.getItem("kangnaeng-saved-schedules");
      if (stored) {
        const existing = JSON.parse(stored);
        localStorage.setItem(
          "kangnaeng-saved-schedules",
          JSON.stringify(existing.filter((s: SavedSchedule) => s.id !== id))
        );
      }
    } catch {
      // localStorage 실패 시 무시
    }
  },

  clearError: () => set({ error: null }),

  reset: () => {
    set({
      isScheduleMode: false,
      status: "idle",
      userInput: "",
      parsedCourses: [],
      ambiguousCourses: [],
      confirmedCourses: [],
      filters: DEFAULT_FILTERS,
      generatedSchedules: [],
      activeScheduleIndex: 0,
      isCanvasOpen: false,
      error: null,
    });
  },
}));
