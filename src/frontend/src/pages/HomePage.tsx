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
  getParentMessage,
  getPendingAssignmentsForStudent,
  getSpacedRepQueue,
  getStreak,
  getTopicStats,
  markAssignmentCompleted,
  markParentMessageRead,
  updateDailyGoals,
  updatePoints,
} from "../store";
import type { Assignment } from "../store";
import { AVATARS, BADGE_EMOJIS, BADGE_NAMES, LEVEL_NAMES } from "../types";

// ---- Personalized Recommendation Engine ----
const TOPIC_INFO: Record<
  string,
  { label: string; labelEn: string; path: string; icon: string }
> = {
  science: {
    label: "Fen Bilimleri",
    labelEn: "Science",
    path: "/science",
    icon: "🔬",
  },
  history: {
    label: "Tarih",
    labelEn: "History",
    path: "/history",
    icon: "🏛️",
  },
  geography: {
    label: "Coğrafya",
    labelEn: "Geography",
    path: "/geography",
    icon: "🌍",
  },
  math: {
    label: "Matematik",
    labelEn: "Math",
    path: "/math-practice",
    icon: "🔢",
  },
  general: {
    label: "Genel Kültür",
    labelEn: "General Knowledge",
    path: "/culture",
    icon: "💡",
  },
};

interface Recommendation {
  topicKey: string;
  label: string;
  labelEn: string;
  path: string;
  icon: string;
  reason: string;
  reasonEn: string;
}

function getPersonalizedRecommendation(
  studentNumber: string,
): Recommendation | null {
  // Check spaced repetition queue for topics with most pending items
  const srQueue = getSpacedRepQueue(studentNumber);
  const topicStats = getTopicStats(studentNumber);

  // Count mistakes per topic from topic stats (lowest accuracy = most need)
  const topicScores: Record<string, number> = {};
  for (const [key, stat] of Object.entries(topicStats)) {
    if (stat.total > 0) {
      const errorRate = (stat.total - stat.correct) / stat.total;
      topicScores[key] = errorRate;
    }
  }

  // Also weight by spaced rep queue items (more items = more mistakes)
  // SR items don't have topic tags, but we use their count as a general signal
  const hasSpacedRepItems = srQueue.length > 0;

  // Find worst-performing topic
  let worstTopic: string | null = null;
  let worstScore = -1;
  for (const [key, score] of Object.entries(topicScores)) {
    if (score > worstScore && TOPIC_INFO[key]) {
      worstScore = score;
      worstTopic = key;
    }
  }

  if (worstTopic && worstScore > 0.2) {
    const info = TOPIC_INFO[worstTopic];
    const pct = Math.round((1 - worstScore) * 100);
    return {
      topicKey: worstTopic,
      ...info,
      reason: `${info.icon} ${info.label} konusunda %${pct} başarı oranın var — biraz daha pratik yapalım!`,
      reasonEn: `${info.icon} You have ${pct}% accuracy in ${info.labelEn} — let's practice more!`,
    };
  }

  if (hasSpacedRepItems) {
    // Generic: suggest quiz for spaced repetition
    return {
      topicKey: "general",
      ...TOPIC_INFO.general,
      reason:
        "📝 Tekrar listende bekleyen sorular var — quiz yaparak pekiştir!",
      reasonEn:
        "📝 You have questions waiting in your review list — do a quiz!",
    };
  }

  return null;
}

