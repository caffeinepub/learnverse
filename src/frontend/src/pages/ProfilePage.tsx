import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { useLanguage } from "../i18n/LanguageContext";
import {
  getBadgeLevel,
  getCurrentUser,
  getGameResults,
  getQuizResults,
  getStreak,
} from "../store";
import { AVATARS, BADGE_EMOJIS, BADGE_NAMES, LEVEL_NAMES } from "../types";
import type { Profile } from "../types";

// Study Calendar component
function StudyCalendar({ studentNumber }: { studentNumber: string }) {
  const { t } = useLanguage();
  const [viewDate, setViewDate] = useState(() => new Date());

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const activeDays = new Set<number>();
  const quizResults = getQuizResults().filter(
    (r) => r.studentNumber === studentNumber,
  );
  const gameResults = getGameResults().filter(
    (r) => r.studentNumber === studentNumber,
  );

  for (const r of [...quizResults, ...gameResults]) {
    const d = new Date(r.date);
    if (d.getFullYear() === year && d.getMonth() === month) {
      activeDays.add(d.getDate());
    }
  }

  // Also check streak days (approximate using streak count from today backwards)
  const streakData = getStreak(studentNumber);
  if (streakData.current > 0 && streakData.lastDate) {
    const last = new Date(streakData.lastDate);
    for (let i = 0; i < streakData.current; i++) {
      const d = new Date(last);
      d.setDate(d.getDate() - i);
      if (d.getFullYear() === year && d.getMonth() === month) {
        activeDays.add(d.getDate());
      }
    }
  }

  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  // Convert to Mon-first
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

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const isToday = (d: number) =>
    today.getDate() === d &&
    today.getMonth() === month &&
    today.getFullYear() === year;

  return (
    <div className="bg-white/20 backdrop-blur rounded-3xl p-4">
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          data-ocid="profile.pagination_prev"
          onClick={prevMonth}
          className="text-white bg-white/20 hover:bg-white/30 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all"
        >
          ‹
        </button>
        <h3 className="text-white font-bold">
          📅 {t("study_calendar")} — {monthNames[month]} {year}
        </h3>
        <button
          type="button"
          data-ocid="profile.pagination_next"
          onClick={nextMonth}
          className="text-white bg-white/20 hover:bg-white/30 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all"
        >
          ›
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-1">
        {dayHeaders.map((d) => (
          <div
            key={d}
            className="text-center text-white/60 text-xs font-bold py-1"
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
              className={`aspect-square flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
                active
                  ? "bg-orange-400 text-white shadow-md"
                  : todayCell
                    ? "bg-white/30 text-white ring-2 ring-white"
                    : "bg-white/10 text-white/60"
              }`}
            >
              {active ? "🔥" : day}
            </div>
          );
        })}
      </div>
      {activeDays.size === 0 && (
        <div
          className="text-center text-white/50 text-xs mt-2"
          data-ocid="profile.empty_state"
        >
          {t("calendar_no_activity")}
        </div>
      )}
      <div className="flex items-center gap-2 mt-2">
        <div className="w-4 h-4 rounded bg-orange-400" />
        <span className="text-white/70 text-xs">
          {t("calendar_activity_day")}
        </span>
      </div>
    </div>
  );
}

function getSeenBadge(studentNumber: string): number {
  return Number(
    localStorage.getItem(`learnverse_badge_seen_${studentNumber}`) || "1",
  );
}
function setSeenBadge(studentNumber: string, level: number): void {
  localStorage.setItem(`learnverse_badge_seen_${studentNumber}`, String(level));
}

