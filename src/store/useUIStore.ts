import { create } from "zustand";

interface UIState {
  // State
  isSidebarOpen: boolean;
  isProfileModalOpen: boolean;
  isMobile: boolean;

  // Actions
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  openProfileModal: () => void;
  closeProfileModal: () => void;
  setIsMobile: (isMobile: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Initial State
  isSidebarOpen: true,
  isProfileModalOpen: false,
  isMobile: typeof window !== "undefined" ? window.innerWidth < 768 : false,

  // Actions
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  setSidebarOpen: (open) => set({ isSidebarOpen: open }),

  openProfileModal: () => set({ isProfileModalOpen: true }),

  closeProfileModal: () => set({ isProfileModalOpen: false }),

  setIsMobile: (isMobile) => set({ isMobile, isSidebarOpen: !isMobile }),
}));
