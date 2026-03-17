import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  getBadgeLevel,
  getGameResults,
  getProfileByStudentNumber,
  getQuizResults,
  getStudentDataFromBackend,
  saveProfile,
} from "../store";
import { AVATARS, BADGE_EMOJIS, BADGE_NAMES, LEVEL_NAMES } from "../types";
import type { GameResult, Profile, QuizResult } from "../types";

type StudentData = {
  profile: Profile;
  quizResults: QuizResult[];
  gameResults: GameResult[];
};

export default function ParentPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<StudentData | "notfound" | null>(null);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    const clean = query.replace(/\s/g, "");
    setLoading(true);
    setResult(null);

    // Önce backend'den çek
    const backendData = await getStudentDataFromBackend(clean);
    if (backendData.profile) {
      saveProfile(backendData.profile);
      setResult({
        profile: backendData.profile,
        quizResults: backendData.quizResults,
        gameResults: backendData.gameResults,
      });
      setLoading(false);
      return;
    }

    // Backend'de yoksa localStorage'a bak
    const localProfile = getProfileByStudentNumber(clean);
    if (localProfile) {
      setResult({
        profile: localProfile,
        quizResults: getQuizResults().filter((r) => r.studentNumber === clean),
        gameResults: getGameResults().filter((r) => r.studentNumber === clean),
      });
    } else {
      setResult("notfound");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 to-slate-900 p-4">
      <Button
        data-ocid="parent.back_button"
        variant="ghost"
        onClick={() => navigate({ to: "/home" })}
        className="text-white mb-4"
      >
        ← Geri
      </Button>
      <h1 className="text-2xl font-black text-white mb-2">
        👨‍👩‍👧 Veli / Öğretmen Paneli
      </h1>
      <p className="text-white/70 text-sm mb-6">
        Öğrenci numarasıyla sorgulama yapın
      </p>
      <div className="flex gap-2 mb-6">
        <Input
          data-ocid="parent.search_input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="16 haneli numara..."
          className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/40"
          onKeyDown={(e) => e.key === "Enter" && !loading && search()}
        />
        <Button
          data-ocid="parent.search_button"
          onClick={search}
          disabled={loading}
          className="bg-white text-slate-800 font-bold"
        >
          {loading ? "..." : "Ara"}
        </Button>
      </div>

      {loading && (
        <div
          data-ocid="parent.loading_state"
          className="bg-white/10 rounded-2xl p-4 text-white text-center"
        >
          🔍 Sorgulanıyor...
        </div>
      )}

      {result === "notfound" && (
        <div
          data-ocid="parent.error_state"
          className="bg-red-500/20 border border-red-500/40 rounded-2xl p-4 text-white text-center"
        >
          ❌ Öğrenci bulunamadı. Lütfen numarayı kontrol edin.
        </div>
      )}

      {result &&
        result !== "notfound" &&
        (() => {
          const {
            profile: p,
            quizResults: quizzes,
            gameResults: games,
          } = result as StudentData;
          const badge = getBadgeLevel(p.totalPoints);
          return (
            <div data-ocid="parent.success_state" className="space-y-4">
              <div className="bg-white/10 rounded-3xl p-5 flex gap-4">
                <span className="text-5xl">{AVATARS[p.avatarIndex]}</span>
                <div>
                  <div className="text-white font-black text-xl">
                    {p.username}
                  </div>
                  <div className="text-white/70">{LEVEL_NAMES[p.level]}</div>
                  <div className="text-yellow-300">⭐ {p.totalPoints} puan</div>
                  <div className="text-white/80">
                    {BADGE_EMOJIS[badge - 1]} {BADGE_NAMES[badge - 1]}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 rounded-2xl p-3 text-center">
                  <div className="text-2xl font-black text-white">
                    {quizzes.length}
                  </div>
                  <div className="text-white/70 text-sm">Quiz Tamamlandı</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-3 text-center">
                  <div className="text-2xl font-black text-white">
                    {games.length}
                  </div>
                  <div className="text-white/70 text-sm">Oyun Oynandı</div>
                </div>
              </div>
              {quizzes.length > 0 && (
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="text-white font-bold mb-3">
                    Son Quiz Sonuçları
                  </div>
                  <div className="space-y-2">
                    {quizzes
                      .slice(-10)
                      .reverse()
                      .map((q) => (
                        <div
                          key={q.date}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-white/70">
                            {new Date(q.date).toLocaleDateString("tr-TR")}
                          </span>
                          <span className="text-white">
                            {q.correct}/{q.total} doğru
                          </span>
                          <span className="text-yellow-300">
                            +{q.score} puan
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          );
        })()}
    </div>
  );
}
