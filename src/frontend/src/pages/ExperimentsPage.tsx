import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  getCurrentUser,
  getReadTopics,
  markTopicRead,
  updatePoints,
} from "../store";

type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

interface Experiment {
  key: string;
  title: string;
  emoji: string;
  materials: string[];
  steps: string[];
  science: string;
}

const experiments: Record<Level, Experiment[]> = {
  okul_oncesi: [
    {
      key: "exp_renk_karistir",
      title: "Renkleri Karıştıralım",
      emoji: "🎨",
      materials: ["Kırmızı boya", "Mavi boya", "Sarı boya", "3 bardak su"],
      steps: [
        "Bardaklara su doldur.",
        "İlk bardağa kırmızı boya koy.",
        "İkinci bardağa mavi boya koy.",
        "İki bardağı üçüncü boş bardakta karıştır.",
        "Mor renk oluştuğunu gözlemle!",
      ],
      science:
        "Birincil renkler (kırmızı, mavi, sarı) karışınca ikincil renkler oluşur. Kırmızı + mavi = mor!",
    },
    {
      key: "exp_buz_erimesi",
      title: "Buz Eriyince Ne Olur?",
      emoji: "🧊",
      materials: ["Bir buz kübü", "Bir kase", "Tuz"],
      steps: [
        "Buz kübünü kaseye koy.",
        "Üzerine tuz serp.",
        "Buzun erimesini gözlemle.",
        "Tuzsuz bir buz kübüyle karşılaştır.",
        "Hangi buz daha hızlı eridi?",
      ],
      science:
        "Tuz buzun erime noktasını düşürür. Bu yüzden kışın yollara tuz atılır!",
    },
    {
      key: "exp_balon_sisirme",
      title: "Karbonatla Balon Şişirme",
      emoji: "🎈",
      materials: ["1 balon", "1 şişe", "Sirke", "Kabartma tozu"],
      steps: [
        "Şişeye biraz sirke koy.",
        "Balonun içine bir tatlı kaşığı kabartma tozu koy.",
        "Balonu şişenin ağzına geçir.",
        "Balonun içindeki kabartma tozunu şişeye boşalt.",
        "Balonu şişer misin? Bak!",
      ],
      science:
        "Sirke ve kabartma tozu tepkimeye girince karbondioksit gazı çıkar. Bu gaz balonu şişirir!",
    },
  ],
  ilkokul: [
    {
      key: "exp_gokkusagi",
      title: "Bardakta Gökkusağı",
      emoji: "🌈",
      materials: [
        "5 bardak",
        "Şeker",
        "Su",
        "Farklı renkli boyalar",
        "Şırınga veya kaşık",
      ],
      steps: [
        "Her bardağa farklı miktarda şeker koy (1, 2, 3, 4, 5 kaşık).",
        "Eşit miktarda su ekle ve şekeri çöz.",
        "Her bardağa farklı renk boya ekle.",
        "En çok şekerli olanı alta koy, şırıngayla üstüne yavaşça diğerlerini ekle.",
        "Gökkusağı oluştuğunu gör!",
      ],
      science:
        "Şeker miktarı suyun yoğunluğunu artırır. Yoğun sıvılar altta, hafif sıvılar üstte kalır.",
    },
    {
      key: "exp_volcano",
      title: "Karbonat Volkanı",
      emoji: "🌋",
      materials: [
        "Kil veya karton",
        "Kabartma tozu",
        "Sirke",
        "Kırmızı boya",
        "Tepsi",
      ],
      steps: [
        "Kartondan veya kilden volkan şekli yap.",
        "Ortasına küçük bir kap yerleştir.",
        "Kaba 2 yemek kaşığı kabartma tozu koy.",
        "Birkaç damla kırmızı boya ekle.",
        "Üzerine sirke dök ve patlamayı izle!",
      ],
      science:
        "Asit (sirke) ve baz (kabartma tozu) tepkimesi karbondioksit gazı üretir. Bu gaz köpük oluşturur!",
    },
    {
      key: "exp_magnet_pusulasi",
      title: "Manyetik Pusula Yap",
      emoji: "🧭",
      materials: [
        "Bir iğne",
        "Mıknatıs",
        "Plastik kap",
        "Su",
        "Köpük veya mantar",
      ],
      steps: [
        "İğneyi mıknatısla 50 kez tek yönde sür.",
        "Kaba su doldur.",
        "İğneyi mantar veya köpüğün üzerine koy.",
        "Mantarı suya bırak.",
        "İğnenin Kuzey'i gösterdiğini izle!",
      ],
      science:
        "Mıknatısla sürtülünce iğne manyetikleşir. Dünya'nın manyetik alanıyla etkileşerek Kuzey'i gösterir.",
    },
  ],
  ortaokul: [
    {
      key: "exp_dna",
      title: "Muz DNA'sı Çıkarma",
      emoji: "🧬",
      materials: [
        "Bir muz",
        "Tuz",
        "Bulaşık deterjanı",
        "Soğuk alkol (ispirto)",
        "Süzgeç",
        "Şişe",
      ],
      steps: [
        "Muzu ez ve yarım bardak suda çöz.",
        "Bir çay kaşığı tuz ve birkaç damla deterjan ekle.",
        "10 dakika bekle, ara ara karıştır.",
        "Karışımı süzgeçten geçir.",
        "Süzülen sıvının üzerine yavaşça soğuk alkol ekle. İki katman oluştuğunu gör!",
      ],
      science:
        "DNA hücre zarından deterjanla ayrılır. Tuz DNA'nın bir arada kalmasını sağlar. Alkol DNA'yı çökeltir.",
    },
    {
      key: "exp_optik_illusion",
      title: "İşık Kırılması Deneyi",
      emoji: "🔦",
      materials: ["Bir bardak su", "Kalem veya kaşık", "Karton"],
      steps: [
        "Bardağa su doldur.",
        "Kalem veya kaşığı su içine dik koy.",
        "Bir kenara geç ve bakınca kalemi kesik görmeye çalış.",
        "Kartona bir ok çiz, bardağın arkasına koy.",
        "Bardağın önünden bakınca okun yönünün değiştiğini gözlemle.",
      ],
      science:
        "İşık bir maddeden diğerine geçerken kırılır (refraksiyon). Su havadan daha yoğundur; bu yüzden nümeler farklı görünür.",
    },
    {
      key: "exp_elektrik_devre",
      title: "Basit Elektrik Devresi",
      emoji: "⚡",
      materials: ["1 pil (AA)", "2 kablo", "1 küçük ampül veya LED", "Bant"],
      steps: [
        "Kabloların uçlarını soy.",
        "Bir kabloyu pilin artı (+) ucuna bağla.",
        "Diğer ucu ampülün bir tarafına bağla.",
        "İkinci kabloyu ampülün diğer tarafından pilin eksi (-) ucuna bağla.",
        "Devre tamamlandığında ampül yanar!",
      ],
      science:
        "Elektrik akımının akabilmesi için devrenin kapalı olması gerekir. Elektronlar pil negatifinden çıkar, ampülü yakar ve pozitife döner.",
    },
  ],
};