function RecommendationCard({
  studentNumber,
  lang,
}: { studentNumber: string; lang: string }) {
  const navigate = useNavigate();
  const dismissKey = `learnverse_rec_dismissed_${studentNumber}_${new Date().toDateString()}`;
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(dismissKey) === "1",
  );

  const rec = getPersonalizedRecommendation(studentNumber);

  const handleDismiss = () => {
    localStorage.setItem(dismissKey, "1");
    setDismissed(true);
  };

  if (dismissed) return null;

  if (!rec) {
    // No history yet: show generic encouragement (dismissable)
    return (
      <div
        data-ocid="home.recommendation_card"
        className="mx-4 mb-3 relative bg-gradient-to-r from-indigo-600/30 to-violet-600/30 border border-indigo-400/40 rounded-2xl p-4"
      >
        <button
          type="button"
          data-ocid="home.recommendation_close"
          onClick={handleDismiss}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 text-xs font-bold transition-all"
          aria-label="Kapat"
        >
          ✕
        </button>
        <div className="flex items-start gap-3 pr-6">
          <span className="text-2xl flex-shrink-0">🌟</span>
          <div>
            <div className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-0.5">
              {lang === "en" ? "For You" : "Senin İçin"}
            </div>
            <div className="text-white font-bold text-sm">
              {lang === "en"
                ? "Start learning! Every quiz and story earns you points."
                : "Öğrenmeye başla! Her quiz ve hikaye sana puan kazandırır."}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      data-ocid="home.recommendation_card"
      className="mx-4 mb-3 relative bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 border border-violet-400/40 rounded-2xl p-4"
    >
      <button
        type="button"
        data-ocid="home.recommendation_close"
        onClick={handleDismiss}
        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 text-xs font-bold transition-all"
        aria-label="Kapat"
      >
        ✕
      </button>
      <div className="flex items-center gap-3 pr-6">
        <span className="text-2xl flex-shrink-0">📚</span>
        <div className="flex-1 min-w-0">
          <div className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-0.5">
            {lang === "en" ? "We recommend" : "Öneri"}
          </div>
          <div className="text-white font-bold text-sm leading-snug">
            {lang === "en" ? rec.reasonEn : rec.reason}
          </div>
        </div>
        <button
          type="button"
          data-ocid="home.recommendation_go_button"
          onClick={() => navigate({ to: rec.path as any })}
          className="flex-shrink-0 bg-violet-500 hover:bg-violet-400 text-white font-black text-xs px-3 py-2 rounded-xl transition-all"
        >
          {lang === "en" ? "Go →" : "Git →"}
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const { t, lang, setLang } = useLanguage();
  const [profile, setProfile] = useState(getCurrentUser());
  const [dailyGoals, setDailyGoals] = useState(
    profile ? getDailyGoals(profile.studentNumber) : null,
  );
  const [noiseMeterOpen, setNoiseMeterOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [parentMsg, setParentMsg] = useState(() =>
    profile ? getParentMessage(profile.studentNumber) : null,
  );
  const [pendingAssignments, setPendingAssignments] = useState<Assignment[]>(
    () =>
      profile ? getPendingAssignmentsForStudent(profile.studentNumber) : [],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: navigate is stable
  useEffect(() => {
    const p = getCurrentUser();
    if (!p) {
      navigate({ to: "/" });
      return;
    }
    setProfile(p);
    setDailyGoals(getDailyGoals(p.studentNumber));
    setPendingAssignments(getPendingAssignmentsForStudent(p.studentNumber));
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
      icon: "📖",
      title: t("math_story"),
      desc: t("math_story_desc"),
      path: "/math-story",
      gradient: "from-teal-600 to-emerald-500",
      ocid: "home.mathstory_card",
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
    {
      icon: "🎨",
      title: t("coloring"),
      desc: t("coloring_desc"),
      path: "/coloring",
      gradient: "from-pink-500 to-rose-400",
      ocid: "home.coloring_card",
    },
  ];

  const badge = getBadgeLevel(profile.totalPoints);
  const progress = Math.min(100, (profile.totalPoints / 1000) * 100);
  const streak = getStreak(profile.studentNumber);
  const lastQuizScore = getLastQuizScore(profile.studentNumber);
  const goals = dailyGoals;
  const goalsDone = goals
    ? (goals.quizDone ? 1 : 0) +
      (goals.contentReads >= 1 ? 1 : 0) +
      (goals.contentReads >= 5 ? 1 : 0)
    : 0;
  const allGoalsDone = goalsDone === 3;

  const currentLang = LANGUAGES.find((l) => l.code === lang);

  const handleBonusClaim = () => {
    if (!goals || goals.bonusAwarded || !allGoalsDone) return;
    updatePoints(profile.studentNumber, 30);
    const updated = updateDailyGoals(profile.studentNumber, {
      bonusAwarded: true,
    });
    setDailyGoals(updated);
    setProfile(getCurrentUser());
  };

  const handleCompleteAssignment = (assignmentId: string, section: string) => {
    markAssignmentCompleted(assignmentId, profile.studentNumber);
    updatePoints(profile.studentNumber, 20);
    setProfile(getCurrentUser());
    setPendingAssignments((prev) => prev.filter((a) => a.id !== assignmentId));
    navigate({ to: `/${section}` as any });
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
          <div
            className={`rounded-2xl p-4 border ${
              allGoalsDone
                ? "bg-gradient-to-r from-emerald-600/40 to-teal-600/40 border-emerald-400/40"
                : "bg-white/10 border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-white font-black text-sm">
                🎯 {lang === "tr" ? "Bugünün Görevleri" : "Today's Goals"}
              </div>
              <div className="text-white/60 text-xs font-bold">
                {goalsDone}/3
              </div>
            </div>
            {/* Progress bar */}
            <div className="h-1.5 bg-white/20 rounded-full mb-3 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${allGoalsDone ? "bg-gradient-to-r from-emerald-400 to-teal-400" : "bg-gradient-to-r from-blue-400 to-indigo-400"}`}
                style={{ width: `${(goalsDone / 3) * 100}%` }}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{goals.quizDone ? "✅" : "⬜"}</span>
                <span
                  className={`text-sm font-bold ${goals.quizDone ? "text-green-300 line-through" : "text-white"}`}
                >
                  🎯 {lang === "tr" ? "1 quiz çöz" : "Do 1 quiz"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">
                  {goals.contentReads >= 1 ? "✅" : "⬜"}
                </span>
                <span
                  className={`text-sm font-bold ${goals.contentReads >= 1 ? "text-green-300 line-through" : "text-white"}`}
                >
                  📖 {lang === "tr" ? "1 içerik oku" : "Read 1 content"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">
                  {goals.contentReads >= 5 ? "✅" : "⬜"}
                </span>
                <span
                  className={`text-sm font-bold ${goals.contentReads >= 5 ? "text-green-300 line-through" : "text-white"}`}
                >
                  📚{" "}
                  {lang === "tr"
                    ? `5 içerik oku (${goals.contentReads}/5)`
                    : `Read 5 items (${goals.contentReads}/5)`}
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
                🎉{" "}
                {lang === "tr"
                  ? "Tüm görevler tamam! +30 puan al"
                  : "All goals complete! Claim +30 pts"}
              </button>
            )}
            {allGoalsDone && goals.bonusAwarded && (
              <div className="mt-3 text-center text-green-300 text-xs font-bold bg-green-500/20 rounded-xl py-2">
                🎉{" "}
                {lang === "tr"
                  ? "Tüm görevler tamamlandı! +30 bonus puan kazandın"
                  : "All goals complete! +30 bonus points earned"}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Pending Assignments Card */}
      {pendingAssignments.length > 0 && (
        <div className="px-4 pb-3">
          <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-400/40 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">📋</span>
              <span className="text-white font-black text-sm">
                Bekleyen Ödevler
              </span>
              <span className="ml-auto bg-blue-500 text-white text-xs font-black px-2 py-0.5 rounded-full">
                {pendingAssignments.length}
              </span>
            </div>
            <div className="space-y-2">
              {pendingAssignments.slice(0, 3).map((asgn) => (
                <div
                  key={asgn.id}
                  className="bg-white/10 rounded-xl p-3 flex items-center gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-bold text-sm truncate">
                      {asgn.title}
                    </div>
                    {asgn.dueDate && (
                      <div className="text-white/50 text-xs">
                        Son:{" "}
                        {new Date(asgn.dueDate).toLocaleDateString("tr-TR")}
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    data-ocid="home.assignment_go_button"
                    onClick={() =>
                      handleCompleteAssignment(asgn.id, asgn.section)
                    }
                    className="bg-blue-500 hover:bg-blue-400 text-white text-xs font-black px-3 py-1.5 rounded-xl transition-all shrink-0"
                  >
                    Git →
                  </button>
                </div>
              ))}
            </div>
            {pendingAssignments.length > 3 && (
              <div className="text-center text-white/50 text-xs mt-2">
                +{pendingAssignments.length - 3} daha fazla ödev
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

      {/* Personalized Recommendation Card (new smart card) */}
      <RecommendationCard studentNumber={profile.studentNumber} lang={lang} />

      {/* Legacy recommendation based on last quiz score */}
      {lastQuizScore !== null && (
        <div className="px-4 pb-2">
          <button
            type="button"
            data-ocid="home.quiz_recommendation_card"
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
      {parentMsg?.message && (
        <div
          className={`mx-4 mb-4 rounded-3xl p-5 ${
            !parentMsg.read
              ? "bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30 animate-pulse"
              : "bg-gradient-to-r from-orange-400/80 to-amber-400/80"
          }`}
        >
          <div className="flex items-start gap-3">
            <span className="text-3xl">💌</span>
            <div className="flex-1">
              <div className="text-white/90 text-xs font-bold mb-1">
                Velinden mesaj:
              </div>
              <p className="text-white font-bold text-sm leading-relaxed">
                {parentMsg.message}
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <button
              type="button"
              data-ocid="home.parent_msg_button"
              onClick={() => {
                if (profile) markParentMessageRead(profile.studentNumber);
                setParentMsg(null);
              }}
              className="bg-white/30 hover:bg-white/40 text-white font-black px-5 py-2 rounded-xl text-sm"
            >
              Tamam 👍
            </button>
          </div>
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
