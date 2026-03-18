import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import NoiseMeter from "../components/NoiseMeter";
import {
  getBadgeLevel,
  getCurrentUser,
  getDailyGoals,
  getLastQuizScore,
  getStreak,
  updateDailyGoals,
  updatePoints,
} from "../store";
import { AVATARS, BADGE_EMOJIS, BADGE_NAMES, LEVEL_NAMES } from "../types";

const sections = [
  {
    icon: "📚",
    title: "Günlük Quiz",
    desc: "Her gün yeni sorular!",
    path: "/quiz",
    gradient: "from-purple-500 to-pink-500",
    ocid: "home.quiz_card",
  },
  {
    icon: "🎮",
    title: "Mucit Gereçleri",
    desc: "4 eğlenceli oyun",
    path: "/games",
    gradient: "from-green-500 to-emerald-500",
    ocid: "home.games_card",
  },
  {
    icon: "🌍",
    title: "Genel Kültür",
    desc: "Keşfet ve öğren",
    path: "/culture",
    gradient: "from-blue-500 to-cyan-500",
    ocid: "home.culture_card",
  },
  {
    icon: "👤",
    title: "Profilim",
    desc: "Rozetler ve istatistikler",
    path: "/profile",
    gradient: "from-orange-500 to-amber-500",
    ocid: "home.profile_card",
  },
  {
    icon: "📖",
    title: "Hikayeler",
    desc: "Masallar ve hikayeler",
    path: "/stories",
    gradient: "from-rose-500 to-pink-500",
    ocid: "home.stories_card",
  },
  {
    icon: "🎭",
    title: "Şiirler",
    desc: "Ezber ve şiir",
    path: "/poems",
    gradient: "from-violet-500 to-purple-500",
    ocid: "home.poems_card",
  },
  {
    icon: "🔬",
    title: "Deneyler",
    desc: "Evde bilim",
    path: "/experiments",
    gradient: "from-green-500 to-teal-500",
    ocid: "home.experiments_card",
  },
  {
    icon: "🧩",
    title: "Bulmacalar",
    desc: "Mantık ve zeka",
    path: "/puzzles",
    gradient: "from-amber-500 to-orange-500",
    ocid: "home.puzzles_card",
  },
  {
    icon: "🗺️",
    title: "Türkiye Haritası",
    desc: "İller ve bölgeler",
    path: "/turkey-map",
    gradient: "from-red-500 to-red-700",
    ocid: "home.turkeymap_card",
  },
  {
    icon: "🎵",
    title: "Müzik & Sanat",
    desc: "Nota ve sanat",
    path: "/art-music",
    gradient: "from-indigo-500 to-blue-500",
    ocid: "home.artmusic_card",
  },
  {
    icon: "📝",
    title: "Yanlış Cevaplarım",
    desc: "Tekrar çalış",
    path: "/wrong-answers",
    gradient: "from-red-500 to-orange-500",
    ocid: "home.wrong_answers_card",
  },
  {
    icon: "🏆",
    title: "Sıralama",
    desc: "En iyi öğrenciler",
    path: "/leaderboard",
    gradient: "from-yellow-500 to-amber-500",
    ocid: "home.leaderboard_card",
  },
  {
    icon: "📜",
    title: "Atasözleri",
    desc: "Deyimler ve atasözleri",
    path: "/proverbs",
    gradient: "from-amber-600 to-yellow-500",
    ocid: "home.proverbs_card",
  },
  {
    icon: "📝",
    title: "Dilbilgisi",
    desc: "Dil kuralları ve örnekler",
    path: "/grammar",
    gradient: "from-teal-500 to-cyan-500",
    ocid: "home.grammar_card",
  },
  {
    icon: "📖",
    title: "Kelime Haznesi",
    desc: "Yeni kelimeler öğren",
    path: "/vocabulary",
    gradient: "from-purple-600 to-violet-500",
    ocid: "home.vocabulary_card",
  },
  {
    icon: "🔢",
    title: "Matematik Alıştırmaları",
    desc: "İnteraktif sorular",
    path: "/math-practice",
    gradient: "from-blue-600 to-indigo-500",
    ocid: "home.mathpractice_card",
  },
  {
    icon: "💪",
    title: "Sağlık & Spor",
    desc: "Egzersiz ve beslenme",
    path: "/health",
    gradient: "from-green-600 to-emerald-500",
    ocid: "home.health_card",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(getCurrentUser());
  const [dailyGoals, setDailyGoals] = useState(
    profile ? getDailyGoals(profile.studentNumber) : null,
  );
  const [noiseMeterOpen, setNoiseMeterOpen] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: navigate is stable
  useEffect(() => {
    const p = getCurrentUser();
    if (!p) {
      navigate({ to: "/" });
      return;
    }
    setProfile(p);
    setDailyGoals(getDailyGoals(p.studentNumber));
  }, []);

  if (!profile) return null;

  const badge = getBadgeLevel(profile.totalPoints);
  const progress = Math.min(100, (profile.totalPoints / 1000) * 100);
  const streak = getStreak(profile.studentNumber);
  const lastQuizScore = getLastQuizScore(profile.studentNumber);

  const goals = dailyGoals;
  const goalsDone = goals
    ? (goals.quizDone ? 1 : 0) + (goals.contentReads >= 2 ? 1 : 0)
    : 0;
  const allGoalsDone = goalsDone === 2;

  const handleBonusClaim = () => {
    if (!goals || goals.bonusAwarded || !allGoalsDone) return;
    updatePoints(profile.studentNumber, 50);
    const updated = updateDailyGoals(profile.studentNumber, {
      bonusAwarded: true,
    });
    setDailyGoals(updated);
    setProfile(getCurrentUser());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="bg-white/10 backdrop-blur px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{AVATARS[profile.avatarIndex]}</span>
          <div>
            <div className="text-white font-bold flex items-center gap-2">
              {profile.username}
              {streak.current > 0 && (
                <span className="text-orange-400 font-black text-sm bg-orange-400/20 px-2 py-0.5 rounded-full">
                  🔥 {streak.current} gün
                </span>
              )}
            </div>
            <div className="text-white/70 text-xs">
              {LEVEL_NAMES[profile.level]}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-white font-bold">⭐ {profile.totalPoints}</div>
          <div className="text-white/70 text-xs">
            {BADGE_EMOJIS[badge - 1]} {BADGE_NAMES[badge - 1]}
          </div>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="flex justify-between text-white/70 text-xs mb-1">
          <span>Toplam İlerleme</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="bg-white/20 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Daily Goals Card */}
      {goals && (
        <div className="px-4 pb-3">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-white font-black text-sm">
                🎯 Bugünkü Görevler
              </div>
              <div className="text-white/60 text-xs">
                {goalsDone}/2 tamamlandı
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className={`text-lg ${goals.quizDone ? "opacity-100" : "opacity-40"}`}
                >
                  {goals.quizDone ? "✅" : "⭕"}
                </span>
                <span
                  className={`text-sm font-bold ${goals.quizDone ? "text-green-300 line-through" : "text-white"}`}
                >
                  Günlük quiz'i tamamla
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-lg ${goals.contentReads >= 2 ? "opacity-100" : "opacity-40"}`}
                >
                  {goals.contentReads >= 2 ? "✅" : "⭕"}
                </span>
                <span
                  className={`text-sm font-bold ${goals.contentReads >= 2 ? "text-green-300 line-through" : "text-white"}`}
                >
                  2 içerik oku ({goals.contentReads}/2)
                </span>
              </div>
            </div>
            {allGoalsDone && !goals.bonusAwarded && (
              <button
                type="button"
                data-ocid="home.daily_bonus_button"
                onClick={handleBonusClaim}
                className="mt-3 w-full bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-black text-sm py-2 rounded-xl transition-all animate-pulse"
              >
                🎉 Tebrikler! +50 Bonus Puan Al!
              </button>
            )}
            {allGoalsDone && goals.bonusAwarded && (
              <div className="mt-3 text-center text-green-300 text-xs font-bold">
                ✨ Tüm görevler tamamlandı! +50 puan kazanıldı
              </div>
            )}
          </div>
        </div>
      )}

      {/* Noise Meter Widget */}
      <div className="px-4 pb-3">
        <div className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
          <button
            type="button"
            data-ocid="home.noisemeter_toggle"
            onClick={() => setNoiseMeterOpen((prev) => !prev)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors"
          >
            <span className="text-white font-black text-sm">
              🎤 Sessizlik Ölçeri
            </span>
            <span className="text-white/60 text-lg leading-none">
              {noiseMeterOpen ? "▲" : "▼"}
            </span>
          </button>
          {noiseMeterOpen && (
            <div className="px-4 pb-4">
              <NoiseMeter />
            </div>
          )}
        </div>
      </div>

      {lastQuizScore !== null && (
        <div className="px-4 pb-2">
          <button
            type="button"
            data-ocid="home.recommendation_card"
            onClick={() =>
              navigate({
                to: lastQuizScore < 50 ? "/culture" : "/games",
              })
            }
            className="w-full bg-white/10 border border-white/20 rounded-2xl p-3 flex items-center gap-3 text-left hover:bg-white/15 transition-all"
          >
            <span className="text-2xl">{lastQuizScore < 50 ? "📚" : "🎮"}</span>
            <div>
              <div className="text-white/50 text-xs font-semibold uppercase tracking-wide">
                Senin için önerilen
              </div>
              <div className="text-white font-bold text-sm">
                {lastQuizScore < 50
                  ? "Quiz'de zorlandın! Şu derse bak 📚"
                  : "Harika gidiyorsun! Oyun oyna 🎮"}
              </div>
            </div>
            <span className="ml-auto text-white/40">›</span>
          </button>
        </div>
      )}

      <div className="p-4 grid grid-cols-2 gap-4">
        {sections.map((s) => (
          <button
            type="button"
            key={s.path}
            data-ocid={s.ocid}
            onClick={() => navigate({ to: s.path })}
            className={`bg-gradient-to-br ${s.gradient} rounded-3xl p-5 text-left shadow-xl hover:scale-105 transition-transform active:scale-95`}
          >
            <div className="text-5xl mb-2">{s.icon}</div>
            <div className="text-white font-black text-lg leading-tight">
              {s.title}
            </div>
            <div className="text-white/80 text-sm mt-1">{s.desc}</div>
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-6 pb-6 pt-2">
        <button
          type="button"
          data-ocid="home.parent_link"
          onClick={() => navigate({ to: "/parent" })}
          className="text-white/60 hover:text-white text-sm underline"
        >
          👨‍👩‍👧 Veli Paneli
        </button>
        <button
          type="button"
          data-ocid="home.admin_link"
          onClick={() => navigate({ to: "/admin" })}
          className="text-white/60 hover:text-white text-sm underline"
        >
          ⚙️ Admin
        </button>
      </div>
    </div>
  );
}
