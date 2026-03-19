import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { getAdaptiveDailyQuestions } from "../data/questions";
import {
  questionsEnMiddle,
  questionsEnPreschool,
  questionsEnPrimary,
} from "../data/questions-en";
import { useLanguage } from "../i18n/LanguageContext";
import {
  getCurrentUser,
  getLastQuizScore,
  hasPlayedQuizToday,
  markQuizPlayedToday,
  playAudio,
  saveQuizResult,
  saveWrongAnswer,
  setLastQuizScore,
  syncToBackend,
  updateDailyGoals,
  updatePoints,
  updateStreak,
} from "../store";
import type { Question, WrongAnswer } from "../types";

export default function QuizPage() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const { t, lang } = useLanguage();
  const [questions] = useState<Question[]>(() => {
    if (lang === "en") {
      const level = profile?.level || "ilkokul";
      if (level === "okul_oncesi") return questionsEnPreschool;
      if (level === "ortaokul") return questionsEnMiddle;
      return questionsEnPrimary;
    }
    const lastScore = getLastQuizScore(profile?.studentNumber || "");
    return getAdaptiveDailyQuestions(profile?.level || "ilkokul", lastScore);
  });
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [timer, setTimer] = useState(60);
  const [phase, setPhase] = useState<"question" | "feedback" | "done">(
    "question",
  );
  const [feedbackCorrect, setFeedbackCorrect] = useState(false);

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

  const handleAnswer = (idx: number) => {
    if (phase !== "question" || !profile) return;
    setSelected(idx);
    const isCorrect = idx === questions[current].correctIndex;
    setFeedbackCorrect(isCorrect);
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
    }
    setPhase("feedback");
    setTimeout(() => nextQuestion(), 1500);
  };

  const handleFinish = () => {
    if (!profile) return;
    const score = correct * 10;
    updatePoints(profile.studentNumber, score);
    markQuizPlayedToday(profile.studentNumber);
    updateStreak(profile.studentNumber);
    updateDailyGoals(profile.studentNumber, { quizDone: true });
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

  if (hasPlayedQuizToday(profile.studentNumber)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full shadow-2xl">
          <div className="text-6xl mb-4">🌙</div>
          <h2 className="text-2xl font-black text-gray-800 mb-2">
            {t("quiz_already_done")}
          </h2>
          <p className="text-gray-600 mb-6">
            {t("quiz_next_quiz")}.{" "}
            {lang === "en"
              ? "You have 1 quiz per day!"
              : "Her gün 1 quiz hakkın var!"}
          </p>
          <Button
            data-ocid="quiz.home_button"
            onClick={() => navigate({ to: "/home" })}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl"
          >
            {t("quiz_home")}
          </Button>
        </div>
      </div>
    );
  }

  if (phase === "done") {
    const score = correct * 10;
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full shadow-2xl">
          <div className="text-6xl mb-4">
            {correct >= 7 ? "🎉" : correct >= 5 ? "😊" : "💪"}
          </div>
          <h2 className="text-3xl font-black text-gray-800 mb-2">
            {t("quiz_finished")}
          </h2>
          <p className="text-gray-600 mb-4">
            {t("quiz_score")}: {correct}/{questions.length}
          </p>
          <p className="text-2xl font-black text-purple-600 mb-6">
            +{score} {t("points")}
          </p>
          <Button
            data-ocid="quiz.finish_button"
            onClick={handleFinish}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl"
          >
            {t("quiz_home")}
          </Button>
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
            onClick={() => navigate({ to: "/home" })}
            className="text-white font-bold text-sm"
          >
            ← {t("back")}
          </button>
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

        <div className="bg-white/20 backdrop-blur rounded-3xl p-6 mb-6">
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
