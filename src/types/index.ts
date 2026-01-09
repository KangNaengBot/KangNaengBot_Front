/**
 * Types 모듈 중앙 export
 */

// API 관련 타입
export * from "./api";

// 시간표 관련 타입
export * from "./schedule";

// 추가 공통 타입
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

/** 추천 질문 타입 */
export interface SuggestedQuestion {
  id: string;
  text: string;
  icon?: string;
}
