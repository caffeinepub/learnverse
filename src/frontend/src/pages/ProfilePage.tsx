import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import {
  getBadgeLevel,
  getCurrentUser,
  getGameResults,
  getQuizResults,
} from "../store";
import { AVATARS, BADGE_EMOJIS, BADGE_NAMES, LEVEL_NAMES } from "../types";
import type { Profile } from "../types";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(getCurrentUser());
  const [copied, setCopied] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: navigate is stable
  useEffect(() => {
    const p = getCurrentUser();
    if (!p) {
      navigate({ to: "/" });
      return;
    }
    setProfile(p);
  }, []);

  if (!profile) return null;

  const badge = getBadgeLevel(profile.totalPoints);
  const quizResults = getQuizResults().filter(
    (r) => r.studentNumber === profile.studentNumber,
  );
  const gameResults = getGameResults().filter(
    (r) => r.studentNumber === profile.studentNumber,
  );

  const copyNumber = () => {
    navigator.clipboard.writeText(profile.studentNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-pink-600 p-4">
      <Button
        data-ocid="profile.back_button"
        variant="ghost"
        onClick={() => navigate({ to: "/home" })}
        className="text-white mb-4"
      >
        ← Geri
      </Button>
      <div className="max-w-sm mx-auto space-y-4">
        <div className="bg-white/20 backdrop-blur rounded-3xl p-6 text-center">
          <div className="text-8xl mb-3">{AVATARS[profile.avatarIndex]}</div>
          <h1 className="text-3xl font-black text-white">{profile.username}</h1>
          <p className="text-white/80">{LEVEL_NAMES[profile.level]}</p>
          <div className="mt-3 bg-white/20 rounded-2xl p-3 inline-block">
            <span className="text-2xl">{BADGE_EMOJIS[badge - 1]}</span>
            <span className="text-white font-bold ml-2">
              {BADGE_NAMES[badge - 1]}
            </span>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur rounded-3xl p-4">
          <div className="text-white/70 text-sm mb-1">Öğrenci Numarası</div>
          <div className="flex items-center gap-2">
            <code className="text-white font-mono text-lg flex-1 tracking-wider">
              {profile.studentNumber.match(/.{1,4}/g)?.join(" ")}
            </code>
            <Button
              data-ocid="profile.copy_button"
              size="sm"
              onClick={copyNumber}
              className="bg-white/20 hover:bg-white/30 text-white border-0"
            >
              {copied ? "✓ Kopyalandı" : "📋 Kopyala"}
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/20 backdrop-blur rounded-2xl p-3 text-center">
            <div className="text-2xl font-black text-white">
              {profile.totalPoints}
            </div>
            <div className="text-white/70 text-xs">Toplam Puan</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-2xl p-3 text-center">
            <div className="text-2xl font-black text-white">
              {quizResults.length}
            </div>
            <div className="text-white/70 text-xs">Quiz</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-2xl p-3 text-center">
            <div className="text-2xl font-black text-white">
              {gameResults.length}
            </div>
            <div className="text-white/70 text-xs">Oyun</div>
          </div>
        </div>
        {quizResults.length > 0 && (
          <div className="bg-white/20 backdrop-blur rounded-3xl p-4">
            <h3 className="text-white font-bold mb-3">Son Quizler</h3>
            <div className="space-y-2">
              {quizResults
                .slice(-5)
                .reverse()
                .map((r) => (
                  <div
                    key={r.date}
                    className="flex justify-between items-center bg-white/10 rounded-xl p-2"
                  >
                    <span className="text-white/70 text-sm">
                      {new Date(r.date).toLocaleDateString("tr-TR")}
                    </span>
                    <span className="text-white font-bold">
                      {r.correct}/{r.total}
                    </span>
                    <span className="text-yellow-300 text-sm">
                      +{r.score} puan
                    </span>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
