import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/common";
import { useAuthStore } from "@/store";
import { authService } from "@/api";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login, isAuthenticated, isLoading } = useAuthStore();

  // OAuth 콜백 처리
  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      login(token).then(() => {
        navigate("/", { replace: true });
      });
    }
  }, [searchParams, login, navigate]);

  // 이미 로그인되어 있으면 홈으로
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleGoogleLogin = () => {
    const redirectUri = `${window.location.origin}/login`;
    authService.googleLogin(redirectUri);
  };

  const handleGuestMode = () => {
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-2xl shadow-primary-500/40 mb-6">
            <span className="text-white text-4xl font-bold">강</span>
          </div>
          <h1 className="text-3xl font-bold text-navy-800 mb-2">강냉봇</h1>
          <p className="text-navy-500">강남대학교 AI 도우미</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 space-y-4">
          <Button
            onClick={handleGoogleLogin}
            variant="secondary"
            size="lg"
            className="w-full gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google 계정으로 시작하기
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-navy-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-navy-400">또는</span>
            </div>
          </div>

          <Button
            onClick={handleGuestMode}
            variant="ghost"
            size="lg"
            className="w-full"
          >
            게스트로 둘러보기
          </Button>
        </div>

        <p className="text-center text-xs text-navy-400 mt-6">
          로그인하면 대화 기록이 저장됩니다.
        </p>
      </div>
    </div>
  );
};
