import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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

type CodingItem = {
  key: string;
  emoji: string;
  title: string;
  info: string;
  example: string;
};

const codingDataTr: Record<Level, CodingItem[]> = {
  okul_oncesi: [
    {
      key: "cod_adim",
      emoji: "👣",
      title: "Adımlar",
      info: "Bir işi yaparken adım adım ilerleriz. Önce çorba öörseriz, sonra kapak acarız, sonra yeriz.",
      example: "Diş fırçalamak: 1) Fırça al, 2) Macun koy, 3) Fırçala, 4) Dur",
    },
    {
      key: "cod_sirala",
      emoji: "🔢",
      title: "Sıralama",
      info: "Bilgisayarlar talimatlara sırayla uyar. Adımları karıştırırsak işler hatalı olur.",
      example: "Yanlış: Önce giy, sonra uyan. Doğru: Önce uyan, sonra giy.",
    },
    {
      key: "cod_tekrar",
      emoji: "🔁",
      title: "Tekrar",
      info: "Bazen aynı işlemi defalarca yaparız. Bilgisayarlar bunu otomatik yapabilir.",
      example: "10 adım at: adım, adım, adım... (10 kez)",
    },
    {
      key: "cod_secim",
      emoji: "🤔",
      title: "Seçim",
      info: "'Eğer yağmur yağıyorsa şemsiye al, yağmıyorsa alma.' Bu bir seçimdir.",
      example: "Eğer aç isen → ye. Değilse → oyna.",
    },
    {
      key: "cod_robot",
      emoji: "🤖",
      title: "Robot Oyunu",
      info: "Robota komut verirsin, o da tam olarak yapar. 'İleri 3 adım, sağa dön' gibi.",
      example: "Komutlar: İleri, Geri, Sağ, Sol, Dur",
    },
    {
      key: "cod_sifre",
      emoji: "🔐",
      title: "Gizli Kod",
      info: "Mesajları şifrelemek eğlencelidir. A=1, B=2 gibi harfleri sayılarla değiştirebiliriz.",
      example: "MERHABA → 13-5-18-8-1-2-1",
    },
  ],
  ilkokul: [
    {
      key: "cod_algoritma",
      emoji: "📊",
      title: "Algoritma",
      info: "Algoritma, bir problemi çözmek için takip edilen adımlar dizisidir.",
      example: "Tarif: Su kaynat → makarna at → 10 dk bekle → süz → ye",
    },
    {
      key: "cod_kosul",
      emoji: "❓",
      title: "Koşul (If-Else)",
      info: "Eğer bir koşul doğruysa A yap, değilse B yap. Bu bilgisayar programlarının temelidir.",
      example: "Eğer not >= 50 → Geçti. Değilse → Kaldı.",
    },
    {
      key: "cod_dongu",
      emoji: "🔄",
      title: "Döngü (Loop)",
      info: "Aynı işlemi defalarca yapmak için döngü kullanılır.",
      example: "5 kez tekrarla: 'Merhaba' yaz",
    },
    {
      key: "cod_degisken",
      emoji: "📦",
      title: "Değişken",
      info: "Değişken, bilgi saklayan bir kutudur. İçine sayı, harf veya kelime koyabilirsin.",
      example: "isim = 'Ali', yas = 10, puan = 95",
    },
    {
      key: "cod_mantik",
      emoji: "🧠",
      title: "Mantık",
      info: "VE, VEYA, DEĞİL gibi mantık operatörleriyle koşulları birleştirebiliriz.",
      example: "Yağmur yağıyor VE rüzgar esiyor → Evde kal",
    },
    {
      key: "cod_blok",
      emoji: "🧱",
      title: "Blok Kodlama",
      info: "Scratch ve benzeri uygulamalarda görsel blokları sürükleyerek kod yazılır.",
      example: "'Hareket' bloğu + '10 adım git' = kedi 10 adım atar",
    },
    {
      key: "cod_hata",
      emoji: "🐛",
      title: "Hata (Bug)",
      info: "Programda hata olursa beklenmedik şeyler olur. Hata bulmaya 'debug' denir.",
      example: "Hata: 2+2=5 yazan bir hesap makinesi",
    },
    {
      key: "cod_fonk",
      emoji: "⚙️",
      title: "Fonksiyon",
      info: "Tekrar kullanabileceğimiz kod bloğuna fonksiyon denir. İsim verilir ve çağrılır.",
      example: "selamla() → 'Merhaba!' yazar",
    },
  ],
  ortaokul: [
    {
      key: "cod_python",
      emoji: "🐍",
      title: "Python",
      info: "Python, kolay okunabilen popüler bir programlama dilidir. Veri bilimi ve yapay zekada kullanılır.",
      example: "print('Merhaba Dünya')",
    },
    {
      key: "cod_sifrele",
      emoji: "🔒",
      title: "Şifreleme",
      info: "Verilerimizi güvende tutmak için şifreleme kullanılır. HTTPS bunu sağlar.",
      example: "'merhaba' → şifrelenmiş: 'x7@#kl!' gibi",
    },
    {
      key: "cod_yapay",
      emoji: "🤖",
      title: "Yapay Zeka",
      info: "Yapay zeka, bilgisayarların öğrenip karar verebilmesidir. ChatGPT ve resim oluşturucular buna örnektir.",
      example: "Fotoğraftaki köpeği tanıyan uygulama",
    },
    {
      key: "cod_nesne",
      emoji: "📦",
      title: "Nesne Yönelimli Programlama",
      info: "OOP'da nesneler özellik ve metotlara sahiptir. Gerçek dünyadaki şeyleri temsil eder.",
      example: "Araba sınıfı: renk, hız, git(), dur()",
    },
    {
      key: "cod_binary",
      emoji: "🔣",
      title: "İkili Sistem (Binary)",
      info: "Bilgisayarlar 0 ve 1 ile çalışır. Her sayı 0'lar ve 1'lerden oluşan kodla ifade edilir.",
      example: "5 = 101 (ikili), 10 = 1010 (ikili)",
    },
    {
      key: "cod_git",
      emoji: "💻",
      title: "Versiyon Kontrol",
      info: "Git gibi araçlar kod değişikliklerini takip eder. Ekip çalışmasını kolaylaştırır.",
      example: "git commit -m 'Yeni özellik eklendi'",
    },
  ],
};

