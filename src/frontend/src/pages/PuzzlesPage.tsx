import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { puzzlesEn } from "../data/puzzlesEn";
import { puzzlesEs } from "../data/puzzlesEs";
import { puzzlesFr } from "../data/puzzlesFr";
import { useLanguage } from "../i18n/LanguageContext";
import {
  getCurrentUser,
  getReadTopics,
  incrementDailyContentRead,
  markTopicRead,
  trackContentVisit,
  updatePoints,
} from "../store";

type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

interface Puzzle {
  key: string;
  question: string;
  emoji: string;
  choices: string[];
  correct: number;
}

const puzzles: Record<Level, Puzzle[]> = {
  okul_oncesi: [
    {
      key: "puzzle_renk_1",
      question: "Güneş hangi renktir?",
      emoji: "☀️",
      choices: ["Mavi", "Kırmızı", "Sarı", "Yeşil"],
      correct: 2,
    },
    {
      key: "puzzle_hayvan_1",
      question: "Hangisi uçar?",
      emoji: "🐦",
      choices: ["Kedi", "Kuş", "Balık", "Köpek"],
      correct: 1,
    },
    {
      key: "puzzle_sayi_1",
      question: "2 + 3 kaçtır?",
      emoji: "🔢",
      choices: ["4", "6", "5", "7"],
      correct: 2,
    },
    {
      key: "puzzle_meyve_1",
      question: "Hangisi bir meyve değil?",
      emoji: "🍎",
      choices: ["Elma", "Muz", "Havuç", "Üzüm"],
      correct: 2,
    },
    {
      key: "puzzle_sekil_1",
      question: "Tekerlek hangi şekle benzer?",
      emoji: "⭕",
      choices: ["Kare", "Daire", "Üçgen", "Dikdörtgen"],
      correct: 1,
    },
    {
      key: "puzzle_renk_2",
      question: "Gökyüzü hangi renktir?",
      emoji: "🌤️",
      choices: ["Yeşil", "Mavi", "Sarı", "Kırmızı"],
      correct: 1,
    },
    {
      key: "puzzle_hayvan_2",
      question: "Hangi hayvan yumurta yumurtlar?",
      emoji: "🐔",
      choices: ["Kedi", "Köpek", "Tavuk", "At"],
      correct: 2,
    },
    {
      key: "puzzle_sayi_2",
      question: "10 - 4 kaçtır?",
      emoji: "🔢",
      choices: ["5", "6", "7", "8"],
      correct: 1,
    },
    {
      key: "puzzle_sekil_2",
      question: "Üç kenarı olan şekil hangisidir?",
      emoji: "🔺",
      choices: ["Kare", "Daire", "Üçgen", "Dikdörtgen"],
      correct: 2,
    },
    {
      key: "puzzle_meyve_2",
      question: "Sarı renkli hangi meyvedir?",
      emoji: "🍌",
      choices: ["Elma", "Çilek", "Muz", "Üzüm"],
      correct: 2,
    },
    {
      key: "puzzle_hayvan_3",
      question: "Hangisi denizde yaşar?",
      emoji: "🐟",
      choices: ["Kedi", "Balık", "Kuş", "Köpek"],
      correct: 1,
    },
    {
      key: "puzzle_renk_3",
      question: "Elma genellikle hangi renktedir?",
      emoji: "🍎",
      choices: ["Mavi", "Sarı", "Mor", "Kırmızı"],
      correct: 3,
    },
    {
      key: "puzzle_sayi_3",
      question: "1 + 1 kaçtır?",
      emoji: "✌️",
      choices: ["3", "1", "2", "4"],
      correct: 2,
    },
    {
      key: "puzzle_t9_o1",
      question: "Ben her sabah doğarım, her akşam batarım. Ben kimim?",
      emoji: "☀️",
      choices: ["Ay", "Güneş", "Yıldız", "Bulut"],
      correct: 1,
    },
    {
      key: "puzzle_t9_o2",
      question: "Dişleri var ama ısırmaz, ağzı var ama konuşmaz. Bu nedir?",
      emoji: "⚙️",
      choices: ["Testere", "Tarak", "Çatal", "Kaşık"],
      correct: 1,
    },
    {
      key: "puzzle_t9_o3",
      question: "Evi var ama kapısı yok. Her zaman içinde taşır. Bu nedir?",
      emoji: "🐌",
      choices: ["Kaplumbağa", "Salyangoz", "Yengeç", "İstakoz"],
      correct: 1,
    },
    {
      key: "puzzle_t9_o4",
      question: "Koşarım ama bacağım yok, akarım ama suyum değilim. Ben kimim?",
      emoji: "⏰",
      choices: ["Rüzgar", "Zaman", "Nehir", "Işık"],
      correct: 1,
    },
    {
      key: "puzzle_t9_o5",
      question: "Kaç tane mevsim vardır?",
      emoji: "🍂",
      choices: ["2", "3", "4", "5"],
      correct: 2,
    },
    {
      key: "puzzle_t9_o6",
      question: "1, 3, 5, 7, ... Sıradaki sayı nedir?",
      emoji: "🔢",
      choices: ["8", "9", "10", "11"],
      correct: 1,
    },
    {
      key: "puzzle_oo_new1",
      question: "Ben güneşten sonra gelir, yıldızları getiririm. Ben kimim?",
      emoji: "🌙",
      choices: ["Sabah", "Gece", "Öğle", "Akşam"],
      correct: 3,
    },
    {
      key: "puzzle_oo_new2",
      question: "Dört bacağım var ama yürüyemem. Ben neyim?",
      emoji: "🪑",
      choices: ["Köpek", "Masa", "At", "Sandalye"],
      correct: 3,
    },
    {
      key: "puzzle_oo_new3",
      question: "Her sabah kahvaltıda içilir, beyaz renktedir. Ben neyim?",
      emoji: "🥛",
      choices: ["Su", "Süt", "Çay", "Meyve suyu"],
      correct: 1,
    },
    {
      key: "puzzle_oo_new4",
      question: "Havada uçarım, kanatlarım var. Çiçekleri severim. Ben kimim?",
      emoji: "🦋",
      choices: ["Kuş", "Arı", "Kelebek", "Sinek"],
      correct: 2,
    },
    {
      key: "puzzle_oo_new5",
      question: "Kışın yağan beyaz şey nedir?",
      emoji: "❄️",
      choices: ["Yağmur", "Kar", "Dolu", "Sis"],
      correct: 1,
    },
    {
      key: "puzzle_oo_new6",
      question: "Hangi hayvanın boynuzları vardır?",
      emoji: "🐂",
      choices: ["Kedi", "Köpek", "İnek", "Tavuk"],
      correct: 2,
    },
  ],
  ilkokul: [
    {
      key: "puzzle_matematik_1",
      question: "7 × 8 kaçtır?",
      emoji: "🔢",
      choices: ["54", "56", "58", "64"],
      correct: 1,
    },
    {
      key: "puzzle_cografi_1",
      question: "Türkiye'nin başkenti neresidir?",
      emoji: "🏛️",
      choices: ["İstanbul", "İzmir", "Ankara", "Bursa"],
      correct: 2,
    },
    {
      key: "puzzle_mantik_1",
      question: "Bir haftada kaç gün vardır?",
      emoji: "📅",
      choices: ["5", "6", "8", "7"],
      correct: 3,
    },
    {
      key: "puzzle_bilim_1",
      question:
        "Bitkilerin güneş ışığını besin üretmek için kullanmasına ne denir?",
      emoji: "🌿",
      choices: ["Solunum", "Büyüme", "Fotosentez", "Uyku"],
      correct: 2,
    },
    {
      key: "puzzle_dilbilgisi_1",
      question: "'Koşmak' hangi sözcük türüdür?",
      emoji: "📝",
      choices: ["İsim", "Sıfat", "Zarf", "Fiil"],
      correct: 3,
    },
    {
      key: "puzzle_matematik_2",
      question: "9 × 6 kaçtır?",
      emoji: "🔢",
      choices: ["54", "48", "56", "63"],
      correct: 0,
    },
    {
      key: "puzzle_matematik_3",
      question: "48 ÷ 6 kaçtır?",
      emoji: "➗",
      choices: ["7", "8", "9", "6"],
      correct: 1,
    },
    {
      key: "puzzle_cografi_2",
      question: "Türkiye'nin en uzun nehri hangisidir?",
      emoji: "🏞️",
      choices: ["Sakarya", "Kızılırmak", "Fırat", "Dicle"],
      correct: 1,
    },
    {
      key: "puzzle_bilim_2",
      question: "Hangi gezegen Güneş'e en yakındır?",
      emoji: "🪐",
      choices: ["Venüs", "Mars", "Merkür", "Dünya"],
      correct: 2,
    },
    {
      key: "puzzle_dilbilgisi_2",
      question: "Cümledeki özne ne görevdedir?",
      emoji: "📝",
      choices: [
        "İşi yapar",
        "Niteliği anlatır",
        "Yeri belirtir",
        "Nesneyi tanımlar",
      ],
      correct: 0,
    },
    {
      key: "puzzle_matematik_4",
      question: "125'in yarısı kaçtır?",
      emoji: "🔢",
      choices: ["60", "62", "62.5", "65"],
      correct: 2,
    },
    {
      key: "puzzle_bilim_3",
      question: "İnsan vücudunda kaç kemik vardır?",
      emoji: "🦴",
      choices: ["186", "206", "226", "246"],
      correct: 1,
    },
    {
      key: "puzzle_cografi_3",
      question: "Dünyanın en yüksek dağı hangisidir?",
      emoji: "⛰️",
      choices: ["K2", "Everest", "Kilimanjaro", "Elbrus"],
      correct: 1,
    },
    {
      key: "puzzle_t9_i1",
      question:
        "Bir çobanın 17 koyunu var. Biri hariç hepsi kaçtı. Kaç koyun kaldı?",
      emoji: "🐑",
      choices: ["0", "1", "16", "17"],
      correct: 1,
    },
    {
      key: "puzzle_t9_i2",
      question: "Ankara'dan İstanbul'a giden trenin şoförünün adı nedir?",
      emoji: "🚂",
      choices: [
        "Ahmet",
        "Mehmet",
        "Trenin şoförü olmaz, makinisti var",
        "Bilinmez",
      ],
      correct: 2,
    },
    {
      key: "puzzle_t9_i3",
      question: "Türkiye'nin en büyük gölü hangisidir?",
      emoji: "🌊",
      choices: ["Tuz Gölü", "Van Gölü", "Eğirdir Gölü", "Burdur Gölü"],
      correct: 1,
    },
    {
      key: "puzzle_t9_i4",
      question:
        "3 kedinin 3 fareyi yakalamak için 3 dakikaya ihtiyacı var. 100 kedi, 100 fareyi kaç dakikada yakalar?",
      emoji: "🐱",
      choices: ["100", "33", "3", "300"],
      correct: 2,
    },
    {
      key: "puzzle_t9_i5",
      question: "Türk alfabesinde kaç harf vardır?",
      emoji: "🔤",
      choices: ["26", "28", "29", "31"],
      correct: 2,
    },
    {
      key: "puzzle_t9_i6",
      question: "Hangi sayı hem çift hem de asal sayıdır?",
      emoji: "🔢",
      choices: ["1", "2", "4", "6"],
      correct: 1,
    },
    {
      key: "puzzle_il_new1",
      question: "Ne kadar çok alırsan, geride o kadar çok kalır. Ben neyim?",
      emoji: "🕳️",
      choices: ["Toprak", "Çukur", "Taş", "Su"],
      correct: 1,
    },
    {
      key: "puzzle_il_new2",
      question:
        "Taşırsın ama suyu yoktur, sesin vardır ama dili yoktur. Ben neyim?",
      emoji: "🥁",
      choices: ["Deniz", "Çan", "Davul", "Kanal"],
      correct: 2,
    },
    {
      key: "puzzle_il_new3",
      question: "Hangi ay 28 veya 29 gün çeker?",
      emoji: "📅",
      choices: ["Ocak", "Şubat", "Mart", "Nisan"],
      correct: 1,
    },
    {
      key: "puzzle_il_new4",
      question: "Düşündükçe büyür, söyledikçe küçülür. Ben neyim?",
      emoji: "🤫",
      choices: ["Sır", "Hayal", "Düş", "Bilgi"],
      correct: 0,
    },
    {
      key: "puzzle_matematik_ilk_new1",
      question: "12 × 12 kaçtır?",
      emoji: "🔢",
      choices: ["132", "144", "156", "124"],
      correct: 1,
    },
    {
      key: "puzzle_tarih_ilk_new1",
      question: "Cumhuriyet Bayramı hangi tarihte kutlanır?",
      emoji: "🎉",
      choices: ["23 Nisan", "19 Mayıs", "29 Ekim", "30 Ağustos"],
      correct: 2,
    },
    {
      key: "puzzle_bilim_ilk_new1",
      question: "Güneş sistemi kaç gezegenden oluşur?",
      emoji: "🪐",
      choices: ["7", "8", "9", "10"],
      correct: 1,
    },
  ],
  ortaokul: [
    {
      key: "puzzle_fizik_1",
      question: "İşığın boşlukta hızı yaklaşık kaç km/s'dir?",
      emoji: "💡",
      choices: ["100.000", "300.000", "500.000", "1.000.000"],
      correct: 1,
    },
    {
      key: "puzzle_tarih_1",
      question: "Türkiye Cumhuriyeti hangi yılda kuruldu?",
      emoji: "🏛️",
      choices: ["1919", "1920", "1923", "1925"],
      correct: 2,
    },
    {
      key: "puzzle_kimya_1",
      question: "Su molekülünün kimyasal formülü nedir?",
      emoji: "💧",
      choices: ["H3O", "H2O", "HO2", "H2O2"],
      correct: 1,
    },
    {
      key: "puzzle_mantik_2",
      question: "Bir üçgenin iç açıları toplamı kaç derecedir?",
      emoji: "📐",
      choices: ["90°", "270°", "360°", "180°"],
      correct: 3,
    },
    {
      key: "puzzle_biyoloji_1",
      question: "DNA hangi organelde bulunur?",
      emoji: "🔬",
      choices: ["Mitokondri", "Ribozom", "Çekirdek", "Lizozom"],
      correct: 2,
    },
    {
      key: "puzzle_fizik_2",
      question: "Newton'un kaç hareket yasası vardır?",
      emoji: "⚙️",
      choices: ["2", "3", "4", "5"],
      correct: 1,
    },
    {
      key: "puzzle_kimya_2",
      question: "Oksijen elementinin sembolü nedir?",
      emoji: "🧪",
      choices: ["Os", "Ox", "O", "On"],
      correct: 2,
    },
    {
      key: "puzzle_biyoloji_2",
      question: "Fotosentez hangi organelde gerçekleşir?",
      emoji: "🌿",
      choices: ["Mitokondri", "Ribozom", "Kloroplast", "Çekirdek"],
      correct: 2,
    },
    {
      key: "puzzle_matematik_5",
      question: "π (pi) sayısının yaklaşık değeri kaçtır?",
      emoji: "📐",
      choices: ["2.71", "3.14", "1.41", "1.73"],
      correct: 1,
    },
    {
      key: "puzzle_tarih_2",
      question: "Kurtuluş Savaşı hangi yıl başladı?",
      emoji: "🏛️",
      choices: ["1918", "1919", "1921", "1922"],
      correct: 1,
    },
    {
      key: "puzzle_fizik_3",
      question: "Hangi madde hem elektriği hem de ısıyı iyi iletir?",
      emoji: "⚡",
      choices: ["Ahşap", "Plastik", "Bakır", "Cam"],
      correct: 2,
    },
    {
      key: "puzzle_kimya_3",
      question: "Kaç tane doğal element vardır?",
      emoji: "🧬",
      choices: ["82", "92", "102", "112"],
      correct: 1,
    },
    {
      key: "puzzle_tarih_3",
      question: "Osmanlı İmparatorluğu hangi yıl yıkıldı?",
      emoji: "🏯",
      choices: ["1919", "1920", "1922", "1923"],
      correct: 2,
    },
    {
      key: "puzzle_t9_m1",
      question:
        "Bir saat günde 2 dakika geri kalıyorsa, 2 haftada kaç dakika geri kalır?",
      emoji: "⏱️",
      choices: ["14", "24", "28", "30"],
      correct: 2,
    },
    {
      key: "puzzle_t9_m2",
      question: "Hangi kimyasal element simgesi 'Fe' ile gösterilir?",
      emoji: "⚗️",
      choices: ["Fosfor", "Flor", "Demir", "Feriyum"],
      correct: 2,
    },
    {
      key: "puzzle_t9_m3",
      question: "Türkçede 'isim tamlaması' en az kaç sözcükten oluşur?",
      emoji: "📝",
      choices: ["1", "2", "3", "4"],
      correct: 1,
    },
    {
      key: "puzzle_t9_m4",
      question: "Bir üçgenin iç açıları toplamı kaç derecedir?",
      emoji: "📐",
      choices: ["90°", "180°", "270°", "360°"],
      correct: 1,
    },
    {
      key: "puzzle_t9_m5",
      question: "Hangi organ hem sindirimi hem de kan üretimini etkiler?",
      emoji: "🫀",
      choices: ["Kalp", "Böbrek", "Karaciğer", "Dalak"],
      correct: 2,
    },
    {
      key: "puzzle_t9_m6",
      question: "Işık bir ortamdan diğerine geçerken hızı değişirse ne olur?",
      emoji: "💡",
      choices: [
        "Rengi değişir",
        "Şiddeti azalır",
        "Kırılma olur",
        "Yansıma olur",
      ],
      correct: 2,
    },
    {
      key: "puzzle_fizik_ort_new1",
      question: "Sesin havadaki hızı yaklaşık kaç m/s'dir?",
      emoji: "🔊",
      choices: ["144", "340", "500", "1000"],
      correct: 1,
    },
    {
      key: "puzzle_tarih_ort_new1",
      question: "Osmanlı Devleti kaç yıl hüküm sürdü?",
      emoji: "🏰",
      choices: ["400 yıl", "600 yıl", "800 yıl", "1000 yıl"],
      correct: 1,
    },
    {
      key: "puzzle_matematik_ort_new1",
      question: "2^10 (2 üssü 10) kaçtır?",
      emoji: "📐",
      choices: ["512", "1024", "2048", "256"],
      correct: 1,
    },
  ],
};

