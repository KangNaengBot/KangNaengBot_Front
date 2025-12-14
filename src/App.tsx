import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ChatPage,
  LoginPage,
  TermsPage,
  PrivacyPage,
  OnboardingPage,
} from "@/pages";
import { ToastContainer } from "@/components/common";
import { useSettingsStore } from "@/store";

function App() {
  const { initializeTheme } = useSettingsStore();

  // 앱 전체에서 테마 초기화 (모든 라우트에 적용)
  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <BrowserRouter>
      <Routes>
        {/* 공개 라우트 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />

        {/* 게스트도 접근 가능한 채팅 라우트 (프로필 체크 없음) */}
        <Route path="/" element={<ChatPage />} />
        <Route path="/chat/:sessionId" element={<ChatPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