const levelTabs: { key: Level; label: string }[] = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" },
];

export default function ExperimentsPage() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const [level, setLevel] = useState<Level>(
    (profile?.level as Level) || "ilkokul",
  );
  const [readTopics, setReadTopics] = useState<string[]>(() =>
    profile ? getReadTopics(profile.studentNumber) : [],
  );
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleDone = (key: string) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 15);
    setReadTopics((prev) => [...prev, key]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-500">
      <div className="p-4">
        <Button
          data-ocid="experiments.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4"
        >
          ← Geri
        </Button>
        <h1 className="text-3xl font-black text-white mb-4">🔬 Deneyler</h1>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {levelTabs.map((t) => (
            <button
              type="button"
              key={t.key}
              data-ocid="experiments.tab"
              onClick={() => setLevel(t.key)}
              className={`py-3 rounded-2xl font-bold text-xs transition-all ${level === t.key ? "bg-white text-green-600" : "bg-white/20 text-white hover:bg-white/30"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {experiments[level].map((exp) => {
            const isDone = readTopics.includes(exp.key);
            const isOpen = expanded === exp.key;
            return (
              <div
                key={exp.key}
                className={`bg-white/20 backdrop-blur rounded-2xl overflow-hidden transition-all ${isDone ? "border-2 border-yellow-300" : ""}`}
              >
                <button
                  type="button"
                  className="w-full p-4 text-left flex items-center gap-3"
                  onClick={() => setExpanded(isOpen ? null : exp.key)}
                >
                  <span className="text-3xl">{exp.emoji}</span>
                  <div className="flex-1">
                    <div className="text-white font-black">{exp.title}</div>
                    <div className="text-white/70 text-xs">
                      {exp.materials.length} malzeme • {exp.steps.length} adım
                    </div>
                  </div>
                  {isDone && <span className="text-yellow-300">✓</span>}
                  <span className="text-white/60">{isOpen ? "▲" : "▼"}</span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4">
                    <div className="mb-3">
                      <div className="text-white font-bold mb-1 text-sm">
                        🧪 Malzemeler:
                      </div>
                      <ul className="space-y-1">
                        {exp.materials.map((m) => (
                          <li
                            key={m}
                            className="text-white/80 text-xs flex gap-2"
                          >
                            <span className="text-green-300">•</span> {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-3">
                      <div className="text-white font-bold mb-1 text-sm">
                        📋 Adımlar:
                      </div>
                      <ol className="space-y-1">
                        {exp.steps.map((step, idx) => (
                          <li key={step} className="text-white/80 text-xs">
                            <span className="text-yellow-300 font-bold">
                              {idx + 1}.{" "}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 mb-3">
                      <div className="text-white font-bold text-xs mb-1">
                        🔭 Bilim Açıklaması:
                      </div>
                      <p className="text-white/80 text-xs">{exp.science}</p>
                    </div>
                    {!isDone && profile && (
                      <button
                        type="button"
                        data-ocid="experiments.done_button"
                        onClick={() => handleDone(exp.key)}
                        className="bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
                      >
                        ✅ Yaptım! +15 puan
                      </button>
                    )}
                    {isDone && (
                      <span className="text-yellow-300 text-xs font-bold">
                        ✅ Tamamlandı (+15 puan kazanıldı)
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
