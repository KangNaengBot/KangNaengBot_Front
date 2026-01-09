/**
 * 시간표 Mock 데이터
 * 백엔드 API 연동 전까지 사용할 샘플 데이터
 */

import type {
  Course,
  Schedule,
  ParseCoursesResponse,
  GenerateSchedulesResponse,
  AmbiguousCourse,
} from "@/types";

// 과목 색상 팔레트
const COURSE_COLORS = [
  "#3B82F6", // blue
  "#10B981", // emerald
  "#F59E0B", // amber
  "#EF4444", // red
  "#8B5CF6", // violet
  "#EC4899", // pink
  "#06B6D4", // cyan
  "#84CC16", // lime
];

// 샘플 과목 데이터
export const MOCK_COURSES: Course[] = [
  {
    id: "CSE101-01",
    name: "컴퓨터개론",
    code: "CSE101-01",
    professor: "김철수",
    credits: 3,
    slots: [
      { day: "mon", startPeriod: 2, endPeriod: 3, location: "공학관 301" },
      { day: "wed", startPeriod: 2, endPeriod: 3, location: "공학관 301" },
    ],
    category: "major",
    capacity: 40,
    enrolled: 35,
    color: COURSE_COLORS[0],
  },
  {
    id: "CSE101-02",
    name: "컴퓨터개론",
    code: "CSE101-02",
    professor: "박영희",
    credits: 3,
    slots: [
      { day: "tue", startPeriod: 1, endPeriod: 2, location: "공학관 302" },
      { day: "thu", startPeriod: 1, endPeriod: 2, location: "공학관 302" },
    ],
    category: "major",
    capacity: 40,
    enrolled: 38,
    color: COURSE_COLORS[0],
  },
  {
    id: "CSE301-01",
    name: "데이터베이스",
    code: "CSE301-01",
    professor: "이민호",
    credits: 3,
    slots: [
      { day: "tue", startPeriod: 3, endPeriod: 4, location: "공학관 201" },
      { day: "thu", startPeriod: 3, endPeriod: 4, location: "공학관 201" },
    ],
    category: "major",
    capacity: 35,
    enrolled: 30,
    color: COURSE_COLORS[1],
  },
  {
    id: "CSE301-02",
    name: "데이터베이스",
    code: "CSE301-02",
    professor: "정수진",
    credits: 3,
    slots: [
      { day: "mon", startPeriod: 4, endPeriod: 5, location: "공학관 202" },
      { day: "wed", startPeriod: 4, endPeriod: 5, location: "공학관 202" },
    ],
    category: "major",
    capacity: 35,
    enrolled: 32,
    color: COURSE_COLORS[1],
  },
  {
    id: "ENG201-01",
    name: "실용영어회화",
    code: "ENG201-01",
    professor: "Smith John",
    credits: 2,
    slots: [
      { day: "fri", startPeriod: 1, endPeriod: 2, location: "어학관 101" },
    ],
    category: "liberal",
    capacity: 30,
    enrolled: 28,
    color: COURSE_COLORS[2],
  },
  {
    id: "ENG202-01",
    name: "비즈니스영어",
    code: "ENG202-01",
    professor: "Johnson Emily",
    credits: 2,
    slots: [
      { day: "wed", startPeriod: 6, endPeriod: 7, location: "어학관 102" },
    ],
    category: "liberal",
    capacity: 30,
    enrolled: 25,
    color: COURSE_COLORS[3],
  },
  {
    id: "CSE401-01",
    name: "인공지능",
    code: "CSE401-01",
    professor: "최지능",
    credits: 3,
    slots: [
      { day: "mon", startPeriod: 6, endPeriod: 7, location: "공학관 401" },
      { day: "wed", startPeriod: 6, endPeriod: 7, location: "공학관 401" },
    ],
    category: "major",
    capacity: 30,
    enrolled: 29,
    color: COURSE_COLORS[4],
  },
  {
    id: "CSE201-01",
    name: "자료구조",
    code: "CSE201-01",
    professor: "한구조",
    credits: 3,
    slots: [
      { day: "tue", startPeriod: 5, endPeriod: 6, location: "공학관 303" },
      { day: "thu", startPeriod: 5, endPeriod: 6, location: "공학관 303" },
    ],
    category: "major",
    isRequired: true,
    capacity: 40,
    enrolled: 40,
    color: COURSE_COLORS[5],
  },
  {
    id: "GEN101-01",
    name: "채플",
    code: "GEN101-01",
    professor: "목사님",
    credits: 0.5,
    slots: [{ day: "thu", startPeriod: 8, endPeriod: 8, location: "채플실" }],
    category: "required",
    isRequired: true,
    capacity: 500,
    enrolled: 450,
    color: COURSE_COLORS[6],
  },
  {
    id: "CSE302-01",
    name: "운영체제",
    code: "CSE302-01",
    professor: "박시스템",
    credits: 3,
    slots: [
      { day: "mon", startPeriod: 8, endPeriod: 9, location: "공학관 305" },
      { day: "wed", startPeriod: 8, endPeriod: 9, location: "공학관 305" },
    ],
    category: "major",
    capacity: 35,
    enrolled: 33,
    color: COURSE_COLORS[7],
  },
];

