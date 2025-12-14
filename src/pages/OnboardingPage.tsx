import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuthStore, useSettingsStore } from "@/store";
import { ChevronDown } from "lucide-react";
import { CustomDropdown, LanguageSwitcher } from "@/components/common";
import { UNIVERSITY_TRANS_KEYS } from "@/constants/universityTranslation";

// 드롭다운 옵션들 - ProfileTab과 동일
const COLLEGES = [
  "부총장직속",
  "복지융합대학",
  "경영관리대학",
  "글로벌문화콘텐츠대학",
  "공과대학",
  "예체능대학",
  "사범대학",
];

const DEPARTMENTS: Record<string, string[]> = {
  부총장직속: ["자유전공학부"],
  복지융합대학: ["사회복지학부", "시니어비즈니스학과", "사회복지학부(야)"],
  경영관리대학: [
    "상경학부",
    "법행정세무학부",
    "상경학부(야)",
    "법행정세무학부(야)",
  ],
  글로벌문화콘텐츠대학: [
    "문화콘텐츠학과",
    "국제지역학과",
    "중국콘텐츠비즈니스학과",
    "기독교커뮤니케이션학과",
    "한국어문학과",
  ],
  공과대학: [
    "컴퓨터공학부",
    "인공지능융합공학부",
    "전자반도체공학부",
    "부동산건설학부",
  ],
  예체능대학: ["디자인학과", "체육학과", "음악학과"],
  사범대학: ["교육학과", "유아교육과", "초등특수교육과", "중등특수교육과"],
};

const MAJORS: Record<string, string[]> = {
  자유전공학부: ["자유전공학부"],
  사회복지학부: ["사회복지학전공", "사회서비스학전공"],
  시니어비즈니스학과: ["시니어비즈니스학과"],
  "사회복지학부(야)": ["사회복지학전공(야)"],
  상경학부: ["경영학전공", "경제금융학전공", "국제무역학전공"],
  법행정세무학부: ["세무학전공", "법행정학전공"],
  "상경학부(야)": ["경영학전공(야)", "경제금융학전공(야)"],
  "법행정세무학부(야)": ["세무학전공(야)", "법행정학전공(야)"],
  문화콘텐츠학과: ["문화콘텐츠학과"],
  국제지역학과: ["국제지역학과"],
  중국콘텐츠비즈니스학과: ["중국콘텐츠비즈니스학과"],
  기독교커뮤니케이션학과: ["기독교커뮤니케이션학과"],
  한국어문학과: ["한국어문학과(외국인정원외)"],
  컴퓨터공학부: ["소프트웨어전공", "메타버스게임전공"],
  인공지능융합공학부: ["인공지능전공", "데이터사이언스전공"],
  전자반도체공학부: ["전자공학전공", "반도체공학전공", "스마트모빌리티전공"],
  부동산건설학부: ["부동산학전공", "스마트도시공학전공", "건축공학전공"],
  디자인학과: ["디자인학과"],
  체육학과: ["체육학과"],
  음악학과: ["음악학과"],
  교육학과: ["교육학과"],
  유아교육과: ["유아교육과"],
  초등특수교육과: ["초등특수교육과"],
  중등특수교육과: ["중등특수교육과"],
};

