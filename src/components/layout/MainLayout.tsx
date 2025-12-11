import { ReactNode, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { SettingsModal } from "@/components/settings";
import { useUIStore, useSettingsStore } from "@/store";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { setIsMobile } = useUIStore();
  const { initializeTheme } = useSettingsStore();

  // 테마 초기화
  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);

  return (
    <div className="flex h-screen overflow-hidden dark:bg-slate-900 transition-colors">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">{children}</main>
      <SettingsModal />
    </div>
  );
};
