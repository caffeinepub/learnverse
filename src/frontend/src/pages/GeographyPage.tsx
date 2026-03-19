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

const geoData: Record<
  Level,
  { key: string; emoji: string; title: string; info: string; fact: string }[]
> = {
  okul_oncesi: [
    {
      key: "geo_dunya",
      emoji: "🌍",
      title: "Dünya",
      info: "Dünya üzerinde yaşadığımız gezegendir. Mavi ve yeşil renklerdedir.",
      fact: "Dünya'nın %71'i su ile kaplıdır!",
    },
    {
      key: "geo_turkiye",
      emoji: "🇹🇷",
      title: "Türkiye",
      info: "Türkiye, Asya ve Avrupa'da yer alan güzel bir ülkedir.",
      fact: "Türkiye'nin başkenti Ankara'dır.",
    },
    {
      key: "geo_gunes",
      emoji: "☀️",
      title: "Güneş",
      info: "Güneş, Dünya'ya ışık ve sıcaklık veren yıldızdır.",
      fact: "Güneş, Dünya'dan 150 milyon km uzaktadır.",
    },
    {
      key: "geo_deniz",
      emoji: "🌊",
      title: "Deniz",
      info: "Denizler tuzlu suyla dolu büyük alanlardır.",
      fact: "Dünya'nın en derin denizi Pasifik Okyanusu'dur.",
    },
    {
      key: "geo_dag",
      emoji: "⛰️",
      title: "Dağ",
      info: "Dağlar, çok yüksek arazi şekilleridir. Karla kaplı olabilirler.",
      fact: "Dünyanın en yüksek dağı Everest'tir (8848 m).",
    },
    {
      key: "geo_orman",
      emoji: "🌲",
      title: "Orman",
      info: "Ormanlar, birçok hayvanın ve bitkinin yaşadığı yerlerdir.",
      fact: "Amazon ormanı dünyanın en büyük ormanıdır.",
    },
    {
      key: "geo_cöl",
      emoji: "🏜️",
      title: "Çöl",
      info: "Çöller, çok az yağmur alan kuru ve sıcak yerlerdir.",
      fact: "Sahra Çölü, dünyanın en büyük sıcak çölüdür.",
    },
    {
      key: "geo_nehir",
      emoji: "🏞️",
      title: "Nehir",
      info: "Nehirler, karada akan büyük su yollarıdır.",
      fact: "Nil Nehri, dünyanın en uzun nehridir.",
    },
  ],
  ilkokul: [
    {
      key: "geo_kitalar",
      emoji: "🗺️",
      title: "Kıtalar",
      info: "Dünya 7 kıtaya ayrılır: Asya, Avrupa, Afrika, Amerika (K-G), Avustralya, Antarktika.",
      fact: "En büyük kıta Asya, en küçüğü Avustralya'dır.",
    },
    {
      key: "geo_baskentler",
      emoji: "🏛️",
      title: "Başkentler",
      info: "Her ülkenin bir başkenti vardır. Türkiye'nin başkenti Ankara, Fransa'nınki Paris'tir.",
      fact: "Dünyada 195 bağımsız ülke vardır.",
    },
    {
      key: "geo_avrupa",
      emoji: "🇪🇺",
      title: "Avrupa",
      info: "Avrupa, birçok ülkeden oluşan küçük ama kalabalık bir kıtadır.",
      fact: "Avrupa'nın en büyük ülkesi Rusya'dır.",
    },
    {
      key: "geo_asya",
      emoji: "🌏",
      title: "Asya",
      info: "Asya, dünyanın en büyük kıtasıdır. Türkiye de Asya'dadır.",
      fact: "Asya'da dünya nüfusunun %60'ı yaşar.",
    },
    {
      key: "geo_afrika",
      emoji: "🌍",
      title: "Afrika",
      info: "Afrika, sıcak iklimi ve zengin yaban hayatıyla bilinir.",
      fact: "Afrika'da 54 ülke bulunmaktadır.",
    },
    {
      key: "geo_okyanus",
      emoji: "🌊",
      title: "Okyanuslar",
      info: "Dünyada 5 büyük okyanus vardır: Pasifik, Atlantik, Hint, Arktik ve Antarktika.",
      fact: "Pasifik Okyanusu, tüm kıtaları sığdırabilecek kadar büyüktür.",
    },
    {
      key: "geo_iklim",
      emoji: "🌡️",
      title: "İklim Kuşakları",
      info: "Dünya tropikal, ılıman ve kutup olmak üzere iklim kuşaklarına ayrılır.",
      fact: "Türkiye ılıman iklim kuşağında yer alır.",
    },
    {
      key: "geo_nüfus",
      emoji: "👥",
      title: "Dünya Nüfusu",
      info: "Dünyada 8 milyardan fazla insan yaşamaktadır.",
      fact: "En kalabalık ülke Hindistan'dır.",
    },
    {
      key: "geo_dil",
      emoji: "🗣️",
      title: "Dünya Dilleri",
      info: "Dünyada 7000'den fazla dil konuşulmaktadır.",
      fact: "En çok konuşulan dil Mandarin Çincesidir.",
    },
  ],
  ortaokul: [
    {
      key: "geo_tektoni",
      emoji: "🔄",
      title: "Levha Tektoniği",
      info: "Yeryüzü levhalar üzerinde durmadan hareket eder. Bu hareket depremlere ve volkanlara neden olur.",
      fact: "Hint-Avrasya levhası çarpışması Himalayaları oluşturdu.",
    },
    {
      key: "geo_jeografi",
      emoji: "📐",
      title: "Enlem ve Boylam",
      info: "Herhangi bir yerin konumunu belirlemek için enlem ve boylam kullanılır.",
      fact: "0° enlem çizgisine Ekvator denir.",
    },
    {
      key: "geo_iklimbölge",
      emoji: "🌿",
      title: "İklim Bölgeleri",
      info: "Dünya; tropikal, kurak, ılıman, karasal ve kutup iklim bölgelerine ayrılır.",
      fact: "Çöller sadece sıcak değil, soğuk da olabilir.",
    },
    {
      key: "geo_nüfusyoğ",
      emoji: "🏙️",
      title: "Nüfus Yoğunluğu",
      info: "Bazı bölgelerde insanlar yoğun yaşarken bazı yerlerde seyrek yaşar.",
      fact: "Monaco dünyanın en yoğun nüfuslu ülkesidir.",
    },
    {
      key: "geo_dogalkayn",
      emoji: "⛏️",
      title: "Doğal Kaynaklar",
      info: "Petrol, su, orman ve madenler birer doğal kaynaktır. Bunları korumak önemlidir.",
      fact: "Türkiye bor madeni rezervinde dünya lideridir.",
    },
    {
      key: "geo_kureselis",
      emoji: "🌡️",
      title: "Küresel Isınma",
      info: "Sanayi ve araçlardan çıkan gazlar atmosferi ısıtmakta, iklimi değiştirmektedir.",
      fact: "Son 100 yılda dünya sıcaklığı ortalama 1.1°C arttı.",
    },
    {
      key: "geo_göç",
      emoji: "✈️",
      title: "Göç",
      info: "İnsanlar iş, güvenlik veya iklim nedenlerle başka yerlere göç ederler.",
      fact: "Türkiye, dünyanın en fazla mülteci barındıran ülkesidir.",
    },
    {
      key: "geo_şehir",
      emoji: "🌆",
      title: "Megakentler",
      info: "Nüfusu 10 milyonu aşan şehirlere megakent denir.",
      fact: "Tokyo, dünyada yaklaşık 37 milyon nüfusuyla en büyük megakenttir.",
    },
    {
      key: "geo_ekosisteml",
      emoji: "🦁",
      title: "Ekosistemler",
      info: "Ormanlar, mercanlar, çöller ve tundralar birer ekosistemdir.",
      fact: "Mercan resifleri okyanus canlılarının %25'ine ev sahipliği yapar.",
    },
    {
      key: "geo_harita",
      emoji: "🗺️",
      title: "Harita Okuması",
      info: "Haritalar gerçek dünyayı küçülterek gösterir. Ölçek ve yönler çok önemlidir.",
      fact: "İlk bilinen harita M.Ö. 600'de Babilliler tarafından yapıldı.",
    },
  ],
};

const levelTabs: { key: Level; label: string }[] = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" },
];

export default function GeographyPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const profile = getCurrentUser();

  // biome-ignore lint/correctness/useExhaustiveDependencies: one-time mount tracking
  useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "geography");
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

  const filtered = geoData[level].filter(
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

  const total = geoData[level].length;
  const done = geoData[level].filter((p) => readTopics.includes(p.key)).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-cyan-500">
      <div className="p-4">
        <button
          type="button"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4 font-bold text-sm"
        >
          ← Geri
        </button>
        <h1 className="text-3xl font-black text-white mb-4">
          🌍 Coğrafya &amp; Dünya
        </h1>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {levelTabs.map((t) => (
            <button
              type="button"
              key={t.key}
              onClick={() => setLevel(t.key)}
              className={`py-3 rounded-2xl font-bold text-xs transition-all ${
                level === t.key
                  ? "bg-white text-blue-600"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3">
          <span className="text-2xl">🌍</span>
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