function getProgressItems(key: string): string[] {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
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
  const [profile, setProfile] = useState<Profile | null>(getCurrentUser());
  const [copied, setCopied] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [shareMsg, setShareMsg] = useState("");

  // biome-ignore lint/correctness/useExhaustiveDependencies: navigate is stable
  useEffect(() => {
    const p = getCurrentUser();
    if (!p) {
      navigate({ to: "/" });
      return;
    }
    setProfile(p);

    // Auto-show certificate on badge upgrade
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

  // Content progress
  const readTopics = getProgressItems(
    `learnverse_read_${profile.studentNumber}`,
  );
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

  const shareCertificate = async () => {
    const text = `🎓 LearnVerse Başarı Sertifikası\n${profile.username} — ${LEVEL_NAMES[profile.level]}\nRozet: ${BADGE_EMOJIS[badge - 1]} ${BADGE_NAMES[badge - 1]}\n{t("profile_total_points")}: ${profile.totalPoints}\nTarih: ${new Date().toLocaleDateString("tr-TR")}`;
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-pink-600 p-4">
      <Button
        data-ocid="profile.back_button"
        variant="ghost"
        onClick={() => navigate({ to: "/home" })}
        className="text-white mb-4"
      >
        ← {t("back")}
      </Button>
      <div className="max-w-sm mx-auto space-y-4">
        {/* Avatar & Badge */}
        <div className="bg-white/20 backdrop-blur rounded-3xl p-6 text-center">
          <div className="text-8xl mb-3">{AVATARS[profile.avatarIndex]}</div>
          <h1 className="text-3xl font-black text-white">{profile.username}</h1>
          <p className="text-white/80">{LEVEL_NAMES[profile.level]}</p>
          <div className="mt-3 bg-white/20 rounded-2xl p-3 inline-block">
            <span className="text-2xl">{BADGE_EMOJIS[badge - 1]}</span>
            <span className="text-white font-bold ml-2">
              {BADGE_NAMES[badge - 1]}
            </span>
          </div>
          <div className="mt-3">
            <Button
              data-ocid="profile.open_modal_button"
              onClick={() => setShowCertificate(true)}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold px-6 py-2 rounded-xl text-sm shadow-lg hover:shadow-xl transition-all"
            >
              🎓 Sertifikamı Gör
            </Button>
          </div>
        </div>

        {/* Student Number */}
        <div className="bg-white/20 backdrop-blur rounded-3xl p-4">
          <div className="text-white/70 text-sm mb-1">Öğrenci Numarası</div>
          <div className="flex items-center gap-2">
            <code className="text-white font-mono text-lg flex-1 tracking-wider">
              {profile.studentNumber.match(/.{1,4}/g)?.join(" ")}
            </code>
            <Button
              data-ocid="profile.copy_button"
              size="sm"
              onClick={copyNumber}
              className="bg-white/20 hover:bg-white/30 text-white border-0"
            >
              {copied ? "✓ Kopyalandı" : "📋 Kopyala"}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/20 backdrop-blur rounded-2xl p-3 text-center">
            <div className="text-2xl font-black text-white">
              {profile.totalPoints}
            </div>
            <div className="text-white/70 text-xs">
              {t("profile_total_points")}
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-2xl p-3 text-center">
            <div className="text-2xl font-black text-white">
              {quizResults.length}
            </div>
            <div className="text-white/70 text-xs">Quiz</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-2xl p-3 text-center">
            <div className="text-2xl font-black text-white">
              {gameResults.length}
            </div>
            <div className="text-white/70 text-xs">Oyun</div>
          </div>
        </div>

        {/* Streak */}
        <div className="bg-white/20 backdrop-blur rounded-3xl p-4">
          <h3 className="text-white font-bold mb-3">
            🔥 {t("profile_streak")}
          </h3>
          {streak.current > 0 ? (
            <div className="flex items-center gap-3">
              <span className="text-5xl">🔥</span>
              <div>
                <div className="text-3xl font-black text-orange-200">
                  {streak.current} gün
                </div>
                <div className="text-white/70 text-sm">
                  arka arkaya aktifsin!
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-2">
              <div className="text-3xl mb-1">💤</div>
              <div className="text-white/60 text-sm">Henüz seri yok</div>
              <div className="text-white/40 text-xs mt-1">
                Her gün giriş yaparak seri başlat!
              </div>
            </div>
          )}
        </div>

        {/* Study Calendar */}
        <StudyCalendar studentNumber={profile.studentNumber} />

        {/* All Badges */}
        <div className="bg-white/20 backdrop-blur rounded-3xl p-4">
          <h3 className="text-white font-bold mb-3">
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
                  <span className="text-white text-xs text-center leading-tight font-bold">
                    {name}
                  </span>
                  {earned && <span className="text-green-300 text-xs">✓</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Completion Summary */}
        <div className="bg-white/20 backdrop-blur rounded-3xl p-4">
          <h3 className="text-white font-bold mb-3">
            📊 {t("profile_content_completed")}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {contentProgress.map((s) => (
              <div
                key={s.key}
                className="bg-white/10 rounded-2xl p-3 flex items-center gap-2"
              >
                <span className="text-xl">{s.icon}</span>
                <div>
                  <div className="text-white font-bold text-sm leading-tight">
                    {s.label}
                  </div>
                  <div className="text-white/60 text-xs">
                    {s.count} tamamlandı
                  </div>
                </div>
              </div>
            ))}
            {/* General Knowledge */}
            <div className="bg-white/10 rounded-2xl p-3 flex items-center gap-2">
              <span className="text-xl">🌍</span>
              <div>
                <div className="text-white font-bold text-sm leading-tight">
                  Genel Kültür
                </div>
                <div className="text-white/60 text-xs">
                  {readTopics.length} okundu
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Quizzes */}
        {quizResults.length > 0 && (
          <div className="bg-white/20 backdrop-blur rounded-3xl p-4">
            <h3 className="text-white font-bold mb-3">
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
                    <span className="text-white/70 text-sm">
                      {new Date(r.date).toLocaleDateString("tr-TR")}
                    </span>
                    <span className="text-white font-bold">
                      {r.correct}/{r.total}
                    </span>
                    <span className="text-yellow-300 text-sm">
                      +{r.score} puan
                    </span>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Certificate Modal */}
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
          <div className="relative bg-white rounded-3xl max-w-sm w-full shadow-2xl overflow-hidden">
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
          </div>
        </div>
      )}
    </div>
  );
}