const codingDataEn: Record<Level, CodingItem[]> = {
  okul_oncesi: [
    {
      key: "cod_adim",
      emoji: "👣",
      title: "Steps",
      info: "When we do something, we go step by step. First we open the can, then we heat the soup, then we eat.",
      example:
        "Brushing teeth: 1) Get brush, 2) Add toothpaste, 3) Brush, 4) Rinse",
    },
    {
      key: "cod_sirala",
      emoji: "🔢",
      title: "Ordering",
      info: "Computers follow instructions in order. If we mix up the steps, things go wrong.",
      example:
        "Wrong: Get dressed, then wake up. Right: Wake up, then get dressed.",
    },
    {
      key: "cod_tekrar",
      emoji: "🔁",
      title: "Repeat",
      info: "Sometimes we do the same action many times. Computers can do this automatically.",
      example: "Take 10 steps: step, step, step... (10 times)",
    },
    {
      key: "cod_secim",
      emoji: "🤔",
      title: "Choice",
      info: "'If it is raining, take an umbrella; if not, leave it.' This is a choice.",
      example: "If hungry → eat. Otherwise → play.",
    },
    {
      key: "cod_robot",
      emoji: "🤖",
      title: "Robot Game",
      info: "You give a robot a command and it does exactly what you say. Like 'Move 3 steps forward, turn right.'",
      example: "Commands: Forward, Backward, Right, Left, Stop",
    },
    {
      key: "cod_sifre",
      emoji: "🔐",
      title: "Secret Code",
      info: "Encoding messages is fun! We can replace letters with numbers like A=1, B=2.",
      example: "HELLO → 8-5-12-12-15",
    },
  ],
  ilkokul: [
    {
      key: "cod_algoritma",
      emoji: "📊",
      title: "Algorithm",
      info: "An algorithm is a set of steps followed to solve a problem.",
      example: "Recipe: Boil water → add pasta → wait 10 min → drain → eat",
    },
    {
      key: "cod_kosul",
      emoji: "❓",
      title: "Condition (If-Else)",
      info: "If a condition is true, do A; otherwise do B. This is the foundation of computer programs.",
      example: "If grade >= 50 → Pass. Otherwise → Fail.",
    },
    {
      key: "cod_dongu",
      emoji: "🔄",
      title: "Loop",
      info: "A loop is used to repeat the same action multiple times.",
      example: "Repeat 5 times: print 'Hello'",
    },
    {
      key: "cod_degisken",
      emoji: "📦",
      title: "Variable",
      info: "A variable is a box that stores information. You can put numbers, letters or words in it.",
      example: "name = 'Ali', age = 10, score = 95",
    },
    {
      key: "cod_mantik",
      emoji: "🧠",
      title: "Logic",
      info: "We can combine conditions using AND, OR, NOT logic operators.",
      example: "It is raining AND it is windy → Stay home",
    },
    {
      key: "cod_blok",
      emoji: "🧱",
      title: "Block Coding",
      info: "In apps like Scratch, you write code by dragging visual blocks.",
      example: "'Motion' block + 'Move 10 steps' = cat moves 10 steps",
    },
    {
      key: "cod_hata",
      emoji: "🐛",
      title: "Bug",
      info: "If there is an error in a program, unexpected things happen. Finding errors is called 'debugging'.",
      example: "Bug: A calculator that says 2+2=5",
    },
    {
      key: "cod_fonk",
      emoji: "⚙️",
      title: "Function",
      info: "A function is a reusable block of code. It is given a name and called when needed.",
      example: "greet() → prints 'Hello!'",
    },
  ],
  ortaokul: [
    {
      key: "cod_python",
      emoji: "🐍",
      title: "Python",
      info: "Python is a popular, easy-to-read programming language. It is used in data science and AI.",
      example: "print('Hello World')",
    },
    {
      key: "cod_sifrele",
      emoji: "🔒",
      title: "Encryption",
      info: "Encryption is used to keep our data safe. HTTPS uses encryption.",
      example: "'hello' → encrypted: 'x7@#kl!' for example",
    },
    {
      key: "cod_yapay",
      emoji: "🤖",
      title: "Artificial Intelligence",
      info: "AI allows computers to learn and make decisions. ChatGPT and image generators are examples.",
      example: "An app that recognizes a dog in a photo",
    },
    {
      key: "cod_nesne",
      emoji: "📦",
      title: "Object-Oriented Programming",
      info: "In OOP, objects have properties and methods. They represent real-world things.",
      example: "Car class: color, speed, drive(), stop()",
    },
    {
      key: "cod_binary",
      emoji: "🔣",
      title: "Binary System",
      info: "Computers work with 0s and 1s. Every number is expressed as a code of 0s and 1s.",
      example: "5 = 101 (binary), 10 = 1010 (binary)",
    },
    {
      key: "cod_git",
      emoji: "💻",
      title: "Version Control",
      info: "Tools like Git track code changes. They make teamwork easier.",
      example: "git commit -m 'New feature added'",
    },
  ],
};