// Mock 시간표 조합 생성
export const MOCK_SCHEDULES: Schedule[] = [
  {
    id: "schedule-1",
    courses: [
      MOCK_COURSES[0], // 컴퓨터개론 김철수
      MOCK_COURSES[2], // 데이터베이스 이민호
      MOCK_COURSES[4], // 실용영어회화
      MOCK_COURSES[8], // 채플
    ],
    totalCredits: 8.5,
    emptyDays: [],
    compactScore: 75,
    warnings: [],
    recommendations: ["빈 시간이 적은 효율적인 시간표예요!"],
  },
  {
    id: "schedule-2",
    courses: [
      MOCK_COURSES[1], // 컴퓨터개론 박영희
      MOCK_COURSES[3], // 데이터베이스 정수진
      MOCK_COURSES[5], // 비즈니스영어
      MOCK_COURSES[8], // 채플
    ],
    totalCredits: 8.5,
    emptyDays: ["tue", "fri"],
    compactScore: 60,
    warnings: [],
    recommendations: ["화요일, 금요일 공강이 있어요!"],
  },
  {
    id: "schedule-3",
    courses: [
      MOCK_COURSES[0], // 컴퓨터개론 김철수
      MOCK_COURSES[3], // 데이터베이스 정수진
      MOCK_COURSES[6], // 인공지능
      MOCK_COURSES[8], // 채플
    ],
    totalCredits: 9.5,
    emptyDays: ["tue"],
    compactScore: 80,
    warnings: [
      {
        type: "capacity_full",
        courseId: "CSE401-01",
        message: "인공지능 수업이 거의 마감됐어요 (29/30)",
      },
    ],
    recommendations: ["AI 관심 있으시면 이 조합 추천!"],
  },
  {
    id: "schedule-4",
    courses: [
      MOCK_COURSES[1], // 컴퓨터개론 박영희
      MOCK_COURSES[2], // 데이터베이스 이민호
      MOCK_COURSES[7], // 자료구조
      MOCK_COURSES[8], // 채플
    ],
    totalCredits: 9.5,
    emptyDays: ["mon", "wed", "fri"],
    compactScore: 55,
    warnings: [
      {
        type: "capacity_full",
        courseId: "CSE201-01",
        message: "자료구조 수업이 마감됐어요 (40/40)",
      },
    ],
    recommendations: ["월/수/금 공강! 하지만 자료구조는 마감됐어요."],
  },
  {
    id: "schedule-5",
    courses: [
      MOCK_COURSES[0], // 컴퓨터개론 김철수
      MOCK_COURSES[2], // 데이터베이스 이민호
      MOCK_COURSES[6], // 인공지능
      MOCK_COURSES[9], // 운영체제
      MOCK_COURSES[8], // 채플
    ],
    totalCredits: 12.5,
    emptyDays: ["fri"],
    compactScore: 85,
    warnings: [],
    recommendations: ["전공 집중! 금요일 공강으로 프로젝트 시간 확보!"],
  },
];

