import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { getCurrentUser, setPlacementDone } from "../store";

const PLACEMENT_QUESTIONS = [
  {
    q: { tr: "Gökyüzü hangi renktir? 🌤️", en: "What color is the sky? 🌤️" },
    options: [
      { tr: "🟡 Sarı", en: "🟡 Yellow" },
      { tr: "🔵 Mavi", en: "🔵 Blue" },
      { tr: "🔴 Kırmızı", en: "🔴 Red" },
    ],
    correct: 1,
    level: "easy",
  },
  {
    q: { tr: "2 + 3 = ?", en: "2 + 3 = ?" },
    options: [
      { tr: "3", en: "3" },
      { tr: "5", en: "5" },
      { tr: "7", en: "7" },
    ],
    correct: 1,
    level: "easy",
  },
  {
    q: { tr: "Hangi hayvan havlar? 🐕", en: "Which animal barks? 🐕" },
    options: [
      { tr: "Kedi", en: "Cat" },
      { tr: "Köpek", en: "Dog" },
      { tr: "Kuş", en: "Bird" },
    ],
    correct: 1,
    level: "easy",
  },
  {
    q: {
      tr: "Bir haftada kaç gün vardır?",
      en: "How many days are in a week?",
    },
    options: [
      { tr: "5", en: "5" },
      { tr: "7", en: "7" },
      { tr: "10", en: "10" },
    ],
    correct: 1,
    level: "easy",
  },
  {
    q: {
      tr: "Türkiye'nin başkenti neresidir?",
      en: "What is the capital of Turkey?",
    },
    options: [
      { tr: "İstanbul", en: "Istanbul" },
      { tr: "İzmir", en: "Izmir" },
      { tr: "Ankara", en: "Ankara" },
    ],
    correct: 2,
    level: "medium",
  },
  {
    q: { tr: "4 × 6 = ?", en: "4 × 6 = ?" },
    options: [
      { tr: "20", en: "20" },
      { tr: "24", en: "24" },
      { tr: "28", en: "28" },
    ],
    correct: 1,
    level: "medium",
  },
  {
    q: {
      tr: "Güneş sistemimizdeki en büyük gezegen hangisidir?",
      en: "What is the largest planet in our solar system?",
    },
    options: [
      { tr: "Mars", en: "Mars" },
      { tr: "Satürn", en: "Saturn" },
      { tr: "Jüpiter", en: "Jupiter" },
    ],
    correct: 2,
    level: "medium",
  },
  {
    q: { tr: "56 ÷ 8 = ?", en: "56 ÷ 8 = ?" },
    options: [
      { tr: "6", en: "6" },
      { tr: "7", en: "7" },
      { tr: "8", en: "8" },
    ],
    correct: 1,
    level: "hard",
  },
  {
    q: {
      tr: "Fotosentez bitkiler için ne üretir?",
      en: "What does photosynthesis produce for plants?",
    },
    options: [
      { tr: "Oksijen ve besin", en: "Oxygen and food" },
      { tr: "Su ve toprak", en: "Water and soil" },
      { tr: "Güneş enerjisi", en: "Solar energy" },
    ],
    correct: 0,
    level: "hard",
  },
  {
    q: {
      tr: "Dünya'nın Güneş etrafındaki tam turu kaç gün sürer?",
      en: "How many days does Earth take to orbit the Sun?",
    },
    options: [
      { tr: "30", en: "30" },
      { tr: "180", en: "180" },
      { tr: "365", en: "365" },
    ],
    correct: 2,
    level: "hard",
  },
];

const LEVEL_EMOJIS: Record<string, string> = {
  okul_oncesi: "🌱",
  ilkokul: "📚",
  ortaokul: "🎓",
};

const LEVEL_LABELS: Record<string, { tr: string; en: string }> = {
  okul_oncesi: { tr: "Okul Öncesi", en: "Preschool" },
  ilkokul: { tr: "İlkokul", en: "Primary School" },
  ortaokul: { tr: "Ortaokul", en: "Middle School" },
};

const CHOICE_COLORS = [
  "from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400",
  "from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400",
  "from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400",
];

