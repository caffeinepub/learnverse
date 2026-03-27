import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../i18n/ThemeContext";

const LEVELS = [
  {
    max: 20,
    label: "🤫 Sessiz",
    labelEn: "🤫 Silent",
    labelFr: "🤫 Silencieux",
    labelEs: "🤫 Silencio",
    color: "#22c55e",
    emoji: "🌟",
    stars: 5,
  },
  {
    max: 35,
    label: "😊 Çok İyi",
    labelEn: "😊 Very Good",
    labelFr: "😊 Très bien",
    labelEs: "😊 Muy bien",
    color: "#84cc16",
    emoji: "😊",
    stars: 4,
  },
  {
    max: 50,
    label: "😐 Normal",
    labelEn: "😐 Normal",
    labelFr: "😐 Normal",
    labelEs: "😐 Normal",
    color: "#eab308",
    emoji: "😐",
    stars: 3,
  },
  {
    max: 65,
    label: "😬 Biraz Gürültülü",
    labelEn: "😬 A Bit Noisy",
    labelFr: "😬 Un peu bruyant",
    labelEs: "😬 Un poco ruidoso",
    color: "#f97316",
    emoji: "😬",
    stars: 2,
  },
  {
    max: 80,
    label: "😤 Gürültülü",
    labelEn: "😤 Noisy",
    labelFr: "😤 Bruyant",
    labelEs: "😤 Ruidoso",
    color: "#ef4444",
    emoji: "😤",
    stars: 1,
  },
  {
    max: 100,
    label: "🔊 Çok Gürültülü!",
    labelEn: "🔊 Very Noisy!",
    labelFr: "🔊 Très bruyant!",
    labelEs: "🔊 ¡Muy ruidoso!",
    color: "#dc2626",
    emoji: "🚨",
    stars: 0,
  },
];

function getLevel(db: number) {
  return LEVELS.find((l) => db <= l.max) ?? LEVELS[LEVELS.length - 1];
}

function getLevelLabel(level: (typeof LEVELS)[0], lang: string) {
  if (lang === "en") return level.labelEn;
  if (lang === "fr") return level.labelFr;
  if (lang === "es") return level.labelEs;
  return level.label;
}

