import apiClient from "../apiClient";
import type { ProfileRequest, ProfileResponse } from "@/types";

/**
 * 현재 사용자의 프로필 조회
 */
export const getProfile = async (): Promise<ProfileResponse | null> => {
  const response = await apiClient.get<ProfileResponse | null>("/profiles/");
  return response.data;
};

/**
 * 프로필 저장/수정 (부분 업데이트 가능)
 * @param profile 프로필 데이터
 */
export const saveProfile = async (
  profile: ProfileRequest
): Promise<ProfileResponse> => {
  const response = await apiClient.post<ProfileResponse>("/profiles/", profile);
  return response.data;
};