// Mock API 함수들
export const mockParseCoursesFromMessage = async (
  message: string
): Promise<ParseCoursesResponse> => {
  // 시뮬레이션 딜레이
  await new Promise((resolve) => setTimeout(resolve, 800));

  const lowerMessage = message.toLowerCase();
  const courses: Course[] = [];
  const ambiguous: AmbiguousCourse[] = [];
  const notFound: string[] = [];

  // 간단한 키워드 매칭
  if (lowerMessage.includes("컴개론") || lowerMessage.includes("컴퓨터개론")) {
    // 여러 분반이 있으므로 ambiguous로 처리
    ambiguous.push({
      input: "컴퓨터개론",
      candidates: [MOCK_COURSES[0], MOCK_COURSES[1]],
      selectedIndex: null,
    });
  }

  if (lowerMessage.includes("데베") || lowerMessage.includes("데이터베이스")) {
    ambiguous.push({
      input: "데이터베이스",
      candidates: [MOCK_COURSES[2], MOCK_COURSES[3]],
      selectedIndex: null,
    });
  }

  if (lowerMessage.includes("영어") || lowerMessage.includes("영회화")) {
    ambiguous.push({
      input: "영어회화",
      candidates: [MOCK_COURSES[4], MOCK_COURSES[5]],
      selectedIndex: null,
    });
  }

  if (lowerMessage.includes("인공지능") || lowerMessage.includes("ai")) {
    courses.push(MOCK_COURSES[6]);
  }

  if (lowerMessage.includes("자료구조")) {
    courses.push(MOCK_COURSES[7]);
  }

  if (lowerMessage.includes("운영체제") || lowerMessage.includes("os")) {
    courses.push(MOCK_COURSES[9]);
  }

  // 필터 추출
  const extractedFilters: Partial<import("@/types").ScheduleFilters> = {};
  if (lowerMessage.includes("금공강") || lowerMessage.includes("금요일 공강")) {
    extractedFilters.emptyDays = ["fri"];
  }
  if (lowerMessage.includes("1교시 싫") || lowerMessage.includes("아침 싫")) {
    extractedFilters.excludePeriods = [
      { day: "mon", periods: [1] },
      { day: "tue", periods: [1] },
      { day: "wed", periods: [1] },
      { day: "thu", periods: [1] },
      { day: "fri", periods: [1] },
    ];
  }

  // 매칭된 게 없으면 notFound
  if (courses.length === 0 && ambiguous.length === 0) {
    notFound.push(message);
  }

  return {
    courses,
    ambiguous,
    notFound,
    extractedFilters,
    message:
      courses.length > 0 || ambiguous.length > 0
        ? "과목을 찾았어요! 확인해주세요."
        : "입력하신 과목을 찾지 못했어요. 다시 입력해주세요.",
  };
};

export const mockGenerateSchedules = async (
  courseIds: string[]
): Promise<GenerateSchedulesResponse> => {
  // 시뮬레이션 딜레이
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // courseIds에 해당하는 과목들로 필터링된 시간표 반환
  const selectedCourses = MOCK_COURSES.filter((c) => courseIds.includes(c.id));

  if (selectedCourses.length === 0) {
    return {
      success: false,
      schedules: [],
      warnings: [],
      message: "선택된 과목이 없어요.",
      fallback: {
        reason: "no_courses",
        suggestions: ["컴퓨터개론", "데이터베이스", "자료구조"],
      },
    };
  }

  // 선택된 과목을 포함하는 시간표들만 필터링
  const matchingSchedules = MOCK_SCHEDULES.filter((schedule) =>
    selectedCourses.some((course) =>
      schedule.courses.some((c) => c.id === course.id)
    )
  );

  return {
    success: true,
    schedules:
      matchingSchedules.length > 0
        ? matchingSchedules
        : MOCK_SCHEDULES.slice(0, 3),
    warnings: [],
    message: `${matchingSchedules.length || 3}개의 시간표를 생성했어요!`,
  };
};
