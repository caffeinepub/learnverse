import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { useLanguage } from "../i18n/LanguageContext";
import {
  getCurrentUser,
  getReadTopics,
  incrementDailyContentRead,
  markTopicRead,
  trackContentVisit,
  updatePoints,
} from "../store";

interface Region {
  key: string;
  name: string;
  nameEn: string;
  emoji: string;
  color: string;
  provinces: string[];
  provincesEn: string[];
  features: string;
  featuresEn: string;
}

const regions: Region[] = [
  {
    key: "map_marmara",
    name: "Marmara Bölgesi",
    nameEn: "Marmara Region",
    emoji: "🏙️",
    color: "from-blue-500 to-blue-700",
    provinces: ["İstanbul", "Bursa", "Kocaeli", "Tekirdağ", "Balıkesir"],
    provincesEn: ["Istanbul", "Bursa", "Kocaeli", "Tekirdag", "Balikesir"],
    features:
      "Türkiye'nin en kalabalık bölgesi. İstanbul ülkenin en büyük şehri. Sanayi ve ticaret merkezi. Marmara Denizi ile çevrili.",
    featuresEn:
      "Turkey's most populous region. Istanbul is the largest city. Industrial and commercial hub. Surrounded by the Sea of Marmara.",
  },
  {
    key: "map_ege",
    name: "Ege Bölgesi",
    nameEn: "Aegean Region",
    emoji: "🌊",
    color: "from-cyan-500 to-teal-600",
    provinces: ["İzmir", "Manisa", "Denizli", "Aydın", "Muğla"],
    provincesEn: ["Izmir", "Manisa", "Denizli", "Aydin", "Mugla"],
    features:
      "Zeytinlikleri ve bağlarıyla ünlü. İzmir Türkiye'nin 3. büyük şehri. Efes ve Bergama antik kentleri burada.",
    featuresEn:
      "Famous for olive groves and vineyards. Izmir is Turkey's 3rd largest city. Ancient cities of Ephesus and Pergamon are here.",
  },
  {
    key: "map_akdeniz",
    name: "Akdeniz Bölgesi",
    nameEn: "Mediterranean Region",
    emoji: "☀️",
    color: "from-orange-500 to-red-500",
    provinces: ["Antalya", "Adana", "Mersin", "Hatay", "Isparta"],
    provincesEn: ["Antalya", "Adana", "Mersin", "Hatay", "Isparta"],
    features:
      "Turizm açısından çok önemli. Akdeniz iklimi hâkim. Toros Dağları bölgede bulunur. Narenciye üretiminde önde.",
    featuresEn:
      "Very important for tourism. Mediterranean climate. The Taurus Mountains are here. Leading citrus fruit production.",
  },
  {
    key: "map_ic_anadolu",
    name: "İç Anadolu Bölgesi",
    nameEn: "Central Anatolia Region",
    emoji: "🏛️",
    color: "from-amber-500 to-yellow-600",
    provinces: ["Ankara", "Konya", "Kayseri", "Eskişehir", "Sivas"],
    provincesEn: ["Ankara", "Konya", "Kayseri", "Eskisehir", "Sivas"],
    features:
      "Türkiye'nin başkenti Ankara burada. Step iklimi ve geniş ovalar. Kapadokya'nın peri bacaları burada. Buğday üretiminde öncü.",
    featuresEn:
      "Turkey's capital Ankara is here. Steppe climate and vast plains. Cappadocia's fairy chimneys are here. Leading wheat production.",
  },
  {
    key: "map_karadeniz",
    name: "Karadeniz Bölgesi",
    nameEn: "Black Sea Region",
    emoji: "🌿",
    color: "from-green-600 to-emerald-700",
    provinces: ["Samsun", "Trabzon", "Rize", "Zonguldak", "Ordu"],
    provincesEn: ["Samsun", "Trabzon", "Rize", "Zonguldak", "Ordu"],
    features:
      "Yağışlı iklim ve yemyeşil doğa. Çay ve fındık üretiminde dünya lideri. Karadeniz kıyısında konumlu.",
    featuresEn:
      "Rainy climate and lush green nature. World leader in tea and hazelnut production. Located along the Black Sea coast.",
  },
  {
    key: "map_dogu_anadolu",
    name: "Doğu Anadolu Bölgesi",
    nameEn: "Eastern Anatolia Region",
    emoji: "🏔️",
    color: "from-slate-500 to-slate-700",
    provinces: ["Erzurum", "Van", "Malatya", "Elazığ", "Ağrı"],
    provincesEn: ["Erzurum", "Van", "Malatya", "Elazig", "Agri"],
    features:
      "En yüksek ve soğuk bölge. Ağrı Dağı Türkiye'nin en yüksek noktası (5165m). Van Gölü Türkiye'nin en büyük gölü.",
    featuresEn:
      "Highest and coldest region. Mount Ararat is Turkey's highest point (5165m). Lake Van is Turkey's largest lake.",
  },
  {
    key: "map_guneydogu_anadolu",
    name: "Güney Doğu Anadolu Bölgesi",
    nameEn: "Southeastern Anatolia Region",
    emoji: "🏜️",
    color: "from-yellow-600 to-amber-700",
    provinces: ["Gaziantep", "Şanlıurfa", "Diyarbakır", "Mardin", "Adıyaman"],
    provincesEn: ["Gaziantep", "Sanliurfa", "Diyarbakir", "Mardin", "Adiyaman"],
    features:
      "Güneydoğu Anadolu Projesi (GAP) burada hayata geçirilmiştir. Fırat ve Dicle nehirleri bu bölgeden akar.",
    featuresEn:
      "The GAP project was implemented here. The Euphrates and Tigris rivers flow through this region.",
  },
  {
    key: "map_samsun",
    name: "Samsun",
    nameEn: "Samsun",
    emoji: "⚓",
    color: "from-teal-500 to-cyan-600",
    provinces: ["Samsun", "İlkadım", "Canik", "Atakum", "Bafra"],
    provincesEn: ["Samsun", "Ilkadim", "Canik", "Atakum", "Bafra"],
    features:
      "Karadeniz'in kapısı olarak bilinir. Atatürk'ün 19 Mayıs 1919'da Kurtuluş Savaşı'nı başlatmak için çıktığı tarihi şehirdir. Tütün ve fındık üretimi önemlidir.",
    featuresEn:
      "Known as the gateway to the Black Sea. Historic city where Atatürk started the War of Independence on May 19, 1919.",
  },
  {
    key: "map_trabzon",
    name: "Trabzon",
    nameEn: "Trabzon",
    emoji: "🍵",
    color: "from-green-600 to-lime-600",
    provinces: ["Trabzon", "Ortahisar", "Akçaabat", "Of", "Araklı"],
    provincesEn: ["Trabzon", "Ortahisar", "Akcaabat", "Of", "Arakli"],
    features:
      "Dünyaca ünlü çay bahçeleri ve fındık bahçeleriyle kaplıdır. Trabzon Kalesi ve Ayasofya Müzesi önemli tarihi mekânlardır. Karadeniz mutfağının merkezi.",
    featuresEn:
      "Covered with world-famous tea gardens and hazelnut orchards. Trabzon Castle and Hagia Sophia Museum are important historical sites.",
  },
  {
    key: "map_erzurum",
    name: "Erzurum",
    nameEn: "Erzurum",
    emoji: "❄️",
    color: "from-blue-600 to-indigo-700",
    provinces: ["Erzurum", "Palandöken", "Yakutiye", "Oltu", "Horasan"],
    provincesEn: ["Erzurum", "Palandoken", "Yakutiye", "Oltu", "Horasan"],
    features:
      "Türkiye'nin en soğuk ve en yüksek şehirlerinden biridir. Palandöken Kayak Merkezi ile kış turizmi önemlidir. Atatürk'ün Erzurum Kongresi'ni yönettiği tarihi şehir.",
    featuresEn:
      "One of Turkey's coldest and highest cities. Winter tourism is important with the Palandoken Ski Center.",
  },
  {
    key: "map_gaziantep",
    name: "Gaziantep",
    nameEn: "Gaziantep",
    emoji: "🧆",
    color: "from-amber-600 to-orange-700",
    provinces: ["Gaziantep", "Şahinbey", "Şehitkamil", "Nizip", "İslahiye"],
    provincesEn: ["Gaziantep", "Sahinbey", "Sehitkamil", "Nizip", "Islahiye"],
    features:
      "Türkiye'nin gastronomi başkenti. Baklava ve fıstıklı tatlılar dünyaca ünlüdür. Gaziantep Kalesi ve zengin tarihi dokusuyla öne çıkar. Türkiye'nin 6. büyük şehri.",
    featuresEn:
      "Turkey's gastronomic capital. Baklava and pistachio desserts are world-famous. Turkey's 6th largest city.",
  },
  {
    key: "map_diyarbakir",
    name: "Diyarbakır",
    nameEn: "Diyarbakir",
    emoji: "🏛️",
    color: "from-stone-600 to-gray-700",
    provinces: ["Diyarbakır", "Bağlar", "Kayapınar", "Sur", "Ergani"],
    provincesEn: ["Diyarbakir", "Baglar", "Kayapinar", "Sur", "Ergani"],
    features:
      "UNESCO Dünya Mirası listesinde yer alan siyah bazalt surlarıyla tanınır. Dicle Nehri kıyısında kurulmuştur. Karpuzuyla meşhurdur. 5000 yıllık tarihi geçmişe sahip.",
    featuresEn:
      "Known for its black basalt walls listed as a UNESCO World Heritage Site. Built on the banks of the Tigris River.",
  },
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function TurkeyMapPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const isEn = lang === "en";
  const profile = getCurrentUser();

  // biome-ignore lint/correctness/useExhaustiveDependencies: one-time mount tracking
  useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "turkey-map");
  }, []);
  const [mode, setMode] = useState<"learn" | "quiz">("learn");
  const [selected, setSelected] = useState<string | null>(null);
  const [quizRegion, setQuizRegion] = useState<Region | null>(null);
  const [quizChoices, setQuizChoices] = useState<Region[]>([]);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCount, setQuizCount] = useState(0);
  const [readTopics, setReadTopics] = useState<string[]>(() =>
    profile ? getReadTopics(profile.studentNumber) : [],
  );

  const handleLearnRegion = (key: string) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 5);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };

  const startQuiz = () => {
    const r = regions[Math.floor(Math.random() * regions.length)];
    const others = shuffle(regions.filter((reg) => reg.key !== r.key)).slice(
      0,
      3,
    );
    setQuizRegion(r);
    setQuizChoices(shuffle([r, ...others]));
    setQuizAnswer(null);
  };

  const handleQuizAnswer = (key: string) => {
    if (quizAnswer !== null || !quizRegion) return;
    setQuizAnswer(key);
    if (key === quizRegion.key) {
      setScore((s) => s + 5);
      if (profile) updatePoints(profile.studentNumber, 5);
    }
    setQuizCount((c) => c + 1);
  };

  const learnedCount = regions.filter((r) => readTopics.includes(r.key)).length;
  const learnPct =
    regions.length > 0 ? Math.round((learnedCount / regions.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-700">
      <div className="p-4">
        <Button
          data-ocid="turkeymap.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4"
        >
          ← {isEn ? "Back" : "Geri"}
        </Button>
        <h1 className="text-3xl font-black text-white mb-4">
          🗺️ {isEn ? "Turkey Map" : "Türkiye Haritası"}
        </h1>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            type="button"
            data-ocid="turkeymap.tab"
            onClick={() => setMode("learn")}
            className={`py-3 rounded-2xl font-bold text-sm transition-all ${mode === "learn" ? "bg-white text-red-600" : "bg-white/20 text-white hover:bg-white/30"}`}
          >
            📖 {isEn ? "Learn" : "Öğren"}
          </button>
          <button
            type="button"
            data-ocid="turkeymap.tab"
            onClick={() => {
              setMode("quiz");
              startQuiz();
            }}
            className={`py-3 rounded-2xl font-bold text-sm transition-all ${mode === "quiz" ? "bg-white text-red-600" : "bg-white/20 text-white hover:bg-white/30"}`}
          >
            🎯 Quiz
          </button>
        </div>

        {/* Progress bar - only in learn mode */}
        {mode === "learn" && (
          <div className="bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3">
            <span className="text-2xl">🗺️</span>
            <div className="flex-1">
              <div className="flex justify-between text-white text-xs mb-1">
                <span className="font-bold">
                  {isEn ? "Regions learned" : "Öğrenilen bölgeler"}
                </span>
                <span className="font-black">
                  {learnedCount}/{regions.length}
                </span>
              </div>
              <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-green-400 rounded-full transition-all duration-500"
                  style={{ width: `${learnPct}%` }}
                />
              </div>
            </div>
            <span className="text-white font-black text-sm">{learnPct}%</span>
          </div>
        )}

        {mode === "learn" && (
          <div className="space-y-3">
            {regions.map((r) => {
              const isLearned = readTopics.includes(r.key);
              return (
                <div key={r.key} className="rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    className={`w-full bg-gradient-to-r ${r.color} p-4 flex items-center gap-3 text-left ${isLearned ? "opacity-80" : ""}`}
                    onClick={() =>
                      setSelected(selected === r.key ? null : r.key)
                    }
                  >
                    <span className="text-3xl">{r.emoji}</span>
                    <div className="flex-1">
                      <div className="text-white font-black">
                        {isEn ? r.nameEn : r.name}
                      </div>
                      <div className="text-white/80 text-xs">
                        {(isEn ? r.provincesEn : r.provinces)
                          .slice(0, 3)
                          .join(", ")}
                        ...
                      </div>
                    </div>
                    {isLearned && (
                      <span className="text-green-300 text-lg mr-1">✓</span>
                    )}
                    <span className="text-white/70">
                      {selected === r.key ? "▲" : "▼"}
                    </span>
                  </button>
                  {selected === r.key && (
                    <div className="bg-white/20 px-4 py-3">
                      <div className="mb-2">
                        <div className="text-white font-bold text-xs mb-1">
                          🏙️ {isEn ? "Key Provinces:" : "Önemli İller:"}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {(isEn ? r.provincesEn : r.provinces).map((p) => (
                            <span
                              key={p}
                              className="bg-white/20 text-white text-xs px-2 py-1 rounded-full"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="text-white font-bold text-xs mb-1">
                          ℹ️ {isEn ? "Features:" : "Özellikler:"}
                        </div>
                        <p className="text-white/80 text-xs">
                          {isEn ? r.featuresEn : r.features}
                        </p>
                      </div>
                      {!isLearned && profile && (
                        <button
                          type="button"
                          data-ocid="turkeymap.learn_button"
                          onClick={() => handleLearnRegion(r.key)}
                          className="bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-3 py-1 rounded-full transition-all"
                        >
                          🗺️ {t("learned")} +5 puan
                        </button>
                      )}
                      {isLearned && (
                        <span className="text-green-300 text-xs font-bold">
                          ✅ Öğrenildi (+5 puan kazanıldı)
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {mode === "quiz" && quizRegion && (
          <div>
            <div className="bg-white/20 rounded-2xl p-4 mb-4 text-center">
              <div className="text-white/70 text-xs mb-1">
                {isEn ? "Score" : "Puan"}: {score} |{" "}
                {isEn ? "Question" : "Soru"}: {quizCount}
              </div>
              <div className="text-white font-black text-lg mb-2">
                {isEn ? "Which region is this?" : "Bu bölge hangisidir?"}
              </div>
              <div className="text-6xl mb-2">{quizRegion.emoji}</div>
              <div className="text-white/80 text-sm">
                {isEn ? "Provinces" : "İller"}:{" "}
                {(isEn ? quizRegion.provincesEn : quizRegion.provinces)
                  .slice(0, 2)
                  .join(", ")}
                ...
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {quizChoices.map((choice, cIdx) => {
                let btnClass = "bg-white/20 text-white hover:bg-white/30";
                if (quizAnswer !== null) {
                  if (choice.key === quizRegion.key)
                    btnClass = "bg-green-500 text-white";
                  else if (choice.key === quizAnswer)
                    btnClass = "bg-red-500/80 text-white";
                  else btnClass = "bg-white/10 text-white/50";
                }
                return (
                  <button
                    key={choice.key}
                    type="button"
                    data-ocid={`turkeymap.answer_button.${cIdx + 1}`}
                    disabled={quizAnswer !== null}
                    onClick={() => handleQuizAnswer(choice.key)}
                    className={`rounded-xl p-3 text-sm font-bold transition-all ${btnClass} disabled:cursor-not-allowed`}
                  >
                    {isEn ? choice.nameEn : choice.name}
                  </button>
                );
              })}
            </div>
            {quizAnswer !== null && (
              <div className="mt-4 text-center">
                <div
                  className={`text-sm font-bold mb-3 ${
                    quizAnswer === quizRegion.key
                      ? "text-green-300"
                      : "text-red-200"
                  }`}
                >
                  {quizAnswer === quizRegion.key
                    ? isEn
                      ? "✅ Correct! +5 points!"
                      : "✅ Doğru! +5 puan!"
                    : isEn
                      ? `❌ Wrong. Correct: ${quizRegion.nameEn}`
                      : `❌ Yanlış. Doğru: ${quizRegion.name}`}
                </div>
                <button
                  type="button"
                  onClick={startQuiz}
                  className="bg-white/30 hover:bg-white/50 text-white font-bold px-6 py-2 rounded-full transition-all"
                >
                  {isEn ? "Next Question →" : "Sonraki Soru →"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
