import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { useLanguage } from "../i18n/LanguageContext";
import { getCurrentUser, updatePoints } from "../store";

const STORAGE_KEY = "learnverse_multtable_progress";

type TableProgress = Record<number, { correct: number; total: number }>;

function loadProgress(): TableProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: TableProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

const TABLE_COLORS = [
  "bg-red-400",
  "bg-orange-400",
  "bg-amber-400",
  "bg-yellow-400",
  "bg-lime-400",
  "bg-green-400",
  "bg-teal-400",
  "bg-cyan-400",
  "bg-blue-400",
  "bg-violet-400",
  "bg-purple-400",
  "bg-pink-400",
];

export default function MultiplicationTablePage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  const level = profile?.level ?? "ilkokul";

  const maxTable = level === "okul_oncesi" ? 5 : level === "ilkokul" ? 10 : 12;

  const [progress, setProgress] = useState<TableProgress>(loadProgress);
  const [highlightRow, setHighlightRow] = useState<number | null>(null);
  const [highlightCol, setHighlightCol] = useState<number | null>(null);

  // Practice mode
  const [practiceNum, setPracticeNum] = useState<number>(0);
  const [practiceMultiplier, setPracticeMultiplier] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [practicePoints, setPracticePoints] = useState(0);

  // Drill mode
  const [drillTable, setDrillTable] = useState(1);
  const [drillIndex, setDrillIndex] = useState(0);
  const [drillAnswer, setDrillAnswer] = useState("");
  const [drillFeedback, setDrillFeedback] = useState<
    "correct" | "wrong" | null
  >(null);

  const isRTL = lang === "ar";

  const generatePracticeQuestion = useCallback(() => {
    const a = Math.floor(Math.random() * maxTable) + 1;
    const b = Math.floor(Math.random() * maxTable) + 1;
    setPracticeNum(a);
    setPracticeMultiplier(b);
    setUserAnswer("");
    setFeedback(null);
  }, [maxTable]);

  useEffect(() => {
    generatePracticeQuestion();
  }, [generatePracticeQuestion]);

  function checkPracticeAnswer() {
    const correct = practiceNum * practiceMultiplier;
    const isCorrect = Number.parseInt(userAnswer) === correct;
    setFeedback(isCorrect ? "correct" : "wrong");
    const key = practiceNum;
    const prev = progress[key] ?? { correct: 0, total: 0 };
    const updated = {
      ...progress,
      [key]: {
        correct: isCorrect ? prev.correct + 1 : prev.correct,
        total: prev.total + 1,
      },
    };
    setProgress(updated);
    saveProgress(updated);
    if (isCorrect && profile) {
      updatePoints(profile.studentNumber, 5);
      setPracticePoints((p) => p + 5);
    }
  }

  function checkDrillAnswer() {
    const correct = drillTable * (drillIndex + 1);
    const isCorrect = Number.parseInt(drillAnswer) === correct;
    setDrillFeedback(isCorrect ? "correct" : "wrong");
    const prev = progress[drillTable] ?? { correct: 0, total: 0 };
    const updated = {
      ...progress,
      [drillTable]: {
        correct: isCorrect ? prev.correct + 1 : prev.correct,
        total: prev.total + 1,
      },
    };
    setProgress(updated);
    saveProgress(updated);
    if (isCorrect && profile) {
      updatePoints(profile.studentNumber, 5);
      setTimeout(() => {
        setDrillAnswer("");
        setDrillFeedback(null);
        setDrillIndex((i) => (i + 1) % maxTable);
      }, 800);
    }
  }

  const tableNums = Array.from({ length: maxTable }, (_, i) => i + 1);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/90 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate({ to: "/home" })}
          data-ocid="mult.back_button"
        >
          ←
        </Button>
        <h1 className="text-xl font-bold">{t("multiplication_table")}</h1>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <Tabs defaultValue="table">
          <TabsList className="w-full mb-6" data-ocid="mult.tab">
            <TabsTrigger
              value="table"
              className="flex-1"
              data-ocid="mult.view_tab"
            >
              {t("mult_view_mode")}
            </TabsTrigger>
            <TabsTrigger
              value="practice"
              className="flex-1"
              data-ocid="mult.practice_tab"
            >
              {t("mult_practice_mode")}
            </TabsTrigger>
            <TabsTrigger
              value="drill"
              className="flex-1"
              data-ocid="mult.drill_tab"
            >
              {t("mult_drill_mode")}
            </TabsTrigger>
          </TabsList>

          {/* TABLE VIEW */}
          <TabsContent value="table">
            <div className="overflow-auto rounded-xl border border-border">
              <table className="w-full text-center text-sm select-none">
                <thead>
                  <tr>
                    <th className="p-2 bg-muted font-bold text-muted-foreground">
                      ✖️
                    </th>
                    {tableNums.map((c) => (
                      <th
                        key={c}
                        scope="col"
                        className={`p-2 font-bold cursor-pointer transition-colors ${
                          highlightCol === c
                            ? "bg-yellow-300 dark:bg-yellow-600 text-black"
                            : "bg-muted text-muted-foreground"
                        }`}
                        onClick={() =>
                          setHighlightCol(highlightCol === c ? null : c)
                        }
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          setHighlightCol(highlightCol === c ? null : c)
                        }
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableNums.map((r) => (
                    <tr key={r}>
                      <td
                        className={`p-2 font-bold cursor-pointer transition-colors ${
                          highlightRow === r
                            ? "bg-yellow-300 dark:bg-yellow-600 text-black"
                            : "bg-muted text-muted-foreground"
                        }`}
                        onClick={() =>
                          setHighlightRow(highlightRow === r ? null : r)
                        }
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          setHighlightRow(highlightRow === r ? null : r)
                        }
                      >
                        {r}
                      </td>
                      {tableNums.map((c) => {
                        const highlighted =
                          highlightRow === r || highlightCol === c;
                        const intersection =
                          highlightRow === r && highlightCol === c;
                        const colorIdx = (r + c - 2) % TABLE_COLORS.length;
                        return (
                          <td
                            key={c}
                            className={`p-2 transition-all font-semibold rounded ${
                              intersection
                                ? "bg-orange-400 text-white scale-110 font-bold text-base"
                                : highlighted
                                  ? `${TABLE_COLORS[colorIdx]} text-white`
                                  : "hover:bg-muted/80"
                            }`}
                          >
                            {r * c}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground text-sm text-center mt-3">
              {t("mult_click_hint")}
            </p>

            {/* Per-table progress */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
              {tableNums.map((n) => {
                const p = progress[n];
                const pct =
                  p && p.total > 0
                    ? Math.round((p.correct / p.total) * 100)
                    : 0;
                return (
                  <div
                    key={n}
                    className="bg-card border border-border rounded-lg p-3 text-center"
                    data-ocid={`mult.progress.item.${n}`}
                  >
                    <div className="text-lg font-bold">{n}×</div>
                    <Progress value={pct} className="my-2 h-2" />
                    <div className="text-xs text-muted-foreground">{pct}%</div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* PRACTICE MODE */}
          <TabsContent value="practice">
            <div className="flex flex-col items-center gap-6 py-4">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-8 text-center shadow-lg w-full max-w-sm">
                <div className="text-5xl font-black mb-2">
                  {practiceNum} × {practiceMultiplier} = ?
                </div>
                <div className="text-sm opacity-80">
                  {t("mult_enter_answer")}
                </div>
              </div>

              <div className="flex gap-3 items-center w-full max-w-sm">
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && !feedback && checkPracticeAnswer()
                  }
                  className="flex-1 border border-border rounded-lg px-4 py-3 text-2xl text-center bg-background focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="?"
                  data-ocid="mult.answer_input"
                />
                {!feedback ? (
                  <Button
                    onClick={checkPracticeAnswer}
                    className="px-6 py-3"
                    data-ocid="mult.check_button"
                  >
                    {t("check_answer")}
                  </Button>
                ) : (
                  <Button
                    onClick={generatePracticeQuestion}
                    className="px-6 py-3"
                    data-ocid="mult.next_button"
                  >
                    {t("quiz_play_again")}
                  </Button>
                )}
              </div>

              {feedback === "correct" && (
                <div
                  className="text-green-500 text-2xl font-bold animate-bounce"
                  data-ocid="mult.correct_state"
                >
                  ✅ {t("quiz_correct")} +5 ⭐
                </div>
              )}
              {feedback === "wrong" && (
                <div
                  className="text-red-500 text-xl font-bold"
                  data-ocid="mult.error_state"
                >
                  ❌ {t("quiz_wrong")} {practiceNum} × {practiceMultiplier} ={" "}
                  {practiceNum * practiceMultiplier}
                </div>
              )}

              <div className="bg-card border border-border rounded-xl p-4 text-center w-full max-w-sm">
                <div className="text-sm text-muted-foreground">
                  {t("mult_session_points")}
                </div>
                <div className="text-3xl font-black text-indigo-500">
                  +{practicePoints} ⭐
                </div>
              </div>
            </div>
          </TabsContent>

          {/* DRILL MODE */}
          <TabsContent value="drill">
            <div className="flex flex-col items-center gap-6 py-4">
              {/* Table selector */}
              <div
                className="flex flex-wrap gap-2 justify-center"
                data-ocid="mult.drill_select"
              >
                {tableNums.map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => {
                      setDrillTable(n);
                      setDrillIndex(0);
                      setDrillAnswer("");
                      setDrillFeedback(null);
                    }}
                    className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                      drillTable === n
                        ? "bg-indigo-600 text-white scale-110"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                    data-ocid={`mult.drill.button.${n}`}
                  >
                    {n}
                  </button>
                ))}
              </div>

              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-2xl p-8 text-center shadow-lg w-full max-w-sm">
                <div className="text-5xl font-black">
                  {drillTable} × {drillIndex + 1} = ?
                </div>
                <div className="text-sm opacity-80 mt-2">
                  {drillIndex + 1} / {maxTable}
                </div>
              </div>

              <div className="flex gap-3 items-center w-full max-w-sm">
                <input
                  type="number"
                  value={drillAnswer}
                  onChange={(e) => setDrillAnswer(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && !drillFeedback && checkDrillAnswer()
                  }
                  className="flex-1 border border-border rounded-lg px-4 py-3 text-2xl text-center bg-background focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="?"
                  data-ocid="mult.drill_input"
                />
                {!drillFeedback ? (
                  <Button
                    onClick={checkDrillAnswer}
                    className="px-6 py-3"
                    data-ocid="mult.drill_check_button"
                  >
                    {t("check_answer")}
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      setDrillAnswer("");
                      setDrillFeedback(null);
                      setDrillIndex((i) => (i + 1) % maxTable);
                    }}
                    className="px-6 py-3"
                    data-ocid="mult.drill_next_button"
                  >
                    →
                  </Button>
                )}
              </div>

              {drillFeedback === "correct" && (
                <div
                  className="text-green-500 text-2xl font-bold animate-bounce"
                  data-ocid="mult.drill_correct_state"
                >
                  ✅ {t("quiz_correct")} +5 ⭐
                </div>
              )}
              {drillFeedback === "wrong" && (
                <div
                  className="text-red-500 text-xl font-bold"
                  data-ocid="mult.drill_error_state"
                >
                  ❌ {drillTable} × {drillIndex + 1} ={" "}
                  {drillTable * (drillIndex + 1)}
                </div>
              )}

              <Progress
                value={(drillIndex / maxTable) * 100}
                className="w-full max-w-sm h-3"
                data-ocid="mult.drill_progress"
              />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
