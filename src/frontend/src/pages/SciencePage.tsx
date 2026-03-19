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

const scienceData: Record<
  Level,
  { key: string; emoji: string; title: string; info: string; fact: string }[]
> = {
  okul_oncesi: [
    {
      key: "sci_bitki",
      emoji: "🌱",
      title: "Bitkiler",
      info: "Bitkiler topraktan su ve güneş ışığından yararlanarak büyür.",
      fact: "Bitkiler bizim için oksijen üretir!",
    },
    {
      key: "sci_hayvan",
      emoji: "🐾",
      title: "Hayvanlar",
      info: "Hayvanlar canlılardır. Bazıları evcil, bazıları vahsi yaşar.",
      fact: "Dünyada 8 milyondan fazla hayvan türü var!",
    },
    {
      key: "sci_su",
      emoji: "💧",
      title: "Su",
      info: "Su hayat için çok önemlidir. Insan vücudunun %60'ı sudan oluşur.",
      fact: "Su katı, sıvı ve gaz halinde bulunabilir.",
    },
    {
      key: "sci_gok",
      emoji: "🌟",
      title: "Gökyüzü",
      info: "Gökyüzünde güneş, ay, yıldızlar ve bulutlar var.",
      fact: "Ay, Dünya'nın tek doğal uydusu.",
    },
    {
      key: "sci_mevsim",
      emoji: "🍂",
      title: "Mevsimler",
      info: "Yılda 4 mevsim vardır: İlkbahar, Yaz, Sonbahar ve Kış.",
      fact: "Mevsimler Dünya'nın eğimli dönüşünden kaynaklanır.",
    },
    {
      key: "sci_renk",
      emoji: "🌈",
      title: "Renkler",
      info: "Güneş ışığında 7 temel renk gizlidir. Gökkusanda görülebilir.",
      fact: "Kırmızı, mavi ve sarı ana renklerdir.",
    },
    {
      key: "sci_havadurumu",
      emoji: "🌦️",
      title: "Hava Durumu",
      info: "Günleri güneşli, yağmurlu, karlı ya da bulutlu olabilir.",
      fact: "Sıcaklık ölçmek için termometre kullanılır.",
    },
    {
      key: "sci_magnet",
      emoji: "🧲",
      title: "Mıknatıs",
      info: "Mıknatıslar demir nesneleri çekerler. Kuzey ve Güney kutbu var.",
      fact: "Dünya'nın kendisi de büyük bir mıknatıstır!",
    },
  ],
  ilkokul: [
    {
      key: "sci_fotosent",
      emoji: "🌿",
      title: "Fotosentez",
      info: "Bitkiler güneş ışığı, su ve CO₂ kullanarak besin üretir. Bu işleme fotosentez denir.",
      fact: "Fotosentez sırasında oksijen açığa çıkar.",
    },
    {
      key: "sci_sindirim",
      emoji: "🥦",
      title: "Sindirim Sistemi",
      info: "Yediklerimiz ağızdan başlayarak mide ve bağırsaklarda sindirilir.",
      fact: "Ince bağırsak yaklaşık 6 metre uzunluğundadır.",
    },
    {
      key: "sci_dolasım",
      emoji: "❤️",
      title: "Dolaşım Sistemi",
      info: "Kalp kanı tüm vücuda pompalar. Damarlar kanı taşır.",
      fact: "Kalp bir günde yaklaşık 100.000 kez atar.",
    },
    {
      key: "sci_madde",
      emoji: "🔬",
      title: "Maddenin Halleri",
      info: "Madde katı, sıvı ve gaz halinde bulunur. Isı ile hal değiştirme olur.",
      fact: "Demir yüksek sıcaklıkta sıvılaşır.",
    },
    {
      key: "sci_isik",
      emoji: "💡",
      title: "İşık",
      info: "İşık gözle görülebilen enerji şeklidir. Düz yolda ilerler.",
      fact: "İşık saniyede 300.000 km hızla ilerler.",
    },
    {
      key: "sci_ses",
      emoji: "🔊",
      title: "Ses",
      info: "Ses, titreşimlerle oluşur ve hava ile taşınır. Farklı frekanslarda çıkar.",
      fact: "Uzayda ses taşınacak ortam olmadığından ses duyulmaz.",
    },
    {
      key: "sci_ekoloji",
      emoji: "🌾",
      title: "Ekosistem",
      info: "Bir bölgede yaşayan tüm canlılar ve cansız öğeler birlikte bir ekosistem oluşturur.",
      fact: "Ormanlar dünyanın akciğerleri olarak bilinir.",
    },
    {
      key: "sci_kuvvet",
      emoji: "💪",
      title: "Kuvvet",
      info: "Kuvvet cisimlerin hareket etmesini sağlar. Çekme, itme, sürtünme kuvveti örnekleri.",
      fact: "Yer çekimi kuvveti bizi yere bastırır.",
    },
    {
      key: "sci_toprak",
      emoji: "🌻",
      title: "Toprak",
      info: "Toprak, kayaların parçalanmasıyla oluşur ve bitkilerin yaşaması için gereklidir.",
      fact: "1 cm toprak oluşması yüzlerce yıl alır.",
    },
  ],
  ortaokul: [
    {
      key: "sci_atom",
      emoji: "⚛️",
      title: "Atom ve Molekül",
      info: "Her madde atomlardan oluşur. Atomlar birleşerek molekülleri oluşturur.",
      fact: "Bir insan içinde yaklaşık 7 oktilyon atom var!",
    },
    {
      key: "sci_dna",
      emoji: "🧬",
      title: "DNA",
      info: "DNA canlıların genetik bilgisini taşır. Her insanın DNAsı benzersizdir.",
      fact: "Bir hücreden çıkarılıp uzatılsa DNA 2 metre olur.",
    },
    {
      key: "sci_evrim",
      emoji: "🦎",
      title: "Evrim",
      info: "Canlılar milyonlarca yıl boyunca ortama uyum sağlayarak değişmiştir.",
      fact: "Darwin 1859'da evrim teorisini yayımladı.",
    },
    {
      key: "sci_kimyasal",
      emoji: "🧪",
      title: "Kimyasal Tepkimeler",
      info: "Maddeler birleşerek ya da ayrışarak yeni maddeler oluşturabilir.",
      fact: "Demir ve oksijenin birleşmesi pas oluşturur.",
    },
    {
      key: "sci_elektrik",
      emoji: "⚡",
      title: "Elektrik",
      info: "Elektronların hareketi elektrik akımını oluşturur. Devreler elektriği taşır.",
      fact: "şimşek, atmosferdeki statik elektrik boşalmasıdır.",
    },
    {
      key: "sci_uzay",
      emoji: "🚀",
      title: "Uzay",
      info: "Evren; yıldızlar, gezegenler, galaksiler ve karanlık maddeden oluşur.",
      fact: "Güneş sistemi 4.6 milyar yaşındadır.",
    },
    {
      key: "sci_newton",
      emoji: "🍎",
      title: "Newton Yasaları",
      info: "Newton'un 3 hareket yasası cisimlerin nasıl hareket ettiğini açıklar.",
      fact: "Newton elmanin düşmesinden yerçekimini keşfetti.",
    },
    {
      key: "sci_hologram",
      emoji: "🔭",
      title: "Optik",
      info: "Merçekler ışığı kırarak görüntü oluşturur. Gözlük, mikrop ve teleskop bunu kullanır.",
      fact: "Teleskop 1608'de Hollandalı Hans Lippershey tarafından icat edildi.",
    },
  ],
};

