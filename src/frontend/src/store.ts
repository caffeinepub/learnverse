import type {
  BadgeLevel,
  ContentVisit,
  GameResult,
  Profile,
  QuizResult,
  SpacedRepItem,
  WrongAnswer,
} from "./types";

const KEYS = {
  profiles: "learnverse_profiles",
  currentUser: "learnverse_current_user",
  quizResults: "learnverse_quiz_results",
  gameResults: "learnverse_game_results",
  audio: "learnverse_audio",
  adminAuth: "learnverse_admin_auth",
};

export function getProfiles(): Profile[] {
  try {
    return JSON.parse(localStorage.getItem(KEYS.profiles) || "[]");
  } catch {
    return [];
  }
}

export function saveProfile(profile: Profile): void {
  const profiles = getProfiles();
  const idx = profiles.findIndex(
    (p) => p.studentNumber === profile.studentNumber,
  );
  if (idx >= 0) profiles[idx] = profile;
  else profiles.push(profile);
  localStorage.setItem(KEYS.profiles, JSON.stringify(profiles));
}

export function getProfileByStudentNumber(num: string): Profile | null {
  return getProfiles().find((p) => p.studentNumber === num) || null;
}

export function getCurrentUser(): Profile | null {
  const num = localStorage.getItem(KEYS.currentUser);
  if (!num) return null;
  return getProfileByStudentNumber(num);
}

export function setCurrentUser(studentNumber: string): void {
  localStorage.setItem(KEYS.currentUser, studentNumber);
}

export function updatePoints(studentNumber: string, points: number): void {
  const p = getProfileByStudentNumber(studentNumber);
  if (p) {
    p.totalPoints += points;
    saveProfile(p);
  }
}

export function getQuizResults(): QuizResult[] {
  try {
    return JSON.parse(localStorage.getItem(KEYS.quizResults) || "[]");
  } catch {
    return [];
  }
}

export function saveQuizResult(result: QuizResult): void {
  const results = getQuizResults();
  results.push(result);
  localStorage.setItem(KEYS.quizResults, JSON.stringify(results));
}

export function getGameResults(): GameResult[] {
  try {
    return JSON.parse(localStorage.getItem(KEYS.gameResults) || "[]");
  } catch {
    return [];
  }
}

export function saveGameResult(result: GameResult): void {
  const results = getGameResults();
  results.push(result);
  localStorage.setItem(KEYS.gameResults, JSON.stringify(results));
}

export function getAudioUrls(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(KEYS.audio) || "{}");
  } catch {
    return {};
  }
}

export function setAudioUrl(category: string, url: string): void {
  const urls = getAudioUrls();
  urls[category] = url;
  localStorage.setItem(KEYS.audio, JSON.stringify(urls));
}

export function getAdminAuth(): boolean {
  return localStorage.getItem(KEYS.adminAuth) === "true";
}

export function setAdminAuth(val: boolean): void {
  localStorage.setItem(KEYS.adminAuth, val ? "true" : "false");
}

export function getBadgeLevel(points: number): BadgeLevel {
  if (points >= 1000) return 5;
  if (points >= 600) return 4;
  if (points >= 300) return 3;
  if (points >= 100) return 2;
  return 1;
}

export function generateStudentNumber(): string {
  let num = "";
  for (let i = 0; i < 16; i++) num += Math.floor(Math.random() * 10).toString();
  return num;
}

export function playAudio(category: string): void {
  const urls = getAudioUrls();
  const url = urls[category];
  if (url) {
    try {
      const audio = new Audio(url);
      audio.play().catch(() => {});
    } catch {}
    return;
  }
  try {
    const ctx = new (
      window.AudioContext || (window as any).webkitAudioContext
    )();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (category === "correct_answer") {
      osc.frequency.setValueAtTime(523, ctx.currentTime);
      osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.4);
    } else if (category === "wrong_answer") {
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.type = "sawtooth";
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    } else if (category === "game_end" || category === "reward") {
      [523, 659, 784, 1047].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.25, ctx.currentTime + i * 0.1);
        g.gain.exponentialRampToValueAtTime(
          0.001,
          ctx.currentTime + i * 0.1 + 0.3,
        );
        o.start(ctx.currentTime + i * 0.1);
        o.stop(ctx.currentTime + i * 0.1 + 0.3);
      });
    } else if (category === "game_start") {
      // Rising two-tone "ready" sound
      osc.frequency.setValueAtTime(392, ctx.currentTime);
      osc.frequency.setValueAtTime(523, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.45);
    } else if (category === "welcome") {
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.setValueAtTime(554, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.5);
    }
  } catch {}
}

