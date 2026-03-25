import { useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../i18n/ThemeContext";
import { getCurrentUser } from "../store";

export interface AchievementEntry {
  id: string;
  name: string;
  emoji: string;
  description: string;
  points: number;
  date: string;
}

export function getAchievementHistory(
  studentNumber: string,
): AchievementEntry[] {
  try {
    const raw = localStorage.getItem(
      `learnverse_achievements_${studentNumber}`,
    );
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addAchievement(
  studentNumber: string,
  entry: Omit<AchievementEntry, "id" | "date">,
): void {
  const history = getAchievementHistory(studentNumber);
  const newEntry: AchievementEntry = {
    ...entry,
    id: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
    date: new Date().toISOString(),
  };
  history.unshift(newEntry);
  // Keep last 200
  localStorage.setItem(
    `learnverse_achievements_${studentNumber}`,
    JSON.stringify(history.slice(0, 200)),
  );
}

const MONTH_NAMES_TR = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
const MONTH_NAMES_EN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const MONTH_NAMES_ES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function getMonthName(lang: string, month: number): string {
  if (lang === "en") return MONTH_NAMES_EN[month];
  if (lang === "es") return MONTH_NAMES_ES[month];
  return MONTH_NAMES_TR[month];
}

function getTitle(lang: string): string {
  if (lang === "en") return "Achievement History";
  if (lang === "es") return "Historial de logros";
  return "Başarı Geçmişi";
}

function getEmptyMsg(lang: string): string {
  if (lang === "en")
    return "No achievements yet — keep learning and earning badges! 🚀";
  if (lang === "es")
    return "¡Aún no hay logros — sigue aprendiendo y ganando insignias! 🚀";
  return "Henüz başarı yok — öğrenmeye devam et ve rozetler kazan! 🚀";
}

export default function AchievementHistoryPage() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const profile = getCurrentUser();

  const history = useMemo(() => {
    if (!profile) return [];
    return getAchievementHistory(profile.studentNumber);
  }, [profile]);

  // Group by year-month
  const grouped = useMemo(() => {
    const map = new Map<string, AchievementEntry[]>();
    for (const entry of history) {
      const d = new Date(entry.date);
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(entry);
    }
    return Array.from(map.entries()).map(([key, entries]) => {
      const [year, month] = key.split("-").map(Number);
      return { year, month, entries };
    });
  }, [history]);

  const bg = isDark
    ? "min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900"
    : "min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-slate-100";

  const cardBg = isDark ? "bg-white/10 backdrop-blur" : "bg-white/80 shadow-sm";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-white/60" : "text-gray-500";
  const entryBg = isDark
    ? "bg-white/5 hover:bg-white/10"
    : "bg-gray-50 hover:bg-gray-100";

  return (
    <div className={bg}>
      {/* Header */}
      <div
        className={`sticky top-0 z-10 ${isDark ? "bg-indigo-950/80" : "bg-white/80"} backdrop-blur-md border-b ${isDark ? "border-white/10" : "border-gray-200"}`}
      >
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <button
            type="button"
            data-ocid="achievement_history.back_button"
            onClick={() => navigate({ to: "/profile" })}
            className={`p-2 rounded-xl transition-colors ${isDark ? "hover:bg-white/10 text-white" : "hover:bg-gray-100 text-gray-700"}`}
          >
            ←
          </button>
          <h1 className={`text-lg font-black ${textMain}`}>
            🏆 {getTitle(lang)}
          </h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {history.length === 0 ? (
          <div
            data-ocid="achievement_history.empty_state"
            className={`${cardBg} rounded-3xl p-8 text-center`}
          >
            <div className="text-5xl mb-4">🌟</div>
            <p className={`${textSub} text-sm leading-relaxed`}>
              {getEmptyMsg(lang)}
            </p>
          </div>
        ) : (
          grouped.map(({ year, month, entries }, groupIdx) => (
            <div key={`${year}-${month}`} className="space-y-3">
              {/* Month header */}
              <div className="flex items-center gap-2">
                <div
                  className={`h-px flex-1 ${isDark ? "bg-white/20" : "bg-gray-200"}`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${isDark ? "bg-white/10 text-white/70" : "bg-gray-100 text-gray-500"}`}
                >
                  {getMonthName(lang, month)} {year}
                </span>
                <div
                  className={`h-px flex-1 ${isDark ? "bg-white/20" : "bg-gray-200"}`}
                />
              </div>

              {/* Entries */}
              <div className="space-y-2">
                {entries.map((entry, i) => {
                  const globalIdx = groupIdx * 10 + i + 1;
                  const d = new Date(entry.date);
                  const dateStr = d.toLocaleDateString(
                    lang === "tr" ? "tr-TR" : lang === "es" ? "es-ES" : "en-US",
                    {
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    },
                  );
                  return (
                    <div
                      key={entry.id}
                      data-ocid={`achievement_history.item.${globalIdx}`}
                      className={`${entryBg} rounded-2xl p-4 flex items-center gap-4 transition-colors`}
                    >
                      {/* Badge emoji */}
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${isDark ? "bg-white/10" : "bg-yellow-50"}`}
                      >
                        {entry.emoji}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div
                          className={`font-bold text-sm ${textMain} truncate`}
                        >
                          {entry.name}
                        </div>
                        <div className={`text-xs ${textSub} truncate mt-0.5`}>
                          {entry.description}
                        </div>
                        <div className={`text-xs ${textSub} mt-1`}>
                          {dateStr}
                        </div>
                      </div>

                      {/* Points */}
                      <div className="flex-shrink-0 text-right">
                        <div className="text-yellow-400 font-black text-sm">
                          +{entry.points}
                        </div>
                        <div className={`text-xs ${textSub}`}>puan</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}

        {/* Footer total */}
        {history.length > 0 && (
          <div
            className={`${cardBg} rounded-3xl p-4 flex justify-between items-center`}
          >
            <span className={`text-sm font-bold ${textMain}`}>
              {lang === "en"
                ? "Total achievements"
                : lang === "es"
                  ? "Total logros"
                  : "Toplam başarı"}
            </span>
            <span className="text-yellow-400 font-black">{history.length}</span>
          </div>
        )}
      </div>
    </div>
  );
}
