import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  generateStudentNumber,
  getBadgeLevel,
  getGameResults,
  getProfileByStudentNumber,
  getProfiles,
  getQuizResults,
  playAudio,
  saveProfile,
  setCurrentUser,
  syncFromBackendIfNewer,
  updateStreak,
} from "../store";
import {
  AVATARS,
  BADGE_EMOJIS,
  BADGE_NAMES,
  LEVEL_NAMES,
  type Level,
  type Profile,
} from "../types";

const PLACEMENT_QUESTIONS = [
  {
    q: "2 + 3 = ?",
    options: ["3", "5", "7"],
    correct: 1,
    score: 1,
  },
  {
    q: "Türkiye'nin başkenti neresidir?",
    options: ["İstanbul", "İzmir", "Ankara"],
    correct: 2,
    score: 2,
  },
  {
    q: "4 × 7 = ?",
    options: ["11", "28", "32"],
    correct: 1,
    score: 2,
  },
  {
    q: "Fotosentez bitkiler için ne üretir?",
    options: ["Oksijen ve besin", "Su ve toprak", "Güneş enerjisi"],
    correct: 0,
    score: 3,
  },
  {
    q: "48 ÷ 6 - 3 = ?",
    options: ["5", "12", "3"],
    correct: 0,
    score: 3,
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"student" | "parent">("student");

  const [showForm, setShowForm] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [testStep, setTestStep] = useState(0);
  const [testScore, setTestScore] = useState(0);
  const [username, setUsername] = useState("");
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [level, setLevel] = useState<Level>("ilkokul");
  const profiles = getProfiles();

  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Profile | "notfound" | null>(null);
  const [searching, setSearching] = useState(false);

  const handleLogin = (studentNumber: string) => {
    setCurrentUser(studentNumber);
    updateStreak(studentNumber);
    syncFromBackendIfNewer(studentNumber).catch(() => {});
    playAudio("welcome");
    navigate({ to: "/home" });
  };

  const handleCreate = () => {
    if (!username.trim()) return;
    const profile = {
      studentNumber: generateStudentNumber(),
      username: username.trim(),
      avatarIndex,
      level,
      totalPoints: 0,
      createdAt: new Date().toISOString(),
    };
    saveProfile(profile);
    handleLogin(profile.studentNumber);
  };

  const handleTestAnswer = (optionIndex: number) => {
    const q = PLACEMENT_QUESTIONS[testStep];
    const newScore = testScore + (optionIndex === q.correct ? q.score : 0);
    if (testStep < PLACEMENT_QUESTIONS.length - 1) {
      setTestStep(testStep + 1);
      setTestScore(newScore);
    } else {
      const suggested: Level =
        newScore <= 3 ? "okul_oncesi" : newScore <= 7 ? "ilkokul" : "ortaokul";
      setLevel(suggested);
      setShowTest(false);
    }
  };

  const handleParentSearch = async () => {
    const clean = query.replace(/\s/g, "");
    const p = getProfileByStudentNumber(clean);
    if (p) {
      setResult(p);
      return;
    }
    setSearching(true);
    try {
      const { getStudentDataFromBackend } = await import("../store");
      const data = await getStudentDataFromBackend(clean);
      if (data.profile) {
        setResult(data.profile);
      } else {
        setResult("notfound");
      }
    } catch {
      setResult("notfound");
    } finally {
      setSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <div className="text-6xl mb-2">🌟</div>
        <h1 className="text-5xl font-black text-white drop-shadow-lg">
          LearnVerse
        </h1>
        <p className="text-white/90 text-lg mt-2">
          Öğfrenmenin En Eğlenceli Yolu
        </p>
      </div>

      <div className="w-full max-w-sm mb-4">
        <div className="flex rounded-2xl bg-white/20 backdrop-blur p-1 gap-1">
          <button
            type="button"
            data-ocid="login.student_tab"
            onClick={() => setActiveTab("student")}
            className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
              activeTab === "student"
                ? "bg-white text-purple-600 shadow"
                : "text-white hover:bg-white/20"
            }`}
          >
            🎒 Öğrenci Girişi
          </button>
          <button
            type="button"
            data-ocid="login.parent_tab"
            onClick={() => setActiveTab("parent")}
            className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
              activeTab === "parent"
                ? "bg-white text-purple-600 shadow"
                : "text-white hover:bg-white/20"
            }`}
          >
            👨‍👩‍👧 Veli / Öğretmen
          </button>
        </div>
      </div>

      {activeTab === "student" && (
        <div className="w-full max-w-sm">
          {!showForm ? (
            <>
              {profiles.length > 0 && (
                <div className="mb-4">
                  <h2 className="text-white font-bold text-center mb-3">
                    Profil Seç
                  </h2>
                  <div className="space-y-2">
                    {profiles.map((p) => (
                      <button
                        type="button"
                        key={p.studentNumber}
                        data-ocid="login.profile_button"
                        onClick={() => handleLogin(p.studentNumber)}
                        className="w-full bg-white/20 hover:bg-white/30 backdrop-blur rounded-2xl p-3 flex items-center gap-3 text-white transition-all hover:scale-105"
                      >
                        <span className="text-4xl">
                          {AVATARS[p.avatarIndex]}
                        </span>
                        <div className="text-left">
                          <div className="font-bold">{p.username}</div>
                          <div className="text-sm opacity-80">
                            {LEVEL_NAMES[p.level]} • {p.totalPoints} puan •{" "}
                            {BADGE_EMOJIS[getBadgeLevel(p.totalPoints) - 1]}{" "}
                            {BADGE_NAMES[getBadgeLevel(p.totalPoints) - 1]}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <Button
                data-ocid="login.create_profile_button"
                onClick={() => {
                  setShowTest(true);
                  setTestStep(0);
                  setTestScore(0);
                  setShowForm(true);
                }}
                className="w-full bg-white text-purple-600 hover:bg-white/90 font-bold text-lg py-6 rounded-2xl shadow-xl"
              >
                + Yeni Profil Oluştur
              </Button>
            </>
          ) : showTest ? (
            <div className="w-full bg-white/20 backdrop-blur rounded-3xl p-6 space-y-4">
              <div className="text-center">
                <div className="text-white/60 text-xs font-bold uppercase tracking-wide mb-1">
                  Seviye Belirleme Testi
                </div>
                <div className="text-white/50 text-xs">
                  Soru {testStep + 1}/{PLACEMENT_QUESTIONS.length}
                </div>
                <div className="bg-white/20 rounded-full h-2 mt-2 overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full transition-all"
                    style={{
                      width: `${(testStep / PLACEMENT_QUESTIONS.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <div className="bg-white/20 rounded-2xl p-4 text-center">
                <div className="text-white font-black text-xl mb-4">
                  {PLACEMENT_QUESTIONS[testStep].q}
                </div>
                <div className="space-y-2">
                  {PLACEMENT_QUESTIONS[testStep].options.map((opt, i) => (
                    <button
                      type="button"
                      // biome-ignore lint/suspicious/noArrayIndexKey: stable list
                      key={i}
                      data-ocid={`login.test_option.${i}`}
                      onClick={() => handleTestAnswer(i)}
                      className="w-full bg-white/30 hover:bg-white/50 text-white font-bold py-3 rounded-xl transition-all hover:scale-105"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="button"
                data-ocid="login.skip_test"
                onClick={() => setShowTest(false)}
                className="w-full text-white/50 hover:text-white text-xs underline"
              >
                Testi atla
              </button>
            </div>
          ) : (
            <div className="w-full bg-white/20 backdrop-blur rounded-3xl p-6 space-y-4">
              <h2 className="text-white font-black text-xl text-center">
                Yeni Profil
              </h2>
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  Kullanıcı Adı
                </p>
                <Input
                  id="username-input"
                  data-ocid="login.username_input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Adını yaz..."
                  className="bg-white/80 border-0 rounded-xl text-gray-800"
                  onKeyDown={(e) => e.key === "Enter" && handleCreate()}
                />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-2">
                  Avatar Seç
                </p>
                <div className="grid grid-cols-8 gap-1">
                  {AVATARS.map((avatar, i) => (
                    <button
                      type="button"
                      key={avatar}
                      data-ocid={`login.avatar_select.${i + 1}`}
                      onClick={() => setAvatarIndex(i)}
                      className={`text-2xl p-1 rounded-xl transition-all hover:scale-110 ${
                        avatarIndex === i
                          ? "bg-white shadow-lg scale-110"
                          : "hover:bg-white/30"
                      }`}
                    >
                      {avatar}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-2">
                  Seviye
                  {level && (
                    <span className="ml-2 text-yellow-300 text-xs">
                      (Önerilen: {LEVEL_NAMES[level]})
                    </span>
                  )}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {(["okul_oncesi", "ilkokul", "ortaokul"] as Level[]).map(
                    (l) => (
                      <button
                        type="button"
                        key={l}
                        data-ocid={`login.level_${l}`}
                        onClick={() => setLevel(l)}
                        className={`py-2 rounded-xl text-sm font-bold transition-all ${
                          level === l
                            ? "bg-white text-purple-600"
                            : "bg-white/20 text-white hover:bg-white/30"
                        }`}
                      >
                        {LEVEL_NAMES[l]}
                      </button>
                    ),
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  data-ocid="login.cancel_button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="bg-white/20 border-white/40 text-white hover:bg-white/30"
                >
                  Geri
                </Button>
                <Button
                  data-ocid="login.submit_button"
                  onClick={handleCreate}
                  disabled={!username.trim()}
                  className="bg-white text-purple-600 hover:bg-white/90 font-bold"
                >
                  Oluştur
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === "parent" && (
        <div className="w-full max-w-sm">
          <div className="bg-white/20 backdrop-blur rounded-3xl p-6 space-y-4">
            <div>
              <h2 className="text-white font-black text-xl text-center mb-1">
                👨‍👩‍👧 Veli Paneli
              </h2>
              <p className="text-white/70 text-sm text-center">
                Öğrenci numarasıyla sorgulama yapın
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                data-ocid="login.parent_search_input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="16 haneli numara..."
                className="flex-1 bg-white/30 border-white/30 text-white placeholder:text-white/50"
                onKeyDown={(e) => e.key === "Enter" && handleParentSearch()}
              />
              <Button
                data-ocid="login.parent_search_button"
                onClick={handleParentSearch}
                disabled={searching}
                className="bg-white text-purple-600 font-bold hover:bg-white/90"
              >
                {searching ? "Aranıyor..." : "Ara"}
              </Button>
            </div>

            {result === "notfound" && (
              <div
                data-ocid="login.parent_error_state"
                className="bg-red-500/20 border border-red-400/40 rounded-2xl p-4 text-white text-center text-sm"
              >
                ❌ Öğrenci bulunamadı. Lütfen numarayı kontrol edin.
              </div>
            )}

            {result &&
              result !== "notfound" &&
              (() => {
                const p = result as Profile;
                const badge = getBadgeLevel(p.totalPoints);
                const quizzes = getQuizResults().filter(
                  (r) => r.studentNumber === p.studentNumber,
                );
                const games = getGameResults().filter(
                  (r) => r.studentNumber === p.studentNumber,
                );
                return (
                  <div
                    data-ocid="login.parent_result_card"
                    className="space-y-3"
                  >
                    <div className="bg-white/20 rounded-2xl p-4 flex gap-4 items-center">
                      <span className="text-5xl">{AVATARS[p.avatarIndex]}</span>
                      <div>
                        <div className="text-white font-black text-lg">
                          {p.username}
                        </div>
                        <div className="text-white/70 text-sm">
                          {LEVEL_NAMES[p.level]}
                        </div>
                        <div className="text-yellow-300 text-sm">
                          ⭐ {p.totalPoints} puan
                        </div>
                        <div className="text-white/80 text-sm">
                          {BADGE_EMOJIS[badge - 1]} {BADGE_NAMES[badge - 1]}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white/20 rounded-2xl p-3 text-center">
                        <div className="text-2xl font-black text-white">
                          {quizzes.length}
                        </div>
                        <div className="text-white/70 text-xs">
                          Quiz Tamamlandı
                        </div>
                      </div>
                      <div className="bg-white/20 rounded-2xl p-3 text-center">
                        <div className="text-2xl font-black text-white">
                          {games.length}
                        </div>
                        <div className="text-white/70 text-xs">
                          Oyun Oynandı
                        </div>
                      </div>
                    </div>
                    {quizzes.length > 0 && (
                      <div className="bg-white/20 rounded-2xl p-4">
                        <div className="text-white font-bold mb-2 text-sm">
                          Son Quiz Sonuçları
                        </div>
                        <div className="space-y-1">
                          {quizzes
                            .slice(-5)
                            .reverse()
                            .map((q) => (
                              <div
                                key={q.date}
                                className="flex justify-between text-xs"
                              >
                                <span className="text-white/60">
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
        </div>
      )}
    </div>
  );
}
