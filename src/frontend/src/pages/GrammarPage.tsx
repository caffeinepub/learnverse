import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { contentTranslationsEn } from "../i18n/content-translations";
import { contentTranslationsEs } from "../i18n/content-translations-es";
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
      emoji: "⭕",
      rule: "Cümlenin sonuna nokta koyarız.",
      example: "Bugün hava güzel.",
    },
    {
      key: "gr_buyuk",
      title: "Büyük Harf",
      emoji: "🔠",
      rule: "Cümleler büyük harfle başlar. Özel isimler büyük harfle yazılır.",
      example: "Ali okula gitti. Ankara güzel bir şehir.",
    },
    {
      key: "gr_isim",
      title: "İsim Nedir?",
      emoji: "🏷️",
      rule: "Varlıkların, kişilerin, yerlerin adlarına isim denir.",
      example: "Kalem, kitap, okul, Ali",
    },
    {
      key: "gr_fiil_okul",
      title: "Fiil (Eylem)",
      emoji: "🏃",
      rule: "Hareketleri, eylemleri anlatan kelimelere fiil denir.",
      example: "koşmak, yazmak, gülmek",
    },
  ],
  ilkokul: [
    {
      key: "gr_fiil_zaman",
      title: "Şimdiki Zaman",
      emoji: "⏱️",
      rule: "Şu an yapılan eylemi anlatır. -iyor eki kullanılır.",
      example: "Ali koşuyor. Ben yazıyorum.",
    },
    {
      key: "gr_gecmis",
      title: "Geçmiş Zaman",
      emoji: "📅",
      rule: "Geçmişte olmuş eylemleri anlatır. -di veya -miş eki kullanılır.",
      example: "Dün okula gittim. Kitap okumuş.",
    },
    {
      key: "gr_gelecek",
      title: "Gelecek Zaman",
      emoji: "🔮",
      rule: "İleride olacak eylemleri anlatır. -ecek/-acak eki kullanılır.",
      example: "Yarın okula gideceğim.",
    },
    {
      key: "gr_sifat",
      title: "Sıfat Nedir?",
      emoji: "🌈",
      rule: "İsimleri niteleyen, belgeleyen kelimelere sıfat denir.",
      example: "kırmızı elma, büyük ev, güzel çiçek",
    },
    {
      key: "gr_zarf",
      title: "Zarf Nedir?",
      emoji: "⚡",
      rule: "Fiilleri niteleyen kelimelere zarf denir.",
      example: "hızlı koştu, güzel söyledi, iyi çalıştı",
    },
    {
      key: "gr_soru",
      title: "Soru Cümlesi",
      emoji: "❓",
      rule: "Soru cümleleri soru işareti (?) ile biter.",
      example: "Sen de gelecek misin? Hava güzel mi?",
    },
    {
      key: "gr_baglac",
      title: "Bağlaç",
      emoji: "🔗",
      rule: "Cümleleri veya kelimeleri birbirine bağlayan kelimelerdir.",
      example: "ve, ama, ya da, çünkü, ancak",
    },
    {
      key: "gr_noktalama",
      title: "Virgül (,)",
      emoji: "✏️",
      rule: "Virgül, sıralamada ve uzun cümlelerde kullanılır.",
      example: "Elma, armut, kiraz aldım.",
    },
  ],
  ortaokul: [
    {
      key: "gr_edilgen",
      title: "Edilgen Yapı",
      emoji: "🔄",
      rule: "Eylemin kimin tarafından yapıldığı bilinmiyorsa edilgen çatı kullanılır.",
      example: "Kitap okundu. Pencere kırıldı.",
    },
    {
      key: "gr_etken",
      title: "Etken Yapı",
      emoji: "💪",
      rule: "Eylemin kimin tarafından yapıldığı bellidir.",
      example: "Ali kitabı okudu. Çocuk topu attı.",
    },
    {
      key: "gr_doldurma",
      title: "Dolaylı Tümleç",
      emoji: "📍",
      rule: "Eylemin nerede, ne yönde gerçekleştiğini gösterir.",
      example: "Okula gittim. Evde kaldım. Okuldan geldim.",
    },
    {
      key: "gr_anlam",
      title: "Sözcükte Anlam",
      emoji: "💡",
      rule: "Sözcükler gerçek, mecaz, terim veya deyim anlamlarıyla kullanılabilir.",
      example: "El (gerçek: organ), el atmak (mecaz: yardım etmek)",
    },
    {
      key: "gr_anlatim",
      title: "Anlatım Bozukluğu",
      emoji: "⚠️",
      rule: "Cümlede anlam veya dil bilgisi hatası bulunmasıdır.",
      example:
        "Yanlış: 'Kitabı okuyarak okur.' Doğru: 'Kitabı tekrar tekrar okur.'",
    },
    {
      key: "gr_ses_olaylar",
      title: "Ses Olayları",
      emoji: "🔉",
      rule: "Ünlü düşmesi, ünsüz yumuşaması gibi ses değişimleri.",
      example: "boyun + u = boynu (ünlü düşmesi)",
    },
    {
      key: "gr_cumle_turleri",
      title: "Cümle Türleri",
      emoji: "📝",
      rule: "Olumlu, olumsuz, soru ve ünlem cümleleri.",
      example: "Olumlu: Geldi. Olumsuz: Gelmedi. Soru: Geldi mi?",
    },
    {
      key: "gr_paragraf",
      title: "Paragraf",
      emoji: "📖",
      rule: "Bir düşüncenin birden fazla cümleyle anlatıldığı metin birimidir.",
      example: "Her paragrafın bir ana fikri vardır. İlk cümle konuyu tanıtır.",
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
  const { t, lang } = useLanguage();
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

  const getTranslation = (key: string) => {
    if (lang === "es") return contentTranslationsEs[key];
    if (lang === "en") return contentTranslationsEn[key];
    return null;
  };

  const filteredCards = grammarCards[level].filter((c) => {
    const tr = getTranslation(c.key);
    const displayTitle = tr?.title || c.title;
    const displayRule = tr?.rule || c.rule;
    const q = searchTerm.toLowerCase();
    return (
      displayTitle.toLowerCase().includes(q) ||
      displayRule.toLowerCase().includes(q)
    );
  });

  const handleRead = (key: string) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };

  const pageTitle =
    lang === "es"
      ? "Tarjetas de Gramática"
      : lang === "en"
        ? "Grammar Cards"
        : "Dilbilgisi";
  const exLabel =
    lang === "es" ? "Ejemplo:" : lang === "en" ? "Example:" : "Örnek:";
  const noResults =
    lang === "es"
      ? "No se encontraron resultados"
      : lang === "en"
        ? "No results found"
        : "Sonuç bulunamadı";

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-cyan-500">
      <div className="p-4">
        <button
          type="button"
          data-ocid="grammar.back_button"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4 font-bold text-sm"
        >
          ← {t("back")}
        </button>
        <h1 className="text-3xl font-black text-white mb-4">📝 {pageTitle}</h1>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {levelTabs.map((tab) => (
            <button
              type="button"
              key={tab.key}
              data-ocid="grammar.tab"
              onClick={() => setLevel(tab.key)}
              className={`py-3 rounded-2xl font-bold text-xs transition-all ${level === tab.key ? "bg-white text-teal-600" : "bg-white/20 text-white hover:bg-white/30"}`}
            >
              {tab.label}
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
                  <span className="font-bold">{t("progress_label")}</span>
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
            placeholder={`🔍 ${t("search_placeholder")}`}
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
              {noResults} 🔍
            </div>
          ) : (
            filteredCards.map((c, idx) => {
              const isRead = readTopics.includes(c.key);
              const tr = getTranslation(c.key);
              const displayTitle = tr?.title || c.title;
              const displayRule = tr?.rule || c.rule;
              const displayExample = tr?.example || c.example;
              return (
                <div
                  key={c.key}
                  data-ocid={`grammar.item.${idx + 1}`}
                  className={`bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isRead ? "border-2 border-green-300" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{c.emoji}</span>
                    <div className="text-white font-black text-lg">
                      {displayTitle}
                    </div>
                    {isRead && (
                      <span className="ml-auto text-green-300 text-xl">✓</span>
                    )}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">
                    {displayRule}
                  </p>
                  <div className="bg-white/10 rounded-xl p-2 mb-4">
                    <span className="text-white/70 text-xs font-bold block mb-1">
                      {exLabel}
                    </span>
                    <span className="text-white text-sm font-medium">
                      {displayExample}
                    </span>
                  </div>
                  {!isRead && profile && (
                    <button
                      type="button"
                      data-ocid="grammar.read_button"
                      onClick={() => handleRead(c.key)}
                      className="bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
                    >
                      ✏️ {t("learned")} +10 puan
                    </button>
                  )}
                  {isRead && (
                    <span className="text-green-300 text-xs font-bold">
                      ✅ {t("learned")} (+10 puan)
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
