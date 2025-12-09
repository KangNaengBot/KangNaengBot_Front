import apiClient from "../apiClient";
import type { MessageRequest, MessageResponse } from "@/types";

/**
 * 메시지 전송 및 AI 응답 받기
 * @param request 메시지 요청 데이터
 */
export const sendMessage = async (
  request: MessageRequest
): Promise<MessageResponse> => {
  const response = await apiClient.post<MessageResponse>(
    "/chat/message",
    request
  );
  return response.data;
};