export function hasPlayedQuizToday(studentNumber: string): boolean {
  const key = `learnverse_quiz_today_${studentNumber}`;
  const val = localStorage.getItem(key);
  return val === new Date().toDateString();
}

export function markQuizPlayedToday(studentNumber: string): void {
  const key = `learnverse_quiz_today_${studentNumber}`;
  localStorage.setItem(key, new Date().toDateString());
}

export function getReadTopics(studentNumber: string): string[] {
  try {
    return JSON.parse(
      localStorage.getItem(`learnverse_read_${studentNumber}`) || "[]",
    );
  } catch {
    return [];
  }
}

export function markTopicRead(studentNumber: string, topicKey: string): void {
  const read = getReadTopics(studentNumber);
  if (!read.includes(topicKey)) {
    read.push(topicKey);
    localStorage.setItem(
      `learnverse_read_${studentNumber}`,
      JSON.stringify(read),
    );
  }
}

// Streak
export function getStreak(studentNumber: string): {
  current: number;
  lastDate: string;
} {
  try {
    return JSON.parse(
      localStorage.getItem(`learnverse_streak_${studentNumber}`) ||
        '{"current":0,"lastDate":""}',
    );
  } catch {
    return { current: 0, lastDate: "" };
  }
}

export function updateStreak(studentNumber: string): void {
  const streak = getStreak(studentNumber);
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (streak.lastDate === today) return;
  if (streak.lastDate === yesterday) {
    streak.current += 1;
  } else {
    streak.current = 1;
  }
  streak.lastDate = today;
  localStorage.setItem(
    `learnverse_streak_${studentNumber}`,
    JSON.stringify(streak),
  );
}

// Wrong answers
export function getWrongAnswers(studentNumber: string): WrongAnswer[] {
  try {
    return JSON.parse(
      localStorage.getItem(`learnverse_wrong_${studentNumber}`) || "[]",
    );
  } catch {
    return [];
  }
}

export function saveWrongAnswer(answer: WrongAnswer): void {
  const list = getWrongAnswers(answer.studentNumber);
  if (!list.find((a) => a.question === answer.question)) {
    list.push(answer);
    localStorage.setItem(
      `learnverse_wrong_${answer.studentNumber}`,
      JSON.stringify(list),
    );
  }
}

export function removeWrongAnswer(studentNumber: string, id: string): void {
  const list = getWrongAnswers(studentNumber).filter((a) => a.id !== id);
  localStorage.setItem(
    `learnverse_wrong_${studentNumber}`,
    JSON.stringify(list),
  );
}

export function clearWrongAnswers(studentNumber: string): void {
  localStorage.removeItem(`learnverse_wrong_${studentNumber}`);
}

// Content visits
export function trackContentVisit(studentNumber: string, page: string): void {
  const key = `learnverse_visits_${studentNumber}`;
  try {
    const visits: Record<string, ContentVisit> = JSON.parse(
      localStorage.getItem(key) || "{}",
    );
    if (!visits[page]) visits[page] = { page, count: 0, lastVisit: "" };
    visits[page].count += 1;
    visits[page].lastVisit = new Date().toISOString();
    localStorage.setItem(key, JSON.stringify(visits));
  } catch {}
}

export function getContentVisits(
  studentNumber: string,
): Record<string, ContentVisit> {
  try {
    return JSON.parse(
      localStorage.getItem(`learnverse_visits_${studentNumber}`) || "{}",
    );
  } catch {
    return {};
  }
}

// Recommendation (store last quiz score)
export function setLastQuizScore(studentNumber: string, pct: number): void {
  localStorage.setItem(`learnverse_lastquiz_${studentNumber}`, String(pct));
}

export function getLastQuizScore(studentNumber: string): number | null {
  const v = localStorage.getItem(`learnverse_lastquiz_${studentNumber}`);
  return v !== null ? Number(v) : null;
}

// Sync timestamps
function getSyncTimestamp(studentNumber: string): string {
  return localStorage.getItem(`learnverse_synced_${studentNumber}`) || "";
}
function setSyncTimestamp(studentNumber: string, ts: string): void {
  localStorage.setItem(`learnverse_synced_${studentNumber}`, ts);
}

