export type Level = "okul_oncesi" | "ilkokul" | "ortaokul";
export type BadgeLevel = 1 | 2 | 3 | 4 | 5;

export const BADGE_NAMES = [
  "Yıldız Tohumu",
  "Kaşif",
  "Maceracı",
  "Uzman",
  "Efsane",
];
export const BADGE_EMOJIS = ["🌱", "🔭", "⚔️", "🎓", "🏆"];
export const LEVEL_NAMES: Record<Level, string> = {
  okul_oncesi: "Okul Öncesi",
  ilkokul: "İlkokul",
  ortaokul: "Ortaokul",
};
export const AVATARS = [
  "🐯",
  "🦁",
  "🐸",
  "🦊",
  "🐧",
  "🦋",
  "🐬",
  "🦅",
  "🧙",
  "🦸",
  "🧝",
  "🤖",
  "👾",
  "🦄",
  "🐉",
  "🌟",
];

export interface Profile {
  studentNumber: string;
  username: string;
  avatarIndex: number;
  level: Level;
  totalPoints: number;
  createdAt: string;
}

export interface QuizResult {
  studentNumber: string;
  date: string;
  score: number;
  total: number;
  correct: number;
  level: Level;
}

export interface GameResult {
  studentNumber: string;
  gameType: string;
  score: number;
  date: string;
}

export const AUDIO_CATEGORIES = [
  { key: "correct_answer", label: "Doğru Cevap" },
  { key: "wrong_answer", label: "Yanlış Cevap" },
  { key: "level_up", label: "Seviye Atladı" },
  { key: "countdown", label: "Geri Sayım" },
  { key: "game_start", label: "Oyun Başlangıç" },
  { key: "game_end", label: "Oyun Bitiş" },
  { key: "motivation", label: "Motivasyon" },
  { key: "narrator_general", label: "Anlatıcı Genel" },
  { key: "narrator_question", label: "Anlatıcı Soru" },
  { key: "reward", label: "Ödül Kazanma" },
  { key: "error_alert", label: "Hata Uyarısı" },
  { key: "welcome", label: "Hoş Geldin" },
  { key: "transition", label: "Geçiş Sesi" },
];

export interface Question {
  text: string;
  choices: string[];
  correctIndex: number;
  type: "multiple" | "truefalse";
}
