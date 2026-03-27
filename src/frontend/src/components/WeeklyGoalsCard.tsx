import { useState } from "react";
import {
  getCurrentUser,
  getWeeklyGoals,
  updatePoints,
  updateWeeklyGoals,
} from "../store";

const WEEKLY_GOALS = {
  storiesRead: 5,
  quizzesCompleted: 3,
  wordsLearned: 15,
};

type Lang = string;

function t(key: string, lang: Lang): string {
  const texts: Record<string, Record<string, string>> = {
    weekly_goals: {
      tr: "Haftalık Hedefler",
      en: "Weekly Goals",
      es: "Metas Semanales",
      fr: "Objectifs Hebdomadaires",
    },
    stories_goal: {
      tr: "5 hikaye oku",
      en: "Read 5 stories",
      es: "Lee 5 historias",
      fr: "Lire 5 histoires",
    },
    quizzes_goal: {
      tr: "3 quiz tamamla",
      en: "Complete 3 quizzes",
      es: "Completa 3 quizzes",
      fr: "Termine 3 quiz",
    },
    words_goal: {
      tr: "15 kelime öğren",
      en: "Learn 15 words",
      es: "Aprende 15 palabras",
      fr: "Apprendre 15 mots",
    },
    claim_bonus: {
      tr: "Haftalık hedefler tamam! +50 puan al",
      en: "Weekly goals done! Claim +50 pts",
      es: "¡Metas semanales! +50 puntos",
      fr: "Objectifs hebdo ! +50 pts",
    },
    bonus_claimed: {
      tr: "Haftalık hedefler tamamlandı! +50 bonus puan kazandın 🎉",
      en: "Weekly goals complete! +50 bonus points earned 🎉",
      es: "¡Metas semanales completadas! +50 puntos ganados 🎉",
      fr: "Objectifs hebdo complétés ! +50 pts 🎉",
    },
  };
  return texts[key]?.[lang] ?? texts[key]?.en ?? key;
}

interface Props {
  lang: Lang;
}

export default function WeeklyGoalsCard({ lang }: Props) {
  const profile = getCurrentUser();
  const [goals, setGoals] = useState(() =>
    profile ? getWeeklyGoals(profile.studentNumber) : null,
  );

  if (!profile || !goals) return null;

  const storiesDone = Math.min(goals.storiesRead, WEEKLY_GOALS.storiesRead);
  const quizzesDone = Math.min(
    goals.quizzesCompleted,
    WEEKLY_GOALS.quizzesCompleted,
  );
  const wordsDone = Math.min(goals.wordsLearned, WEEKLY_GOALS.wordsLearned);

  const goalsCompleted =
    (storiesDone >= WEEKLY_GOALS.storiesRead ? 1 : 0) +
    (quizzesDone >= WEEKLY_GOALS.quizzesCompleted ? 1 : 0) +
    (wordsDone >= WEEKLY_GOALS.wordsLearned ? 1 : 0);

  const allDone = goalsCompleted === 3;

  const handleClaim = () => {
    if (!allDone || goals.bonusAwarded) return;
    updatePoints(profile.studentNumber, 50);
    const updated = updateWeeklyGoals(profile.studentNumber, {
      bonusAwarded: true,
    });
    setGoals(updated);
  };

  const GoalRow = ({
    emoji,
    label,
    current,
    total,
  }: {
    emoji: string;
    label: string;
    current: number;
    total: number;
  }) => {
    const done = current >= total;
    const pct = Math.min(100, (current / total) * 100);
    return (
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span
            className={`text-sm font-bold flex items-center gap-1.5 ${
              done ? "text-violet-200 line-through" : "text-white"
            }`}
          >
            <span className="text-base">{done ? "✅" : emoji}</span>
            {label}
          </span>
          <span className="text-white/60 text-xs font-bold">
            {current}/{total}
          </span>
        </div>
        <div className="h-1.5 bg-white/15 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              done
                ? "bg-gradient-to-r from-violet-400 to-fuchsia-400"
                : "bg-gradient-to-r from-purple-400 to-violet-400"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 pb-3">
      <div
        data-ocid="home.weekly_goals_card"
        className={`rounded-2xl p-4 border ${
          allDone
            ? "bg-gradient-to-r from-violet-600/50 to-fuchsia-600/50 border-violet-400/60"
            : "bg-gradient-to-r from-violet-900/40 to-purple-900/40 border-violet-500/30"
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="text-white font-black text-sm flex items-center gap-2">
            <span>{allDone ? "🏆" : "📅"}</span>
            {t("weekly_goals", lang)}
          </div>
          <div className="flex items-center gap-2">
            <div className="text-white/60 text-xs font-bold">
              {goalsCompleted}/3
            </div>
            {allDone && (
              <span className="bg-violet-500/50 text-violet-200 text-xs font-black px-2 py-0.5 rounded-full">
                🏆
              </span>
            )}
          </div>
        </div>

        {/* Overall progress bar */}
        <div className="h-1.5 bg-white/15 rounded-full mb-3 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              allDone
                ? "bg-gradient-to-r from-violet-400 to-fuchsia-400"
                : "bg-gradient-to-r from-purple-400 to-violet-400"
            }`}
            style={{ width: `${(goalsCompleted / 3) * 100}%` }}
          />
        </div>

        <div className="space-y-3">
          <GoalRow
            emoji="📖"
            label={`${t("stories_goal", lang)} (${storiesDone}/${WEEKLY_GOALS.storiesRead})`}
            current={storiesDone}
            total={WEEKLY_GOALS.storiesRead}
          />
          <GoalRow
            emoji="🎯"
            label={`${t("quizzes_goal", lang)} (${quizzesDone}/${WEEKLY_GOALS.quizzesCompleted})`}
            current={quizzesDone}
            total={WEEKLY_GOALS.quizzesCompleted}
          />
          <GoalRow
            emoji="📝"
            label={`${t("words_goal", lang)} (${wordsDone}/${WEEKLY_GOALS.wordsLearned})`}
            current={wordsDone}
            total={WEEKLY_GOALS.wordsLearned}
          />
        </div>

        {allDone && !goals.bonusAwarded && (
          <button
            type="button"
            data-ocid="home.weekly_bonus_button"
            onClick={handleClaim}
            className="mt-3 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-400 hover:to-fuchsia-400 text-white font-black text-sm py-2 rounded-xl transition-all animate-pulse"
          >
            🏆 {t("claim_bonus", lang)}
          </button>
        )}
        {allDone && goals.bonusAwarded && (
          <div className="mt-3 text-center text-violet-200 text-xs font-bold bg-violet-500/20 rounded-xl py-2">
            {t("bonus_claimed", lang)}
          </div>
        )}
      </div>
    </div>
  );
}