// Backend sync
export async function syncToBackend(studentNumber: string): Promise<void> {
  try {
    const { createActorWithConfig } = await import("./config");
    const backend = await createActorWithConfig();
    const profile = getProfileByStudentNumber(studentNumber);
    const quizResults = getQuizResults().filter(
      (r) => r.studentNumber === studentNumber,
    );
    const gameResults = getGameResults().filter(
      (r) => r.studentNumber === studentNumber,
    );
    if (profile) {
      const now = new Date().toISOString();
      await (backend as any).saveStudentData(
        studentNumber,
        JSON.stringify(profile),
        JSON.stringify(quizResults),
        JSON.stringify(gameResults),
        now,
      );
      setSyncTimestamp(studentNumber, now);
    }
  } catch (_) {}
}

export async function getStudentDataFromBackend(
  studentNumber: string,
): Promise<{
  profile: Profile | null;
  quizResults: QuizResult[];
  gameResults: GameResult[];
  lastSyncedAt?: string;
}> {
  try {
    const { createActorWithConfig } = await import("./config");
    const backend = await createActorWithConfig();
    const data = await backend.getStudentData(studentNumber);
    if (!data) return { profile: null, quizResults: [], gameResults: [] };
    return {
      profile: JSON.parse(data.profileJson),
      quizResults: JSON.parse(data.quizResultsJson),
      gameResults: JSON.parse(data.gameResultsJson),
      lastSyncedAt: (data as any).lastSyncedAt || "",
    };
  } catch (_) {
    return { profile: null, quizResults: [], gameResults: [] };
  }
}

export async function syncFromBackendIfNewer(
  studentNumber: string,
): Promise<void> {
  try {
    const backendData = await getStudentDataFromBackend(studentNumber);
    if (!backendData.profile) return;

    const localSyncTs = getSyncTimestamp(studentNumber);
    const backendSyncTs = backendData.lastSyncedAt || "";

    // Merge quiz results: dedup by date
    const localQuizResults = getQuizResults().filter(
      (r) => r.studentNumber === studentNumber,
    );
    const allQuiz = [...localQuizResults, ...backendData.quizResults];
    const quizMap = new Map<string, QuizResult>();
    for (const q of allQuiz) quizMap.set(q.date, q);
    const mergedQuiz = [...quizMap.values()].sort((a, b) =>
      a.date < b.date ? -1 : 1,
    );

    // Merge game results: dedup by date+gameType
    const localGameResults = getGameResults().filter(
      (r) => r.studentNumber === studentNumber,
    );
    const allGame = [...localGameResults, ...backendData.gameResults];
    const gameMap = new Map<string, GameResult>();
    for (const g of allGame) gameMap.set(`${g.date}_${g.gameType}`, g);
    const mergedGame = [...gameMap.values()].sort((a, b) =>
      a.date < b.date ? -1 : 1,
    );

    // Save merged results
    const allQuizResults = getQuizResults().filter(
      (r) => r.studentNumber !== studentNumber,
    );
    localStorage.setItem(
      KEYS.quizResults,
      JSON.stringify([...allQuizResults, ...mergedQuiz]),
    );

    const allGameResults = getGameResults().filter(
      (r) => r.studentNumber !== studentNumber,
    );
    localStorage.setItem(
      KEYS.gameResults,
      JSON.stringify([...allGameResults, ...mergedGame]),
    );

    // Decide which profile to keep
    const localProfile = getProfileByStudentNumber(studentNumber);
    const useBackend =
      backendSyncTs > localSyncTs ||
      !localProfile ||
      (localProfile &&
        backendData.profile.totalPoints > localProfile.totalPoints);

    if (useBackend) {
      saveProfile(backendData.profile);
      if (backendSyncTs) setSyncTimestamp(studentNumber, backendSyncTs);
    }
  } catch (_) {}
}

// Daily Goals
export interface DailyGoals {
  date: string;
  quizDone: boolean;
  contentReads: number; // count for today
  bonusAwarded: boolean;
}

export function getDailyGoals(studentNumber: string): DailyGoals {
  const today = new Date().toDateString();
  const key = `learnverse_dailygoals_${studentNumber}`;
  try {
    const stored: DailyGoals = JSON.parse(localStorage.getItem(key) || "null");
    if (stored && stored.date === today) return stored;
  } catch {}
  return { date: today, quizDone: false, contentReads: 0, bonusAwarded: false };
}

export function updateDailyGoals(
  studentNumber: string,
  update: Partial<Omit<DailyGoals, "date">>,
): DailyGoals {
  const goals = getDailyGoals(studentNumber);
  const updated = { ...goals, ...update };
  const key = `learnverse_dailygoals_${studentNumber}`;
  localStorage.setItem(key, JSON.stringify(updated));
  return updated;
}

