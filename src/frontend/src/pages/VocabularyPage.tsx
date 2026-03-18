import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  getCurrentUser,
  getReadTopics,
  incrementDailyContentRead,
  markTopicRead,
  trackContentVisit,
  updatePoints,
} from "../store";

type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

const vocabulary: Record<
  Level,
  {
    key: string;
    word: string;
    emoji: string;
    definition: string;
    synonym: string;
    antonym: string;
    example: string;
  }[]
> = {
  okul_oncesi: [
    {
      key: "v_mutlu",
      word: "Mutlu",
      emoji: "😊",
      definition: "Sevinçli ve neşeli olmak",
      synonym: "Sevinçli, neşeli",
      antonym: "Üzgün, mutsuz",
      example: "Bugün çok mutluyum.",
    },
    {
      key: "v_guzel",
      word: "Güzel",
      emoji: "🌸",
      definition: "Hoş görünüşlü, beğenilen",
      synonym: "Hoş, şirin",
      antonym: "Çirkin, kötü",
      example: "Ne güzel bir çiçek!",
    },
    {
      key: "v_buyuk",
      word: "Büyük",
      emoji: "🐘",
      definition: "Boyutu veya miktarı fazla olan",
      synonym: "İri, kocaman",
      antonym: "Küçük, ufak",
      example: "Büyük bir fil gördüm.",
    },
    {
      key: "v_hizli",
      word: "Hızlı",
      emoji: "⚡",
      definition: "Çok çabuk hareket eden",
      synonym: "Çabuk, süratli",
      antonym: "Yavaş, ağır",
      example: "Koşucu çok hızlı koştu.",
    },
    {
      key: "v_sicak",
      word: "Sıcak",
      emoji: "☀️",
      definition: "Yüksek sıcaklıkta olan",
      synonym: "Kavurucu, bunaltıcı",
      antonym: "Soğuk, serin",
      example: "Yaz günleri çok sıcak olur.",
    },
    {
      key: "v_sert",
      word: "Sert",
      emoji: "🪨",
      definition: "Kolayca bükülmeyen, katı olan",
      synonym: "Katı, bükülmez",
      antonym: "Yumuşak, esnek",
      example: "Taş çok serttir.",
    },
    {
      key: "v_temiz",
      word: "Temiz",
      emoji: "✨",
      definition: "Kirli olmayan, düzenli",
      synonym: "Pak, pırıl pırıl",
      antonym: "Kirli, pis",
      example: "Ellerini temiz tut.",
    },
    {
      key: "v_sessiz",
      word: "Sessiz",
      emoji: "🤫",
      definition: "Ses çıkarmayan, gürültüsüz",
      synonym: "Sakin, gürültüsüz",
      antonym: "Gürültülü, sesli",
      example: "Kütüphane çok sessizdir.",
    },
  ],
  ilkokul: [
    {
      key: "v_cesur",
      word: "Cesur",
      emoji: "🦁",
      definition: "Tehlikeden korkmayan, yiğit",
      synonym: "Yiğit, gözüpek",
      antonym: "Korkak, ürkek",
      example: "Cesur kahraman canavarı yendi.",
    },
    {
      key: "v_sabir",
      word: "Sabır",
      emoji: "⏳",
      definition: "Zorluklara katlanma gücü",
      synonym: "Tahammül, dayanç",
      antonym: "Sabırsızlık, acelecilik",
      example: "Sabırla çalışırsan başarırsın.",
    },
    {
      key: "v_merak",
      word: "Merak",
      emoji: "🔍",
      definition: "Bir şeyi öğrenmek isteme duygusu",
      synonym: "Araştırma isteği, ilgi",
      antonym: "İlgisizlik, kayıtsızlık",
      example: "Merak eden çok şey öğrenir.",
    },
    {
      key: "v_basari",
      word: "Başarı",
      emoji: "🏆",
      definition: "Bir hedefi gerçekleştirme",
      synonym: "Zafer, muvaffakiyet",
      antonym: "Başarısızlık, yenilgi",
      example: "Çalışınca başarıya ulaşırsın.",
    },
    {
      key: "v_fedakar",
      word: "Fedakâr",
      emoji: "❤️",
      definition: "Başkaları için özveri gösteren",
      synonym: "Özveri sahibi, cömert",
      antonym: "Bencil, egoist",
      example: "Anneler çok fedakârdır.",
    },
    {
      key: "v_akilli",
      word: "Akıllı",
      emoji: "🧠",
      definition: "Zeki, düşünceli",
      synonym: "Zeki, kurnaz",
      antonym: "Aptal, akılsız",
      example: "Akıllı biri zor sorunu çözdü.",
    },
    {
      key: "v_dürüst",
      word: "Dürüst",
      emoji: "✅",
      definition: "Her zaman doğruyu söyleyen",
      synonym: "Namuslu, güvenilir",
      antonym: "Yalancı, hilekâr",
      example: "Dürüst bir insan olmak önemlidir.",
    },
    {
      key: "v_mesgul",
      word: "Meşgul",
      emoji: "🔄",
      definition: "Bir işle uğraşan, boş olmayan",
      synonym: "Yoğun, çalışkan",
      antonym: "Boş, aylak",
      example: "Öğretmen şu an çok meşgul.",
    },
  ],
  ortaokul: [
    {
      key: "v_ironik",
      word: "İronik",
      emoji: "😏",
      definition: "Söylenenin tersini kasteden anlatım biçimi",
      synonym: "Alaylı, istihzalı",
      antonym: "Ciddi, doğrudan",
      example: "İronik bir şekilde 'ne kadar zeki!' dedi.",
    },
    {
      key: "v_analiz",
      word: "Analiz",
      emoji: "🔬",
      definition: "Bir bütünü parçalara ayırarak inceleme",
      synonym: "Çözümleme, tahlil",
      antonym: "Sentez, bireşim",
      example: "Bilim insanı örnekleri analiz etti.",
    },
    {
      key: "v_hipotez",
      word: "Hipotez",
      emoji: "💡",
      definition: "Kanıtlanmamış geçici bir açıklama",
      synonym: "Varsayım, teori taslağı",
      antonym: "Kanıt, kesinlik",
      example: "Bilim insanı hipotezini test etti.",
    },
    {
      key: "v_empati",
      word: "Empati",
      emoji: "🤝",
      definition: "Başkasının duygularını anlayabilme yetisi",
      synonym: "Anlayış, sezgi",
      antonym: "Bencillik, ilgisizlik",
      example: "Empati kurmak ilişkileri güçlendirir.",
    },
    {
      key: "v_paradoks",
      word: "Paradoks",
      emoji: "♾️",
      definition: "Görünürde çelişkili ama doğru olan önerme",
      synonym: "Çelişki, tezat",
      antonym: "Tutarlılık, uyum",
      example: "'Az çok olur' bir paradokstur.",
    },
    {
      key: "v_nostalji",
      word: "Nostalji",
      emoji: "📷",
      definition: "Geçmişe özlem duyma",
      synonym: "Özlem, hasret",
      antonym: "İlerleme, yenilik",
      example: "Eski fotoğraflar nostaljiye yol açar.",
    },
    {
      key: "v_sinerji",
      word: "Sinerji",
      emoji: "⚡",
      definition: "Birlikte çalışmanın toplam etkisi",
      synonym: "Birleşim gücü, uyum",
      antonym: "Çatışma, ayrılık",
      example: "Ekip sinerjisiyle büyük işler başardı.",
    },
    {
      key: "v_ambivalans",
      word: "Ambivalans",
      emoji: "⚖️",
      definition: "Aynı anda iki zıt duyguyu hissetme",
      synonym: "İkilem, kararsızlık",
      antonym: "Kesinlik, netlik",
      example: "Sınav sonucuna ambivalans hissetti: hem heyecan hem korku.",
    },
  ],
};