export default function PlacementTestPage() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const l = lang === "tr" ? "tr" : "en";

  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [determinedLevel, setDeterminedLevel] = useState("ilkokul");

  const q = PLACEMENT_QUESTIONS[step];
  const total = PLACEMENT_QUESTIONS.length;

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const newScore = score + (idx === q.correct ? 1 : 0);
    setTimeout(() => {
      if (step < total - 1) {
        setScore(newScore);
        setStep(step + 1);
        setSelected(null);
      } else {
        const level =
          newScore <= 3
            ? "okul_oncesi"
            : newScore <= 6
              ? "ilkokul"
              : "ortaokul";
        setDeterminedLevel(level);
        setScore(newScore);
        setShowResult(true);
      }
    }, 700);
  };

  const handleFinish = () => {
    const profile = getCurrentUser();
    if (profile) {
      setPlacementDone(profile.studentNumber, determinedLevel);
    }
    navigate({ to: "/home" });
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-8 text-center">
            <div className="text-6xl mb-3">{LEVEL_EMOJIS[determinedLevel]}</div>
            <h2 className="text-white font-black text-2xl mb-1">
              {l === "tr" ? "Seviyeniz Belirlendi!" : "Your Level is Set!"}
            </h2>
            <p className="text-white/80 text-sm">
              {l === "tr"
                ? `${score}/${total} doğru cevap`
                : `${score}/${total} correct answers`}
            </p>
          </div>
          <div className="px-6 py-8 text-center">
            <div className="inline-block bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl px-8 py-4 mb-6">
              <div className="text-4xl mb-2">
                {LEVEL_EMOJIS[determinedLevel]}
              </div>
              <div className="text-2xl font-black text-purple-800">
                {LEVEL_LABELS[determinedLevel][l]}
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-6">
              {l === "tr"
                ? "Harika! Sana uygun içerikler hazırlandı. Öğrenmeye başlayalım!"
                : "Great! Content tailored for you is ready. Let's start learning!"}
            </p>
            <button
              type="button"
              data-ocid="placement.start_button"
              onClick={handleFinish}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-lg py-4 rounded-2xl transition-all shadow-lg shadow-purple-500/30 active:scale-95"
            >
              {l === "tr" ? "Başlayalım! 🚀" : "Let's Start! 🚀"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 flex flex-col">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 flex items-center gap-3">
        <button
          type="button"
          data-ocid="placement.back_button"
          onClick={() => navigate({ to: "/" })}
          className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center text-white transition-all"
        >
          ←
        </button>
        <div className="flex-1">
          <h1 className="text-white font-black text-lg leading-tight">
            {l === "tr" ? "Seviye Testi" : "Placement Test"}
          </h1>
          <p className="text-white/60 text-xs">
            {l === "tr"
              ? "Sana uygun seviyeyi belirleyelim"
              : "Let's find your level"}
          </p>
        </div>
        <div className="text-white/60 text-sm font-bold">
          {step + 1}/{total}
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-4 pb-4">
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-500"
            style={{ width: `${((step + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="flex-1 px-4 flex flex-col justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6">
          <div className="text-center">
            <span className="inline-block bg-purple-100 text-purple-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
              {l === "tr" ? `Soru ${step + 1}` : `Question ${step + 1}`}
            </span>
            <p className="text-slate-800 font-black text-xl leading-snug">
              {q.q[l]}
            </p>
          </div>
        </div>

        {/* Choices */}
        <div className="space-y-3">
          {q.options.map((opt, idx) => {
            let stateClass = "";
            if (selected !== null) {
              if (idx === q.correct)
                stateClass = "ring-4 ring-green-400 scale-105";
              else if (idx === selected && idx !== q.correct)
                stateClass = "ring-4 ring-red-400 opacity-60";
              else stateClass = "opacity-40";
            }
            return (
              <button
                key={opt.en}
                type="button"
                data-ocid={`placement.choice.${idx + 1}`}
                onClick={() => handleAnswer(idx)}
                disabled={selected !== null}
                className={`w-full bg-gradient-to-r ${CHOICE_COLORS[idx % CHOICE_COLORS.length]} text-white font-bold text-lg py-4 px-6 rounded-2xl transition-all shadow-lg active:scale-95 disabled:cursor-default ${stateClass}`}
              >
                {opt[l]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pb-8" />
    </div>
  );
}
