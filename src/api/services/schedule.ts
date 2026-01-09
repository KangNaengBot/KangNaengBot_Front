/**
 * 시간표 API 서비스
 * Mock 데이터 사용 → 나중에 실제 API로 교체
 */

import type {
  ParseCoursesResponse,
  GenerateSchedulesResponse,
  ScheduleFilters,
} from "@/types";
import {
  mockParseCoursesFromMessage,
  mockGenerateSchedules,
  mockGenerateSchedulesFromText,
} from "../mocks/scheduleMock";

// 실제 API 사용 여부 플래그 (나중에 true로 변경)
const USE_REAL_API = false;

/**
 * 자연어 메시지에서 과목 파싱
 */
export const parseCourses = async (
  _sessionId: string,
  message: string
): Promise<ParseCoursesResponse> => {
  if (USE_REAL_API) {
    // TODO: 실제 API 연동
    // const response = await apiClient.post("/schedule/parse", { session_id: sessionId, message });
    // return response.data;
    throw new Error("Real API not implemented yet");
  }

  return mockParseCoursesFromMessage(message);
};

/**
 * 시간표 생성
 */
export const generateSchedules = async (
  _sessionId: string,
  courseIds: string[],
  _filters?: ScheduleFilters
): Promise<GenerateSchedulesResponse> => {
  if (USE_REAL_API) {
    // TODO: 실제 API 연동
    // const response = await apiClient.post("/schedule/generate", {
    //   session_id: sessionId,
    //   course_ids: courseIds,
    //   filters,
    // });
    // return response.data;
    throw new Error("Real API not implemented yet");
  }

  // filters는 Mock에서는 무시 (나중에 구현)
  return mockGenerateSchedules(courseIds);
};

/**
 * 텍스트에서 바로 시간표 생성 (Single Step)
 */
export const generateSchedulesFromText = async (
  _sessionId: string,
  message: string
): Promise<GenerateSchedulesResponse> => {
  if (USE_REAL_API) {
    // TODO: 실제 API 연동
    throw new Error("Real API not implemented yet");
  }

  return mockGenerateSchedulesFromText(message);
};
