import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import DailyCard from "../components/DailyCard";
import NoiseMeter from "../components/NoiseMeter";
import { LANGUAGES, useLanguage } from "../i18n/LanguageContext";
import type { LangCode } from "../i18n/LanguageContext";
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

export default function HomePage() {
  const navigate = useNavigate();
  const { t, lang, setLang } = useLanguage();
  const [profile, setProfile] = useState(getCurrentUser());
  const [dailyGoals, setDailyGoals] = useState(
    profile ? getDailyGoals(profile.studentNumber) : null,
  );
  const [noiseMeterOpen, setNoiseMeterOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

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

  const sections = [
    {
      icon: "📚",
      title: t("daily_quiz"),
      desc: t("daily_quiz_desc"),
      path: "/quiz",
      gradient: "from-purple-500 to-pink-500",
      ocid: "home.quiz_card",
    },
    {
      icon: "🎮",
      title: t("games"),
      desc: t("games_desc"),
      path: "/games",
      gradient: "from-green-500 to-emerald-500",
      ocid: "home.games_card",
    },
    {
      icon: "🌍",
      title: t("general_culture"),
      desc: t("general_culture_desc"),
      path: "/culture",
      gradient: "from-blue-500 to-cyan-500",
      ocid: "home.culture_card",
    },
    {
      icon: "👤",
      title: t("my_profile"),
      desc: t("my_profile_desc"),
      path: "/profile",
      gradient: "from-orange-500 to-amber-500",
      ocid: "home.profile_card",
    },
    {
      icon: "📖",
      title: t("stories"),
      desc: t("stories_desc"),
      path: "/stories",
      gradient: "from-rose-500 to-pink-500",
      ocid: "home.stories_card",
    },
    {
      icon: "🎭",
      title: t("poems"),
      desc: t("poems_desc"),
      path: "/poems",
      gradient: "from-violet-500 to-purple-500",
      ocid: "home.poems_card",
    },
    {
      icon: "🔬",
      title: t("experiments"),
      desc: t("experiments_desc"),
      path: "/experiments",
      gradient: "from-green-500 to-teal-500",
      ocid: "home.experiments_card",
    },
    {
      icon: "🧩",
      title: t("puzzles"),
      desc: t("puzzles_desc"),
      path: "/puzzles",
      gradient: "from-amber-500 to-orange-500",
      ocid: "home.puzzles_card",
    },
    {
      icon: "🗻️",
      title: t("turkey_map"),
      desc: t("turkey_map_desc"),
      path: "/turkey-map",
      gradient: "from-red-500 to-red-700",
      ocid: "home.turkeymap_card",
    },
    {
      icon: "🎵",
      title: t("art_music"),
      desc: t("art_music_desc"),
      path: "/art-music",
      gradient: "from-indigo-500 to-blue-500",
      ocid: "home.artmusic_card",
    },
    {
      icon: "📝",
      title: t("wrong_answers"),
      desc: t("wrong_answers_desc"),
      path: "/wrong-answers",
      gradient: "from-red-500 to-orange-500",
      ocid: "home.wrong_answers_card",
    },
    {
      icon: "🏆",
      title: t("leaderboard"),
      desc: t("leaderboard_desc"),
      path: "/leaderboard",
      gradient: "from-yellow-500 to-amber-500",
      ocid: "home.leaderboard_card",
    },
    {
      icon: "📜",
      title: t("proverbs"),
      desc: t("proverbs_desc"),
      path: "/proverbs",
      gradient: "from-amber-600 to-yellow-500",
      ocid: "home.proverbs_card",
    },
    {
      icon: "📝",
      title: t("grammar"),
      desc: t("grammar_desc"),
      path: "/grammar",
      gradient: "from-teal-500 to-cyan-500",
      ocid: "home.grammar_card",
    },
    {
      icon: "📖",
      title: t("vocabulary"),
      desc: t("vocabulary_desc"),
      path: "/vocabulary",
      gradient: "from-purple-600 to-violet-500",
      ocid: "home.vocabulary_card",
    },
    {
      icon: "🔢",
      title: t("math_practice"),
      desc: t("math_practice_desc"),
      path: "/math-practice",
      gradient: "from-blue-600 to-indigo-500",
      ocid: "home.mathpractice_card",
    },
    {
      icon: "💪",
      title: t("health"),
      desc: t("health_desc"),
      path: "/health",
      gradient: "from-green-600 to-emerald-500",
      ocid: "home.health_card",
    },
    {
      icon: "🗺️",
      title: t("geography"),
      desc: t("geography_desc"),
      path: "/geography",
      gradient: "from-blue-500 to-sky-400",
      ocid: "home.geography_card",
    },
    {
      icon: "🏗️",
      title: t("history"),
      desc: t("history_desc"),
      path: "/history",
      gradient: "from-amber-800 to-yellow-700",
      ocid: "home.history_card",
    },
    {
      icon: "🦬",
      title: t("science"),
      desc: t("science_desc"),
      path: "/science",
      gradient: "from-emerald-600 to-teal-500",
      ocid: "home.science_card",
    },
    {
      icon: "🇬🇧",
      title: t("english"),
      desc: t("english_desc"),
      path: "/english",
      gradient: "from-red-500 to-orange-400",
      ocid: "home.english_card",
    },
    {
      icon: "💻",
      title: t("coding"),
      desc: t("coding_desc"),
      path: "/coding",
      gradient: "from-violet-700 to-purple-600",
      ocid: "home.coding_card",
    },
  ];

  const badge = getBadgeLevel(profile.totalPoints);
  const progress = Math.min(100, (profile.totalPoints / 1000) * 100);
  const streak = getStreak(profile.studentNumber);
  const lastQuizScore = getLastQuizScore(profile.studentNumber);
  const goals = dailyGoals;
  const goalsDone = goals
    ? (goals.quizDone ? 1 : 0) + (goals.contentReads >= 2 ? 1 : 0)
    : 0;
  const allGoalsDone = goalsDone === 2;

  const currentLang = LANGUAGES.find((l) => l.code === lang);

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
                  🔥 {streak.current} {t("streak_days")}
                </span>
              )}
            </div>
            <div className="text-white/70 text-xs">
              {LEVEL_NAMES[profile.level]}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="relative">
            <button
              type="button"
              data-ocid="home.language_toggle"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-1 rounded-xl text-white text-xs font-bold transition-colors"
            >
              <span>{currentLang?.flag}</span>
              <span>{lang.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-slate-800 border border-white/20 rounded-2xl p-2 grid grid-cols-2 gap-1 w-36 z-50 shadow-2xl">
                {LANGUAGES.map((l) => (
                  <button
                    type="button"
                    key={l.code}
                    onClick={() => {
                      setLang(l.code as LangCode);
                      setLangOpen(false);
                    }}
                    className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      lang === l.code
                        ? "bg-purple-600 text-white"
                        : "text-white/80 hover:bg-white/10"
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="text-white font-bold">⭐ {profile.totalPoints}</div>
            <div className="text-white/70 text-xs">
              {BADGE_EMOJIS[badge - 1]} {BADGE_NAMES[badge - 1]}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="flex justify-between text-white/70 text-xs mb-1">
          <span>{t("total_progress")}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="bg-white/20 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {goals && (
        <div className="px-4 pb-3">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-white font-black text-sm">
                🎯 {t("daily_goals")}
              </div>
              <div className="text-white/60 text-xs">
                {goalsDone}/2 {t("completed")}
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
                  {t("complete_quiz")}
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
                  {t("read_2_content")} ({goals.contentReads}/2)
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
                🎉 {t("bonus_claim")}
              </button>
            )}
            {allGoalsDone && goals.bonusAwarded && (
              <div className="mt-3 text-center text-green-300 text-xs font-bold">
                ✨ {t("goals_done")}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="px-4 pb-3">
        <div className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
          <button
            type="button"
            data-ocid="home.noisemeter_toggle"
            onClick={() => setNoiseMeterOpen((prev) => !prev)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors"
          >
            <span className="text-white font-black text-sm">
              🎤 {t("noise_meter")}
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
              navigate({ to: lastQuizScore < 50 ? "/culture" : "/games" })
            }
            className="w-full bg-white/10 border border-white/20 rounded-2xl p-3 flex items-center gap-3 text-left hover:bg-white/15 transition-all"
          >
            <span className="text-2xl">{lastQuizScore < 50 ? "📚" : "🎮"}</span>
            <div>
              <div className="text-white/50 text-xs font-semibold uppercase tracking-wide">
                {t("recommended_for_you")}
              </div>
              <div className="text-white font-bold text-sm">
                {lastQuizScore < 50 ? t("quiz_struggled") : t("quiz_great")}
              </div>
            </div>
            <span className="ml-auto text-white/40">›</span>
          </button>
        </div>
      )}

      <DailyCard />

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
          👨‍👩‍👧 {t("parent_panel_link")}
        </button>
        <button
          type="button"
          data-ocid="home.admin_link"
          onClick={() => navigate({ to: "/admin" })}
          className="text-white/60 hover:text-white text-sm underline"
        >
          ⚙️ {t("admin_link")}
        </button>
      </div>
    </div>
  );
}
