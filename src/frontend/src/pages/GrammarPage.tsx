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

const grammarCards: Record<
  Level,
  { key: string; title: string; emoji: string; rule: string; example: string }[]
> = {
  okul_oncesi: [
    {
      key: "gr_harf_a",
      title: "A Harfi",
      emoji: "🔤",
      rule: "A harfi büyük 'A' ve küçük 'a' olarak yazılır.",
      example: "Araba, Aslan, Ayı",
    },
    {
      key: "gr_hece",
      title: "Hece Nedir?",
      emoji: "🗣️",
      rule: "Kelimeler hecelerden oluşur. Her hecede bir sesli harf bulunur.",
      example: "Ka-pı, ma-sa, e-v",
    },
    {
      key: "gr_sesli",
      title: "Sesli Harfler",
      emoji: "🔊",
      rule: "Sesli harfler: a, e, ı, i, o, ö, u, ü",
      example: "Arı, ev, ip, ot, üzüm",
    },
    {
      key: "gr_sessiz",
      title: "Sessiz Harfler",
      emoji: "🤫",
      rule: "Sesli olmayan harflere sessiz harf denir.",
      example: "b, c, ç, d, f, g...",
    },
    {
      key: "gr_nokta",
      title: "Nokta (.)",
      emoji: "⚫",
      rule: "Cümle bitince nokta koyarız.",
      example: "Bugün hava güzel.",
    },
    {
      key: "gr_buyuk",
      title: "Büyük Harf",
      emoji: "🔠",
      rule: "Cümle büyük harfle başlar. Özel isimler büyük harfle yazılır.",
      example: "Ali okula gitti. Ankara güzel şehir.",
    },
    {
      key: "gr_isim",
      title: "İsim Nedir?",
      emoji: "🏷️",
      rule: "Varlıkların adına isim denir.",
      example: "Kalem, kitap, okul, Ali",
    },
    {
      key: "gr_fiil_okul",
      title: "Eylem (Fiil)",
      emoji: "🏃",
      rule: "Yapılan işi bildiren kelimeler fiildir.",
      example: "koşmak, yazmak, gülmek",
    },
  ],
  ilkokul: [
    {
      key: "gr_fiil_zaman",
      title: "Şimdiki Zaman",
      emoji: "⏰",
      rule: "Şu anda yapılan işi anlatır. Eki: -iyor",
      example: "Ali koşuyor. Ben yazıyorum.",
    },
    {
      key: "gr_gecmis",
      title: "Geçmiş Zaman",
      emoji: "⏪",
      rule: "Geçmişte olmuş işleri anlatır. Eki: -di, -miş",
      example: "Dün okula gittim. Kitap okumuş.",
    },
    {
      key: "gr_gelecek",
      title: "Gelecek Zaman",
      emoji: "⏩",
      rule: "İleride olacak işleri anlatır. Eki: -ecek/-acak",
      example: "Yarın okula gideceğim.",
    },
    {
      key: "gr_sifat",
      title: "Sıfat Nedir?",
      emoji: "🎨",
      rule: "İsimleri niteleyen, belirten kelimelerdir.",
      example: "kırmızı elma, büyük ev, güzel çiçek",
    },
    {
      key: "gr_zarf",
      title: "Zarf Nedir?",
      emoji: "🔍",
      rule: "Fiili niteleyen kelimelerdir.",
      example: "hızlı koştu, güzel söyledi, iyi çalıştı",
    },
    {
      key: "gr_soru",
      title: "Soru Cümlesi",
      emoji: "❓",
      rule: "Soru cümleleri soru işaretiyle biter. mi/mı/mu/mü eki kullanılır.",
      example: "Sen de gelecek misin? Hava güzel mi?",
    },
    {
      key: "gr_baglac",
      title: "Bağlaç",
      emoji: "🔗",
      rule: "Cümleleri veya sözcükleri birbirine bağlar.",
      example: "ve, ile, ama, fakat, ya da",
    },
    {
      key: "gr_noktalama",
      title: "Virgül (,)",
      emoji: "🔤",
      rule: "Sıralama yaparken ve uzun cümlelerde virgül kullanılır.",
      example: "Elma, armut, kiraz aldım.",
    },
  ],
  ortaokul: [
    {
      key: "gr_edilgen",
      title: "Edilgen Çatı",
      emoji: "🔄",
      rule: "Eylemin kim tarafından yapıldığı belli değildir. Eki: -il, -in",
      example: "Kitap okundu. Cam kırıldı.",
    },
    {
      key: "gr_etken",
      title: "Etken Çatı",
      emoji: "✅",
      rule: "Eylemi yapan bellidir.",
      example: "Ali kitabı okudu. Çocuk topu attı.",
    },
    {
      key: "gr_doldurma",
      title: "Dolaylı Tümleç",
      emoji: "📍",
      rule: "Eylemin yapıldığı yeri veya yönü gösterir. Eki: -e, -de, -den",
      example: "Okula gittim. Evde kaldım. Okuldan döndüm.",
    },
    {
      key: "gr_anlam",
      title: "Sözcükte Anlam",
      emoji: "💭",
      rule: "Gerçek anlam, mecaz anlam, terim anlam ve deyim anlamı vardır.",
      example: "El (gerçek: organ), el atmak (mecaz: ilgilenmek)",
    },
    {
      key: "gr_anlatim",
      title: "Anlatım Bozukluğu",
      emoji: "❌",
      rule: "Cümle içinde anlam ya da dil bilgisi hatası olmasıdır.",
      example:
        "Hatalı: 'Kitabı okudum okudum.' Doğru: 'Kitabı tekrar tekrar okudum.'",
    },
    {
      key: "gr_ses_olaylar",
      title: "Ses Olayları",
      emoji: "🔊",
      rule: "Ünlü düşmesi, ünsüz yumuşaması, benzeşme gibi ses değişiklikleridir.",
      example: "kayıp→kaybolmak (ünlü düşmesi)",
    },
    {
      key: "gr_cumle_turleri",
      title: "Cümle Türleri",
      emoji: "📋",
      rule: "Olumlu, olumsuz, soru ve ünlem cümleleri vardır.",
      example: "Olumlu: Geldi. Olumsuz: Gelmedi. Soru: Geldi mi?",
    },
    {
      key: "gr_paragraf",
      title: "Paragraf",
      emoji: "📄",
      rule: "Bir düşünceyi anlatan, birden fazla cümleden oluşan birimdir.",
      example:
        "Her paragrafın bir ana fikri vardır. Giriş cümlesi konuyu belirler.",
    },
  ],
};

