import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";
import { useSettingsStore } from "@/store";

type Language = "ko" | "en" | "ja" | "zh";

interface LanguageOption {
  id: Language;
  code: string;
  nativeName: string;
}

const LANGUAGES: LanguageOption[] = [
  { id: "ko", code: "KR", nativeName: "한국어" },
  { id: "en", code: "US", nativeName: "English" },
  { id: "ja", code: "JP", nativeName: "日本語" },
  { id: "zh", code: "CN", nativeName: "中文" },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { language, setLanguage, resolvedTheme } = useSettingsStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isDark = resolvedTheme === "dark";

  const currentLanguage =
    LANGUAGES.find((l) => l.id === language) || LANGUAGES[0];

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* 트리거 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-3 py-2 rounded-full
          backdrop-blur-md transition-all duration-200
          hover:scale-105 active:scale-95
          ${
            isDark
              ? "bg-slate-800/80 hover:bg-slate-700/90 text-gray-200 border border-slate-600/50 shadow-lg shadow-black/20"
              : "bg-white/70 hover:bg-white/90 text-gray-700 border border-white/50 shadow-lg shadow-black/5"
          }
          ${
            isOpen
              ? isDark
                ? "ring-2 ring-primary-500/50"
                : "ring-2 ring-primary-400/50"
              : ""
          }
        `}
      >
        <Globe
          size={16}
          className={isDark ? "text-primary-400" : "text-primary-500"}
        />
        <span className="text-sm font-semibold">{currentLanguage.code}</span>
      </button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div
          className={`
            absolute right-0 top-full mt-2 py-2 min-w-[140px] rounded-xl z-50
            animate-fade-in shadow-lg
            ${
              isDark
                ? "bg-slate-800 border border-slate-700"
                : "bg-white border border-gray-200"
            }
          `}
        >
          {LANGUAGES.map((lang) => {
            const isSelected = language === lang.id;
            return (
              <button
                key={lang.id}
                onClick={() => handleLanguageChange(lang.id)}
                className={`
                  w-full flex items-center justify-between gap-3 px-4 py-2.5
                  transition-colors text-left
                  ${
                    isSelected
                      ? isDark
                        ? "bg-primary-500/20 text-primary-400"
                        : "bg-primary-50 text-primary-600"
                      : isDark
                      ? "text-gray-300 hover:bg-slate-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`
                    text-xs font-semibold w-6 text-center
                    ${isDark ? "text-gray-400" : "text-gray-500"}
                  `}
                  >
                    {lang.code}
                  </span>
                  <span className="text-sm">{lang.nativeName}</span>
                </div>
                {isSelected && (
                  <Check size={14} className="text-primary-500 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
