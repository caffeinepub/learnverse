import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { getCurrentUser, updatePoints } from "../store";

const LETTERS = [
  "A",
  "B",
  "C",
  "Ç",
  "D",
  "E",
  "F",
  "G",
  "Ğ",
  "H",
  "I",
  "İ",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Ö",
  "P",
  "R",
  "S",
  "Ş",
  "T",
  "U",
  "Ü",
  "V",
  "Y",
  "Z",
];
const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const COLORS = [
  "#EF4444",
  "#F97316",
  "#EAB308",
  "#22C55E",
  "#3B82F6",
  "#A855F7",
  "#EC4899",
  "#1A1A1A",
];

type Mode = "letters" | "numbers";

export default function TracingPage() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<Mode>("letters");
  const [idx, setIdx] = useState(0);
  const [color, setColor] = useState(COLORS[4]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [toast, setToast] = useState(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  const items = mode === "letters" ? LETTERS : NUMBERS;
  const currentItem = items[idx];

  const isEn = lang === "en";

  const drawGuide = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 280px sans-serif";
    ctx.fillStyle = "#d1d5db";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(currentItem, canvas.width / 2, canvas.height / 2 + 10);
    // Draw dashed stroke on top for tracing guide
    ctx.font = "bold 280px sans-serif";
    ctx.strokeStyle = "#9ca3af";
    ctx.lineWidth = 2;
    ctx.setLineDash([12, 8]);
    ctx.strokeText(currentItem, canvas.width / 2, canvas.height / 2 + 10);
    ctx.setLineDash([]);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: drawGuide depends on currentItem
  useEffect(() => {
    drawGuide();
  }, [currentItem]);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if ("touches" in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    lastPos.current = getPos(e);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    const pos = getPos(e);
    ctx.lineWidth = 16;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(lastPos.current?.x ?? pos.x, lastPos.current?.y ?? pos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    lastPos.current = pos;
  };

  const stopDraw = () => {
    setIsDrawing(false);
    lastPos.current = null;
  };

  const handleClear = () => drawGuide();

  const getItemKey = () =>
    mode === "letters" ? `letter_${currentItem}` : `number_${currentItem}`;

  const handleComplete = () => {
    const user = getCurrentUser();
    if (!user) return;
    const storageKey = `learnverse_tracing_done_${user.studentNumber}`;
    const done: string[] = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    const key = getItemKey();
    if (!done.includes(key)) {
      done.push(key);
      localStorage.setItem(storageKey, JSON.stringify(done));
      updatePoints(user.studentNumber, 5);
      setToast(true);
      setTimeout(() => setToast(false), 2000);
    }
    // Move to next
    if (idx < items.length - 1) {
      setIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (idx > 0) setIdx((prev) => prev - 1);
  };

  const handleNext = () => {
    if (idx < items.length - 1) setIdx((prev) => prev + 1);
  };

  const handleModeChange = (m: Mode) => {
    setMode(m);
    setIdx(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-teal-400 to-cyan-400">
      {/* Header */}
      <div className="bg-white/20 backdrop-blur px-4 py-3 flex items-center justify-between">
        <button
          type="button"
          data-ocid="tracing.back_button"
          onClick={() => navigate({ to: "/home" })}
          className="text-white font-bold text-lg bg-white/20 hover:bg-white/30 px-4 py-2 rounded-2xl transition-all active:scale-95"
        >
          ← {isEn ? "Back" : "Geri"}
        </button>
        <h1 className="text-white font-black text-xl">
          ✏️ {isEn ? "Letter & Number Tracing" : "Harf & Sayı Yazma"}
        </h1>
        <div className="w-20" />
      </div>

      {toast && (
        <div
          data-ocid="tracing.success_state"
          className="mx-4 mt-3 bg-yellow-400/90 text-yellow-900 font-black text-center rounded-2xl py-3 text-base animate-bounce"
        >
          🎉 +5 {isEn ? "points!" : "puan!"}
        </div>
      )}

      <div className="p-3 flex flex-col gap-3 max-w-2xl mx-auto">
        {/* Mode tabs */}
        <div className="bg-white/20 backdrop-blur rounded-3xl p-3 flex gap-3">
          <button
            type="button"
            data-ocid="tracing.tab"
            onClick={() => handleModeChange("letters")}
            className={`flex-1 py-3 rounded-2xl font-black text-base transition-all active:scale-95 ${
              mode === "letters"
                ? "bg-white text-teal-700 shadow-lg"
                : "bg-white/30 text-white hover:bg-white/40"
            }`}
          >
            🔤 {isEn ? "Letters" : "Harfler"}
          </button>
          <button
            type="button"
            data-ocid="tracing.tab"
            onClick={() => handleModeChange("numbers")}
            className={`flex-1 py-3 rounded-2xl font-black text-base transition-all active:scale-95 ${
              mode === "numbers"
                ? "bg-white text-teal-700 shadow-lg"
                : "bg-white/30 text-white hover:bg-white/40"
            }`}
          >
            🔢 {isEn ? "Numbers" : "Sayılar"}
          </button>
        </div>

        {/* Current item indicator */}
        <div className="text-center">
          <span className="bg-white/30 text-white font-black text-2xl px-6 py-2 rounded-2xl">
            {currentItem} — {idx + 1}/{items.length}
          </span>
        </div>

        {/* Canvas */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <canvas
            ref={canvasRef}
            width={600}
            height={450}
            data-ocid="tracing.canvas_target"
            className="w-full touch-none cursor-crosshair"
            style={{ display: "block" }}
            onMouseDown={startDraw}
            onMouseMove={draw}
            onMouseUp={stopDraw}
            onMouseLeave={stopDraw}
            onTouchStart={(e) => {
              e.preventDefault();
              startDraw(e);
            }}
            onTouchMove={(e) => {
              e.preventDefault();
              draw(e);
            }}
            onTouchEnd={stopDraw}
          />
        </div>

        {/* Controls */}
        <div className="bg-white/20 backdrop-blur rounded-3xl p-3 flex flex-col gap-3">
          {/* Color picker */}
          <div className="flex gap-2 justify-center flex-wrap">
            <span className="text-white font-bold text-sm self-center">
              {isEn ? "Color:" : "Renk:"}
            </span>
            {COLORS.map((c) => (
              <button
                type="button"
                key={c}
                data-ocid="tracing.toggle"
                onClick={() => setColor(c)}
                className={`w-10 h-10 rounded-full transition-all active:scale-95 ${
                  color === c
                    ? "ring-4 ring-white scale-125 shadow-lg"
                    : "ring-2 ring-white/40 hover:scale-110"
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>

          {/* Navigation + Action buttons */}
          <div className="flex gap-2 justify-center flex-wrap">
            <button
              type="button"
              data-ocid="tracing.secondary_button"
              onClick={handlePrev}
              disabled={idx === 0}
              className="px-4 py-3 rounded-2xl bg-white/30 text-white font-bold hover:bg-white/40 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← {isEn ? "Prev" : "Önceki"}
            </button>
            <button
              type="button"
              data-ocid="tracing.delete_button"
              onClick={handleClear}
              className="px-4 py-3 rounded-2xl bg-red-400/80 text-white font-bold hover:bg-red-400 transition-all active:scale-95"
            >
              🗑️ {isEn ? "Clear" : "Temizle"}
            </button>
            <button
              type="button"
              data-ocid="tracing.primary_button"
              onClick={handleComplete}
              className="px-4 py-3 rounded-2xl bg-emerald-500/90 text-white font-bold hover:bg-emerald-500 transition-all active:scale-95"
            >
              ✅ {isEn ? "Done" : "Tamamlandı"}
            </button>
            <button
              type="button"
              data-ocid="tracing.secondary_button"
              onClick={handleNext}
              disabled={idx === items.length - 1}
              className="px-4 py-3 rounded-2xl bg-white/30 text-white font-bold hover:bg-white/40 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isEn ? "Next" : "Sonraki"} →
            </button>
          </div>
        </div>

        {/* Item grid for quick navigation */}
        <div className="bg-white/20 backdrop-blur rounded-3xl p-3">
          <div className="text-white font-bold text-sm mb-2">
            {isEn ? "Quick select:" : "Hızlı seç:"}
          </div>
          <div className="flex flex-wrap gap-2">
            {items.map((item, i) => (
              <button
                type="button"
                key={item}
                data-ocid="tracing.toggle"
                onClick={() => setIdx(i)}
                className={`w-10 h-10 rounded-xl font-black text-base transition-all active:scale-95 ${
                  i === idx
                    ? "bg-white text-teal-700 shadow-lg scale-110"
                    : "bg-white/30 text-white hover:bg-white/40"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