const levelTabs: { key: Level; label: string }[] = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" },
];

export default function GrammarPage() {
  const navigate = useNavigate();
  const profile = getCurrentUser();

  // biome-ignore lint/correctness/useExhaustiveDependencies: one-time mount tracking
  useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "grammar");
  }, []);

  const [level, setLevel] = useState<Level>(
    (profile?.level as Level) || "ilkokul",
  );
  const [readTopics, setReadTopics] = useState<string[]>(() =>
    profile ? getReadTopics(profile.studentNumber) : [],
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = grammarCards[level].filter(
    (c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.rule.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleRead = (key: string) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-cyan-500">
      <div className="p-4">
        <button
          type="button"
          data-ocid="grammar.back_button"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4 font-bold text-sm"
        >
          ← Geri
        </button>
        <h1 className="text-3xl font-black text-white mb-4">📝 Dilbilgisi</h1>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {levelTabs.map((t) => (
            <button
              type="button"
              key={t.key}
              data-ocid="grammar.tab"
              onClick={() => setLevel(t.key)}
              className={`py-3 rounded-2xl font-bold text-xs transition-all ${
                level === t.key
                  ? "bg-white text-teal-600"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        {(() => {
          const total = grammarCards[level].length;
          const done = grammarCards[level].filter((c) =>
            readTopics.includes(c.key),
          ).length;
          const pct = total > 0 ? Math.round((done / total) * 100) : 0;
          return (
            <div className="bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3">
              <span className="text-2xl">📝</span>
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
            data-ocid="grammar.search_input"
            placeholder="🔍 Ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/20 text-white placeholder-white/50 rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:bg-white/30 transition-all"
          />
        </div>
        <div className="space-y-4">
          {filteredCards.length === 0 ? (
            <div
              data-ocid="grammar.empty_state"
              className="text-center text-white/60 py-8"
            >
              Sonuç bulunamadı 🔍
            </div>
          ) : (
            filteredCards.map((c, idx) => {
              const isRead = readTopics.includes(c.key);
              return (
                <div
                  key={c.key}
                  data-ocid={`grammar.item.${idx + 1}`}
                  className={`bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${
                    isRead ? "border-2 border-green-300" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{c.emoji}</span>
                    <div className="text-white font-black text-lg">
                      {c.title}
                    </div>
                    {isRead && (
                      <span className="ml-auto text-green-300 text-xl">✓</span>
                    )}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    {c.rule}
                  </p>
                  <div className="bg-white/10 rounded-xl p-2 mb-4">
                    <span className="text-white/70 text-xs font-bold block mb-1">
                      Örnek:
                    </span>
                    <span className="text-white text-sm font-medium">
                      {c.example}
                    </span>
                  </div>
                  {!isRead && profile && (
                    <button
                      type="button"
                      data-ocid="grammar.read_button"
                      onClick={() => handleRead(c.key)}
                      className="bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
                    >
                      ✏️ Öğrendim! +10 puan
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