const levelTabs: { key: Level; label: string }[] = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" },
];

const levelTabsEn: { key: Level; label: string }[] = [
  { key: "okul_oncesi", label: "🌈 Preschool" },
  { key: "ilkokul", label: "📗 Primary" },
  { key: "ortaokul", label: "📘 Middle" },
];

export default function PuzzlesPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const isEn = lang === "en";
  const profile = getCurrentUser();
  const displayPuzzles =
    lang === "fr"
      ? puzzlesFr
      : lang === "es"
        ? puzzlesEs
        : isEn
          ? puzzlesEn
          : puzzles;

  // biome-ignore lint/correctness/useExhaustiveDependencies: one-time mount tracking
  useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "puzzles");
  }, []);
  const [level, setLevel] = useState<Level>(
    (profile?.level as Level) || "ilkokul",
  );
  const [readTopics, setReadTopics] = useState<string[]>(() =>
    profile ? getReadTopics(profile.studentNumber) : [],
  );
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPuzzles = displayPuzzles[level].filter(
    (p) =>
      p.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.choices.join(" ").toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleAnswer = (
    puzzleKey: string,
    choiceIndex: number,
    correctIndex: number,
  ) => {
    if (answers[puzzleKey] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [puzzleKey]: choiceIndex }));
    if (
      choiceIndex === correctIndex &&
      profile &&
      !readTopics.includes(puzzleKey)
    ) {
      markTopicRead(profile.studentNumber, puzzleKey);
      updatePoints(profile.studentNumber, 5);
      incrementDailyContentRead(profile.studentNumber);
      setReadTopics((prev) => [...prev, puzzleKey]);
    }
  };

  const tabs = isEn ? levelTabsEn : levelTabs;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-500 to-orange-500">
      <div className="p-4">
        <Button
          data-ocid="puzzles.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4"
        >
          ← {isEn ? "Back" : "Geri"}
        </Button>
        <h1 className="text-3xl font-black text-white mb-4">
          🧩 {t("puzzles_title")}
        </h1>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.key}
              data-ocid="puzzles.tab"
              onClick={() => {
                setLevel(tab.key);
                setAnswers({});
              }}
              className={`py-3 rounded-2xl font-bold text-xs transition-all ${level === tab.key ? "bg-white text-amber-600" : "bg-white/20 text-white hover:bg-white/30"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Progress indicator */}
        {(() => {
          const total = displayPuzzles[level].length;
          const done = displayPuzzles[level].filter((p) =>
            readTopics.includes(p.key),
          ).length;
          const pct = total > 0 ? Math.round((done / total) * 100) : 0;
          return (
            <div className="bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3">
              <span className="text-2xl">🧩</span>
              <div className="flex-1">
                <div className="flex justify-between text-white text-xs mb-1">
                  <span className="font-bold">
                    {isEn ? "Progress at this level" : "Bu seviyedeki ilerleme"}
                  </span>
                  <span className="font-black">
                    {done}/{total}
                  </span>
                </div>
                <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-orange-300 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
              <span className="text-white font-black text-sm">{pct}%</span>
            </div>
          );
        })()}
        <div className="relative mb-4">
          <input
            type="text"
            data-ocid="puzzles.search_input"
            placeholder={`🔍 ${t("search_placeholder")}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/20 text-white placeholder-white/50 rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:bg-white/30 transition-all"
          />
        </div>
        <div className="space-y-5">
          {filteredPuzzles.length === 0 ? (
            <div className="text-center text-white/60 py-8">
              {isEn ? "No results found 🔍" : "Sonuç bulunamadı 🔍"}
            </div>
          ) : (
            filteredPuzzles.map((puzzle, pIdx) => {
              const selected = answers[puzzle.key];
              const answered = selected !== undefined && selected !== null;
              const isCorrect = answered && selected === puzzle.correct;
              return (
                <div
                  key={puzzle.key}
                  className={`bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${answered ? (isCorrect ? "border-2 border-green-300" : "border-2 border-red-300") : ""}`}
                >
                  <div className="flex gap-2 items-start mb-4">
                    <span className="text-3xl">{puzzle.emoji}</span>
                    <div>
                      <div className="text-white/60 text-xs mb-1">
                        {isEn ? "Question" : "Soru"} {pIdx + 1}
                      </div>
                      <div className="text-white font-black">
                        {puzzle.question}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {puzzle.choices.map((choice, cIdx) => {
                      let btnClass = "bg-white/20 text-white hover:bg-white/30";
                      if (answered) {
                        if (cIdx === puzzle.correct)
                          btnClass = "bg-green-500 text-white";
                        else if (cIdx === selected)
                          btnClass = "bg-red-500 text-white";
                        else btnClass = "bg-white/10 text-white/50";
                      }
                      return (
                        <button
                          key={choice}
                          type="button"
                          data-ocid={`puzzles.answer_button.${cIdx + 1}`}
                          disabled={answered}
                          onClick={() =>
                            handleAnswer(puzzle.key, cIdx, puzzle.correct)
                          }
                          className={`rounded-xl py-3 px-4 text-sm font-bold transition-all ${btnClass} disabled:cursor-not-allowed`}
                        >
                          {choice}
                        </button>
                      );
                    })}
                  </div>
                  {answered && (
                    <div
                      className={`mt-3 text-sm font-bold ${isCorrect ? "text-green-300" : "text-red-300"}`}
                    >
                      {isCorrect
                        ? isEn
                          ? "✅ Correct! +5 points!"
                          : "✅ Doğru! +5 puan kazandın!"
                        : isEn
                          ? `❌ Wrong. Correct answer: ${puzzle.choices[puzzle.correct]}`
                          : `❌ Yanlış. Doğru cevap: ${puzzle.choices[puzzle.correct]}`}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
