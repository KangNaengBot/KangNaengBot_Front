import { MainLayout } from "@/components/layout";
import {
  ChatInput,
  MessageList,
  WelcomeScreen,
  SuggestedQuestions,
} from "@/components/chat";
import { useChatStore, useUIStore } from "@/store";

export const ChatPage = () => {
  const { messages } = useChatStore();
  const { isMobile } = useUIStore();
  const hasMessages = messages.length > 0;

  return (
    <MainLayout>
      {hasMessages ? (
        <>
          <MessageList />
          <ChatInput showNewChatButton />
        </>
      ) : isMobile ? (
        // 모바일: 입력창 하단 고정
        <div className="flex-1 flex flex-col relative">
          <div className="flex-1 flex flex-col items-center justify-center px-4">
            <WelcomeScreen />
            <SuggestedQuestions />
          </div>
          <div className="fixed bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-white via-white to-transparent pt-4">
            <ChatInput />
          </div>
        </div>
      ) : (
        // 데스크톱: 기존 중앙 레이아웃
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <WelcomeScreen />
          <ChatInput />
          <SuggestedQuestions />
        </div>
      )}
    </MainLayout>
  );
};
