import { u as useNavigate, a as useLanguage, D as useTheme, r as reactExports, j as jsxRuntimeExports } from "./index-CGT7mtIO.js";
const LEVELS = [
  {
    max: 20,
    label: "🤫 Sessiz",
    labelEn: "🤫 Silent",
    labelFr: "🤫 Silencieux",
    labelEs: "🤫 Silencio",
    color: "#22c55e",
    emoji: "🌟",
    stars: 5
  },
  {
    max: 35,
    label: "😊 Çok İyi",
    labelEn: "😊 Very Good",
    labelFr: "😊 Très bien",
    labelEs: "😊 Muy bien",
    color: "#84cc16",
    emoji: "😊",
    stars: 4
  },
  {
    max: 50,
    label: "😐 Normal",
    labelEn: "😐 Normal",
    labelFr: "😐 Normal",
    labelEs: "😐 Normal",
    color: "#eab308",
    emoji: "😐",
    stars: 3
  },
  {
    max: 65,
    label: "😬 Biraz Gürültülü",
    labelEn: "😬 A Bit Noisy",
    labelFr: "😬 Un peu bruyant",
    labelEs: "😬 Un poco ruidoso",
    color: "#f97316",
    emoji: "😬",
    stars: 2
  },
  {
    max: 80,
    label: "😤 Gürültülü",
    labelEn: "😤 Noisy",
    labelFr: "😤 Bruyant",
    labelEs: "😤 Ruidoso",
    color: "#ef4444",
    emoji: "😤",
    stars: 1
  },
  {
    max: 100,
    label: "🔊 Çok Gürültülü!",
    labelEn: "🔊 Very Noisy!",
    labelFr: "🔊 Très bruyant!",
    labelEs: "🔊 ¡Muy ruidoso!",
    color: "#dc2626",
    emoji: "🚨",
    stars: 0
  }
];
function getLevel(db) {
  return LEVELS.find((l) => db <= l.max) ?? LEVELS[LEVELS.length - 1];
}
function getLevelLabel(level, lang) {
  if (lang === "en") return level.labelEn;
  if (lang === "fr") return level.labelFr;
  if (lang === "es") return level.labelEs;
  return level.label;
}
function NoiseMeterPage() {
  const navigate = useNavigate();
  const { lang: language } = useLanguage();
  const { isDark: dark } = useTheme();
  const [volume, setVolume] = reactExports.useState(0);
  const [isActive, setIsActive] = reactExports.useState(false);
  const [permissionDenied, setPermissionDenied] = reactExports.useState(false);
  const [sessionBest, setSessionBest] = reactExports.useState(null);
  const [sessionWorst, setSessionWorst] = reactExports.useState(null);
  const [silentSeconds, setSilentSeconds] = reactExports.useState(0);
  const [showCelebration, setShowCelebration] = reactExports.useState(false);
  const audioCtxRef = reactExports.useRef(null);
  const analyserRef = reactExports.useRef(null);
  const sourceRef = reactExports.useRef(null);
  const streamRef = reactExports.useRef(null);
  const rafRef = reactExports.useRef(null);
  const silentTimerRef = reactExports.useRef(null);
  const prevSilentRef = reactExports.useRef(false);
  const stopMeasuring = reactExports.useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (silentTimerRef.current) clearInterval(silentTimerRef.current);
    if (streamRef.current)
      for (const t2 of streamRef.current.getTracks()) t2.stop();
    if (audioCtxRef.current) audioCtxRef.current.close();
    audioCtxRef.current = null;
    analyserRef.current = null;
    sourceRef.current = null;
    streamRef.current = null;
    setIsActive(false);
    setVolume(0);
  }, []);
  const startMeasuring = reactExports.useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;
      const source = ctx.createMediaStreamSource(stream);
      source.connect(analyser);
      sourceRef.current = source;
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      const tick = () => {
        analyser.getByteFrequencyData(dataArray);
        const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
        const db = Math.min(100, Math.round(avg / 128 * 100));
        setVolume(db);
        setSessionBest((prev) => prev === null ? db : Math.min(prev, db));
        setSessionWorst((prev) => prev === null ? db : Math.max(prev, db));
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
      silentTimerRef.current = setInterval(() => {
        setVolume((v) => {
          if (v < 20) {
            setSilentSeconds((s) => {
              const next = s + 1;
              if (next > 0 && next % 10 === 0 && !prevSilentRef.current) {
                prevSilentRef.current = true;
                setShowCelebration(true);
                setTimeout(() => {
                  setShowCelebration(false);
                  prevSilentRef.current = false;
                }, 2500);
              }
              return next;
            });
          }
          return v;
        });
      }, 1e3);
      setIsActive(true);
      setPermissionDenied(false);
    } catch {
      setPermissionDenied(true);
    }
  }, []);
  reactExports.useEffect(() => () => stopMeasuring(), [stopMeasuring]);
  const level = getLevel(volume);
  const pct = Math.min(100, volume);
  const t = {
    title: language === "en" ? "Noise Meter" : language === "fr" ? "Sonomètre" : language === "es" ? "Medidor de Ruido" : "Gürültü Ölçer",
    subtitle: language === "en" ? "How quiet is your classroom?" : language === "fr" ? "Votre classe est-elle silencieuse ?" : language === "es" ? "¿Qué tan silenciosa está tu clase?" : "Sınıfın ne kadar sessiz?",
    start: language === "en" ? "Start Measuring" : language === "fr" ? "Commencer" : language === "es" ? "Iniciar" : "Ölçmeyi Başlat",
    stop: language === "en" ? "Stop" : language === "fr" ? "Arrêter" : language === "es" ? "Detener" : "Durdur",
    best: language === "en" ? "Best" : language === "fr" ? "Meilleur" : language === "es" ? "Mejor" : "En İyi",
    worst: language === "en" ? "Worst" : language === "fr" ? "Kötü" : language === "es" ? "Peor" : "En Kötü",
    silent: language === "en" ? "Silent Seconds" : language === "fr" ? "Secondes silencieuses" : language === "es" ? "Segundos silenciosos" : "Sessiz Saniye",
    denied: language === "en" ? "Microphone permission denied. Please allow microphone access." : language === "fr" ? "Permission microphone refusée." : language === "es" ? "Permiso de micrófono denegado." : "Mikrofon izni reddedildi. Lütfen izin verin.",
    celebrate: language === "en" ? "🎉 10 silent seconds! Great job!" : language === "fr" ? "🎉 10 secondes silencieuses !" : language === "es" ? "🎉 ¡10 segundos en silencio!" : "🎉 10 saniye sessizlik! Harika!",
    tip: language === "en" ? "Try to keep the meter green for 10+ seconds to earn a star reward!" : language === "fr" ? "Essayez de garder le compteur vert pendant 10+ secondes pour gagner une récompense !" : language === "es" ? "¡Mantén el medidor en verde 10+ segundos para ganar una recompensa!" : "10+ saniye yeşil tutarak yıldız ödülü kazanabilirsin!"
  };
  const starCount = level.stars;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `min-h-screen ${dark ? "bg-gray-900 text-white" : "bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `${dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-b px-4 py-3 flex items-center gap-3`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => navigate({ to: "/home" }),
                  className: `p-2 rounded-lg ${dark ? "hover:bg-gray-700" : "hover:bg-gray-100"} transition-colors`,
                  children: "←"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h1",
                  {
                    className: `font-bold text-lg ${dark ? "text-white" : "text-gray-800"}`,
                    children: [
                      "🔊 ",
                      t.title
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm ${dark ? "text-gray-400" : "text-gray-500"}`, children: t.subtitle })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto px-4 py-8", children: [
          showCelebration && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-2xl text-lg font-bold animate-bounce", children: t.celebrate }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative rounded-3xl p-8 mb-6 text-center shadow-xl transition-all duration-300",
              style: {
                background: isActive ? `${level.color}22` : dark ? "#1f2937" : "#f3f4f6",
                border: `3px solid ${isActive ? level.color : "#d1d5db"}`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "text-8xl mb-4 transition-all duration-300",
                    style: { filter: isActive ? "none" : "grayscale(1)" },
                    children: isActive ? level.emoji : "🎤"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "text-2xl font-bold mb-2",
                    style: {
                      color: isActive ? level.color : dark ? "#9ca3af" : "#6b7280"
                    },
                    children: isActive ? getLevelLabel(level, language) : language === "en" ? "Press Start" : language === "fr" ? "Appuyez sur Démarrer" : language === "es" ? "Presiona Iniciar" : "Başlat'a Bas"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1 mb-4", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-2xl transition-all duration-300 ${isActive && s <= starCount ? "" : "grayscale opacity-30"}`,
                    children: "⭐"
                  },
                  s
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `h-6 rounded-full overflow-hidden mb-2 ${dark ? "bg-gray-700" : "bg-gray-200"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full rounded-full transition-all duration-150",
                        style: { width: `${pct}%`, background: level.color }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `text-sm ${dark ? "text-gray-400" : "text-gray-500"}`,
                    children: isActive ? `${volume}/100` : "--"
                  }
                )
              ]
            }
          ),
          isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mb-6", children: [
            { label: t.best, value: sessionBest ?? 0, icon: "🟢" },
            { label: t.silent, value: silentSeconds, icon: "🤫" },
            { label: t.worst, value: sessionWorst ?? 0, icon: "🔴" }
          ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `rounded-2xl p-3 text-center ${dark ? "bg-gray-800" : "bg-white"} shadow`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl", children: s.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `text-lg font-bold ${dark ? "text-white" : "text-gray-800"}`,
                    children: s.value
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `text-xs ${dark ? "text-gray-400" : "text-gray-500"}`,
                    children: s.label
                  }
                )
              ]
            },
            s.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `rounded-2xl p-4 mb-6 text-sm text-center ${dark ? "bg-blue-900/40 text-blue-300" : "bg-blue-50 text-blue-700"}`,
              children: [
                "💡 ",
                t.tip
              ]
            }
          ),
          permissionDenied && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-4 mb-4 bg-red-50 text-red-700 text-sm text-center border border-red-200", children: [
            "🎤 ",
            t.denied
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: isActive ? stopMeasuring : startMeasuring,
              className: `w-full py-4 rounded-2xl text-white font-bold text-lg transition-all active:scale-95 ${isActive ? "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-200" : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-200"}`,
              children: isActive ? `⏹ ${t.stop}` : `🎤 ${t.start}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `mt-6 rounded-2xl p-4 ${dark ? "bg-gray-800" : "bg-white"} shadow`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `text-sm font-bold mb-3 ${dark ? "text-gray-300" : "text-gray-600"}`,
                    children: language === "en" ? "Level Guide" : language === "fr" ? "Guide des niveaux" : language === "es" ? "Guía de niveles" : "Seviye Rehberi"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: LEVELS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-3 h-3 rounded-full flex-shrink-0",
                      style: { background: l.color }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: getLevelLabel(l, language) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto flex gap-0.5", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-xs ${s <= l.stars ? "" : "opacity-20"}`,
                      children: "⭐"
                    },
                    s
                  )) })
                ] }, l.max)) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  NoiseMeterPage as default
};
