import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../../components/ui/button";
import { useLanguage } from "../../i18n/LanguageContext";
import {
  getCurrentUser,
  playAudio,
  saveGameResult,
  syncToBackend,
  updatePoints,
} from "../../store";

const EMOJI_SETS = [
  // Set 1: Animals
  ["🐯", "🦁", "🐸", "🦊", "🐧", "🦋"],
  // Set 2: Fruits
  ["🍎", "🍌", "🍓", "🍇", "🍉", "🥝"],
  // Set 3: Space
  ["🚀", "🌍", "⭐", "🌙", "☀️", "🪐"],
  // Set 4: Music Instruments
  ["🎸", "🎹", "🎺", "🥁", "🎻", "🎷"],
  // Set 5: Vehicles
  ["🚗", "✈️", "🚂", "🚢", "🚁", "🚲"],
  // Set 6: Birds
  ["🦅", "🦉", "🦜", "🐦", "🕊️", "🦚"],
  // Set 7: Flowers
  ["🌹", "🌻", "🌷", "🌸", "🌺", "🌼"],
  // Set 8: Food
  ["🍕", "🍔", "🌮", "🍣", "🍩", "🎂"],
  // Set 9: Nature/Plants
  ["🌲", "🌴", "🌵", "🍀", "🌾", "🌿"],
  // Set 10: Weather
  ["🌈", "⚡", "❄️", "🌊", "🔥", "🌪️"],
  // Set 11: Activities
  ["🏖️", "🏕️", "🎡", "🎢", "⛷️", "🏄"],
  // Set 12: Sports Trophies
  ["🏆", "🥇", "🎯", "🎳", "🏹", "🥋"],
  // Set 13: Space Objects
  ["🛸", "🌠", "☄️", "🔭", "🌌", "🛰️"],
  // Set 14: Sea Animals
  ["🐙", "🦈", "🐬", "🦀", "🐡", "🦞"],
  // Set 15: Vegetables
  ["🥦", "🥕", "🌽", "🧅", "🥔", "🫑"],
  // Set 16: World Flags
  ["🇹🇷", "🇺🇸", "🇬🇧", "🇯🇵", "🇫🇷", "🇩🇪"],
  // Set 17: Sports
  ["⚽", "🏀", "🎾", "🏈", "⚾", "🏐"],
  // Set 18: Emotions/Feelings
  ["😊", "😢", "😡", "😱", "🤩", "😴"],
  // Set 19: Insects & Small Creatures
  ["🐝", "🐛", "🦗", "🦟", "🐞", "🦎"],
  // Set 20: Tools & Objects
  ["🔨", "🔑", "🔍", "📷", "🎒", "🧲"],
  // Set 21: Sweets & Desserts
  ["🍰", "🧁", "🍭", "🍫", "🍬", "🍦"],
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Adaptive pairs count based on level
function getPairsCount(level: string, consecutiveWins: number): number {
  const base = level === "okul_oncesi" ? 3 : level === "ilkokul" ? 5 : 6;
  // After consecutive wins, slightly increase for preschool/primary (up to max)
  const max = level === "okul_oncesi" ? 5 : 6;
  return Math.min(base + Math.floor(consecutiveWins / 2), max);
}

export default function MemoryGame() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const profile = getCurrentUser();
  const level = profile?.level || "ilkokul";

  const [consecutiveWins, setConsecutiveWins] = useState(0);
  const [setIndex, setSetIndex] = useState(() =>
    Math.floor(Math.random() * EMOJI_SETS.length),
  );

  const pairsCount = getPairsCount(level, consecutiveWins);

  const emojis = useMemo(
    () => EMOJI_SETS[setIndex % EMOJI_SETS.length].slice(0, pairsCount),
    [setIndex, pairsCount],
  );

  const [cards, setCards] = useState(() =>
    shuffle(
      [...emojis, ...emojis].map((e, i) => ({
        id: i,
        emoji: e,
        flipped: false,
        matched: false,
      })),
    ),
  );
  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);

  // Play game start sound on mount
  useEffect(() => {
    playAudio("game_start");
  }, []);

  useEffect(() => {
    if (done) return;
    const t = setInterval(() => setTime((tt) => tt + 1), 1000);
    return () => clearInterval(t);
  }, [done]);

  // Re-init cards when emojis change (e.g. after playAgain)
  useEffect(() => {
    setCards(
      shuffle(
        [...emojis, ...emojis].map((e, i) => ({
          id: i,
          emoji: e,
          flipped: false,
          matched: false,
        })),
      ),
    );
    setFlipped([]);
  }, [emojis]);

  const handleFlip = useCallback(
    (id: number) => {
      if (flipped.length === 2) return;
      const card = cards.find((c) => c.id === id);
      if (!card || card.flipped || card.matched) return;
      const newFlipped = [...flipped, id];
      setCards((cs) =>
        cs.map((c) => (c.id === id ? { ...c, flipped: true } : c)),
      );
      setFlipped(newFlipped);
      if (newFlipped.length === 2) {
        setMoves((m) => m + 1);
        const [a, b] = newFlipped.map(
          (fid) => cards.find((c) => c.id === fid)!,
        );
        if (a.emoji === b.emoji) {
          playAudio("correct_answer");
          setCards((cs) =>
            cs.map((c) =>
              newFlipped.includes(c.id) ? { ...c, matched: true } : c,
            ),
          );
          setFlipped([]);
          if (cards.filter((c) => c.matched).length + 2 === cards.length) {
            const s = Math.max(10, 100 - moves * 2 - Math.floor(time / 10));
            setScore(s);
            setDone(true);
            playAudio("game_end");
          }
        } else {
          playAudio("wrong_answer");
          setTimeout(() => {
            setCards((cs) =>
              cs.map((c) =>
                newFlipped.includes(c.id) ? { ...c, flipped: false } : c,
              ),
            );
            setFlipped([]);
          }, 800);
        }
      }
    },
    [flipped, cards, moves, time],
  );

  const finish = () => {
    if (!profile) return;
    saveGameResult({
      studentNumber: profile.studentNumber,
      gameType: "memory",
      score,
      date: new Date().toISOString(),
    });
    updatePoints(profile.studentNumber, score);
    syncToBackend(profile.studentNumber);
    navigate({ to: "/games" });
  };

  const playAgain = () => {
    const nextSet = (setIndex + 1) % EMOJI_SETS.length;
    setConsecutiveWins((w) => w + 1);
    setSetIndex(nextSet);
    setMoves(0);
    setTime(0);
    setDone(false);
    setScore(0);
    playAudio("game_start");
  };

  const newPairsCount = getPairsCount(level, consecutiveWins + 1);
  const diffIncreasing = newPairsCount > pairsCount;

  if (done)
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center max-w-xs w-full shadow-2xl">
          <div className="text-5xl mb-3">🎉</div>
          <h2 className="text-2xl font-black mb-2">Tebrikler!</h2>
          <p className="text-gray-600 mb-1">
            {moves} hamle, {time}s
          </p>
          {diffIncreasing && (
            <p className="text-sm text-pink-600 mb-1">
              ⬆️ Sonraki turda daha fazla kart!
            </p>
          )}
          <div className="text-4xl font-black text-pink-600 my-4">
            +{score} Puan
          </div>
          <div className="flex gap-2">
            <Button
              data-ocid="memory.play_again_button"
              onClick={playAgain}
              className="flex-1 bg-purple-500 text-white"
            >
              {t("game_play_again")}
            </Button>
            <Button
              data-ocid="memory.finish_button"
              onClick={finish}
              className="flex-1 bg-pink-500 text-white"
            >
              Bitir
            </Button>
          </div>
        </div>
      </div>
    );

  const cols = pairsCount <= 3 ? 3 : pairsCount <= 4 ? 4 : 4;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-rose-600 p-4">
      <div className="flex items-center justify-between mb-4">
        <Button
          data-ocid="memory.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/games" })}
          className="text-white"
        >
          ←
        </Button>
        <div className="text-white font-bold">💞 Hafıza Oyunu</div>
        <div className="text-white text-sm">
          {moves} hamle | {time}s
        </div>
      </div>
      <p className="text-white/70 text-center text-xs mb-2">
        {pairsCount} çift • Set {setIndex + 1}/{EMOJI_SETS.length}
      </p>
      <div
        className="grid gap-3 max-w-xs mx-auto"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {cards.map((card) => (
          <button
            type="button"
            key={card.id}
            data-ocid={`memory.card.${card.id + 1}`}
            onClick={() => handleFlip(card.id)}
            className={`aspect-square rounded-2xl text-3xl flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 ${
              card.flipped || card.matched
                ? "bg-white"
                : "bg-pink-800 hover:bg-pink-700"
            } ${card.matched ? "opacity-60" : ""}`}
          >
            {card.flipped || card.matched ? card.emoji : "❓"}
          </button>
        ))}
      </div>
    </div>
  );
}