const levelTabs: { key: Level; label: string }[] = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" },
];

export default function VocabularyPage() {
  const navigate = useNavigate();
  const profile = getCurrentUser();

  // biome-ignore lint/correctness/useExhaustiveDependencies: one-time mount tracking
  useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "vocabulary");
  }, []);

  const [level, setLevel] = useState<Level>(
    (profile?.level as Level) || "ilkokul",
  );
  const [readTopics, setReadTopics] = useState<string[]>(() =>
    profile ? getReadTopics(profile.studentNumber) : [],
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWords = vocabulary[level].filter(
    (w) =>
      w.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.definition.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleRead = (key: string) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-violet-500">
      <div className="p-4">
        <button
          type="button"
          data-ocid="vocabulary.back_button"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4 font-bold text-sm"
        >
          ← Geri
        </button>
        <h1 className="text-3xl font-black text-white mb-4">
          📖 Kelime Haznesi
        </h1>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {levelTabs.map((t) => (
            <button
              type="button"
              key={t.key}
              data-ocid="vocabulary.tab"
              onClick={() => setLevel(t.key)}
              className={`py-3 rounded-2xl font-bold text-xs transition-all ${
                level === t.key
                  ? "bg-white text-purple-600"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        {(() => {
          const total = vocabulary[level].length;
          const done = vocabulary[level].filter((w) =>
            readTopics.includes(w.key),
          ).length;
          const pct = total > 0 ? Math.round((done / total) * 100) : 0;
          return (
            <div className="bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3">
              <span className="text-2xl">📖</span>
              <div className="flex-1">
                <div className="flex justify-between text-white text-xs mb-1">
                  <span className="font-bold">Bu seviyedeki ilerleme</span>
                  <span className="font-black">
                    {done}/{total}
                  </span>
                </div>
                <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-green-400 rounded-full transition-all duration-500"
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
            data-ocid="vocabulary.search_input"
            placeholder="🔍 Ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/20 text-white placeholder-white/50 rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:bg-white/30 transition-all"
          />
        </div>
        <div className="space-y-4">
          {filteredWords.length === 0 ? (
            <div
              data-ocid="vocabulary.empty_state"
              className="text-center text-white/60 py-8"
            >
              Sonuç bulunamadı 🔍
            </div>
          ) : (
            filteredWords.map((w, idx) => {
              const isRead = readTopics.includes(w.key);
              return (
                <div
                  key={w.key}
                  data-ocid={`vocabulary.item.${idx + 1}`}
                  className={`bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${
                    isRead ? "border-2 border-green-300" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{w.emoji}</span>
                    <div>
                      <div className="text-white font-black text-2xl leading-tight">
                        {w.word}
                      </div>
                      {isRead && (
                        <span className="text-green-300 text-sm">
                          ✓ Öğrenildi
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    {w.definition}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {w.synonym && (
                      <span className="bg-blue-400/30 text-white text-xs font-bold px-3 py-1 rounded-full">
                        🔵 Eş: {w.synonym}
                      </span>
                    )}
                    {w.antonym && (
                      <span className="bg-red-400/30 text-white text-xs font-bold px-3 py-1 rounded-full">
                        🔴 Zıt: {w.antonym}
                      </span>
                    )}
                  </div>
                  <p className="text-white/70 text-xs italic mb-4">
                    &ldquo;{w.example}&rdquo;
                  </p>
                  {!isRead && profile && (
                    <button
                      type="button"
                      data-ocid="vocabulary.read_button"
                      onClick={() => handleRead(w.key)}
                      className="bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
                    >
                      💡 Öğrendim! +10 puan
                    </button>
                  )}
                  {isRead && (
                    <span className="text-green-300 text-xs font-bold">
                      ✅ Öğrenildi (+10 puan kazanıldı)
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
