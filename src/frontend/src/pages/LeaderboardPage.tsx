import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { getBadgeLevel, getCurrentUser, getProfiles } from "../store";
import { AVATARS, BADGE_EMOJIS, LEVEL_NAMES, type Level } from "../types";

const levelTabs: { key: Level; label: string }[] = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" },
];

const rankIcons = ["🥇", "🥈", "🥉"];

export default function LeaderboardPage() {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const [level, setLevel] = useState<Level>(currentUser?.level || "ilkokul");

  const allProfiles = getProfiles();
  const filtered = allProfiles
    .filter((p) => p.level === level)
    .sort((a, b) => b.totalPoints - a.totalPoints)
    .slice(0, 10);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 to-amber-700 p-4">
      <div className="max-w-sm mx-auto">
        <Button
          data-ocid="leaderboard.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4"
        >
          ← Geri
        </Button>
        <h1 className="text-3xl font-black text-white mb-6">
          🏆 Sınıf Sıralaması
        </h1>

        <div className="grid grid-cols-3 gap-2 mb-6">
          {levelTabs.map((t) => (
            <button
              type="button"
              key={t.key}
              data-ocid="leaderboard.tab"
              onClick={() => setLevel(t.key)}
              className={`py-2 rounded-2xl font-bold text-xs transition-all ${
                level === t.key
                  ? "bg-white text-amber-700"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div
            data-ocid="leaderboard.empty_state"
            className="bg-white/20 rounded-3xl p-8 text-center"
          >
            <div className="text-4xl mb-3">🏜️</div>
            <div className="text-white font-black text-lg">
              Henüz bu seviyede öğrenci yok
            </div>
            <div className="text-white/70 text-sm mt-2">İlk sen ol!</div>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((p, idx) => {
              const isMe = p.studentNumber === currentUser?.studentNumber;
              const badge = getBadgeLevel(p.totalPoints);
              return (
                <div
                  key={p.studentNumber}
                  data-ocid={`leaderboard.item.${idx + 1}`}
                  className={`rounded-2xl p-4 flex items-center gap-3 transition-all ${
                    isMe
                      ? "bg-white border-2 border-yellow-300 shadow-lg shadow-yellow-300/30"
                      : "bg-white/20 backdrop-blur"
                  }`}
                >
                  <div
                    className={`text-2xl font-black w-8 text-center ${
                      isMe ? "text-amber-600" : "text-white"
                    }`}
                  >
                    {idx < 3 ? rankIcons[idx] : `#${idx + 1}`}
                  </div>
                  <span className="text-3xl">{AVATARS[p.avatarIndex]}</span>
                  <div className="flex-1">
                    <div
                      className={`font-black ${isMe ? "text-gray-800" : "text-white"}`}
                    >
                      {p.username}{" "}
                      {isMe && (
                        <span className="text-yellow-500 text-xs">(Sen)</span>
                      )}
                    </div>
                    <div
                      className={`text-xs ${isMe ? "text-gray-500" : "text-white/60"}`}
                    >
                      {LEVEL_NAMES[p.level]}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`font-black text-sm ${isMe ? "text-amber-600" : "text-yellow-300"}`}
                    >
                      ⭐ {p.totalPoints}
                    </div>
                    <div className="text-xs">{BADGE_EMOJIS[badge - 1]}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
