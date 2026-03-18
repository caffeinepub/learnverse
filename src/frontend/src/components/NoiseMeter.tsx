import { useCallback, useEffect, useRef, useState } from "react";

type NoiseLevel = "silent" | "moderate" | "loud";

function getNoiseLevelInfo(volume: number): {
  level: NoiseLevel;
  emoji: string;
  message: string;
  color: string;
  barColor: string;
} {
  if (volume < 20) {
    return {
      level: "silent",
      emoji: "🤫",
      message: "Harika! Sessizsin!",
      color: "text-green-300",
      barColor: "bg-green-400",
    };
  }
  if (volume < 50) {
    return {
      level: "moderate",
      emoji: "😐",
      message: "Biraz sessiz ol!",
      color: "text-yellow-300",
      barColor: "bg-yellow-400",
    };
  }
  return {
    level: "loud",
    emoji: "😱",
    message: "Çok gürültülü!",
    color: "text-red-300",
    barColor: "bg-red-400",
  };
}

export default function NoiseMeter() {
  const [isActive, setIsActive] = useState(false);
  const [volume, setVolume] = useState(0);
  const [error, setError] = useState("");
  const streamRef = useRef<MediaStream | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const stopMeter = useCallback(() => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    if (streamRef.current) {
      for (const track of streamRef.current.getTracks()) track.stop();
      streamRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    analyserRef.current = null;
    setVolume(0);
    setIsActive(false);
  }, []);

  useEffect(() => {
    return () => {
      stopMeter();
    };
  }, [stopMeter]);

  const startMeter = async () => {
    setError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const ctx = new (
        window.AudioContext || (window as any).webkitAudioContext
      )();
      audioCtxRef.current = ctx;

      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      analyserRef.current = analyser;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const tick = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(dataArray);
        const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
        const normalized = Math.min(100, (avg / 128) * 100);
        setVolume(normalized);
        animFrameRef.current = requestAnimationFrame(tick);
      };
      animFrameRef.current = requestAnimationFrame(tick);
      setIsActive(true);
    } catch {
      setError("Mikrofon izni verilmedi.");
    }
  };

  const info = getNoiseLevelInfo(volume);

  return (
    <div className="space-y-3">
      {/* Volume bar */}
      <div className="relative h-8 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full ${info.barColor} rounded-full transition-all duration-100`}
          style={{ width: `${volume}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/80 text-xs font-bold">
            {isActive ? `${Math.round(volume)}%` : "Başlatılmadı"}
          </span>
        </div>
      </div>

      {/* Status */}
      {isActive && (
        <div className="flex items-center justify-center gap-3 py-2">
          <span className="text-4xl">{info.emoji}</span>
          <span className={`font-black text-lg ${info.color}`}>
            {info.message}
          </span>
        </div>
      )}

      {error && (
        <div
          data-ocid="noisemeter.error_state"
          className="text-red-300 text-sm text-center"
        >
          ⚠️ {error}
        </div>
      )}

      {/* Control button */}
      <button
        type="button"
        data-ocid="noisemeter.toggle"
        onClick={isActive ? stopMeter : startMeter}
        className={`w-full py-2 rounded-xl font-black text-sm transition-all ${
          isActive
            ? "bg-red-500/30 hover:bg-red-500/40 text-red-200 border border-red-400/40"
            : "bg-green-500/30 hover:bg-green-500/40 text-green-200 border border-green-400/40"
        }`}
      >
        {isActive ? "🛑 Durdur" : "🎤 Başlat"}
      </button>
    </div>
  );
}
