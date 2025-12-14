import { create } from "zustand";

export type SettingsTabId =
  | "profile"
  | "account"
  | "theme"
  | "language"
  | "feedback";

interface UIState {
  // State
  isSidebarOpen: boolean;
  isSettingsModalOpen: boolean;
  isMobile: boolean;
  activeSettingsTab: SettingsTabId;

  // Legacy alias (deprecated, use isSettingsModalOpen)
  isProfileModalOpen: boolean;

  // Actions
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  openSettingsModal: (tab?: SettingsTabId) => void;
  closeSettingsModal: () => void;
  setIsMobile: (isMobile: boolean) => void;
  setActiveSettingsTab: (tab: SettingsTabId) => void;

  // Legacy alias (deprecated)
  openProfileModal: () => void;
  closeProfileModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Initial State
  isSidebarOpen: true,
  isSettingsModalOpen: false,
  isProfileModalOpen: false, // Legacy alias
  isMobile: typeof window !== "undefined" ? window.innerWidth < 768 : false,
  activeSettingsTab: "profile",

  // Actions
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  setSidebarOpen: (open) => set({ isSidebarOpen: open }),

  openSettingsModal: (tab) =>
    set({
      isSettingsModalOpen: true,
      isProfileModalOpen: true,
      activeSettingsTab: tab || "profile",
    }),

  closeSettingsModal: () =>
    set({
      isSettingsModalOpen: false,
      isProfileModalOpen: false,
      activeSettingsTab: "profile",
    }),

  setIsMobile: (isMobile) => set({ isMobile, isSidebarOpen: !isMobile }),

  setActiveSettingsTab: (tab) => set({ activeSettingsTab: tab }),

  // Legacy alias (deprecated, use openSettingsModal/closeSettingsModal)
  openProfileModal: () =>
    set({
      isSettingsModalOpen: true,
      isProfileModalOpen: true,
      activeSettingsTab: "profile",
    }),
  closeProfileModal: () =>
    set({
      isSettingsModalOpen: false,
      isProfileModalOpen: false,
      activeSettingsTab: "profile",
    }),
}));
