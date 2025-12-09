import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User, ProfileResponse } from "@/types";
import { setAccessToken, removeAccessToken } from "@/api";
import { authService, profilesService } from "@/api";

interface AuthState {
  // State
  user: User | null;
  profile: ProfileResponse | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  setUser: (user: User | null) => void;
  setProfile: (profile: ProfileResponse | null) => void;
  login: (accessToken: string) => Promise<void>;
  logout: () => void;
  fetchProfile: () => Promise<void>;
  updateProfile: (profile: Partial<ProfileResponse>) => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // Initial State
      user: null,
      profile: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      setUser: (user) => set({ user, isAuthenticated: !!user }),

      setProfile: (profile) => set({ profile }),

      login: async (accessToken: string) => {
        set({ isLoading: true, error: null });
        try {
          setAccessToken(accessToken);
          const user = await authService.getMe();
          set({ user, isAuthenticated: true, isLoading: false });

          // 프로필도 함께 로드
          const profile = await profilesService.getProfile();
          set({ profile });
        } catch (error) {
          removeAccessToken();
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error:
              error instanceof Error ? error.message : "로그인에 실패했습니다.",
          });
        }
      },

      logout: () => {
        removeAccessToken();
        set({
          user: null,
          profile: null,
          isAuthenticated: false,
          error: null,
        });
      },

      fetchProfile: async () => {
        set({ isLoading: true });
        try {
          const profile = await profilesService.getProfile();
          set({ profile, isLoading: false });
        } catch (error) {
          set({
            isLoading: false,
            error:
              error instanceof Error
                ? error.message
                : "프로필을 불러오지 못했습니다.",
          });
        }
      },

      updateProfile: async (profileData) => {
        set({ isLoading: true, error: null });
        try {
          const updatedProfile = await profilesService.saveProfile(profileData);
          set({ profile: updatedProfile, isLoading: false });
        } catch (error) {
          set({
            isLoading: false,
            error:
              error instanceof Error
                ? error.message
                : "프로필 저장에 실패했습니다.",
          });
          throw error;
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        profile: state.profile,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
