import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../i18n/ThemeContext";
import {
  getBadgeLevel,
  getCurrentUser,
  getDailyGoals,
  getFavorites,
  getGameResults,
  getQuizResults,
  getStreak,
  getTopicStats,
} from "../store";
import { AVATARS, BADGE_EMOJIS, BADGE_NAMES, LEVEL_NAMES } from "../types";
import type { Profile } from "../types";
import {
  type AchievementEntry,
  getAchievementHistory,
} from "./AchievementHistoryPage";

// ---- Certificate Canvas Download ----
function downloadCertificateAsPng(profile: Profile, badgeLevel: number): void {
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 560;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const bg = ctx.createLinearGradient(0, 0, 800, 560);
  bg.addColorStop(0, "#fff7ed");
  bg.addColorStop(1, "#fef3c7");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 800, 560);

  ctx.strokeStyle = "#f59e0b";
  ctx.lineWidth = 8;
  ctx.strokeRect(16, 16, 768, 528);
  ctx.strokeStyle = "#fbbf24";
  ctx.lineWidth = 3;
  ctx.strokeRect(28, 28, 744, 504);

  const corners = [
    [28, 28],
    [772, 28],
    [28, 532],
    [772, 532],
  ];
  for (const [cx, cy] of corners) {
    ctx.fillStyle = "#f59e0b";
    ctx.beginPath();
    ctx.arc(cx, cy, 10, 0, Math.PI * 2);
    ctx.fill();
  }

  const headerGrad = ctx.createLinearGradient(0, 48, 800, 48);
  headerGrad.addColorStop(0, "#f97316");
  headerGrad.addColorStop(0.5, "#f59e0b");
  headerGrad.addColorStop(1, "#ec4899");
  ctx.fillStyle = headerGrad;
  ctx.fillRect(40, 48, 720, 6);

  ctx.font = "24px serif";
  ctx.fillStyle = "#f59e0b";
  ctx.textAlign = "center";
  ctx.fillText("⭐  ⭐  ⭐", 400, 95);

  ctx.font = "bold 38px sans-serif";
  ctx.fillStyle = "#1f2937";
  ctx.fillText("LearnVerse", 400, 145);

  ctx.font = "bold 16px sans-serif";
  ctx.fillStyle = "#f97316";
  ctx.fillText("BAŞARI SERTİFİKASI", 400, 175);

  ctx.strokeStyle = "#fde68a";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(120, 190);
  ctx.lineTo(680, 190);
  ctx.stroke();

  ctx.font = "80px serif";
  ctx.fillText(AVATARS[profile.avatarIndex], 400, 285);

  ctx.font = "bold 36px sans-serif";
  ctx.fillStyle = "#111827";
  ctx.fillText(profile.username, 400, 335);

  ctx.font = "16px sans-serif";
  ctx.fillStyle = "#6b7280";
  ctx.fillText(LEVEL_NAMES[profile.level], 400, 360);

  ctx.fillStyle = "#fffbeb";
  const boxX = 270;
  const boxY = 378;
  const boxW = 260;
  const boxH = 68;
  ctx.beginPath();
  ctx.roundRect(boxX, boxY, boxW, boxH, 16);
  ctx.fill();
  ctx.strokeStyle = "#fbbf24";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(boxX, boxY, boxW, boxH, 16);
  ctx.stroke();

  ctx.font = "32px serif";
  ctx.fillText(BADGE_EMOJIS[badgeLevel - 1], 316, 422);
  ctx.font = "bold 22px sans-serif";
  ctx.fillStyle = "#1f2937";
  ctx.fillText(BADGE_NAMES[badgeLevel - 1], 420, 420);
  ctx.font = "12px sans-serif";
  ctx.fillStyle = "#9ca3af";
  ctx.fillText("Rozet", 420, 436);

  ctx.font = "bold 26px sans-serif";
  ctx.fillStyle = "#f97316";
  ctx.fillText(`⭐ ${profile.totalPoints} Puan`, 400, 478);

  ctx.font = "13px sans-serif";
  ctx.fillStyle = "#9ca3af";
  ctx.fillText(new Date().toLocaleDateString("tr-TR"), 400, 500);

  const footerGrad = ctx.createLinearGradient(0, 530, 800, 530);
  footerGrad.addColorStop(0, "#ec4899");
  footerGrad.addColorStop(0.5, "#f59e0b");
  footerGrad.addColorStop(1, "#f97316");
  ctx.fillStyle = footerGrad;
  ctx.fillRect(40, 506, 720, 6);

  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `learnverse-sertifika-${profile.username.toLowerCase().replace(/\s+/g, "-")}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }, "image/png");
}

// ---- Topic Performance Chart ----
function TopicPerformanceChart({
  studentNumber,
  isDark,
}: {
  studentNumber: string;
  isDark: boolean;
}) {
  const stats = getTopicStats(studentNumber);
  const topics = [
    { id: "science", icon: "🔬", label: "Fen", color: "bg-emerald-400" },
    { id: "history", icon: "🏛️", label: "Tarih", color: "bg-amber-400" },
    { id: "geography", icon: "🌍", label: "Coğrafya", color: "bg-blue-400" },
    { id: "math", icon: "🔢", label: "Matematik", color: "bg-rose-400" },
    { id: "general", icon: "💡", label: "Genel", color: "bg-violet-400" },
  ] as const;

  const hasAnyData = topics.some((tp) => stats[tp.id].total > 0);
  const card = isDark ? "bg-white/10" : "bg-black/5";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-white/60" : "text-gray-500";
  const barBg = isDark ? "bg-white/10" : "bg-black/10";

  return (
    <div className={`${card} rounded-2xl p-4`}>
      <h3 className={`${textMain} font-bold mb-3 flex items-center gap-2`}>
        📊 Konu Bazlı Başarı
      </h3>
      {!hasAnyData ? (
        <div
          data-ocid="profile.topic_chart.empty_state"
          className="text-center py-4"
        >
          <div className="text-3xl mb-2">📚</div>
          <div className={`${textSub} text-sm`}>Henüz konu quizi yapılmadı</div>
          <div className={`${textSub} text-xs mt-1 opacity-60`}>
            Quiz sayfasından konu seç!
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {topics.map((tp) => {
            const s = stats[tp.id];
            const pct =
              s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
            return (
              <div key={tp.id}>
                <div className="flex justify-between items-center mb-1">
                  <span className={`${textMain} text-sm font-medium`}>
                    {tp.icon} {tp.label}
                  </span>
                  <span className={`${textSub} text-xs`}>
                    {s.total > 0 ? `${s.correct}/${s.total} (%${pct})` : "—"}
                  </span>
                </div>
                <div className={`h-2.5 ${barBg} rounded-full overflow-hidden`}>
                  <motion.div
                    className={`h-full ${tp.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: s.total > 0 ? `${pct}%` : "0%" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ---- Study Calendar ----
function StudyCalendar({
  studentNumber,
  isDark,
}: {
  studentNumber: string;
  isDark: boolean;
}) {
  const [viewDate, setViewDate] = useState(() => new Date());
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const activeDays = useMemo(() => {
    const set = new Set<number>();
    const quizResults = getQuizResults().filter(
      (r) => r.studentNumber === studentNumber,
    );
    const gameResults = getGameResults().filter(
      (r) => r.studentNumber === studentNumber,
    );
    for (const r of [...quizResults, ...gameResults]) {
      const d = new Date(r.date);
      if (d.getFullYear() === year && d.getMonth() === month)
        set.add(d.getDate());
    }
    const streakData = getStreak(studentNumber);
    if (streakData.current > 0 && streakData.lastDate) {
      const last = new Date(streakData.lastDate);
      for (let i = 0; i < streakData.current; i++) {
        const d = new Date(last);
        d.setDate(d.getDate() - i);
        if (d.getFullYear() === year && d.getMonth() === month)
          set.add(d.getDate());
      }
    }
    return set;
  }, [studentNumber, year, month]);

  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = (firstDay + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const monthNames = [
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
  const dayHeaders = ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pz"];

  const cells: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(i);

  const isToday = (d: number) =>
    today.getDate() === d &&
    today.getMonth() === month &&
    today.getFullYear() === year;

  const card = isDark ? "bg-white/10" : "bg-black/5";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-white/60" : "text-gray-500";
  const btnHover = isDark ? "hover:bg-white/20" : "hover:bg-black/10";

  return (
    <div className={`${card} rounded-2xl p-4`}>
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          data-ocid="profile.pagination_prev"
          onClick={() => setViewDate(new Date(year, month - 1, 1))}
          className={`${textMain} ${btnHover} w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all`}
        >
          ‹
        </button>
        <h3 className={`${textMain} font-bold text-sm`}>
          📅 {monthNames[month]} {year}
        </h3>
        <button
          type="button"
          data-ocid="profile.pagination_next"
          onClick={() => setViewDate(new Date(year, month + 1, 1))}
          className={`${textMain} ${btnHover} w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all`}
        >
          ›
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-1">
        {dayHeaders.map((d) => (
          <div
            key={d}
            className={`text-center ${textSub} text-xs font-bold py-0.5`}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, idx) => {
          // biome-ignore lint/suspicious/noArrayIndexKey: empty calendar cells have no other stable key
          if (!day) return <div key={`empty-${idx}`} />;
          const active = activeDays.has(day);
          const todayCell = isToday(day);
          return (
            <div
              key={day}
              className={`aspect-square flex items-center justify-center rounded-lg text-xs font-bold transition-all ${
                active
                  ? "bg-orange-400 text-white shadow-sm"
                  : todayCell
                    ? isDark
                      ? "bg-white/30 text-white ring-1 ring-white"
                      : "bg-orange-100 text-orange-700 ring-1 ring-orange-300"
                    : isDark
                      ? "bg-white/5 text-white/40"
                      : "bg-black/5 text-gray-400"
              }`}
            >
              {active ? "🔥" : day}
            </div>
          );
        })}
      </div>
      {activeDays.size === 0 && (
        <div
          className={`text-center ${textSub} text-xs mt-2 opacity-60`}
          data-ocid="profile.calendar.empty_state"
        >
          Bu ay henüz aktivite yok
        </div>
      )}
    </div>
  );
}

// ---- Daily Tasks Card ----
function DailyTasksCard({
  studentNumber,
  isDark,
}: {
  studentNumber: string;
  isDark: boolean;
}) {
  const goals = getDailyGoals(studentNumber);
  const card = isDark ? "bg-white/10" : "bg-black/5";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-white/60" : "text-gray-500";

  const tasks = [
    {
      icon: "🧩",
      label: "Günlük Quiz",
      done: goals.quizDone,
      pts: "+20",
    },
    {
      icon: "📖",
      label: "3 İçerik Oku",
      done: goals.contentReads >= 3,
      progress: Math.min(goals.contentReads, 3),
      total: 3,
      pts: "+15",
    },
  ];

  const completedCount = tasks.filter((t) => t.done).length;
  const totalCount = tasks.length;
  const allDone = completedCount === totalCount;

  return (
    <div className={`${card} rounded-2xl p-4`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className={`${textMain} font-bold flex items-center gap-2`}>
          ✅ Bugünün Görevleri
        </h3>
        <span
          className={`text-xs font-bold px-2 py-0.5 rounded-full ${
            allDone
              ? "bg-green-500 text-white"
              : isDark
                ? "bg-white/20 text-white/70"
                : "bg-black/10 text-gray-600"
          }`}
        >
          {completedCount}/{totalCount}
        </span>
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.label}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all ${
              task.done
                ? isDark
                  ? "bg-green-500/20"
                  : "bg-green-50"
                : isDark
                  ? "bg-white/5"
                  : "bg-white/50"
            }`}
          >
            <span className="text-xl">{task.icon}</span>
            <div className="flex-1 min-w-0">
              <div
                className={`text-sm font-semibold ${textMain} ${
                  task.done ? "line-through opacity-60" : ""
                }`}
              >
                {task.label}
              </div>
              {"progress" in task && !task.done && (
                <div className="mt-1">
                  <Progress
                    value={
                      ((task as { progress: number; total: number }).progress /
                        (task as { progress: number; total: number }).total) *
                      100
                    }
                    className="h-1.5"
                  />
                  <span className={`text-xs ${textSub} mt-0.5 block`}>
                    {(task as { progress: number; total: number }).progress}/
                    {(task as { progress: number; total: number }).total}
                  </span>
                </div>
              )}
            </div>
            <span
              className={`text-xs font-bold ${
                task.done
                  ? "text-green-400"
                  : isDark
                    ? "text-yellow-300"
                    : "text-orange-500"
              }`}
            >
              {task.done ? "✓" : task.pts}
            </span>
          </div>
        ))}
      </div>

      {allDone && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-3 text-center"
        >
          <div className="text-2xl">🎉</div>
          <div
            className={`text-xs font-bold ${isDark ? "text-yellow-300" : "text-orange-600"} mt-1`}
          >
            Tüm görevler tamamlandı! +30 bonus puan!
          </div>
        </motion.div>
      )}
    </div>
  );
}

// ---- Personalized Recommendations ----
function RecommendationsCard({
  studentNumber,
  isDark,
}: {
  studentNumber: string;
  isDark: boolean;
}) {
  const stats = getTopicStats(studentNumber);
  const card = isDark ? "bg-white/10" : "bg-black/5";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-white/60" : "text-gray-500";

  const topics = [
    { id: "science", icon: "🔬", label: "Fen Bilimleri", route: "/science" },
    { id: "history", icon: "🏛️", label: "Tarih", route: "/history" },
    { id: "geography", icon: "🌍", label: "Coğrafya", route: "/geography" },
    { id: "math", icon: "🔢", label: "Matematik", route: "/math-practice" },
    { id: "general", icon: "💡", label: "Genel Kültür", route: "/culture" },
  ] as const;

  const navigate = useNavigate();

  // Find weak topics (< 60% accuracy with at least 3 attempts)
  const weakTopics = topics.filter((tp) => {
    const s = stats[tp.id];
    if (s.total < 3) return false;
    return s.correct / s.total < 0.6;
  });

  // Find unstarted topics
  const unstartedTopics = topics.filter((tp) => stats[tp.id].total === 0);

  const recommendations = [
    ...weakTopics.slice(0, 2).map((tp) => ({
      ...tp,
      reason: `%${Math.round((stats[tp.id].correct / stats[tp.id].total) * 100)} doğruluk — pratik yap!`,
      urgent: true,
    })),
    ...unstartedTopics.slice(0, 2).map((tp) => ({
      ...tp,
      reason: "Henüz başlamadın — dene!",
      urgent: false,
    })),
  ].slice(0, 3);

  if (recommendations.length === 0) return null;

  return (
    <div className={`${card} rounded-2xl p-4`}>
      <h3 className={`${textMain} font-bold mb-3 flex items-center gap-2`}>
        🎯 Sana Özel Öneriler
      </h3>
      <div className="space-y-2">
        {recommendations.map((rec) => (
          <button
            key={rec.id}
            type="button"
            data-ocid="profile.recommendation.button"
            onClick={() => navigate({ to: rec.route })}
            className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all text-left ${
              isDark
                ? "bg-white/5 hover:bg-white/10"
                : "bg-white/60 hover:bg-white/90"
            }`}
          >
            <span className="text-xl">{rec.icon}</span>
            <div className="flex-1 min-w-0">
              <div className={`text-sm font-semibold ${textMain}`}>
                {rec.label}
              </div>
              <div className={`text-xs ${textSub}`}>{rec.reason}</div>
            </div>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                rec.urgent
                  ? "bg-rose-500/20 text-rose-400"
                  : isDark
                    ? "bg-white/10 text-white/60"
                    : "bg-blue-100 text-blue-600"
              }`}
            >
              {rec.urgent ? "Zayıf" : "Yeni"}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ---- Favorites Shortcut ----
function FavoritesShortcut({
  studentNumber,
  isDark,
}: {
  studentNumber: string;
  isDark: boolean;
}) {
  const navigate = useNavigate();
  const favs = getFavorites(studentNumber);
  const card = isDark ? "bg-white/10" : "bg-black/5";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-white/60" : "text-gray-500";

  if (favs.length === 0) return null;

  const preview = favs.slice(0, 4);

  return (
    <button
      type="button"
      data-ocid="profile.favorites.button"
      onClick={() => navigate({ to: "/favorites" })}
      className={`${card} rounded-2xl p-4 w-full text-left transition-all ${
        isDark ? "hover:bg-white/15" : "hover:bg-black/10"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className={`${textMain} font-bold flex items-center gap-2`}>
          ⭐ Favorilerim
        </h3>
        <span className={`text-xs ${textSub}`}>{favs.length} içerik ›</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {preview.map((f) => (
          <div
            key={f.id}
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              isDark
                ? "bg-yellow-400/20 text-yellow-300"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {f.type === "story" ? "📖" : f.type === "poem" ? "🎭" : "🔬"}{" "}
            {f.title.slice(0, 20)}
            {f.title.length > 20 ? "…" : ""}
          </div>
        ))}
        {favs.length > 4 && (
          <div
            className={`text-xs px-2.5 py-1 rounded-full ${isDark ? "bg-white/10 text-white/50" : "bg-gray-100 text-gray-500"}`}
          >
            +{favs.length - 4} daha
          </div>
        )}
      </div>
    </button>
  );
}

// ---- Recent Achievement History preview ----
function AchievementPreview({
  entries,
  isDark,
  onViewAll,
}: {
  entries: AchievementEntry[];
  isDark: boolean;
  onViewAll: () => void;
}) {
  const card = isDark ? "bg-white/10" : "bg-black/5";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-white/60" : "text-gray-500";
  const itemBg = isDark ? "bg-white/5" : "bg-white/60";

  return (
    <div className={`${card} rounded-2xl p-4`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className={`${textMain} font-bold flex items-center gap-2`}>
          🏆 Son Başarılar
        </h3>
        <button
          type="button"
          data-ocid="profile.achievement_history.button"
          onClick={onViewAll}
          className={`text-xs ${textSub} hover:underline`}
        >
          Tümünü gör ›
        </button>
      </div>

      {entries.length === 0 ? (
        <div
          data-ocid="profile.achievements.empty_state"
          className="text-center py-4"
        >
          <div className="text-3xl mb-1">🌟</div>
          <div className={`${textSub} text-xs`}>
            Henüz başarı yok — öğrenmeye devam et!
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {entries.slice(0, 3).map((entry, i) => (
            <div
              key={entry.id}
              data-ocid={`profile.achievement.item.${i + 1}`}
              className={`${itemBg} rounded-xl p-3 flex items-center gap-3`}
            >
              <div className="text-xl w-8 text-center">{entry.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-semibold ${textMain} truncate`}>
                  {entry.name}
                </div>
                <div className={`text-xs ${textSub} truncate`}>
                  {entry.description}
                </div>
              </div>
              <div className="text-yellow-400 font-bold text-sm">
                +{entry.points}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function getProgressItems(key: string): string[] {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function getSeenBadge(studentNumber: string): number {
  return Number(
    localStorage.getItem(`learnverse_badge_seen_${studentNumber}`) || "1",
  );
}
function setSeenBadge(studentNumber: string, level: number): void {
  localStorage.setItem(`learnverse_badge_seen_${studentNumber}`, String(level));
}

const CONTENT_SECTIONS = [
  { icon: "📖", label: "Hikayeler", key: "stories" },
  { icon: "🎭", label: "Şiirler", key: "poems" },
  { icon: "🔬", label: "Deneyler", key: "experiments" },
  { icon: "🧩", label: "Bulmacalar", key: "puzzles" },
  { icon: "🗺️", label: "Türkiye Haritası", key: "turkeymap" },
  { icon: "🎵", label: "Müzik & Sanat", key: "artmusic" },
];

export default function ProfilePage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const [profile, setProfile] = useState<Profile | null>(getCurrentUser());
  const [copied, setCopied] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [shareMsg, setShareMsg] = useState("");
  const [downloading, setDownloading] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: navigate is stable
  useEffect(() => {
    const p = getCurrentUser();
    if (!p) {
      navigate({ to: "/" });
      return;
    }
    setProfile(p);
    const currentBadge = getBadgeLevel(p.totalPoints);
    const seenBadge = getSeenBadge(p.studentNumber);
    if (currentBadge > seenBadge) {
      setShowCertificate(true);
      setSeenBadge(p.studentNumber, currentBadge);
    }
  }, []);

  if (!profile) return null;

  const badge = getBadgeLevel(profile.totalPoints);
  const quizResults = getQuizResults().filter(
    (r) => r.studentNumber === profile.studentNumber,
  );
  const gameResults = getGameResults().filter(
    (r) => r.studentNumber === profile.studentNumber,
  );
  const streak = getStreak(profile.studentNumber);
  const achievements = getAchievementHistory(profile.studentNumber);

  const contentProgress = CONTENT_SECTIONS.map((s) => ({
    ...s,
    count: getProgressItems(
      `learnverse_progress_${s.key}_${profile.studentNumber}`,
    ).length,
  }));

  const copyNumber = () => {
    navigator.clipboard.writeText(profile.studentNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCertificate = () => {
    setDownloading(true);
    try {
      downloadCertificateAsPng(profile, badge);
    } finally {
      setTimeout(() => setDownloading(false), 1000);
    }
  };

  const shareCertificate = async () => {
    const text = `🎓 LearnVerse Başarı Sertifikası\n${profile.username} — ${LEVEL_NAMES[profile.level]}\nRozet: ${BADGE_EMOJIS[badge - 1]} ${BADGE_NAMES[badge - 1]}\n${t("profile_total_points")}: ${profile.totalPoints}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "LearnVerse Sertifikası", text });
      } catch {}
    } else {
      await navigator.clipboard.writeText(text);
      setShareMsg("Sertifika metni kopyalandı!");
      setTimeout(() => setShareMsg(""), 3000);
    }
  };

  // Dark mode theming
  const pageBg = isDark
    ? "min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950"
    : "min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-rose-500";
  const heroBg = isDark ? "bg-white/10" : "bg-white/25";
  const cardBg = isDark ? "bg-white/10" : "bg-white/20";
  const textMain = isDark ? "text-white" : "text-white";
  const textSub = isDark ? "text-white/60" : "text-white/80";

  return (
    <div className={`${pageBg} pb-8`}>
      {/* Sticky header */}
      <div
        className={`sticky top-0 z-20 ${
          isDark ? "bg-slate-900/80" : "bg-orange-500/80"
        } backdrop-blur-md border-b ${
          isDark ? "border-white/10" : "border-white/20"
        }`}
      >
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <button
            type="button"
            data-ocid="profile.back_button"
            onClick={() => navigate({ to: "/home" })}
            className={`p-2 rounded-xl transition-colors ${
              isDark
                ? "hover:bg-white/10 text-white"
                : "hover:bg-white/20 text-white"
            }`}
          >
            ←
          </button>
          <h1 className="text-white font-black text-lg">👤 Profilim</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-4 space-y-4">
        {/* ── HERO SECTION ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`${heroBg} backdrop-blur rounded-3xl p-6 text-center relative overflow-hidden`}
        >
          {/* decorative circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />

          <div className="text-7xl mb-2">{AVATARS[profile.avatarIndex]}</div>
          <h2 className={`text-2xl font-black ${textMain}`}>
            {profile.username}
          </h2>
          <p className={`${textSub} text-sm mb-3`}>
            {LEVEL_NAMES[profile.level]}
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-2xl px-4 py-2 mb-4">
            <span className="text-2xl">{BADGE_EMOJIS[badge - 1]}</span>
            <span className={`${textMain} font-bold`}>
              {BADGE_NAMES[badge - 1]}
            </span>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mt-2">
            <div className="bg-white/20 rounded-2xl p-3 text-center">
              <div className={`text-xl font-black ${textMain}`}>
                {profile.totalPoints}
              </div>
              <div className={`${textSub} text-xs`}>Puan</div>
            </div>
            <div className="bg-white/20 rounded-2xl p-3 text-center">
              <div
                className={`text-xl font-black ${textMain} flex items-center justify-center gap-1`}
              >
                🔥 {streak.current}
              </div>
              <div className={`${textSub} text-xs`}>Seri</div>
            </div>
            <div className="bg-white/20 rounded-2xl p-3 text-center">
              <div className={`text-xl font-black ${textMain}`}>
                {quizResults.length + gameResults.length}
              </div>
              <div className={`${textSub} text-xs`}>Aktivite</div>
            </div>
          </div>

          <button
            type="button"
            data-ocid="profile.open_modal_button"
            onClick={() => setShowCertificate(true)}
            className="mt-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 font-black text-sm px-5 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            🎓 Sertifikamı Gör
          </button>
        </motion.div>

        {/* ── STUDENT NUMBER ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className={`${cardBg} backdrop-blur rounded-2xl px-4 py-3 flex items-center gap-2`}
        >
          <div className="flex-1">
            <div className={`${textSub} text-xs mb-0.5`}>Öğrenci Numarası</div>
            <code className={`${textMain} font-mono text-sm tracking-wider`}>
              {profile.studentNumber.match(/.{1,4}/g)?.join(" ")}
            </code>
          </div>
          <Button
            data-ocid="profile.copy_button"
            size="sm"
            onClick={copyNumber}
            className="bg-white/20 hover:bg-white/30 text-white border-0 text-xs"
          >
            {copied ? "✓" : "📋"}
          </Button>
        </motion.div>

        {/* ── DAILY TASKS ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <DailyTasksCard
            studentNumber={profile.studentNumber}
            isDark={isDark}
          />
        </motion.div>

        {/* ── TOPIC PERFORMANCE ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <TopicPerformanceChart
            studentNumber={profile.studentNumber}
            isDark={isDark}
          />
        </motion.div>

        {/* ── PERSONALIZED RECOMMENDATIONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <RecommendationsCard
            studentNumber={profile.studentNumber}
            isDark={isDark}
          />
        </motion.div>

        {/* ── ALL BADGES ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className={`${cardBg} backdrop-blur rounded-2xl p-4`}
        >
          <h3 className={`${textMain} font-bold mb-3`}>
            🏅 {t("profile_badges")}
          </h3>
          <div className="grid grid-cols-5 gap-2">
            {BADGE_NAMES.map((name, i) => {
              const earned = badge > i;
              return (
                <div
                  key={name}
                  className={`flex flex-col items-center gap-1 rounded-2xl p-2 transition-all ${
                    earned ? "bg-white/20" : "bg-white/5 opacity-40"
                  }`}
                >
                  <span className="text-2xl">{BADGE_EMOJIS[i]}</span>
                  <span
                    className={`${textMain} text-xs text-center leading-tight font-bold`}
                  >
                    {name}
                  </span>
                  {earned && <span className="text-green-300 text-xs">✓</span>}
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-3 border-t border-white/20">
            <button
              type="button"
              data-ocid="profile.download_button"
              onClick={handleDownloadCertificate}
              disabled={downloading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:opacity-90 disabled:opacity-60 text-yellow-900 font-black text-sm py-2.5 rounded-xl transition-all shadow active:scale-95"
            >
              {downloading ? (
                <>
                  <span className="animate-spin">⏳</span> Hazırlanıyor...
                </>
              ) : (
                <>
                  <span>📥</span> Sertifikayı İndir (PNG)
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* ── ACHIEVEMENT PREVIEW ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <AchievementPreview
            entries={achievements}
            isDark={isDark}
            onViewAll={() => navigate({ to: "/achievement-history" })}
          />
        </motion.div>

        {/* ── STUDY CALENDAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          <div className={`${cardBg} backdrop-blur rounded-2xl p-4`}>
            <h3 className={`${textMain} font-bold mb-3`}>📅 Çalışma Takvimi</h3>
            <StudyCalendar
              studentNumber={profile.studentNumber}
              isDark={isDark}
            />
          </div>
        </motion.div>

        {/* ── FAVORITES SHORTCUT ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <FavoritesShortcut
            studentNumber={profile.studentNumber}
            isDark={isDark}
          />
        </motion.div>

        {/* ── CONTENT PROGRESS ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className={`${cardBg} backdrop-blur rounded-2xl p-4`}
        >
          <h3 className={`${textMain} font-bold mb-3`}>
            📊 {t("profile_content_completed")}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {contentProgress.map((s) => (
              <div
                key={s.key}
                className="bg-white/10 rounded-xl p-3 flex items-center gap-2"
              >
                <span className="text-xl">{s.icon}</span>
                <div>
                  <div
                    className={`${textMain} font-bold text-sm leading-tight`}
                  >
                    {s.label}
                  </div>
                  <div className={`${textSub} text-xs`}>
                    {s.count} tamamlandı
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RECENT QUIZZES ── */}
        {quizResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className={`${cardBg} backdrop-blur rounded-2xl p-4`}
          >
            <h3 className={`${textMain} font-bold mb-3`}>
              {t("profile_quiz_history")}
            </h3>
            <div className="space-y-2">
              {quizResults
                .slice(-5)
                .reverse()
                .map((r) => (
                  <div
                    key={r.date}
                    className="flex justify-between items-center bg-white/10 rounded-xl p-2"
                  >
                    <span className={`${textSub} text-sm`}>
                      {new Date(r.date).toLocaleDateString("tr-TR")}
                    </span>
                    <span className={`${textMain} font-bold`}>
                      {r.correct}/{r.total}
                    </span>
                    <span className="text-yellow-300 text-sm">
                      +{r.score} puan
                    </span>
                  </div>
                ))}
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <div className="text-center pt-2 pb-4">
          <p className={`text-xs ${textSub} opacity-50`}>
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>

      {/* ── CERTIFICATE MODAL ── */}
      {showCertificate && (
        <div
          data-ocid="profile.modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowCertificate(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") setShowCertificate(false);
          }}
          tabIndex={-1}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-white rounded-3xl max-w-sm w-full shadow-2xl overflow-hidden"
          >
            <div className="h-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500" />
            <div className="p-6 text-center">
              <div className="text-2xl mb-2">⭐ ⭐ ⭐</div>
              <h2 className="text-xl font-black text-gray-800 mb-1">
                LearnVerse
              </h2>
              <h3 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
                Başarı Sertifikası
              </h3>
              <div className="text-7xl mb-3">
                {AVATARS[profile.avatarIndex]}
              </div>
              <div className="text-2xl font-black text-gray-800 mb-1">
                {profile.username}
              </div>
              <div className="text-sm text-gray-500 mb-4">
                {LEVEL_NAMES[profile.level]}
              </div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-400 rounded-2xl px-5 py-2 mb-4">
                <span className="text-3xl">{BADGE_EMOJIS[badge - 1]}</span>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Rozet</div>
                  <div className="font-black text-gray-800">
                    {BADGE_NAMES[badge - 1]}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-orange-50 rounded-2xl p-3">
                  <div className="text-2xl font-black text-orange-500">
                    {profile.totalPoints}
                  </div>
                  <div className="text-xs text-gray-500">
                    {t("profile_total_points")}
                  </div>
                </div>
                <div className="bg-pink-50 rounded-2xl p-3">
                  <div className="text-sm font-bold text-pink-500">
                    {new Date().toLocaleDateString("tr-TR")}
                  </div>
                  <div className="text-xs text-gray-500">Tarih</div>
                </div>
              </div>
              {shareMsg && (
                <div
                  data-ocid="profile.success_state"
                  className="text-green-600 text-sm mb-2"
                >
                  {shareMsg}
                </div>
              )}
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Button
                    data-ocid="profile.secondary_button"
                    onClick={shareCertificate}
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold rounded-xl"
                  >
                    📤 Paylaş
                  </Button>
                  <Button
                    data-ocid="profile.close_button"
                    variant="outline"
                    onClick={() => setShowCertificate(false)}
                    className="flex-1 rounded-xl"
                  >
                    Kapat
                  </Button>
                </div>
                <button
                  type="button"
                  data-ocid="profile.download_button"
                  onClick={() => {
                    handleDownloadCertificate();
                    setShowCertificate(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-black text-sm py-2.5 rounded-xl transition-all hover:opacity-90 active:scale-95"
                >
                  📥 PNG Olarak İndir
                </button>
              </div>
            </div>
            <div className="h-3 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400" />
            <button
              type="button"
              data-ocid="profile.close_button"
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 w-7 h-7 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 text-sm font-bold flex items-center justify-center"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
