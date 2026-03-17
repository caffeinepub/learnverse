import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  getCurrentUser,
  playAudio,
  saveGameResult,
  syncToBackend,
  updatePoints,
} from "../../store";

const PAIRS = [
  { emoji: "🐯", word: "Kaplan" },
  { emoji: "🦁", word: "Aslan" },
  { emoji: "🐸", word: "Kurbaga" },
  { emoji: "🦊", word: "Tilki" },
  { emoji: "🐧", word: "Penguen" },
  { emoji: "🦋", word: "Kelebek" },
];

function shuffleArr<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function MatchingGame() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const [emojis] = useState(() => shuffleArr(PAIRS.map((p) => p.emoji)));
  const [words] = useState(() => shuffleArr(PAIRS.map((p) => p.word)));
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleWord = (word: string) => {
    if (!selectedEmoji) return;
    const pair = PAIRS.find((p) => p.emoji === selectedEmoji);
    if (pair?.word === word) {
      const newMatched = [...matched, selectedEmoji, word];
      playAudio("correct_answer");
      setMatched(newMatched);
      setScore((s) => s + 10);
      setSelectedEmoji(null);
      if (newMatched.length === PAIRS.length * 2) setDone(true);
    } else {
      playAudio("wrong_answer");
      setSelectedEmoji(null);
    }
  };

  const finish = () => {
    if (!profile) return;
    saveGameResult({
      studentNumber: profile.studentNumber,
      gameType: "matching",
      score,
      date: new Date().toISOString(),
    });
    updatePoints(profile.studentNumber, score);
    syncToBackend(profile.studentNumber);
    navigate({ to: "/games" });
  };

  if (done)
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center max-w-xs w-full shadow-2xl">
          <div className="text-5xl mb-3">🎉</div>
          <h2 className="text-2xl font-black mb-2">Hepsi Eşleşti!</h2>
          <div className="text-4xl font-black text-orange-600 my-4">
            +{score} Puan
          </div>
          <Button
            data-ocid="matching.finish_button"
            onClick={finish}
            className="w-full bg-orange-500 text-white"
          >
            Bitir
          </Button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-amber-600 p-4">
      <div className="flex items-center justify-between mb-4">
        <Button
          data-ocid="matching.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/games" })}
          className="text-white"
        >
          ←
        </Button>
        <div className="text-white font-bold">🔎 Resim-Kelime Eşleştirme</div>
        <div className="text-white text-sm">
          {matched.length / 2}/{PAIRS.length}
        </div>
      </div>
      <div className="max-w-xs mx-auto">
        <p className="text-white/80 text-center mb-4 text-sm">
          Bir emoji seç, sonra eşleştiği kelimeye dokunpan
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="text-white font-bold text-center mb-2">Emoji</div>
            {emojis.map((emoji, i) => (
              <button
                type="button"
                key={emoji}
                data-ocid={`matching.emoji.${i + 1}`}
                onClick={() =>
                  !matched.includes(emoji) && setSelectedEmoji(emoji)
                }
                disabled={matched.includes(emoji)}
                className={`w-full py-3 rounded-2xl text-3xl transition-all hover:scale-105 active:scale-95 ${
                  matched.includes(emoji)
                    ? "bg-green-500 opacity-60"
                    : selectedEmoji === emoji
                      ? "bg-white shadow-lg scale-105"
                      : "bg-white/20 hover:bg-white/30"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            <div className="text-white font-bold text-center mb-2">Kelime</div>
            {words.map((word, i) => (
              <button
                type="button"
                key={word}
                data-ocid={`matching.word.${i + 1}`}
                onClick={() => handleWord(word)}
                disabled={matched.includes(word)}
                className={`w-full py-3 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 ${
                  matched.includes(word)
                    ? "bg-green-500 text-white opacity-60"
                    : selectedEmoji
                      ? "bg-white text-gray-800 hover:bg-yellow-100"
                      : "bg-white/20 text-white"
                }`}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
