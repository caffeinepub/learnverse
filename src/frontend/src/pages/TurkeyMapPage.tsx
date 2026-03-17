import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { getCurrentUser, updatePoints } from "../store";

interface Region {
  key: string;
  name: string;
  emoji: string;
  color: string;
  provinces: string[];
  features: string;
}

const regions: Region[] = [
  {
    key: "marmara",
    name: "Marmara Bölgesi",
    emoji: "🏙️",
    color: "from-blue-500 to-blue-700",
    provinces: ["İstanbul", "Bursa", "Kocaeli", "Tekirdağ", "Balıkesir"],
    features:
      "Türkiye'nin en kalabalık bölgesi. İstanbul ülkenin en büyük şehri. Sanayi ve ticaret merkezi. Marmara Denizi ile çevrili.",
  },
  {
    key: "ege",
    name: "Ege Bölgesi",
    emoji: "🌊",
    color: "from-cyan-500 to-teal-600",
    provinces: ["İzmir", "Manisa", "Denizli", "Aydın", "Muğla"],
    features:
      "Zeytinlikleri ve bağlarıyla ünlü. İzmir Türkiye'nin 3. büyük şehri. Efes ve Bergama antik kentleri burada.",
  },
  {
    key: "akdeniz",
    name: "Akdeniz Bölgesi",
    emoji: "☀️",
    color: "from-orange-500 to-red-500",
    provinces: ["Antalya", "Adana", "Mersin", "Hatay", "Isparta"],
    features:
      "Turizm açısından çok önemli. Akdeniz iklimi hâkim. Toros Dağları bölgede bulunur. Narenciye üretiminde önde.",
  },
  {
    key: "ic_anadolu",
    name: "İç Anadolu Bölgesi",
    emoji: "🏛️",
    color: "from-amber-500 to-yellow-600",
    provinces: ["Ankara", "Konya", "Kayseri", "Eskişehir", "Sivas"],
    features:
      "Türkiye'nin başkenti Ankara burada. Step iklimi ve geniş ovalar. Kapadokya'nın peri bacaları burada. Buğday üretiminde öncü.",
  },
  {
    key: "karadeniz",
    name: "Karadeniz Bölgesi",
    emoji: "🌿",
    color: "from-green-600 to-emerald-700",
    provinces: ["Samsun", "Trabzon", "Rize", "Zonguldak", "Ordu"],
    features:
      "Yağışlı iklim ve yemyeşil doğa. Çay ve fındık üretiminde dünya lideri. Karadeniz kıyısında konumlu.",
  },
  {
    key: "dogu_anadolu",
    name: "Doğu Anadolu Bölgesi",
    emoji: "🏔️",
    color: "from-slate-500 to-slate-700",
    provinces: ["Erzurum", "Van", "Malatya", "Elazığ", "Ağrı"],
    features:
      "En yüksek ve soğuk bölge. Ağrı Dağı Türkiye'nin en yüksek noktası (5165m). Van Gölü Türkiye'nin en büyük gölü.",
  },
  {
    key: "guneydogu_anadolu",
    name: "Güney Doğu Anadolu Bölgesi",
    emoji: "🏜️",
    color: "from-yellow-600 to-amber-700",
    provinces: ["Gaziantep", "Şanlıurfa", "Diyarbakır", "Mardin", "Adıyaman"],
    features:
      "Güneydou Anadolu Projesi (GAP) burada hayata geçirilmiştir. Fırat ve Dicle nehirleri bu bölgeden akar.",
  },
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function TurkeyMapPage() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const [mode, setMode] = useState<"learn" | "quiz">("learn");
  const [selected, setSelected] = useState<string | null>(null);
  const [quizRegion, setQuizRegion] = useState<Region | null>(null);
  const [quizChoices, setQuizChoices] = useState<Region[]>([]);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCount, setQuizCount] = useState(0);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-700">
      <div className="p-4">
        <Button
          data-ocid="turkeymap.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4"
        >
          ← Geri
        </Button>
        <h1 className="text-3xl font-black text-white mb-4">
          🗺️ Türkiye Haritası
        </h1>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <button
            type="button"
            data-ocid="turkeymap.tab"
            onClick={() => setMode("learn")}
            className={`py-3 rounded-2xl font-bold text-sm transition-all ${mode === "learn" ? "bg-white text-red-600" : "bg-white/20 text-white hover:bg-white/30"}`}
          >
            📖 Öğfen
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

        {mode === "learn" && (
          <div className="space-y-3">
            {regions.map((r) => (
              <div key={r.key} className="rounded-2xl overflow-hidden">
                <button
                  type="button"
                  className={`w-full bg-gradient-to-r ${r.color} p-4 flex items-center gap-3 text-left`}
                  onClick={() => setSelected(selected === r.key ? null : r.key)}
                >
                  <span className="text-3xl">{r.emoji}</span>
                  <div className="flex-1">
                    <div className="text-white font-black">{r.name}</div>
                    <div className="text-white/80 text-xs">
                      {r.provinces.slice(0, 3).join(", ")}...
                    </div>
                  </div>
                  <span className="text-white/70">
                    {selected === r.key ? "▲" : "▼"}
                  </span>
                </button>
                {selected === r.key && (
                  <div className="bg-white/20 px-4 py-3">
                    <div className="mb-2">
                      <div className="text-white font-bold text-xs mb-1">
                        🏙️ Önemli İller:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {r.provinces.map((p) => (
                          <span
                            key={p}
                            className="bg-white/20 text-white text-xs px-2 py-1 rounded-full"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-bold text-xs mb-1">
                        &#8505;️ Özellikler:
                      </div>
                      <p className="text-white/80 text-xs">{r.features}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {mode === "quiz" && quizRegion && (
          <div>
            <div className="bg-white/20 rounded-2xl p-4 mb-4 text-center">
              <div className="text-white/70 text-xs mb-1">
                Puan: {score} | Soru: {quizCount}
              </div>
              <div className="text-white font-black text-lg mb-2">
                Bu bölge hangisidir?
              </div>
              <div className="text-6xl mb-2">{quizRegion.emoji}</div>
              <div className="text-white/80 text-sm">
                İller: {quizRegion.provinces.slice(0, 2).join(", ")}...
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
                    {choice.name}
                  </button>
                );
              })}
            </div>
            {quizAnswer !== null && (
              <div className="mt-4 text-center">
                <div
                  className={`text-sm font-bold mb-3 ${quizAnswer === quizRegion.key ? "text-green-300" : "text-red-200"}`}
                >
                  {quizAnswer === quizRegion.key
                    ? "✅ Doğru! +5 puan!"
                    : `❌ Yanlış. Doğru: ${quizRegion.name}`}
                </div>
                <button
                  type="button"
                  onClick={startQuiz}
                  className="bg-white/30 hover:bg-white/50 text-white font-bold px-6 py-2 rounded-full transition-all"
                >
                  Sonraki Soru →
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
