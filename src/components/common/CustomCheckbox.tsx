import { Check } from "lucide-react";

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
  id?: string;
}

/**
 * 커스텀 체크박스 컴포넌트
 * - 애니메이션 효과가 있는 프리미엄 디자인
 * - 체크 시 그라데이션 배경 + 체크마크 애니메이션
 */
export const CustomCheckbox = ({
  checked,
  onChange,
  children,
  id,
}: CustomCheckboxProps) => {
  const checkboxId =
    id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label
      htmlFor={checkboxId}
      className="flex items-start gap-3 py-2.5 cursor-pointer group select-none"
    >
      {/* 커스텀 체크박스 */}
      <div className="flex-shrink-0 mt-0.5">
        <input
          type="checkbox"
          id={checkboxId}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`
            w-5 h-5 rounded transition-all duration-200 ease-out
            flex items-center justify-center
            ${
              checked
                ? "bg-primary-500"
                : "bg-gray-200 dark:bg-slate-700 group-hover:bg-gray-300 dark:group-hover:bg-slate-600"
            }
          `}
        >
          {/* 체크마크 아이콘 */}
          <Check
            size={14}
            strokeWidth={3}
            className={`
              text-white transition-all duration-200
              ${checked ? "opacity-100 scale-100" : "opacity-0 scale-75"}
            `}
          />
        </div>
      </div>

      {/* 라벨 */}
      <span
        className={`
          text-sm leading-relaxed transition-colors duration-150
          ${
            checked
              ? "text-gray-700 dark:text-gray-200"
              : "text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300"
          }
        `}
      >
        {children}
      </span>
    </label>
  );
};
