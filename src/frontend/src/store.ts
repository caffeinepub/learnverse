import type { BadgeLevel, GameResult, Profile, QuizResult } from "./types";

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
  // Web Audio API fallback
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

// Günlük quiz kontrol
export function hasPlayedQuizToday(studentNumber: string): boolean {
  const key = `learnverse_quiz_today_${studentNumber}`;
  const val = localStorage.getItem(key);
  return val === new Date().toDateString();
}

export function markQuizPlayedToday(studentNumber: string): void {
  const key = `learnverse_quiz_today_${studentNumber}`;
  localStorage.setItem(key, new Date().toDateString());
}

// Kültür sayfası okuma takibi
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
      await backend.saveStudentData(
        studentNumber,
        JSON.stringify(profile),
        JSON.stringify(quizResults),
        JSON.stringify(gameResults),
      );
    }
  } catch (_) {}
}

export async function getStudentDataFromBackend(
  studentNumber: string,
): Promise<{
  profile: Profile | null;
  quizResults: QuizResult[];
  gameResults: GameResult[];
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
    };
  } catch (_) {
    return { profile: null, quizResults: [], gameResults: [] };
  }
}
