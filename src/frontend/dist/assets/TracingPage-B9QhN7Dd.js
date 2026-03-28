import { u as useNavigate, a as useLanguage, r as reactExports, j as jsxRuntimeExports, d as getCurrentUser, f as updatePoints } from "./index-Bw-4Qrta.js";
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
  "Z"
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
  "#1A1A1A"
];
function TracingPage() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const canvasRef = reactExports.useRef(null);
  const [mode, setMode] = reactExports.useState("letters");
  const [idx, setIdx] = reactExports.useState(0);
  const [color, setColor] = reactExports.useState(COLORS[4]);
  const [isDrawing, setIsDrawing] = reactExports.useState(false);
  const [toast, setToast] = reactExports.useState(false);
  const lastPos = reactExports.useRef(null);
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
    ctx.font = "bold 280px sans-serif";
    ctx.strokeStyle = "#9ca3af";
    ctx.lineWidth = 2;
    ctx.setLineDash([12, 8]);
    ctx.strokeText(currentItem, canvas.width / 2, canvas.height / 2 + 10);
    ctx.setLineDash([]);
  };
  reactExports.useEffect(() => {
    drawGuide();
  }, [currentItem]);
  const getPos = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if ("touches" in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };
  const startDraw = (e) => {
    setIsDrawing(true);
    lastPos.current = getPos(e);
  };
  const draw = (e) => {
    var _a, _b;
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas == null ? void 0 : canvas.getContext("2d");
    if (!ctx) return;
    const pos = getPos(e);
    ctx.lineWidth = 16;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(((_a = lastPos.current) == null ? void 0 : _a.x) ?? pos.x, ((_b = lastPos.current) == null ? void 0 : _b.y) ?? pos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    lastPos.current = pos;
  };
  const stopDraw = () => {
    setIsDrawing(false);
    lastPos.current = null;
  };
  const handleClear = () => drawGuide();
  const getItemKey = () => mode === "letters" ? `letter_${currentItem}` : `number_${currentItem}`;
  const handleComplete = () => {
    const user = getCurrentUser();
    if (!user) return;
    const storageKey = `learnverse_tracing_done_${user.studentNumber}`;
    const done = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    const key = getItemKey();
    if (!done.includes(key)) {
      done.push(key);
      localStorage.setItem(storageKey, JSON.stringify(done));
      updatePoints(user.studentNumber, 5);
      setToast(true);
      setTimeout(() => setToast(false), 2e3);
    }
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
  const handleModeChange = (m) => {
    setMode(m);
    setIdx(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-green-400 via-teal-400 to-cyan-400", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur px-4 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "tracing.back_button",
          onClick: () => navigate({ to: "/home" }),
          className: "text-white font-bold text-lg bg-white/20 hover:bg-white/30 px-4 py-2 rounded-2xl transition-all active:scale-95",
          children: [
            "← ",
            isEn ? "Back" : "Geri"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-white font-black text-xl", children: [
        "✏️ ",
        isEn ? "Letter & Number Tracing" : "Harf & Sayı Yazma"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20" })
    ] }),
    toast && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "tracing.success_state",
        className: "mx-4 mt-3 bg-yellow-400/90 text-yellow-900 font-black text-center rounded-2xl py-3 text-base animate-bounce",
        children: [
          "🎉 +5 ",
          isEn ? "points!" : "puan!"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex flex-col gap-3 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-3xl p-3 flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "tracing.tab",
            onClick: () => handleModeChange("letters"),
            className: `flex-1 py-3 rounded-2xl font-black text-base transition-all active:scale-95 ${mode === "letters" ? "bg-white text-teal-700 shadow-lg" : "bg-white/30 text-white hover:bg-white/40"}`,
            children: [
              "🔤 ",
              isEn ? "Letters" : "Harfler"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "tracing.tab",
            onClick: () => handleModeChange("numbers"),
            className: `flex-1 py-3 rounded-2xl font-black text-base transition-all active:scale-95 ${mode === "numbers" ? "bg-white text-teal-700 shadow-lg" : "bg-white/30 text-white hover:bg-white/40"}`,
            children: [
              "🔢 ",
              isEn ? "Numbers" : "Sayılar"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-white/30 text-white font-black text-2xl px-6 py-2 rounded-2xl", children: [
        currentItem,
        " — ",
        idx + 1,
        "/",
        items.length
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-3xl shadow-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "canvas",
        {
          ref: canvasRef,
          width: 600,
          height: 450,
          "data-ocid": "tracing.canvas_target",
          className: "w-full touch-none cursor-crosshair",
          style: { display: "block" },
          onMouseDown: startDraw,
          onMouseMove: draw,
          onMouseUp: stopDraw,
          onMouseLeave: stopDraw,
          onTouchStart: (e) => {
            e.preventDefault();
            startDraw(e);
          },
          onTouchMove: (e) => {
            e.preventDefault();
            draw(e);
          },
          onTouchEnd: stopDraw
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-3xl p-3 flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-center flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-sm self-center", children: isEn ? "Color:" : "Renk:" }),
          COLORS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "tracing.toggle",
              onClick: () => setColor(c),
              className: `w-10 h-10 rounded-full transition-all active:scale-95 ${color === c ? "ring-4 ring-white scale-125 shadow-lg" : "ring-2 ring-white/40 hover:scale-110"}`,
              style: { backgroundColor: c }
            },
            c
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-center flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "tracing.secondary_button",
              onClick: handlePrev,
              disabled: idx === 0,
              className: "px-4 py-3 rounded-2xl bg-white/30 text-white font-bold hover:bg-white/40 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed",
              children: [
                "← ",
                isEn ? "Prev" : "Önceki"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "tracing.delete_button",
              onClick: handleClear,
              className: "px-4 py-3 rounded-2xl bg-red-400/80 text-white font-bold hover:bg-red-400 transition-all active:scale-95",
              children: [
                "🗑️ ",
                isEn ? "Clear" : "Temizle"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "tracing.primary_button",
              onClick: handleComplete,
              className: "px-4 py-3 rounded-2xl bg-emerald-500/90 text-white font-bold hover:bg-emerald-500 transition-all active:scale-95",
              children: [
                "✅ ",
                isEn ? "Done" : "Tamamlandı"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "tracing.secondary_button",
              onClick: handleNext,
              disabled: idx === items.length - 1,
              className: "px-4 py-3 rounded-2xl bg-white/30 text-white font-bold hover:bg-white/40 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed",
              children: [
                isEn ? "Next" : "Sonraki",
                " →"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-3xl p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-sm mb-2", children: isEn ? "Quick select:" : "Hızlı seç:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "tracing.toggle",
            onClick: () => setIdx(i),
            className: `w-10 h-10 rounded-xl font-black text-base transition-all active:scale-95 ${i === idx ? "bg-white text-teal-700 shadow-lg scale-110" : "bg-white/30 text-white hover:bg-white/40"}`,
            children: item
          },
          item
        )) })
      ] })
    ] })
  ] });
}
export {
  TracingPage as default
};