export default function NoiseMeterPage() {
  const navigate = useNavigate();
  const { lang: language } = useLanguage();
  const { isDark: dark } = useTheme();

  const [volume, setVolume] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [sessionBest, setSessionBest] = useState<number | null>(null);
  const [sessionWorst, setSessionWorst] = useState<number | null>(null);
  const [silentSeconds, setSilentSeconds] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);
  const silentTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prevSilentRef = useRef(false);

  const stopMeasuring = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (silentTimerRef.current) clearInterval(silentTimerRef.current);
    if (streamRef.current)
      for (const t of streamRef.current.getTracks()) t.stop();
    if (audioCtxRef.current) audioCtxRef.current.close();
    audioCtxRef.current = null;
    analyserRef.current = null;
    sourceRef.current = null;
    streamRef.current = null;
    setIsActive(false);
    setVolume(0);
  }, []);

  const startMeasuring = useCallback(async () => {
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
        // Map 0-128 avg to 0-100 dB-like scale
        const db = Math.min(100, Math.round((avg / 128) * 100));
        setVolume(db);
        setSessionBest((prev) => (prev === null ? db : Math.min(prev, db)));
        setSessionWorst((prev) => (prev === null ? db : Math.max(prev, db)));
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);

      // Track silent seconds
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
      }, 1000);

      setIsActive(true);
      setPermissionDenied(false);
    } catch {
      setPermissionDenied(true);
    }
  }, []);

  useEffect(() => () => stopMeasuring(), [stopMeasuring]);

  const level = getLevel(volume);
  const pct = Math.min(100, volume);

  const t = {
    title:
      language === "en"
        ? "Noise Meter"
        : language === "fr"
          ? "Sonomètre"
          : language === "es"
            ? "Medidor de Ruido"
            : "Gürültü Ölçer",
    subtitle:
      language === "en"
        ? "How quiet is your classroom?"
        : language === "fr"
          ? "Votre classe est-elle silencieuse ?"
          : language === "es"
            ? "¿Qué tan silenciosa está tu clase?"
            : "Sınıfın ne kadar sessiz?",
    start:
      language === "en"
        ? "Start Measuring"
        : language === "fr"
          ? "Commencer"
          : language === "es"
            ? "Iniciar"
            : "Ölçmeyi Başlat",
    stop:
      language === "en"
        ? "Stop"
        : language === "fr"
          ? "Arrêter"
          : language === "es"
            ? "Detener"
            : "Durdur",
    best:
      language === "en"
        ? "Best"
        : language === "fr"
          ? "Meilleur"
          : language === "es"
            ? "Mejor"
            : "En İyi",
    worst:
      language === "en"
        ? "Worst"
        : language === "fr"
          ? "Kötü"
          : language === "es"
            ? "Peor"
            : "En Kötü",
    silent:
      language === "en"
        ? "Silent Seconds"
        : language === "fr"
          ? "Secondes silencieuses"
          : language === "es"
            ? "Segundos silenciosos"
            : "Sessiz Saniye",
    denied:
      language === "en"
        ? "Microphone permission denied. Please allow microphone access."
        : language === "fr"
          ? "Permission microphone refusée."
          : language === "es"
            ? "Permiso de micrófono denegado."
            : "Mikrofon izni reddedildi. Lütfen izin verin.",
    celebrate:
      language === "en"
        ? "🎉 10 silent seconds! Great job!"
        : language === "fr"
          ? "🎉 10 secondes silencieuses !"
          : language === "es"
            ? "🎉 ¡10 segundos en silencio!"
            : "🎉 10 saniye sessizlik! Harika!",
    back:
      language === "en"
        ? "Back"
        : language === "fr"
          ? "Retour"
          : language === "es"
            ? "Volver"
            : "Geri",
    tip:
      language === "en"
        ? "Try to keep the meter green for 10+ seconds to earn a star reward!"
        : language === "fr"
          ? "Essayez de garder le compteur vert pendant 10+ secondes pour gagner une récompense !"
          : language === "es"
            ? "¡Mantén el medidor en verde 10+ segundos para ganar una recompensa!"
            : "10+ saniye yeşil tutarak yıldız ödülü kazanabilirsin!",
  };

  const starCount = level.stars;

  return (
    <div
      className={`min-h-screen ${dark ? "bg-gray-900 text-white" : "bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50"}`}
    >
      {/* Header */}
      <div
        className={`${dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-b px-4 py-3 flex items-center gap-3`}
      >
        <button
          type="button"
          onClick={() => navigate({ to: "/home" })}
          className={`p-2 rounded-lg ${dark ? "hover:bg-gray-700" : "hover:bg-gray-100"} transition-colors`}
        >
          ←
        </button>
        <div>
          <h1
            className={`font-bold text-lg ${dark ? "text-white" : "text-gray-800"}`}
          >
            🔊 {t.title}
          </h1>
          <p className={`text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>
            {t.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-8">
        {/* Celebration banner */}
        {showCelebration && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-2xl text-lg font-bold animate-bounce">
            {t.celebrate}
          </div>
        )}

        {/* Main gauge */}
        <div
          className="relative rounded-3xl p-8 mb-6 text-center shadow-xl transition-all duration-300"
          style={{
            background: isActive
              ? `${level.color}22`
              : dark
                ? "#1f2937"
                : "#f3f4f6",
            border: `3px solid ${isActive ? level.color : "#d1d5db"}`,
          }}
        >
          {/* Big emoji */}
          <div
            className="text-8xl mb-4 transition-all duration-300"
            style={{ filter: isActive ? "none" : "grayscale(1)" }}
          >
            {isActive ? level.emoji : "🎤"}
          </div>

          {/* Level label */}
          <div
            className="text-2xl font-bold mb-2"
            style={{
              color: isActive ? level.color : dark ? "#9ca3af" : "#6b7280",
            }}
          >
            {isActive
              ? getLevelLabel(level, language)
              : language === "en"
                ? "Press Start"
                : language === "fr"
                  ? "Appuyez sur Démarrer"
                  : language === "es"
                    ? "Presiona Iniciar"
                    : "Başlat'a Bas"}
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <span
                key={s}
                className={`text-2xl transition-all duration-300 ${isActive && s <= starCount ? "" : "grayscale opacity-30"}`}
              >
                ⭐
              </span>
            ))}
          </div>

          {/* Progress bar */}
          <div
            className={`h-6 rounded-full overflow-hidden mb-2 ${dark ? "bg-gray-700" : "bg-gray-200"}`}
          >
            <div
              className="h-full rounded-full transition-all duration-150"
              style={{ width: `${pct}%`, background: level.color }}
            />
          </div>
          <div
            className={`text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}
          >
            {isActive ? `${volume}/100` : "--"}
          </div>
        </div>

        {/* Stats row */}
        {isActive && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: t.best, value: sessionBest ?? 0, icon: "🟢" },
              { label: t.silent, value: silentSeconds, icon: "🤫" },
              { label: t.worst, value: sessionWorst ?? 0, icon: "🔴" },
            ].map((s) => (
              <div
                key={s.label}
                className={`rounded-2xl p-3 text-center ${dark ? "bg-gray-800" : "bg-white"} shadow`}
              >
                <div className="text-xl">{s.icon}</div>
                <div
                  className={`text-lg font-bold ${dark ? "text-white" : "text-gray-800"}`}
                >
                  {s.value}
                </div>
                <div
                  className={`text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tip */}
        <div
          className={`rounded-2xl p-4 mb-6 text-sm text-center ${dark ? "bg-blue-900/40 text-blue-300" : "bg-blue-50 text-blue-700"}`}
        >
          💡 {t.tip}
        </div>

        {/* Permission error */}
        {permissionDenied && (
          <div className="rounded-2xl p-4 mb-4 bg-red-50 text-red-700 text-sm text-center border border-red-200">
            🎤 {t.denied}
          </div>
        )}

        {/* Controls */}
        <button
          type="button"
          onClick={isActive ? stopMeasuring : startMeasuring}
          className={`w-full py-4 rounded-2xl text-white font-bold text-lg transition-all active:scale-95 ${
            isActive
              ? "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-200"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-200"
          }`}
        >
          {isActive ? `⏹ ${t.stop}` : `🎤 ${t.start}`}
        </button>

        {/* Level guide */}
        <div
          className={`mt-6 rounded-2xl p-4 ${dark ? "bg-gray-800" : "bg-white"} shadow`}
        >
          <div
            className={`text-sm font-bold mb-3 ${dark ? "text-gray-300" : "text-gray-600"}`}
          >
            {language === "en"
              ? "Level Guide"
              : language === "fr"
                ? "Guide des niveaux"
                : language === "es"
                  ? "Guía de niveles"
                  : "Seviye Rehberi"}
          </div>
          <div className="space-y-2">
            {LEVELS.map((l) => (
              <div key={l.max} className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ background: l.color }}
                />
                <span className="text-sm">{getLevelLabel(l, language)}</span>
                <div className="ml-auto flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className={`text-xs ${s <= l.stars ? "" : "opacity-20"}`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
