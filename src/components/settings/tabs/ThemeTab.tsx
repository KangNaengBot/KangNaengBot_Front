import { useTranslation } from "react-i18next";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { useSettingsStore } from "@/store";

type Theme = "light" | "dark" | "system";

interface ThemeOption {
  id: Theme;
  labelKey: string;
  descKey: string;
  icon: React.ReactNode;
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "light",
    labelKey: "settings.theme.light",
    descKey: "settings.theme.lightDesc",
    icon: <Sun size={24} />,
  },
  {
    id: "dark",
    labelKey: "settings.theme.dark",
    descKey: "settings.theme.darkDesc",
    icon: <Moon size={24} />,
  },
  {
    id: "system",
    labelKey: "settings.theme.system",
    descKey: "settings.theme.systemDesc",
    icon: <Monitor size={24} />,
  },
];

export const ThemeTab = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useSettingsStore();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        {t("settings.theme.title")}
      </h3>

      <div className="space-y-3">
        {THEME_OPTIONS.map((option) => (
          <button
            key={option.id}
            onClick={() => setTheme(option.id)}
            className={`
              w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all
              ${
                theme === option.id
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-900/30"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 hover:border-gray-300 dark:hover:border-gray-600"
              }
            `}
          >
            {/* 아이콘 */}
            <div
              className={`
                w-12 h-12 rounded-xl flex items-center justify-center
                ${
                  theme === option.id
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                }
              `}
            >
              {option.icon}
            </div>

            {/* 텍스트 */}
            <div className="flex-1 text-left">
              <p
                className={`font-medium ${
                  theme === option.id
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-800 dark:text-gray-100"
                }`}
              >
                {t(option.labelKey)}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t(option.descKey)}
              </p>
            </div>

            {/* 선택 표시 */}
            {theme === option.id && (
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                <Check size={14} className="text-white" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