export function incrementDailyContentRead(studentNumber: string): DailyGoals {
  const goals = getDailyGoals(studentNumber);
  return updateDailyGoals(studentNumber, {
    contentReads: goals.contentReads + 1,
  });
}

// Parent Message Card
export function saveParentMessage(
  studentNumber: string,
  message: string,
): void {
  localStorage.setItem(
    `learnverse_parentmsg_${studentNumber}`,
    JSON.stringify({ message, date: new Date().toISOString(), read: false }),
  );
}

export function getParentMessage(
  studentNumber: string,
): { message: string; date: string; read: boolean } | null {
  try {
    const val = localStorage.getItem(`learnverse_parentmsg_${studentNumber}`);
    return val ? JSON.parse(val) : null;
  } catch {
    return null;
  }
}

export function markParentMessageRead(studentNumber: string): void {
  const msg = getParentMessage(studentNumber);
  if (msg)
    localStorage.setItem(
      `learnverse_parentmsg_${studentNumber}`,
      JSON.stringify({ ...msg, read: true }),
    );
}

export function clearParentMessage(studentNumber: string): void {
  localStorage.removeItem(`learnverse_parentmsg_${studentNumber}`);
}

// Spaced Repetition
export function getSpacedRepQueue(studentNumber: string): SpacedRepItem[] {
  try {
    return JSON.parse(
      localStorage.getItem(`learnverse_sr_${studentNumber}`) || "[]",
    );
  } catch {
    return [];
  }
}

function saveSpacedRepQueue(
  studentNumber: string,
  queue: SpacedRepItem[],
): void {
  localStorage.setItem(`learnverse_sr_${studentNumber}`, JSON.stringify(queue));
}

function getTodayStr(): string {
  return new Date().toISOString().split("T")[0];
}

export function addToSpacedRep(
  item: Omit<SpacedRepItem, "id" | "interval" | "nextReviewDate" | "addedAt">,
): void {
  const queue = getSpacedRepQueue(item.studentNumber);
  if (queue.find((q) => q.question === item.question)) return; // already queued
  const today = getTodayStr();
  const newItem: SpacedRepItem = {
    ...item,
    id: Date.now().toString(),
    interval: 1,
    nextReviewDate: today, // due immediately
    addedAt: new Date().toISOString(),
  };
  queue.push(newItem);
  saveSpacedRepQueue(item.studentNumber, queue);
}

export function getDueSpacedItems(studentNumber: string): SpacedRepItem[] {
  const today = getTodayStr();
  return getSpacedRepQueue(studentNumber).filter(
    (item) => item.nextReviewDate <= today,
  );
}

export function markSpacedRepCorrect(
  studentNumber: string,
  itemId: string,
): void {
  const queue = getSpacedRepQueue(studentNumber);
  const idx = queue.findIndex((q) => q.id === itemId);
  if (idx === -1) return;
  const item = queue[idx];
  const newInterval = item.interval * 2;
  if (newInterval >= 8) {
    // graduated - remove from queue
    queue.splice(idx, 1);
  } else {
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + newInterval);
    queue[idx] = {
      ...item,
      interval: newInterval,
      nextReviewDate: nextDate.toISOString().split("T")[0],
    };
  }
  saveSpacedRepQueue(studentNumber, queue);
}

export function markSpacedRepWrong(
  studentNumber: string,
  itemId: string,
): void {
  const queue = getSpacedRepQueue(studentNumber);
  const idx = queue.findIndex((q) => q.id === itemId);
  if (idx === -1) return;
  queue[idx] = { ...queue[idx], interval: 1, nextReviewDate: getTodayStr() };
  saveSpacedRepQueue(studentNumber, queue);
}

// ===== CLASS ASSIGNMENTS =====

export interface Assignment {
  id: string;
  classKey: string;
  title: string;
  description: string;
  section: string; // e.g. 'quiz', 'stories', 'math-practice', etc.
  dueDate: string; // ISO date string
  createdAt: string;
  completedBy: string[]; // student numbers
}

const ASSIGNMENTS_KEY = "learnverse_assignments";

