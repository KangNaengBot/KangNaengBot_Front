import { ReactNode, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { SettingsModal } from "@/components/settings";
import { LanguageSwitcher } from "@/components/common";
import { useUIStore } from "@/store";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { setIsMobile, isMobile, isSidebarOpen } = useUIStore();

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
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* 우측 상단 언어 스위처 */}
        <div
          className={`
            absolute top-4 z-30 transition-all duration-300
            ${isMobile ? "right-4" : isSidebarOpen ? "right-4" : "right-4"}
          `}
        >
          <LanguageSwitcher />
        </div>
        {children}
      </main>
      <SettingsModal />
    </div>
  );
};