const levelTabsTr: { key: Level; label: string }[] = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" },
];

const levelTabsEn: { key: Level; label: string }[] = [
  { key: "okul_oncesi", label: "🌈 Preschool" },
  { key: "ilkokul", label: "📗 Primary" },
  { key: "ortaokul", label: "📘 Middle School" },
];

export default function CodingPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  const isEn = lang === "en";

  // biome-ignore lint/correctness/useExhaustiveDependencies: one-time mount tracking
  useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "coding");
  }, []);

  const [level, setLevel] = useState<Level>(
    (profile?.level as Level) || "ilkokul",
  );
  const [readTopics, setReadTopics] = useState<string[]>(() =>
    profile ? getReadTopics(profile.studentNumber) : [],
  );
  const [searchTerm, setSearchTerm] = useState("");

  const codingData = isEn ? codingDataEn : codingDataTr;
  const levelTabs = isEn ? levelTabsEn : levelTabsTr;

  const filtered = codingData[level].filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.info.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleRead = (key: string) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };

  const total = codingData[level].length;
  const done = codingData[level].filter((p) =>
    readTopics.includes(p.key),
  ).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-700 to-purple-600">
      <div className="p-4">
        <button
          type="button"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4 font-bold text-sm"
        >
          ← {isEn ? "Back" : "Geri"}
        </button>
        <h1 className="text-3xl font-black text-white mb-4">
          💻 {isEn ? "Coding & Logic" : "Kodlama & Mantık"}
        </h1>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {levelTabs.map((tab) => (
            <button
              type="button"
              key={tab.key}
              onClick={() => setLevel(tab.key)}
              className={`py-3 rounded-2xl font-bold text-xs transition-all ${
                level === tab.key
                  ? "bg-white text-violet-700"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3">
          <span className="text-2xl">💻</span>
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
                className="h-full bg-cyan-300 rounded-full transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
          <span className="text-white font-black text-sm">{pct}%</span>
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder={`🔍 ${t("search_placeholder")}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/20 text-white placeholder-white/50 rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:bg-white/30 transition-all"
          />
        </div>
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center text-white/60 py-8">
              {isEn ? "No results found 🔍" : "Sonuç bulunamadı 🔍"}
            </div>
          ) : (
            filtered.map((item) => {
              const isRead = readTopics.includes(item.key);
              return (
                <div
                  key={item.key}
                  className={`bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isRead ? "border-2 border-cyan-300" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{item.emoji}</span>
                    <div className="text-white font-black text-base">
                      {item.title}
                    </div>
                    {isRead && (
                      <span className="ml-auto text-cyan-300 text-xl">✓</span>
                    )}
                  </div>
                  <p className="text-white font-bold text-sm leading-relaxed mb-2">
                    {item.info}
                  </p>
                  <div className="bg-black/20 rounded-xl px-3 py-2 mb-4">
                    <span className="text-cyan-200 text-xs font-semibold">
                      💻 {isEn ? "Example" : "Örnek"}:{" "}
                    </span>
                    <span className="text-white text-xs font-mono">
                      {item.example}
                    </span>
                  </div>
                  {!isRead && profile && (
                    <button
                      type="button"
                      onClick={() => handleRead(item.key)}
                      className="bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
                    >
                      ✅ {t("learned")} +10 {isEn ? "pts" : "puan"}
                    </button>
                  )}
                  {isRead && (
                    <span className="text-cyan-300 text-xs font-bold">
                      ✅{" "}
                      {isEn
                        ? "Learned (+10 pts earned)"
                        : "Öğrenildi (+10 puan kazanıldı)"}
                    </span>
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