export function getAllAssignments(): Assignment[] {
  try {
    return JSON.parse(localStorage.getItem(ASSIGNMENTS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveAllAssignments(assignments: Assignment[]): void {
  localStorage.setItem(ASSIGNMENTS_KEY, JSON.stringify(assignments));
}

export function getAssignmentsForClass(classKey: string): Assignment[] {
  return getAllAssignments().filter((a) => a.classKey === classKey);
}

export function createAssignment(
  data: Omit<Assignment, "id" | "createdAt" | "completedBy">,
): Assignment {
  const assignments = getAllAssignments();
  const newAssignment: Assignment = {
    ...data,
    id: `asgn_${Date.now()}`,
    createdAt: new Date().toISOString(),
    completedBy: [],
  };
  assignments.push(newAssignment);
  saveAllAssignments(assignments);
  return newAssignment;
}

export function deleteAssignment(id: string): void {
  saveAllAssignments(getAllAssignments().filter((a) => a.id !== id));
}

export function markAssignmentCompleted(
  assignmentId: string,
  studentNumber: string,
): void {
  const assignments = getAllAssignments();
  const idx = assignments.findIndex((a) => a.id === assignmentId);
  if (idx === -1) return;
  if (!assignments[idx].completedBy.includes(studentNumber)) {
    assignments[idx].completedBy.push(studentNumber);
    saveAllAssignments(assignments);
  }
}

export function getAssignmentsForStudent(studentNumber: string): Assignment[] {
  // Find all classes this student belongs to
  const allAssignments = getAllAssignments();
  const classKeys = Object.keys(localStorage)
    .filter((k) => k.startsWith("learnverse_class_"))
    .map((k) => k.replace("learnverse_class_", ""));

  const studentClassKeys = classKeys.filter((ck) => {
    try {
      const cls = JSON.parse(
        localStorage.getItem(`learnverse_class_${ck}`) || "{}",
      );
      return cls.studentNumbers?.includes(studentNumber);
    } catch {
      return false;
    }
  });

  return allAssignments.filter((a) => studentClassKeys.includes(a.classKey));
}

export function getPendingAssignmentsForStudent(
  studentNumber: string,
): Assignment[] {
  return getAssignmentsForStudent(studentNumber).filter(
    (a) => !a.completedBy.includes(studentNumber),
  );
}

// Topic performance stats
export type TopicStats = {
  science: { correct: number; total: number };
  history: { correct: number; total: number };
  geography: { correct: number; total: number };
  math: { correct: number; total: number };
  general: { correct: number; total: number };
};

function topicStatsKey(studentNumber: string): string {
  return `learnverse_topic_stats_${studentNumber}`;
}

export function getTopicStats(studentNumber: string): TopicStats {
  try {
    return (
      JSON.parse(
        localStorage.getItem(topicStatsKey(studentNumber)) || "null",
      ) || {
        science: { correct: 0, total: 0 },
        history: { correct: 0, total: 0 },
        geography: { correct: 0, total: 0 },
        math: { correct: 0, total: 0 },
        general: { correct: 0, total: 0 },
      }
    );
  } catch {
    return {
      science: { correct: 0, total: 0 },
      history: { correct: 0, total: 0 },
      geography: { correct: 0, total: 0 },
      math: { correct: 0, total: 0 },
      general: { correct: 0, total: 0 },
    };
  }
}

export function saveTopicStats(
  studentNumber: string,
  topic: keyof TopicStats,
  correct: number,
  total: number,
): void {
  const stats = getTopicStats(studentNumber);
  stats[topic].correct += correct;
  stats[topic].total += total;
  localStorage.setItem(topicStatsKey(studentNumber), JSON.stringify(stats));
}

// Teacher-Parent Messages
export interface TeacherMessage {
  id: string;
  studentNumber: string;
  from: string;
  fromRole: "teacher" | "parent";
  message: string;
  date: string;
  read: boolean;
}

export function getTeacherMessages(studentNumber: string): TeacherMessage[] {
  try {
    return JSON.parse(
      localStorage.getItem(`learnverse_tmsg_${studentNumber}`) || "[]",
    );
  } catch {
    return [];
  }
}

export function saveTeacherMessage(
  msg: Omit<TeacherMessage, "id" | "date" | "read">,
): void {
  const msgs = getTeacherMessages(msg.studentNumber);
  msgs.push({
    ...msg,
    id: `tmsg_${Date.now()}`,
    date: new Date().toISOString(),
    read: false,
  });
  localStorage.setItem(
    `learnverse_tmsg_${msg.studentNumber}`,
    JSON.stringify(msgs),
  );
}

export function markTeacherMessageRead(
  studentNumber: string,
  id: string,
): void {
  const msgs = getTeacherMessages(studentNumber);
  const idx = msgs.findIndex((m) => m.id === id);
  if (idx >= 0) {
    msgs[idx].read = true;
    localStorage.setItem(
      `learnverse_tmsg_${studentNumber}`,
      JSON.stringify(msgs),
    );
  }
}
