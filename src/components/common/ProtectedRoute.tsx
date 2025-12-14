import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "@/store";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireProfile?: boolean;
}

/**
 * 보호된 라우트 컴포넌트
 * - 인증되지 않은 사용자 → /login으로 리다이렉트
 * - 프로필이 없는 인증된 사용자 → /onboarding으로 리다이렉트 (requireProfile이 true일 때)
 */
export const ProtectedRoute = ({
  children,
  requireProfile = true,
}: ProtectedRouteProps) => {
  const { isAuthenticated, profile } = useAuthStore();
  const location = useLocation();

  // 미인증 상태 → 로그인 페이지로
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 프로필 완료 여부 체크 (모든 필수 필드가 있어야 완료)
  const isProfileComplete =
    profile?.profile_name?.trim() &&
    profile?.student_id?.trim() &&
    profile?.college &&
    profile?.department &&
    profile?.major;

  // 프로필이 필요한데 없으면 → 온보딩으로
  if (requireProfile && !isProfileComplete) {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
};
