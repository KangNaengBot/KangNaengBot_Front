import { ReactNode, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { ProfileModal } from "@/components/chat/ProfileModal";
import { useUIStore } from "@/store";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { setIsMobile } = useUIStore();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">{children}</main>
      <ProfileModal />
    </div>
  );
};
