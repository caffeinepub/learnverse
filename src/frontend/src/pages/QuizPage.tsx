import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { getAdaptiveDailyQuestions } from "../data/questions";
import {
  questionsEnMiddle,
  questionsEnPreschool,
  questionsEnPrimary,
} from "../data/questions-en";
import {
  questionsEsMiddle,
  questionsEsPreschool,
  questionsEsPrimary,
} from "../data/questions-es";
import { useLanguage } from "../i18n/LanguageContext";
import {
  addToSpacedRep,
  getCurrentUser,
  getDueSpacedItems,
  getLastQuizScore,
  hasPlayedQuizToday,
  markQuizPlayedToday,
  markSpacedRepCorrect,
  markSpacedRepWrong,
  playAudio,
  saveQuizResult,
  saveTopicStats,
  saveWrongAnswer,
  setLastQuizScore,
  syncToBackend,
  updateDailyGoals,
  updatePoints,
  updateStreak,
} from "../store";
import type { Question, WrongAnswer } from "../types";

type Topic = "all" | "science" | "history" | "geography" | "math" | "general";

const TOPIC_CONFIG: {
  id: Topic;
  icon: string;
  label: string;
  keywords: string[];
  color: string;
}[] = [
  {
    id: "all",
    icon: "📋",
    label: "Tümü / All",
    keywords: [],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "science",
    icon: "🔬",
    label: "Fen / Science",
    keywords: [
      "fen",
      "bilim",
      "hayvan",
      "bitki",
      "canlı",
      "enerji",
      "madde",
      "atom",
      "hücre",
      "güneş",
      "gezegen",
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    id: "history",
    icon: "🏛️",
    label: "Tarih / History",
    keywords: [
      "tarih",
      "atatürk",
      "osmanlı",
      "savaş",
      "padişah",
      "sultan",
      "cumhuriyet",
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "geography",
    icon: "🌍",
    label: "Coğrafya / Geography",
    keywords: [
      "coğrafya",
      "ülke",
      "başkent",
      "kıta",
      "dağ",
      "nehir",
      "deniz",
      "okyanus",
      "şehir",
      "il",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "math",
    icon: "🔢",
    label: "Matematik / Math",
    keywords: [
      "sayı",
      "toplama",
      "çarpma",
      "bölme",
      "çıkarma",
      "matematik",
      "hesap",
      "oran",
    ],
    color: "from-rose-500 to-red-500",
  },
  {
    id: "general",
    icon: "💡",
    label: "Genel / General",
    keywords: [],
    color: "from-violet-500 to-indigo-500",
  },
];

function filterQuestionsByTopic(
  questions: Question[],
  topic: Topic,
): Question[] {
  if (topic === "all") return questions;

  const cfg = TOPIC_CONFIG.find((t) => t.id === topic);
  if (!cfg || cfg.keywords.length === 0) {
    const excludeKeywords = TOPIC_CONFIG.filter(
      (t) => t.keywords.length > 0,
    ).flatMap((t) => t.keywords);
    const filtered = questions.filter((q) => {
      const lower = q.text.toLowerCase();
      return !excludeKeywords.some((kw) => lower.includes(kw));
    });
    return filtered.length > 0 ? filtered.slice(0, 10) : questions.slice(0, 10);
  }

  const filtered = questions.filter((q) => {
    const lower = q.text.toLowerCase();
    return cfg.keywords.some((kw) => lower.includes(kw));
  });

  if (filtered.length === 0) {
    return [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
  }

  return [...filtered].sort(() => Math.random() - 0.5).slice(0, 10);
}

function getLangLabel(lang: string, key: string): string {
  if (lang === "es") {
    const map: Record<string, string> = {
      Choose_Quiz_Topic: "Elige el tema del quiz",
      Select_topic_or_daily: "Selecciona un tema o juega el quiz diario",
      Already_played: "✅ Ya jugaste hoy",
      Daily_quiz_info: "Quiz diario • 1 por día • gana racha",
      Topic_quiz_info: "Quiz temático • Ilimitado",
      Play_Again: "Jugar de nuevo",
      Review: "Repaso",
      questions_due_sub: "Aparecerán al inicio de tu próximo quiz",
    };
    if (key === "questions_due") return "";
    return map[key] || key;
  }
  if (lang === "en") {
    const map: Record<string, string> = {
      Choose_Quiz_Topic: "Choose Quiz Topic",
      Select_topic_or_daily: "Select a topic or play the daily quiz",
      Already_played: "✅ Already played today",
      Daily_quiz_info: "Daily quiz • 1 per day • earns streak",
      Topic_quiz_info: "Topic quiz • Unlimited",
      Play_Again: "Play Again",
      Review: "Review",
    };
    return map[key] || key;
  }
  const map: Record<string, string> = {
    Choose_Quiz_Topic: "Quiz Konusu Seç",
    Select_topic_or_daily: "Bir konu seç veya günlük quiz oyna",
    Already_played: "✅ Bugün oynadın",
    Daily_quiz_info: "Günlük quiz • Günde 1 kez • Seri kazanır",
    Topic_quiz_info: "Konu quizi • Sınırsız",
    Play_Again: "Tekrar Oyna",
    Review: "Tekrar",
  };
  return map[key] || key;
}

export default function QuizPage() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const { t, lang } = useLanguage();

  const [phase, setPhase] = useState<
    "topicSelect" | "question" | "feedback" | "done"
  >("topicSelect");
  const [selectedTopic, setSelectedTopic] = useState<Topic>("all");

  const [allQuestions] = useState<Question[]>(() => {
    const level = profile?.level || "ilkokul";
    if (lang === "es") {
      if (level === "okul_oncesi") return questionsEsPreschool;
      if (level === "ortaokul") return questionsEsMiddle;
      return questionsEsPrimary;
    }
    if (lang === "en") {
      if (level === "okul_oncesi") return questionsEnPreschool;
      if (level === "ortaokul") return questionsEnMiddle;
      return questionsEnPrimary;
    }
    const lastScore = getLastQuizScore(profile?.studentNumber || "");
    return getAdaptiveDailyQuestions(level, lastScore);
  });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [timer, setTimer] = useState(60);
  const [feedbackCorrect, setFeedbackCorrect] = useState(false);
  const [srItemIds, setSrItemIds] = useState<Map<number, string>>(new Map());

  const nextQuestion = useCallback(() => {
    if (current + 1 >= questions.length) {
      setPhase("done");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setTimer(60);
      setPhase("question");
    }
  }, [current, questions.length]);

  useEffect(() => {
    if (phase !== "question") return;
    if (timer <= 0) {
      nextQuestion();
      return;
    }
    const tid = setTimeout(() => setTimer((tt) => tt - 1), 1000);
    return () => clearTimeout(tid);
  }, [timer, phase, nextQuestion]);

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopic(topic);
    const filtered = filterQuestionsByTopic(allQuestions, topic);

    const dueItems = profile ? getDueSpacedItems(profile.studentNumber) : [];
    const srQuestions: Question[] = dueItems.slice(0, 3).map((item) => ({
      text: item.question,
      choices: item.choices,
      correctIndex: item.correctIndex,
      type: "multiple" as const,
    }));
    const srMap = new Map<number, string>();
    dueItems.slice(0, 3).forEach((item, i) => srMap.set(i, item.id));
    setSrItemIds(srMap);
    setQuestions([...srQuestions, ...filtered]);

    setCurrent(0);
    setCorrect(0);
    setSelected(null);
    setTimer(60);
    setPhase("question");
  };

  const handleAnswer = (idx: number) => {
    if (phase !== "question" || !profile) return;
    setSelected(idx);
    const isCorrect = idx === questions[current].correctIndex;
    setFeedbackCorrect(isCorrect);

    const srId = srItemIds.get(current);
    if (srId) {
      if (isCorrect) markSpacedRepCorrect(profile.studentNumber, srId);
      else markSpacedRepWrong(profile.studentNumber, srId);
    }

    if (isCorrect) {
      setCorrect((c) => c + 1);
      playAudio("correct_answer");
    } else {
      playAudio("wrong_answer");
      const wa: WrongAnswer = {
        id: Date.now().toString(),
        studentNumber: profile.studentNumber,
        question: questions[current].text,
        choices: questions[current].choices,
        correctIndex: questions[current].correctIndex,
        userIndex: idx,
        savedAt: new Date().toISOString(),
      };
      saveWrongAnswer(wa);
      addToSpacedRep({
        studentNumber: profile.studentNumber,
        question: questions[current].text,
        choices: questions[current].choices,
        correctIndex: questions[current].correctIndex,
      });
    }
    setPhase("feedback");
    setTimeout(() => nextQuestion(), 1500);
  };

  const handleFinish = () => {
    if (!profile) return;
    const score = correct * 10;
    updatePoints(profile.studentNumber, score);
    if (selectedTopic === "all") {
      markQuizPlayedToday(profile.studentNumber);
      updateDailyGoals(profile.studentNumber, { quizDone: true });
    }
    updateStreak(profile.studentNumber);
    if (selectedTopic !== "all") {
      saveTopicStats(
        profile.studentNumber,
        selectedTopic,
        correct,
        questions.length,
      );
    }
    saveQuizResult({
      studentNumber: profile.studentNumber,
      date: new Date().toISOString(),
      score: correct * 10,
      total: questions.length,
      correct,
      level: profile.level,
    });
    setLastQuizScore(
      profile.studentNumber,
      Math.round((correct / questions.length) * 100),
    );
    syncToBackend(profile.studentNumber);
    playAudio("game_end");
    navigate({ to: "/home" });
  };

  if (!profile) return null;

  if (phase === "topicSelect") {
    const alreadyPlayed = hasPlayedQuizToday(profile.studentNumber);
    const dueCount = getDueSpacedItems(profile.studentNumber).length;
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 p-4">
        <div className="max-w-lg mx-auto">
          <button
            type="button"
            data-ocid="quiz.back_button"
            onClick={() => navigate({ to: "/home" })}
            className="text-white font-bold text-sm mb-6 block"
          >
            ← {t("back")}
          </button>

          {dueCount > 0 && (
            <div
              data-ocid="quiz.spaced_rep_card"
              className="bg-orange-500/90 backdrop-blur-sm rounded-2xl p-4 mb-4 flex items-center gap-3"
            >
              <div className="text-3xl">🔁</div>
              <div>
                <div className="text-white font-black text-sm">
                  {lang === "es"
                    ? `${dueCount} pregunta${dueCount > 1 ? "s" : ""} para repasar`
                    : lang === "en"
                      ? `${dueCount} question${dueCount > 1 ? "s" : ""} due for review`
                      : `${dueCount} soru tekrar için bekliyor`}
                </div>
                <div className="text-orange-100 text-xs">
                  {lang === "es"
                    ? "Aparecerán al inicio de tu próximo quiz"
                    : lang === "en"
                      ? "These will appear at the start of your next quiz"
                      : "Bir sonraki quizinin başında görünecekler"}
                </div>
              </div>
            </div>
          )}

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 mb-6">
            <div className="text-5xl text-center mb-3">🎯</div>
            <h1 className="text-white font-black text-2xl text-center mb-1">
              {getLangLabel(lang, "Choose_Quiz_Topic")}
            </h1>
            <p className="text-white/70 text-sm text-center">
              {getLangLabel(lang, "Select_topic_or_daily")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {TOPIC_CONFIG.map((tc) => {
              const isAllTopic = tc.id === "all";
              const disabled = isAllTopic && alreadyPlayed;
              return (
                <button
                  key={tc.id}
                  type="button"
                  data-ocid={`quiz.topic_${tc.id}`}
                  onClick={() => !disabled && handleTopicSelect(tc.id)}
                  disabled={disabled}
                  className={`bg-gradient-to-br ${tc.color} rounded-2xl p-5 text-left shadow-xl transition-transform ${
                    disabled
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:scale-105 active:scale-95"
                  } ${isAllTopic ? "col-span-2" : ""}`}
                >
                  <div className="text-4xl mb-2">{tc.icon}</div>
                  <div className="text-white font-black text-base leading-tight">
                    {tc.label}
                  </div>
                  {isAllTopic && (
                    <div className="text-white/80 text-xs mt-1">
                      {disabled
                        ? getLangLabel(lang, "Already_played")
                        : getLangLabel(lang, "Daily_quiz_info")}
                    </div>
                  )}
                  {!isAllTopic && (
                    <div className="text-white/80 text-xs mt-1">
                      {getLangLabel(lang, "Topic_quiz_info")}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (phase === "done") {
    const score = correct * 10;
    const topicLabel =
      TOPIC_CONFIG.find((tc) => tc.id === selectedTopic)?.label || "";
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full shadow-2xl">
          <div className="text-6xl mb-4">
            {correct >= 7 ? "🎉" : correct >= 5 ? "😊" : "💪"}
          </div>
          <p className="text-sm text-gray-500 mb-1">{topicLabel}</p>
          <h2 className="text-3xl font-black text-gray-800 mb-2">
            {t("quiz_finished")}
          </h2>
          <p className="text-gray-600 mb-4">
            {t("quiz_score")}: {correct}/{questions.length}
          </p>
          <p className="text-2xl font-black text-purple-600 mb-6">
            +{score} {t("points")}
          </p>
          <div className="flex gap-3">
            <Button
              data-ocid="quiz.play_again_button"
              onClick={() => {
                setPhase("topicSelect");
                setQuestions([]);
                setCurrent(0);
                setCorrect(0);
              }}
              className="flex-1 bg-white border-2 border-purple-500 text-purple-600 font-bold py-3 rounded-xl hover:bg-purple-50"
            >
              {getLangLabel(lang, "Play_Again")}
            </Button>
            <Button
              data-ocid="quiz.finish_button"
              onClick={handleFinish}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl"
            >
              {t("quiz_home")}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 p-4">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button
            type="button"
            data-ocid="quiz.back_button"
            onClick={() => setPhase("topicSelect")}
            className="text-white font-bold text-sm"
          >
            ← {t("back")}
          </button>
          <div className="text-white/70 text-xs font-bold">
            {TOPIC_CONFIG.find((tc) => tc.id === selectedTopic)?.icon}{" "}
            {TOPIC_CONFIG.find((tc) => tc.id === selectedTopic)?.label}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-sm">
              {current + 1}/{questions.length}
            </span>
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${
                timer <= 10
                  ? "bg-red-500 text-white animate-pulse"
                  : "bg-white/30 text-white"
              }`}
            >
              {timer}
            </div>
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-3xl p-6 mb-4">
          {srItemIds.has(current) && (
            <div className="text-xs bg-orange-400/80 text-white px-3 py-1 rounded-full font-bold mb-3 inline-block">
              🔁 {getLangLabel(lang, "Review")}
            </div>
          )}
          <p className="text-white font-black text-xl leading-relaxed text-center">
            {q.text}
          </p>
        </div>

        <div className="space-y-3">
          {q.choices.map((choice, idx) => {
            let cls =
              "w-full text-left p-4 rounded-2xl font-bold text-base transition-all ";
            if (phase === "feedback") {
              if (idx === q.correctIndex)
                cls += "bg-green-500 text-white scale-105";
              else if (idx === selected) cls += "bg-red-500 text-white";
              else cls += "bg-white/20 text-white";
            } else {
              cls += "bg-white/20 text-white hover:bg-white/40 active:scale-95";
            }
            return (
              <button
                key={choice}
                type="button"
                data-ocid={`quiz.choice.${idx + 1}`}
                className={cls}
                onClick={() => handleAnswer(idx)}
                disabled={phase === "feedback"}
              >
                {choice}
              </button>
            );
          })}
        </div>

        {phase === "feedback" && (
          <div
            data-ocid="quiz.feedback"
            className={`mt-6 p-4 rounded-2xl text-center font-black text-xl ${
              feedbackCorrect
                ? "bg-green-500/80 text-white"
                : "bg-red-500/80 text-white"
            }`}
          >
            {feedbackCorrect ? `✅ ${t("correct")}` : `❌ ${t("quiz_wrong")}`}
          </div>
        )}
      </div>
    </div>
  );
}