const levelTabs: { key: Level; label: string }[] = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" },
];

export default function SciencePage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const profile = getCurrentUser();

  // biome-ignore lint/correctness/useExhaustiveDependencies: one-time mount tracking
  useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "science");
  }, []);

  const [level, setLevel] = useState<Level>(
    (profile?.level as Level) || "ilkokul",
  );
  const [readTopics, setReadTopics] = useState<string[]>(() =>
    profile ? getReadTopics(profile.studentNumber) : [],
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleSpeak = (id: string, text: string) => {
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
    } else {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = "tr-TR";
      utt.onend = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utt);
    }
  };

  const filtered = scienceData[level].filter(
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

  const total = scienceData[level].length;
  const done = scienceData[level].filter((p) =>
    readTopics.includes(p.key),
  ).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 to-teal-500">
      <div className="p-4">
        <button
          type="button"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4 font-bold text-sm"
        >
          ← Geri
        </button>
        <h1 className="text-3xl font-black text-white mb-4">
          🔬 Fen Bilimleri
        </h1>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {levelTabs.map((t) => (
            <button
              type="button"
              key={t.key}
              onClick={() => setLevel(t.key)}
              className={`py-3 rounded-2xl font-bold text-xs transition-all ${
                level === t.key
                  ? "bg-white text-emerald-600"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3">
          <span className="text-2xl">🔬</span>
          <div className="flex-1">
            <div className="flex justify-between text-white text-xs mb-1">
              <span className="font-bold">Bu seviyedeki ilerleme</span>
              <span className="font-black">
                {done}/{total}
              </span>
            </div>
            <div className="bg-white/20 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-green-300 rounded-full transition-all duration-500"
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
              Sonuç bulunamadı 🔍
            </div>
          ) : (
            filtered.map((item) => {
              const isRead = readTopics.includes(item.key);
              return (
                <div
                  key={item.key}
                  className={`bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isRead ? "border-2 border-green-300" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{item.emoji}</span>
                    <div className="text-white font-black text-base">
                      {item.title}
                    </div>
                    {isRead && (
                      <span className="ml-auto text-green-300 text-xl">✓</span>
                    )}
                  </div>
                  <p className="text-white font-bold text-sm leading-relaxed mb-2">
                    {item.info}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    💡 {item.fact}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleSpeak(item.key, item.info)}
                    className="bg-white/20 hover:bg-white/40 text-white text-xs font-bold px-3 py-1 rounded-full transition-all mr-2 mb-2"
                  >
                    {speakingId === item.key ? "⏹ Durdur" : "🔊 Dinle"}
                  </button>
                  {!isRead && profile && (
                    <button
                      type="button"
                      onClick={() => handleRead(item.key)}
                      className="bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
                    >
                      ✅ {t("learned")} +10 puan
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
