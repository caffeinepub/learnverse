import { u as useNavigate, r as reactExports, d as getCurrentUser, f as updatePoints, j as jsxRuntimeExports } from "./index-gTagJUnF.js";
const COLORS = [
  { label: "Red", value: "#EF4444" },
  { label: "Orange", value: "#F97316" },
  { label: "Yellow", value: "#EAB308" },
  { label: "Green", value: "#22C55E" },
  { label: "Blue", value: "#3B82F6" },
  { label: "Purple", value: "#A855F7" },
  { label: "Pink", value: "#EC4899" },
  { label: "Brown", value: "#92400E" },
  { label: "Black", value: "#1A1A1A" },
  { label: "White", value: "#FFFFFF" },
  { label: "Light Blue", value: "#7DD3FC" },
  { label: "Lime", value: "#A3E635" },
  { label: "Magenta", value: "#E879F9" },
  { label: "Gray", value: "#9CA3AF" },
  { label: "Dark Green", value: "#166534" },
  { label: "Dark Blue", value: "#1D4ED8" }
];
const BRUSH_SIZES = [
  { label: "S", value: 6 },
  { label: "M", value: 14 },
  { label: "L", value: 28 }
];
const TEMPLATES = [
  {
    label: "Güneş",
    emoji: "☀️",
    draw: (ctx, w, h) => {
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(w / 2, h / 2 - 30, 70, 0, Math.PI * 2);
      ctx.stroke();
      for (let i = 0; i < 12; i++) {
        const a = i / 12 * Math.PI * 2;
        const x1 = w / 2 + Math.cos(a) * 80;
        const y1 = h / 2 - 30 + Math.sin(a) * 80;
        const x2 = w / 2 + Math.cos(a) * 110;
        const y2 = h / 2 - 30 + Math.sin(a) * 110;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }
  },
  {
    label: "Ev",
    emoji: "🏠",
    draw: (ctx, w, h) => {
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 3;
      const bx = w / 2 - 100;
      const by = h / 2;
      const bw = 200;
      const bh = 150;
      ctx.strokeRect(bx, by, bw, bh);
      ctx.beginPath();
      ctx.moveTo(bx - 20, by);
      ctx.lineTo(w / 2, by - 110);
      ctx.lineTo(bx + bw + 20, by);
      ctx.stroke();
      ctx.strokeRect(bx + 70, by + 70, 60, 80);
      ctx.strokeRect(bx + 20, by + 40, 50, 50);
      ctx.strokeRect(bx + bw - 70, by + 40, 50, 50);
    }
  },
  {
    label: "Kedi",
    emoji: "🐱",
    draw: (ctx, w, h) => {
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 3;
      const cx = w / 2;
      const cy = h / 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 90, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - 90, cy - 60);
      ctx.lineTo(cx - 110, cy - 120);
      ctx.lineTo(cx - 50, cy - 90);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + 90, cy - 60);
      ctx.lineTo(cx + 110, cy - 120);
      ctx.lineTo(cx + 50, cy - 90);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx - 30, cy - 20, 12, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx + 30, cy - 20, 12, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy + 10, 10, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy + 40, 0.1, 0, Math.PI, false);
      ctx.arc(cx, cy + 40, 30, Math.PI, 0, true);
      ctx.stroke();
    }
  },
  {
    label: "Kelebek",
    emoji: "🦋",
    draw: (ctx, w, h) => {
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 3;
      const cx = w / 2;
      const cy = h / 2;
      ctx.beginPath();
      ctx.ellipse(cx - 80, cy - 40, 70, 50, -0.4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx + 80, cy - 40, 70, 50, 0.4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx - 60, cy + 50, 55, 35, 0.3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx + 60, cy + 50, 55, 35, -0.3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy - 100);
      ctx.lineTo(cx, cy + 100);
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.lineWidth = 3;
    }
  },
  {
    label: "Çiçek",
    emoji: "🌸",
    draw: (ctx, w, h) => {
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 3;
      const cx = w / 2;
      const cy = h / 2 - 20;
      for (let i = 0; i < 8; i++) {
        const a = i / 8 * Math.PI * 2;
        ctx.beginPath();
        ctx.ellipse(
          cx + Math.cos(a) * 60,
          cy + Math.sin(a) * 60,
          35,
          25,
          a,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(cx, cy, 35, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy + 35);
      ctx.quadraticCurveTo(cx + 40, cy + 100, cx, cy + 150);
      ctx.stroke();
    }
  },
  {
    label: "Roket",
    emoji: "🚀",
    draw: (ctx, w, h) => {
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 3;
      const cx = w / 2;
      const cy = h / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy - 140);
      ctx.quadraticCurveTo(cx + 65, cy - 60, cx + 65, cy + 40);
      ctx.lineTo(cx - 65, cy + 40);
      ctx.quadraticCurveTo(cx - 65, cy - 60, cx, cy - 140);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx, cy - 110, 28, 40, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - 65, cy + 10);
      ctx.lineTo(cx - 110, cy + 80);
      ctx.lineTo(cx - 65, cy + 40);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + 65, cy + 10);
      ctx.lineTo(cx + 110, cy + 80);
      ctx.lineTo(cx + 65, cy + 40);
      ctx.closePath();
      ctx.stroke();
    }
  },
  {
    label: "Balık",
    emoji: "🐠",
    draw: (ctx, w, h) => {
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 3;
      const cx = w / 2;
      const cy = h / 2;
      ctx.beginPath();
      ctx.ellipse(cx - 20, cy, 120, 70, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + 100, cy);
      ctx.lineTo(cx + 180, cy - 70);
      ctx.lineTo(cx + 180, cy + 70);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx - 80, cy - 20, 12, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx - 60, cy, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(cx - 20, cy - 70);
      ctx.lineTo(cx - 20, cy + 70);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + 40, cy - 50);
      ctx.lineTo(cx + 40, cy + 50);
      ctx.stroke();
    }
  },
  {
    label: "Yıldız",
    emoji: "⭐",
    draw: (ctx, w, h) => {
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 3;
      const cx = w / 2;
      const cy = h / 2;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const outerA = i / 5 * Math.PI * 2 - Math.PI / 2;
        const innerA = outerA + Math.PI / 5;
        const ox = cx + Math.cos(outerA) * 130;
        const oy = cy + Math.sin(outerA) * 130;
        const ix = cx + Math.cos(innerA) * 55;
        const iy = cy + Math.sin(innerA) * 55;
        if (i === 0) ctx.moveTo(ox, oy);
        else ctx.lineTo(ox, oy);
        ctx.lineTo(ix, iy);
      }
      ctx.closePath();
      ctx.stroke();
    }
  },
  {
    label: "Ağaç",
    emoji: "🌳",
    draw: (ctx, w, h) => {
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 3;
      const cx = w / 2;
      const cy = h / 2;
      ctx.beginPath();
      ctx.arc(cx, cy - 60, 110, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx - 70, cy - 20, 70, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx + 70, cy - 20, 70, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeRect(cx - 20, cy + 40, 40, 110);
    }
  },
  {
    label: "Araba",
    emoji: "🚗",
    draw: (ctx, w, h) => {
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 3;
      const left = w / 2 - 150;
      const top = h / 2;
      ctx.beginPath();
      ctx.roundRect(left, top, 300, 110, 20);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(left + 50, top);
      ctx.lineTo(left + 80, top - 70);
      ctx.lineTo(left + 220, top - 70);
      ctx.lineTo(left + 250, top);
      ctx.stroke();
      ctx.strokeRect(left + 90, top - 65, 55, 60);
      ctx.strokeRect(left + 155, top - 65, 55, 60);
      ctx.beginPath();
      ctx.arc(left + 70, top + 110, 35, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(left + 230, top + 110, 35, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
];
function ColoringPage() {
  const navigate = useNavigate();
  const canvasRef = reactExports.useRef(null);
  const [color, setColor] = reactExports.useState(COLORS[0].value);
  const [brushSize, setBrushSize] = reactExports.useState(BRUSH_SIZES[1].value);
  const [tool, setTool] = reactExports.useState("brush");
  const [templateIdx, setTemplateIdx] = reactExports.useState(0);
  const [isDrawing, setIsDrawing] = reactExports.useState(false);
  const [pointsAwarded, setPointsAwarded] = reactExports.useState(false);
  const lastPos = reactExports.useRef(null);
  const getCanvas = () => canvasRef.current;
  const getCtx = () => {
    var _a;
    return (_a = canvasRef.current) == null ? void 0 : _a.getContext("2d");
  };
  const drawTemplate = (idx) => {
    const canvas = getCanvas();
    const ctx = getCtx();
    if (!canvas || !ctx) return;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    TEMPLATES[idx].draw(ctx, canvas.width, canvas.height);
  };
  reactExports.useEffect(() => {
    drawTemplate(templateIdx);
    const profile = getCurrentUser();
    if (!profile) return;
    const key = `learnverse_coloring_done_${profile.studentNumber}`;
    if (!localStorage.getItem(key)) {
      updatePoints(profile.studentNumber, 10);
      localStorage.setItem(key, "1");
      setPointsAwarded(true);
    }
  }, [templateIdx]);
  const handleTemplateChange = (idx) => {
    setTemplateIdx(idx);
    setTimeout(() => drawTemplate(idx), 0);
  };
  const getPos = (e) => {
    const canvas = getCanvas();
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
  const floodFill = (startX, startY, fillColor) => {
    const canvas = getCanvas();
    const ctx = getCtx();
    if (!canvas || !ctx) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const width = canvas.width;
    const height = canvas.height;
    const toColorArray = (hex) => {
      const r = Number.parseInt(hex.slice(1, 3), 16);
      const g = Number.parseInt(hex.slice(3, 5), 16);
      const b = Number.parseInt(hex.slice(5, 7), 16);
      return [r, g, b];
    };
    const sx = Math.floor(startX);
    const sy = Math.floor(startY);
    const idx = (sy * width + sx) * 4;
    const targetR = data[idx];
    const targetG = data[idx + 1];
    const targetB = data[idx + 2];
    const [fillR, fillG, fillB] = toColorArray(fillColor);
    if (targetR === fillR && targetG === fillG && targetB === fillB) return;
    const colorMatch = (i) => Math.abs(data[i] - targetR) < 30 && Math.abs(data[i + 1] - targetG) < 30 && Math.abs(data[i + 2] - targetB) < 30;
    const stack = [[sx, sy]];
    const visited = /* @__PURE__ */ new Set();
    while (stack.length > 0) {
      const [x, y] = stack.pop();
      const i = (y * width + x) * 4;
      if (x < 0 || x >= width || y < 0 || y >= height) continue;
      if (visited.has(i)) continue;
      if (!colorMatch(i)) continue;
      visited.add(i);
      data[i] = fillR;
      data[i + 1] = fillG;
      data[i + 2] = fillB;
      data[i + 3] = 255;
      stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
    }
    ctx.putImageData(imageData, 0, 0);
  };
  const startDraw = (e) => {
    if (tool === "fill") {
      const pos = getPos(e);
      floodFill(pos.x, pos.y, color);
      return;
    }
    setIsDrawing(true);
    lastPos.current = getPos(e);
  };
  const draw = (e) => {
    var _a, _b;
    if (!isDrawing || tool === "fill") return;
    const ctx = getCtx();
    if (!ctx) return;
    const pos = getPos(e);
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = tool === "eraser" ? "#FFFFFF" : color;
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
  const handleClear = () => drawTemplate(templateIdx);
  const handleSave = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `learnverse-coloring-${TEMPLATES[templateIdx].label}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur px-4 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "coloring.back_button",
          onClick: () => navigate({ to: "/home" }),
          className: "text-white font-bold text-lg bg-white/20 hover:bg-white/30 px-4 py-2 rounded-2xl transition-all active:scale-95",
          children: "← Geri"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white font-black text-xl", children: "🎨 Boyama Sayfası" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16" })
    ] }),
    pointsAwarded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-4 mt-3 bg-yellow-400/80 text-yellow-900 font-bold text-center rounded-2xl py-2 text-sm", children: "🎉 +10 puan kazandın!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex flex-col gap-3 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-3xl p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-sm mb-2", children: "Şablon seç:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: TEMPLATES.map((tpl, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "coloring.tab",
            onClick: () => handleTemplateChange(i),
            className: `px-3 py-2 rounded-2xl font-bold text-sm transition-all active:scale-95 ${templateIdx === i ? "bg-white text-purple-700 shadow-lg scale-105" : "bg-white/30 text-white hover:bg-white/40"}`,
            children: [
              tpl.emoji,
              " ",
              tpl.label
            ]
          },
          tpl.label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-3xl shadow-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "canvas",
        {
          ref: canvasRef,
          width: 600,
          height: 450,
          "data-ocid": "coloring.canvas_target",
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 justify-center", children: ["brush", "eraser", "fill"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "coloring.toggle",
            onClick: () => setTool(t),
            className: `px-5 py-3 rounded-2xl font-bold text-base transition-all active:scale-95 ${tool === t ? "bg-white text-purple-700 shadow-lg" : "bg-white/30 text-white hover:bg-white/40"}`,
            children: t === "brush" ? "🖌️ Fırça" : t === "eraser" ? "🧹 Silgi" : "🪣 Doldur"
          },
          t
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-sm self-center", children: "Boyut:" }),
          BRUSH_SIZES.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "coloring.toggle",
              onClick: () => setBrushSize(b.value),
              className: `w-12 h-12 rounded-full font-black text-lg transition-all active:scale-95 ${brushSize === b.value ? "bg-white text-purple-700 shadow-lg scale-110" : "bg-white/30 text-white hover:bg-white/40"}`,
              children: b.label
            },
            b.value
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: COLORS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            title: c.label,
            "data-ocid": "coloring.toggle",
            onClick: () => {
              setColor(c.value);
              if (tool === "eraser") setTool("brush");
            },
            className: `w-10 h-10 rounded-full transition-all active:scale-95 ${color === c.value && tool !== "eraser" ? "ring-4 ring-white scale-125 shadow-lg" : "ring-2 ring-white/40 hover:scale-110"}`,
            style: { backgroundColor: c.value }
          },
          c.value
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "coloring.secondary_button",
              onClick: handleClear,
              className: "px-5 py-3 rounded-2xl bg-red-400/80 text-white font-bold hover:bg-red-400 transition-all active:scale-95",
              children: "🗑️ Temizle"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "coloring.primary_button",
              onClick: handleSave,
              className: "px-5 py-3 rounded-2xl bg-green-400/80 text-white font-bold hover:bg-green-400 transition-all active:scale-95",
              children: "💾 Kaydet"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  ColoringPage as default
};
