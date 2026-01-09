/**
 * 시간표 그리드 컴포넌트
 * 5일 x 10교시 그리드에 과목 표시
 * forwardRef로 이미지 저장 시 ref 전달 가능
 */
import { useMemo, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import type { Course, Day, TimeSlot } from "@/types";

interface ScheduleGridProps {
  courses: Course[];
  compact?: boolean; // 작은 버전
  onCourseClick?: (course: Course) => void;
}

// 교시별 시작 시간
const PERIOD_TIMES = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

const DAYS: Day[] = ["mon", "tue", "wed", "thu", "fri"];

export const ScheduleGrid = forwardRef<HTMLDivElement, ScheduleGridProps>(
  ({ courses, compact = false, onCourseClick }, ref) => {
    const { t } = useTranslation();

    // 그리드 셀 데이터 생성 (day x period)
    const gridData = useMemo(() => {
      const grid: Record<string, { course: Course; slot: TimeSlot } | null> =
        {};

      // 빈 그리드 초기화
      DAYS.forEach((day) => {
        for (let period = 1; period <= 10; period++) {
          grid[`${day}-${period}`] = null;
        }
      });

      // 과목 배치
      courses.forEach((course) => {
        course.slots.forEach((slot) => {
          for (let p = slot.startPeriod; p <= slot.endPeriod; p++) {
            grid[`${slot.day}-${p}`] = { course, slot };
          }
        });
      });

      return grid;
    }, [courses]);

    // 병합된 셀 정보 계산 (연속 교시 합치기)
    const mergedCells = useMemo(() => {
      const merged: Record<
        string,
        { course: Course; slot: TimeSlot; span: number; isStart: boolean }
      > = {};

      DAYS.forEach((day) => {
        for (let period = 1; period <= 10; period++) {
          const key = `${day}-${period}`;
          const cell = gridData[key];

          if (cell) {
            // 해당 슬롯의 시작 교시인지 확인
            if (cell.slot.startPeriod === period) {
              merged[key] = {
                ...cell,
                span: cell.slot.endPeriod - cell.slot.startPeriod + 1,
                isStart: true,
              };
            } else {
              merged[key] = { ...cell, span: 1, isStart: false };
            }
          }
        }
      });

      return merged;
    }, [gridData]);

    const cellHeight = compact ? 32 : 48; // px
    const fontSize = compact ? "text-[10px]" : "text-xs";
    const timeColWidth = compact ? 32 : 48; // px

    return (
      <div
        ref={ref}
        className="overflow-hidden rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900"
        style={{
          display: "grid",
          gridTemplateColumns: `${timeColWidth}px repeat(5, minmax(0, 1fr))`,
          gridTemplateRows: `auto repeat(10, ${cellHeight}px)`,
        }}
      >
        {/* 헤더 행: 빈 칸 + 5개 요일 */}
        <div className="bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700" />
        {DAYS.map((day) => (
          <div
            key={day}
            className={`py-2 text-center font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-slate-800 border-l border-b border-gray-200 dark:border-slate-700 ${fontSize}`}
          >
            {t(`schedule.days.${day}`)}
          </div>
        ))}

        {/* 10교시 x (시간라벨 + 5요일) */}
        {Array.from({ length: 10 }, (_, periodIdx) => {
          const period = periodIdx + 1;
          const rowStart = periodIdx + 2; // 헤더가 1행

          return (
            <>
              {/* 시간 라벨 */}
              <div
                key={`time-${period}`}
                className={`flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 ${fontSize}`}
                style={{ gridRow: rowStart, gridColumn: 1 }}
              >
                {compact ? period : PERIOD_TIMES[periodIdx]}
              </div>

              {/* 요일별 셀 */}
              {DAYS.map((day, dayIdx) => {
                const key = `${day}-${period}`;
                const cell = mergedCells[key];
                const colIdx = dayIdx + 2; // 시간열이 1열

                // 병합된 셀 (시작이 아님) -> 렌더링 안 함
                if (cell && !cell.isStart) {
                  return null;
                }

                return (
                  <div
                    key={key}
                    className="border-t border-l border-gray-200 dark:border-slate-700"
                    style={{
                      gridRow: cell
                        ? `${rowStart} / span ${cell.span}`
                        : rowStart,
                      gridColumn: colIdx,
                    }}
                  >
                    {cell && (
                      <button
                        onClick={() => onCourseClick?.(cell.course)}
                        className={`w-full h-full p-1 text-left transition-opacity hover:opacity-80 overflow-hidden ${fontSize}`}
                        style={{
                          backgroundColor: cell.course.color || "#4e92ff",
                          color: "white",
                        }}
                      >
                        <div className="font-medium truncate">
                          {compact
                            ? cell.course.name.slice(0, 4)
                            : cell.course.name}
                        </div>
                        {!compact && (
                          <div className="text-white/80 truncate text-[10px]">
                            {cell.slot.location}
                          </div>
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    );
  }
);

ScheduleGrid.displayName = "ScheduleGrid";
