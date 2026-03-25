import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";
import { useLanguage } from "../i18n/LanguageContext";
import {
  getBadgeLevel,
  getContentVisits,
  getGameResults,
  getProfileByStudentNumber,
  getQuizResults,
  getStreak,
  getStudentDataFromBackend,
  getTeacherMessages,
  getTopicStats,
  markTeacherMessageRead,
  saveParentMessage,
  saveProfile,
  saveTeacherMessage,
} from "../store";
import type { TeacherMessage } from "../store";
import { AVATARS, BADGE_EMOJIS, BADGE_NAMES, LEVEL_NAMES } from "../types";
import type { GameResult, Profile, QuizResult } from "../types";

type StudentData = {
  profile: Profile;
  quizResults: QuizResult[];
  gameResults: GameResult[];
};

export default function ParentPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<StudentData | "notfound" | null>(null);
  const [loading, setLoading] = useState(false);
  const [msgText, setMsgText] = useState("");
  const [msgSent, setMsgSent] = useState(false);
  const [teacherReplyText, setTeacherReplyText] = useState("");
  const [teacherMessages, setTeacherMessages] = useState<TeacherMessage[]>([]);

  const search = async () => {
    const clean = query.replace(/\s/g, "");
    setLoading(true);
    setResult(null);

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
        ← {t("back")}
      </Button>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-black text-white">
          👨‍👩‍👧 {t("parent_panel")}
        </h1>
        <Button
          data-ocid="parent.secondary_button"
          onClick={() => navigate({ to: "/classes" })}
          className="bg-white/20 hover:bg-white/30 text-white font-bold text-sm"
        >
          🏫 Sınıflar
        </Button>
      </div>
      <p className="text-white/70 text-sm mb-6">{t("parent_panel_desc")}</p>
      <div className="flex gap-2 mb-6">
        <Input
          data-ocid="parent.search_input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("student_number_placeholder")}
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
          const streak = getStreak(p.studentNumber);
          const contentVisits = getContentVisits(p.studentNumber);

          const avgScore =
            quizzes.length > 0
              ? Math.round(
                  quizzes.reduce((s, q) => s + (q.correct / q.total) * 100, 0) /
                    quizzes.length,
                )
              : 0;
          const maxScore =
            quizzes.length > 0
              ? Math.max(
                  ...quizzes.map((q) =>
                    Math.round((q.correct / q.total) * 100),
                  ),
                )
              : 0;
          const minScore =
            quizzes.length > 0
              ? Math.min(
                  ...quizzes.map((q) =>
                    Math.round((q.correct / q.total) * 100),
                  ),
                )
              : 0;
          const totalCorrect = quizzes.reduce((s, q) => s + q.correct, 0);
          const totalQuestions = quizzes.reduce((s, q) => s + q.total, 0);

          const gameTypeMap: Record<
            string,
            { count: number; totalScore: number }
          > = {};
          for (const g of games) {
            if (!gameTypeMap[g.gameType])
              gameTypeMap[g.gameType] = { count: 0, totalScore: 0 };
            gameTypeMap[g.gameType].count += 1;
            gameTypeMap[g.gameType].totalScore += g.score;
          }

          const visitList = Object.values(contentVisits).sort(
            (a, b) => b.count - a.count,
          );

          return (
            <div data-ocid="parent.success_state" className="space-y-4">
              {/* Alert cards */}
              {(() => {
                const alerts: { icon: string; msg: string; color: string }[] =
                  [];
                const streak = getStreak(p.studentNumber);
                const lastLogin = streak.lastDate;
                const today = new Date().toDateString();
                const yesterday = new Date(
                  Date.now() - 86400000,
                ).toDateString();
                const twoDaysAgo = new Date(
                  Date.now() - 2 * 86400000,
                ).toDateString();
                if (
                  lastLogin &&
                  lastLogin !== today &&
                  lastLogin !== yesterday &&
                  lastLogin !== twoDaysAgo
                ) {
                  alerts.push({
                    icon: "⚠️",
                    msg: "Öğrenci 3+ gündür giriş yapmadı",
                    color: "border-orange-400/60 bg-orange-500/10",
                  });
                }
                if (streak.current === 0 && lastLogin && lastLogin !== today) {
                  alerts.push({
                    icon: "💔",
                    msg: "Günlük seri kırıldı",
                    color: "border-red-400/60 bg-red-500/10",
                  });
                }
                if (streak.current >= 7) {
                  alerts.push({
                    icon: "🔥",
                    msg: `Harika! ${streak.current} günlük seri devam ediyor`,
                    color: "border-green-400/60 bg-green-500/10",
                  });
                }
                const badge = getBadgeLevel(p.totalPoints);
                if (badge >= 3) {
                  alerts.push({
                    icon: "🏅",
                    msg: `Yeni rozet kazandı: ${BADGE_NAMES[badge - 1]}`,
                    color: "border-yellow-400/60 bg-yellow-500/10",
                  });
                }
                if (alerts.length === 0) return null;
                return (
                  <div className="space-y-2">
                    {alerts.map((a) => (
                      <div
                        key={a.msg}
                        className={`border rounded-2xl p-3 flex items-center gap-3 ${a.color}`}
                      >
                        <span className="text-2xl">{a.icon}</span>
                        <span className="text-white text-sm font-bold">
                          {a.msg}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              })()}

              {/* Profile card */}
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

              {/* Parent Message Card */}
              <div className="bg-slate-800 border border-white/20 rounded-3xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">D83dDcec</span>
                  <span className="text-white font-black text-base">
                    Mesaj G00f6nder
                  </span>
                  <span className="text-white/50 text-xs ml-auto">
                    (maks. 200 karakter)
                  </span>
                </div>
                {msgSent ? (
                  <div
                    data-ocid="parent.success_state"
                    className="bg-green-500/20 border border-green-500/40 rounded-2xl p-3 text-green-300 font-bold text-center"
                  >
                    2705 Mesaj 00f6011frenciye iletildi!
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Textarea
                      data-ocid="parent.textarea"
                      value={msgText}
                      onChange={(e) => setMsgText(e.target.value.slice(0, 200))}
                      placeholder="00d6011frencine te015fvik edici bir mesaj yaz..."
                      className="bg-white/10 border-white/20 text-white placeholder-white/40 resize-none"
                      rows={3}
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-white/40 text-xs">
                        {msgText.length}/200
                      </span>
                      <Button
                        data-ocid="parent.submit_button"
                        disabled={!msgText.trim()}
                        onClick={() => {
                          saveParentMessage(p.studentNumber, msgText.trim());
                          setMsgSent(true);
                          setMsgText("");
                          setTimeout(() => setMsgSent(false), 3000);
                        }}
                        className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-5 py-2 rounded-xl disabled:opacity-40"
                      >
                        G00f6nder 2709Fe0f
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              {/* Print Report Button */}
              <div className="flex justify-end no-print">
                <Button
                  data-ocid="parent.secondary_button"
                  onClick={() => window.print()}
                  className="bg-white/20 hover:bg-white/30 text-white font-bold text-sm"
                >
                  📄 Raporu Yazdır
                </Button>
              </div>

              {/* Teacher Messages Section */}
              {(() => {
                const msgs =
                  teacherMessages.length > 0
                    ? teacherMessages
                    : getTeacherMessages(p.studentNumber);
                const unread = msgs.filter((m) => !m.read).length;
                return (
                  <div
                    className="bg-slate-800 border border-white/20 rounded-3xl p-5 no-print"
                    onMouseEnter={() => {
                      const allMsgs = getTeacherMessages(p.studentNumber);
                      for (const m of allMsgs.filter((m) => !m.read)) {
                        markTeacherMessageRead(p.studentNumber, m.id);
                      }
                      setTeacherMessages(getTeacherMessages(p.studentNumber));
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">💬</span>
                      <span className="text-white font-black text-base">
                        Öğretmen Mesajları
                      </span>
                      {unread > 0 && (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full ml-1">
                          {unread} yeni
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 max-h-56 overflow-y-auto mb-3">
                      {msgs.length === 0 ? (
                        <div
                          data-ocid="parent.empty_state"
                          className="text-white/50 text-sm text-center py-4"
                        >
                          Henüz mesaj yok.
                        </div>
                      ) : (
                        [...msgs]
                          .sort(
                            (a, b) =>
                              new Date(a.date).getTime() -
                              new Date(b.date).getTime(),
                          )
                          .map((m) => (
                            <div
                              key={m.id}
                              className={`rounded-2xl p-3 flex gap-2 items-start ${m.fromRole === "teacher" ? "bg-blue-500/20 border border-blue-400/30" : "bg-green-500/20 border border-green-400/30"}`}
                            >
                              <span
                                className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ${m.fromRole === "teacher" ? "bg-blue-500 text-white" : "bg-green-500 text-white"}`}
                              >
                                {m.fromRole === "teacher" ? "Öğretmen" : "Veli"}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="text-white text-sm">
                                  {m.message}
                                </div>
                                <div className="text-white/40 text-xs mt-1">
                                  {new Date(m.date).toLocaleString("tr-TR")}
                                </div>
                              </div>
                              {!m.read && (
                                <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-1" />
                              )}
                            </div>
                          ))
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Textarea
                        data-ocid="parent.textarea"
                        value={teacherReplyText}
                        onChange={(e) =>
                          setTeacherReplyText(e.target.value.slice(0, 300))
                        }
                        placeholder="Öğretmene yanıt yaz..."
                        className="bg-white/10 border-white/20 text-white placeholder-white/40 resize-none text-sm"
                        rows={2}
                      />
                      <Button
                        data-ocid="parent.submit_button"
                        disabled={!teacherReplyText.trim()}
                        onClick={() => {
                          saveTeacherMessage({
                            studentNumber: p.studentNumber,
                            from: "Veli",
                            fromRole: "parent",
                            message: teacherReplyText.trim(),
                          });
                          setTeacherReplyText("");
                          setTeacherMessages(
                            getTeacherMessages(p.studentNumber),
                          );
                        }}
                        className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-4 rounded-xl disabled:opacity-40 self-end"
                      >
                        Yanıtla
                      </Button>
                    </div>
                  </div>
                );
              })()}

              {/* Print Report - hidden normally, visible on print */}
              <div
                id="print-report"
                className="hidden print:block text-black bg-white p-8 text-sm"
              >
                <div className="text-center mb-6">
                  <div className="text-2xl font-black mb-1">
                    📚 LearnVerse İlerleme Raporu
                  </div>
                  <div className="text-gray-500 text-xs">
                    Yazdırma Tarihi: {new Date().toLocaleDateString("tr-TR")}
                  </div>
                </div>
                <div className="border-b border-gray-300 pb-4 mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-bold">Öğrenci:</span> {p.username}
                    </div>
                    <div>
                      <span className="font-bold">Öğrenci No:</span>{" "}
                      {p.studentNumber}
                    </div>
                    <div>
                      <span className="font-bold">Seviye:</span>{" "}
                      {LEVEL_NAMES[p.level]}
                    </div>
                    <div>
                      <span className="font-bold">Toplam Puan:</span>{" "}
                      {p.totalPoints}
                    </div>
                    <div>
                      <span className="font-bold">Rozet:</span>{" "}
                      {BADGE_EMOJIS[getBadgeLevel(p.totalPoints) - 1]}{" "}
                      {BADGE_NAMES[getBadgeLevel(p.totalPoints) - 1]}
                    </div>
                    <div>
                      <span className="font-bold">Seri:</span>{" "}
                      {getStreak(p.studentNumber).current} gün
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="font-bold mb-2">Son 5 Quiz Sonucu</div>
                  {quizzes
                    .slice(-5)
                    .reverse()
                    .map((q) => (
                      <div
                        key={q.date}
                        className="flex justify-between border-b border-gray-100 py-1"
                      >
                        <span>
                          {new Date(q.date).toLocaleDateString("tr-TR")}
                        </span>
                        <span>
                          {q.correct}/{q.total} (
                          {Math.round((q.correct / q.total) * 100)}%)
                        </span>
                      </div>
                    ))}
                  {quizzes.length === 0 && (
                    <div className="text-gray-400">Henüz quiz yapılmadı.</div>
                  )}
                </div>
                <div className="mb-4">
                  <div className="font-bold mb-2">Konu Bazlı Başarı</div>
                  {(() => {
                    const ts = getTopicStats(p.studentNumber);
                    return [
                      { label: "Fen Bilimleri", key: "science" as const },
                      { label: "Tarih", key: "history" as const },
                      { label: "Coğrafya", key: "geography" as const },
                      { label: "Matematik", key: "math" as const },
                      { label: "Genel", key: "general" as const },
                    ].map(({ label, key }) => {
                      const s = ts[key];
                      const pct =
                        s.total > 0
                          ? Math.round((s.correct / s.total) * 100)
                          : 0;
                      return (
                        <div
                          key={key}
                          className="flex justify-between border-b border-gray-100 py-1"
                        >
                          <span>{label}</span>
                          <span>
                            {s.total > 0
                              ? `${s.correct}/${s.total} (%${pct})`
                              : "—"}
                          </span>
                        </div>
                      );
                    });
                  })()}
                </div>
                <div className="text-center text-gray-400 text-xs mt-6 border-t border-gray-200 pt-4">
                  LearnVerse — www.learnverse.app
                </div>
              </div>

              <Tabs defaultValue="genel" className="w-full">
                <TabsList className="w-full bg-white/10 rounded-2xl p-1 mb-4 grid grid-cols-5 h-auto">
                  <TabsTrigger
                    value="genel"
                    data-ocid="parent.tab"
                    className="text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl text-xs py-2 font-bold"
                  >
                    Genel
                  </TabsTrigger>
                  <TabsTrigger
                    value="quiz"
                    data-ocid="parent.tab"
                    className="text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl text-xs py-2 font-bold"
                  >
                    Quiz
                  </TabsTrigger>
                  <TabsTrigger
                    value="icerik"
                    data-ocid="parent.tab"
                    className="text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl text-xs py-2 font-bold"
                  >
                    İçerik
                  </TabsTrigger>
                  <TabsTrigger
                    value="konu"
                    className="text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl text-xs py-2 font-bold"
                  >
                    📊 Konu
                  </TabsTrigger>
                  <TabsTrigger
                    value="oyunlar"
                    data-ocid="parent.tab"
                    className="text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl text-xs py-2 font-bold"
                  >
                    Oyunlar
                  </TabsTrigger>
                </TabsList>

                {/* Tab 1: Genel */}
                <TabsContent value="genel">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/10 rounded-2xl p-3 text-center">
                        <div className="text-2xl font-black text-white">
                          {quizzes.length}
                        </div>
                        <div className="text-white/70 text-sm">
                          Quiz Tamamlandı
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-2xl p-3 text-center">
                        <div className="text-2xl font-black text-white">
                          {games.length}
                        </div>
                        <div className="text-white/70 text-sm">
                          Oyun Oynandı
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 flex items-center gap-3">
                      <span className="text-3xl">🔥</span>
                      <div>
                        <div className="text-white font-black text-lg">
                          {streak.current} günlük seri
                        </div>
                        <div className="text-white/60 text-xs">
                          Arka arkaya giriş yapılan gün sayısı
                        </div>
                      </div>
                    </div>
                    {quizzes.length > 0 && (
                      <div className="bg-white/10 rounded-2xl p-4">
                        <div className="text-white font-bold mb-3 text-sm">
                          Son Quiz Sonuçları
                        </div>
                        <div className="space-y-2">
                          {quizzes
                            .slice(-5)
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
                </TabsContent>

                {/* Tab 2: Quiz Analizi */}
                <TabsContent value="quiz">
                  <div className="space-y-3">
                    {quizzes.length === 0 ? (
                      <div
                        data-ocid="parent.empty_state"
                        className="bg-white/10 rounded-2xl p-6 text-center text-white/60"
                      >
                        Henüz quiz yapılmadı.
                      </div>
                    ) : (
                      <>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-white/10 rounded-2xl p-3 text-center">
                            <div className="text-xl font-black text-white">
                              %{avgScore}
                            </div>
                            <div className="text-white/60 text-xs">
                              Ortalama
                            </div>
                          </div>
                          <div className="bg-white/10 rounded-2xl p-3 text-center">
                            <div className="text-xl font-black text-green-400">
                              %{maxScore}
                            </div>
                            <div className="text-white/60 text-xs">
                              En Yüksek
                            </div>
                          </div>
                          <div className="bg-white/10 rounded-2xl p-3 text-center">
                            <div className="text-xl font-black text-red-400">
                              %{minScore}
                            </div>
                            <div className="text-white/60 text-xs">
                              En Düşük
                            </div>
                          </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-4">
                          <div className="text-white font-bold mb-3 text-sm">
                            Doğru / Yanlış Oranı
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-white/20 rounded-full h-4 overflow-hidden">
                              <div
                                className="h-full bg-green-500 rounded-full"
                                style={{
                                  width: `${totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0}%`,
                                }}
                              />
                            </div>
                            <span className="text-white text-xs font-bold">
                              {totalCorrect}/{totalQuestions}
                            </span>
                          </div>
                          <div className="flex justify-between text-xs mt-1">
                            <span className="text-green-400">
                              {totalCorrect} Doğru
                            </span>
                            <span className="text-red-400">
                              {totalQuestions - totalCorrect} Yanlış
                            </span>
                          </div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-4">
                          <div className="text-white font-bold mb-3 text-sm">
                            Son 10 Quiz
                          </div>
                          <div className="space-y-2">
                            {quizzes
                              .slice(-10)
                              .reverse()
                              .map((q, i) => {
                                const pct = Math.round(
                                  (q.correct / q.total) * 100,
                                );
                                return (
                                  <div
                                    key={q.date}
                                    className="flex items-center gap-2"
                                  >
                                    <span className="text-white/50 text-xs w-4">
                                      {i + 1}
                                    </span>
                                    <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                                      <div
                                        className={`h-full rounded-full ${
                                          pct >= 70
                                            ? "bg-green-500"
                                            : pct >= 40
                                              ? "bg-yellow-500"
                                              : "bg-red-500"
                                        }`}
                                        style={{ width: `${pct}%` }}
                                      />
                                    </div>
                                    <span className="text-white text-xs w-10 text-right">
                                      %{pct}
                                    </span>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </TabsContent>

                {/* Tab 3: İçerik Aktivitesi */}
                <TabsContent value="icerik">
                  <div className="space-y-3">
                    {visitList.length === 0 ? (
                      <div
                        data-ocid="parent.empty_state"
                        className="bg-white/10 rounded-2xl p-6 text-center text-white/60"
                      >
                        Henüz içerik ziyareti yok.
                      </div>
                    ) : (
                      <div className="bg-white/10 rounded-2xl p-4">
                        <div className="text-white font-bold mb-3 text-sm">
                          Ziyaret Edilen Sayfalar
                        </div>
                        <div className="space-y-2">
                          {visitList.map((v) => (
                            <div
                              key={v.page}
                              className="flex justify-between items-center text-sm"
                            >
                              <span className="text-white capitalize">
                                {v.page}
                              </span>
                              <div className="flex items-center gap-2">
                                <div className="bg-white/20 rounded-full h-2 w-16 overflow-hidden">
                                  <div
                                    className="h-full bg-cyan-400 rounded-full"
                                    style={{
                                      width: `${Math.min(100, (v.count / (visitList[0]?.count || 1)) * 100)}%`,
                                    }}
                                  />
                                </div>
                                <span className="text-white/80 text-xs">
                                  {v.count}x
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* Tab: Konu Bazlı Başarı */}
                <TabsContent value="konu">
                  <div className="space-y-3">
                    {(() => {
                      const topicStats = getTopicStats(p.studentNumber);
                      const topics = [
                        {
                          id: "science",
                          icon: "🔬",
                          label: "Fen / Science",
                          color: "bg-emerald-400",
                        },
                        {
                          id: "history",
                          icon: "🏛️",
                          label: "Tarih / History",
                          color: "bg-amber-400",
                        },
                        {
                          id: "geography",
                          icon: "🌍",
                          label: "Coğrafya / Geography",
                          color: "bg-blue-400",
                        },
                        {
                          id: "math",
                          icon: "🔢",
                          label: "Matematik / Math",
                          color: "bg-rose-400",
                        },
                        {
                          id: "general",
                          icon: "💡",
                          label: "Genel / General",
                          color: "bg-violet-400",
                        },
                      ] as const;
                      const hasAny = topics.some(
                        (tp) => topicStats[tp.id].total > 0,
                      );
                      if (!hasAny) {
                        return (
                          <div
                            data-ocid="parent.empty_state"
                            className="bg-white/10 rounded-2xl p-6 text-center text-white/60"
                          >
                            <div className="text-3xl mb-2">📚</div>
                            Henüz konu quizi yapılmadı.
                          </div>
                        );
                      }
                      return (
                        <div className="bg-white/10 rounded-2xl p-4">
                          <div className="text-white font-bold mb-3 text-sm">
                            Konu Bazlı Başarı
                          </div>
                          <div className="space-y-3">
                            {topics.map((tp) => {
                              const s = topicStats[tp.id];
                              const pct =
                                s.total > 0
                                  ? Math.round((s.correct / s.total) * 100)
                                  : 0;
                              return (
                                <div key={tp.id}>
                                  <div className="flex justify-between items-center mb-1">
                                    <span className="text-white text-sm font-medium">
                                      {tp.icon} {tp.label}
                                    </span>
                                    <span className="text-white/70 text-xs">
                                      {s.total > 0
                                        ? `${s.correct}/${s.total} (%${pct})`
                                        : "—"}
                                    </span>
                                  </div>
                                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                                    <div
                                      className={`h-full ${tp.color} rounded-full transition-all duration-700`}
                                      style={{
                                        width: s.total > 0 ? `${pct}%` : "0%",
                                      }}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </TabsContent>

                {/* Tab 4: Oyunlar */}
                <TabsContent value="oyunlar">
                  <div className="space-y-3">
                    {Object.keys(gameTypeMap).length === 0 ? (
                      <div
                        data-ocid="parent.empty_state"
                        className="bg-white/10 rounded-2xl p-6 text-center text-white/60"
                      >
                        Henüz oyun oynanmadı.
                      </div>
                    ) : (
                      <div className="bg-white/10 rounded-2xl p-4">
                        <div className="text-white font-bold mb-3 text-sm">
                          Oyun İstatistikleri
                        </div>
                        <div className="space-y-3">
                          {Object.entries(gameTypeMap).map(([type, stats]) => (
                            <div
                              key={type}
                              className="bg-white/10 rounded-xl p-3"
                            >
                              <div className="text-white font-bold text-sm capitalize">
                                {type}
                              </div>
                              <div className="flex justify-between text-xs text-white/70 mt-1">
                                <span>{stats.count} kez oynandı</span>
                                <span>Toplam: {stats.totalScore} puan</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          );
        })()}
    </div>
  );
}