export const OnboardingPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    profile,
    updateProfile,
    isLoading,
    error,
    clearError,
    isAuthenticated,
  } = useAuthStore();
  const { resolvedTheme } = useSettingsStore();

  // 이미 프로필이 완전히 있으면 홈으로 리다이렉트
  useEffect(() => {
    const isComplete =
      profile?.profile_name?.trim() &&
      profile?.student_id?.trim() &&
      profile?.college &&
      profile?.department &&
      profile?.major;
    if (isComplete) {
      navigate("/", { replace: true });
    }
  }, [profile, navigate]);

  // 로그인 안 되어 있으면 로그인 페이지로
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const [form, setForm] = useState({
    profile_name: "",
    student_id: "",
    college: "",
    department: "",
    major: "",
    current_grade: 1,
    current_semester: 1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = {
        ...prev,
        [name]:
          name === "current_grade" || name === "current_semester"
            ? Number(value)
            : value,
      };
      if (name === "college") {
        updated.department = "";
        updated.major = "";
      }
      if (name === "department") {
        updated.major = "";
      }
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    // 필수 필드 검증
    if (!form.profile_name.trim()) {
      return;
    }

    try {
      await updateProfile(form);
      navigate("/", { replace: true });
    } catch {
      // 에러는 store에서 처리됨
    }
  };

  const departmentList = form.college ? DEPARTMENTS[form.college] || [] : [];
  const majorList = form.department ? MAJORS[form.department] || [] : [];

  const getTranslatedOptions = (items: string[]) => {
    return items.map((item) => {
      const transKey = UNIVERSITY_TRANS_KEYS[item];
      return {
        label: transKey ? t(transKey) : item,
        value: item,
      };
    });
  };

  const collegeOptions = getTranslatedOptions(COLLEGES);
  const departmentOptions = getTranslatedOptions(departmentList);
  const majorOptions = getTranslatedOptions(majorList);

  const isDark = resolvedTheme === "dark";

  const inputStyle =
    "flex-1 min-w-0 px-4 py-3 bg-gray-100/80 dark:bg-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400/30 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all";

  // 모든 필수 필드 입력 여부
  const isFormValid =
    form.profile_name.trim() !== "" &&
    form.student_id.trim() !== "" &&
    form.college !== "" &&
    form.department !== "" &&
    form.major !== "";

  return (
    <div
      className={`min-h-screen flex flex-col bg-gradient-to-b ${
        isDark ? "from-[#0c1222] to-[#1a2332]" : "from-[#E8F4FC] to-[#D6EBFA]"
      }`}
    >
      {/* 헤더 */}
      <div className="flex justify-between items-center px-4 pt-4 pb-2">
        <div className="w-10" /> {/* 좌측 여백 */}
        <img
          src="/assets/images/logo.svg"
          alt={t("common.appName")}
          className="h-12"
        />
        <LanguageSwitcher />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex-1 flex flex-col items-center px-4 py-6">
        <div
          className={`w-full max-w-md rounded-2xl p-6 ${
            isDark
              ? "bg-slate-900/80 border border-slate-700"
              : "bg-white/90 border border-gray-200"
          } shadow-xl`}
        >
          {/* 환영 메시지 */}
          <div className="text-center mb-6">
            <h1
              className={`text-xl font-bold mb-2 ${
                isDark ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {t("onboarding.title")}
            </h1>
            <p
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {t("onboarding.subtitle")}
            </p>
          </div>

          {/* 프로필 폼 */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              {error && (
                <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
                  {error}
                </div>
              )}

              {/* 이름 (필수) */}
              <div className="flex items-center gap-4">
                <label className="w-20 text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                  {t("settings.profile.name")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="profile_name"
                  value={form.profile_name}
                  onChange={handleChange}
                  placeholder={t("settings.profile.namePlaceholder")}
                  className={inputStyle}
                  required
                />
              </div>

              {/* 학번 */}
              <div className="flex items-center gap-4">
                <label className="w-20 text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                  {t("settings.profile.studentId")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="student_id"
                  value={form.student_id}
                  onChange={handleChange}
                  placeholder="C049529"
                  className={inputStyle}
                  required
                />
              </div>

              {/* 단과대학 */}
              <CustomDropdown
                label={
                  <>
                    {t("settings.profile.college")}{" "}
                    <span className="text-red-500">*</span>
                  </>
                }
                options={collegeOptions}
                value={form.college}
                onChange={(value) => {
                  setForm((prev) => ({
                    ...prev,
                    college: value,
                    department: "",
                    major: "",
                  }));
                }}
                placeholder={t("settings.profile.select")}
              />

              {/* 학부 */}
              <CustomDropdown
                label={
                  <>
                    {t("settings.profile.department")}{" "}
                    <span className="text-red-500">*</span>
                  </>
                }
                options={departmentOptions}
                value={form.department}
                onChange={(value) => {
                  setForm((prev) => ({
                    ...prev,
                    department: value,
                    major: "",
                  }));
                }}
                placeholder={t("settings.profile.select")}
                disabled={!form.college}
              />

              {/* 전공 */}
              <CustomDropdown
                label={
                  <>
                    {t("settings.profile.major")}{" "}
                    <span className="text-red-500">*</span>
                  </>
                }
                options={majorOptions}
                value={form.major}
                onChange={(value) => {
                  setForm((prev) => ({
                    ...prev,
                    major: value,
                  }));
                }}
                placeholder={t("settings.profile.select")}
                disabled={!form.department}
              />

              {/* 현재학기 */}
              <div className="flex items-center gap-4">
                <label className="w-20 text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                  {t("settings.profile.currentSemester")}
                </label>
                <div className="flex items-center gap-3 flex-1">
                  <div className="relative">
                    <select
                      name="current_grade"
                      value={form.current_grade}
                      onChange={handleChange}
                      className="px-4 py-2 bg-gray-100/80 dark:bg-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400/30 text-gray-800 dark:text-gray-100 appearance-none cursor-pointer pr-8 transition-all"
                    >
                      {[1, 2, 3, 4, 5].map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {t("settings.profile.grade")}
                  </span>
                  <div className="relative">
                    <select
                      name="current_semester"
                      value={form.current_semester}
                      onChange={handleChange}
                      className="px-4 py-2 bg-gray-100/80 dark:bg-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400/30 text-gray-800 dark:text-gray-100 appearance-none cursor-pointer pr-8 transition-all"
                    >
                      {[1, 2].map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {t("settings.profile.semester")}
                  </span>
                </div>
              </div>

              {/* 시작하기 버튼 */}
              <button
                type="submit"
                disabled={isLoading || !isFormValid}
                className="w-full mt-4 px-8 py-3 text-white font-medium rounded-full shadow-lg transition-all disabled:opacity-50 hover:scale-105 active:scale-95"
                style={{
                  background:
                    "radial-gradient(63.37% 63.37% at 50% 50%, #4E92FF 0%, rgba(78, 146, 255, 0.5) 100%)",
                  boxShadow: "0px 0px 40px 0px rgba(105, 162, 255, 0.24)",
                }}
              >
                {isLoading
                  ? t("settings.profile.saving")
                  : t("onboarding.start")}
              </button>
            </div>
          </form>
        </div>

        {/* 필수 입력 안내 */}
        <p
          className={`mt-4 text-xs ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          {t("onboarding.required")}
        </p>
      </div>
    </div>
  );
};
