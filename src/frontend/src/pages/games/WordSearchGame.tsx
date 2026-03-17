import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "../../components/ui/button";
import {
  getCurrentUser,
  playAudio,
  saveGameResult,
  syncToBackend,
  updatePoints,
} from "../../store";

const WORDS = ["KALEM", "KITAP", "OKUL", "MASA", "KALE"];
const SIZE = 8;

function buildGrid(): {
  grid: string[][];
  positions: Map<string, [number, number][]>;
} {
  const grid: string[][] = Array.from({ length: SIZE }, () =>
    Array(SIZE).fill(""),
  );
  const positions = new Map<string, [number, number][]>();
  const placements = [
    { word: "KALEM", row: 0, col: 0, dir: [0, 1] as [number, number] },
    { word: "KITAP", row: 2, col: 2, dir: [0, 1] as [number, number] },
    { word: "OKUL", row: 4, col: 1, dir: [0, 1] as [number, number] },
    { word: "MASA", row: 6, col: 3, dir: [0, 1] as [number, number] },
    { word: "KALE", row: 1, col: 5, dir: [1, 0] as [number, number] },
  ];
  for (const { word, row, col, dir } of placements) {
    const pos: [number, number][] = [];
    for (let i = 0; i < word.length; i++) {
      const r = row + dir[0] * i;
      const c = col + dir[1] * i;
      grid[r][c] = word[i];
      pos.push([r, c]);
    }
    positions.set(word, pos);
  }
  const LETTERS = "ABCDEFGHIJKLMNOPRSTUVYZ";
  for (let r = 0; r < SIZE; r++)
    for (let c = 0; c < SIZE; c++)
      if (!grid[r][c])
        grid[r][c] = LETTERS[Math.floor(Math.random() * LETTERS.length)];
  return { grid, positions };
}

export default function WordSearchGame() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const { grid, positions } = useMemo(buildGrid, []);
  const [found, setFound] = useState<string[]>([]);
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [highlighted, setHighlighted] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleCell = (r: number, c: number) => {
    if (!selected) {
      setSelected([r, c]);
      return;
    }
    const [sr, sc] = selected;
    for (const word of WORDS) {
      if (found.includes(word)) continue;
      const pos = positions.get(word)!;
      const start = pos[0];
      const end = pos[pos.length - 1];
      if (
        (sr === start[0] && sc === start[1] && r === end[0] && c === end[1]) ||
        (sr === end[0] && sc === end[1] && r === start[0] && c === start[1])
      ) {
        playAudio("correct_answer");
        const newFound = [...found, word];
        const newHighlighted = new Set(highlighted);
        for (const [pr, pc] of pos) newHighlighted.add(`${pr},${pc}`);
        setFound(newFound);
        setHighlighted(newHighlighted);
        setScore((s) => s + 20);
        setSelected(null);
        if (newFound.length === WORDS.length) setDone(true);
        return;
      }
    }
    setSelected([r, c]);
  };

  const finish = () => {
    if (!profile) return;
    saveGameResult({
      studentNumber: profile.studentNumber,
      gameType: "wordsearch",
      score,
      date: new Date().toISOString(),
    });
    updatePoints(profile.studentNumber, score);
    syncToBackend(profile.studentNumber);
    navigate({ to: "/games" });
  };

  if (done)
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center max-w-xs w-full shadow-2xl">
          <div className="text-5xl mb-3">🎉</div>
          <h2 className="text-2xl font-black mb-2">Tüm Kelimeler Bulundu!</h2>
          <div className="text-4xl font-black text-blue-600 my-4">
            +{score} Puan
          </div>
          <Button
            data-ocid="wordsearch.finish_button"
            onClick={finish}
            className="w-full bg-blue-500 text-white"
          >
            Bitir
          </Button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
      <div className="flex items-center justify-between mb-3">
        <Button
          data-ocid="wordsearch.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/games" })}
          className="text-white"
        >
          ←
        </Button>
        <div className="text-white font-bold">🔠 Kelime Bulmaca</div>
        <div className="text-white text-sm">
          {found.length}/{WORDS.length}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-3 justify-center">
        {WORDS.map((w) => (
          <span
            key={w}
            className={`px-3 py-1 rounded-full text-sm font-bold ${
              found.includes(w)
                ? "bg-green-500 text-white line-through"
                : "bg-white/20 text-white"
            }`}
          >
            {w}
          </span>
        ))}
      </div>
      <div
        className="grid gap-1 mx-auto"
        style={{
          gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))`,
          maxWidth: 320,
        }}
      >
        {grid.map((row, r) =>
          row.map((cell, c) => {
            const key = `${r},${c}`;
            const isHighlighted = highlighted.has(key);
            const isSelected =
              selected && selected[0] === r && selected[1] === c;
            return (
              <button
                type="button"
                key={key}
                data-ocid={`wordsearch.cell.${r * SIZE + c + 1}`}
                onClick={() => handleCell(r, c)}
                className={`aspect-square flex items-center justify-center text-sm font-black rounded transition-all ${
                  isHighlighted
                    ? "bg-green-400 text-white"
                    : isSelected
                      ? "bg-yellow-400 text-gray-800 scale-110"
                      : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {cell}
              </button>
            );
          }),
        )}
      </div>
      <p className="text-white/70 text-center text-xs mt-3">
        Kelimenin ilk harfine, sonra son harfine dokunun
      </p>
    </div>
  );
}
