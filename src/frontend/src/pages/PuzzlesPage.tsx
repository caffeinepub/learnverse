import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  getCurrentUser,
  getReadTopics,
  markTopicRead,
  updatePoints,
} from "../store";

type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

interface Puzzle {
  key: string;
  question: string;
  emoji: string;
  choices: string[];
  correct: number;
}

const puzzles: Record<Level, Puzzle[]> = {
  okul_oncesi: [
    {
      key: "puzzle_renk_1",
      question: "Güneş hangi renktir?",
      emoji: "☀️",
      choices: ["Mavi", "Kırmızı", "Sarı", "Yeşil"],
      correct: 2,
    },
    {
      key: "puzzle_hayvan_1",
      question: "Hangisi uçar?",
      emoji: "🐦",
      choices: ["Kedi", "Kuş", "Balık", "Köpek"],
      correct: 1,
    },
    {
      key: "puzzle_sayi_1",
      question: "2 + 3 kaçtır?",
      emoji: "🔢",
      choices: ["4", "6", "5", "7"],
      correct: 2,
    },
    {
      key: "puzzle_meyve_1",
      question: "Hangisi bir meyve değil?",
      emoji: "🍎",
      choices: ["Elma", "Muz", "Havuç", "Üzüm"],
      correct: 2,
    },
    {
      key: "puzzle_sekil_1",
      question: "Tekerlek hangi şekle benzer?",
      emoji: "⭕",
      choices: ["Kare", "Daire", "Üçgen", "Dikdörtgen"],
      correct: 1,
    },
  ],
  ilkokul: [
    {
      key: "puzzle_matematik_1",
      question: "7 × 8 kaçtır?",
      emoji: "🔢",
      choices: ["54", "56", "58", "64"],
      correct: 1,
    },
    {
      key: "puzzle_cografi_1",
      question: "Türkiye'nin başkenti neresidir?",
      emoji: "🏛️",
      choices: ["İstanbul", "İzmir", "Ankara", "Bursa"],
      correct: 2,
    },
    {
      key: "puzzle_mantik_1",
      question: "Bir haftada kaç gün vardır?",
      emoji: "📅",
      choices: ["5", "6", "8", "7"],
      correct: 3,
    },
    {
      key: "puzzle_bilim_1",
      question:
        "Bitkilerin güneş ışığını besin üretmek için kullanmasına ne denir?",
      emoji: "🌿",
      choices: ["Solunum", "Büyüme", "Fotosentez", "Uyku"],
      correct: 2,
    },
    {
      key: "puzzle_dilbilgisi_1",
      question: "'Koşmak' hangi sözcük türüdür?",
      emoji: "📝",
      choices: ["İsim", "Sıfat", "Zarf", "Fiil"],
      correct: 3,
    },
  ],
  ortaokul: [
    {
      key: "puzzle_fizik_1",
      question: "İşığın boşlukta hızı yaklaşık kaç km/s'dir?",
      emoji: "💡",
      choices: ["100.000", "300.000", "500.000", "1.000.000"],
      correct: 1,
    },
    {
      key: "puzzle_tarih_1",
      question: "Türkiye Cumhuriyeti hangi yılda kuruldu?",
      emoji: "🏛️",
      choices: ["1919", "1920", "1923", "1925"],
      correct: 2,
    },
    {
      key: "puzzle_kimya_1",
      question: "Su molekülünün kimyasal formülü nedir?",
      emoji: "💧",
      choices: ["H3O", "H2O", "HO2", "H2O2"],
      correct: 1,
    },
    {
      key: "puzzle_mantik_2",
      question: "Bir üçgenin iç açıları toplamı kaç derecedir?",
      emoji: "📐",
      choices: ["90°", "270°", "360°", "180°"],
      correct: 3,
    },
    {
      key: "puzzle_biyoloji_1",
      question: "DNA hangi organelde bulunur?",
      emoji: "🔬",
      choices: ["Mitokondri", "Ribozom", "Çekirdek", "Lizozom"],
      correct: 2,
    },
  ],
};

const levelTabs: { key: Level; label: string }[] = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" },
];

export default function PuzzlesPage() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const [level, setLevel] = useState<Level>(
    (profile?.level as Level) || "ilkokul",
  );
  const [readTopics, setReadTopics] = useState<string[]>(() =>
    profile ? getReadTopics(profile.studentNumber) : [],
  );
  const [answers, setAnswers] = useState<Record<string, number | null>>({});

  const handleAnswer = (
    puzzleKey: string,
    choiceIndex: number,
    correctIndex: number,
  ) => {
    if (answers[puzzleKey] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [puzzleKey]: choiceIndex }));
    if (
      choiceIndex === correctIndex &&
      profile &&
      !readTopics.includes(puzzleKey)
    ) {
      markTopicRead(profile.studentNumber, puzzleKey);
      updatePoints(profile.studentNumber, 5);
      setReadTopics((prev) => [...prev, puzzleKey]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-500 to-orange-500">
      <div className="p-4">
        <Button
          data-ocid="puzzles.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4"
        >
          ← Geri
        </Button>
        <h1 className="text-3xl font-black text-white mb-4">🧩 Bulmacalar</h1>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {levelTabs.map((t) => (
            <button
              type="button"
              key={t.key}
              data-ocid="puzzles.tab"
              onClick={() => {
                setLevel(t.key);
                setAnswers({});
              }}
              className={`py-3 rounded-2xl font-bold text-xs transition-all ${level === t.key ? "bg-white text-amber-600" : "bg-white/20 text-white hover:bg-white/30"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="space-y-5">
          {puzzles[level].map((puzzle, pIdx) => {
            const selected = answers[puzzle.key];
            const answered = selected !== undefined && selected !== null;
            const isCorrect = answered && selected === puzzle.correct;
            return (
              <div
                key={puzzle.key}
                className={`bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${answered ? (isCorrect ? "border-2 border-green-300" : "border-2 border-red-300") : ""}`}
              >
                <div className="flex gap-2 items-start mb-4">
                  <span className="text-3xl">{puzzle.emoji}</span>
                  <div>
                    <div className="text-white/60 text-xs mb-1">
                      Soru {pIdx + 1}
                    </div>
                    <div className="text-white font-black">
                      {puzzle.question}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {puzzle.choices.map((choice, cIdx) => {
                    let btnClass = "bg-white/20 text-white hover:bg-white/30";
                    if (answered) {
                      if (cIdx === puzzle.correct)
                        btnClass = "bg-green-500 text-white";
                      else if (cIdx === selected)
                        btnClass = "bg-red-500 text-white";
                      else btnClass = "bg-white/10 text-white/50";
                    }
                    return (
                      <button
                        key={choice}
                        type="button"
                        data-ocid={`puzzles.answer_button.${cIdx + 1}`}
                        disabled={answered}
                        onClick={() =>
                          handleAnswer(puzzle.key, cIdx, puzzle.correct)
                        }
                        className={`rounded-xl py-3 px-4 text-sm font-bold transition-all ${btnClass} disabled:cursor-not-allowed`}
                      >
                        {choice}
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <div
                    className={`mt-3 text-sm font-bold ${isCorrect ? "text-green-300" : "text-red-300"}`}
                  >
                    {isCorrect
                      ? "✅ Doğru! +5 puan kazandın!"
                      : `❌ Yanlış. Doğru cevap: ${puzzle.choices[puzzle.correct]}`}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
