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

const poems: Record<
  Level,
  { key: string; title: string; emoji: string; lines: string[] }[]
> = {
  okul_oncesi: [
    {
      key: "poem_yagmur",
      title: "Yağmur",
      emoji: "🌧️",
      lines: [
        "Damla damla yağmur,",
        "Düşer toprağa şimdi.",
        "Çiçekler güler,",
        "Kuşlar söyler şarkı.",
      ],
    },
    {
      key: "poem_kelebek",
      title: "Kelebek",
      emoji: "🦋",
      lines: [
        "Renkli renkli kelebek,",
        "Uçar çiçekten çiçeğe.",
        "Ne güzel kanatları var,",
        "Hepsi farklı renklerde.",
      ],
    },
    {
      key: "poem_ay",
      title: "Ay",
      emoji: "🌙",
      lines: [
        "Ay doğdu gökyüzünde,",
        "Parlıyor geceleri.",
        "Yıldızlar etrafında,",
        "Dans eder sevinçle.",
      ],
    },
    {
      key: "poem_bahce",
      title: "Bahçemiz",
      emoji: "🌷",
      lines: [
        "Bahçemizde güller açmış,",
        "Pembeler ve kırmızılar.",
        "Anne suluyor her gün,",
        "Ben de yardım ediyorum.",
      ],
    },
  ],
  ilkokul: [
    {
      key: "poem_okul",
      title: "Okul Sevinci",
      emoji: "🏫",
      lines: [
        "Sabah erken kalkarım,",
        "Çantamı hazırlarım.",
        "Okula koşa koşa giderim,",
        "Arkadaşlarımı özledim.",
        "Kitaplar benim dostum,",
        "Öğrenmek en büyük mutluluk.",
      ],
    },
    {
      key: "poem_mevsimler",
      title: "Dört Mevsim",
      emoji: "🍂",
      lines: [
        "İlkbaharda çiçekler açar,",
        "Yazın güneş kavurur.",
        "Sonbaharda yapraklar döker,",
        "Kışın kar yağar suskunca.",
        "Dört mevsim, dört güzellik,",
        "Doğanın armağanı bizlere.",
      ],
    },
    {
      key: "poem_anadolu",
      title: "Anadolu",
      emoji: "🇹🇷",
      lines: [
        "Anadolu güzel toprak,",
        "Tarih kokar her taşında.",
        "Ata mirası değerli,",
        "Korurum yürekten.",
        "Dağlar, ovalar, denizler,",
        "Hepsi bizim vatanımız.",
      ],
    },
    {
      key: "poem_hedef",
      title: "Hedefim Var",
      emoji: "🎯",
      lines: [
        "Bir hedefim var,",
        "Her gün çalışırım.",
        "Bazen zor olur yol,",
        "Ama vazgeçmem hiç.",
        "Adım adım ilerlerim,",
        "Başaracağım, biliyorum.",
      ],
    },
  ],
  ortaokul: [
    {
      key: "poem_vatan",
      title: "Vatan Sevgisi",
      emoji: "🏔️",
      lines: [
        "Bu topraklar atalardan kalma,",
        "Her karışı kandan geçilmiş.",
        "Dağlar şahit olmuş tarihe,",
        "Nehirler taşımış acıları.",
        "Biz bu mirasın sahipleri,",
        "Sonsuza dek koruyacağız.",
        "Vatan sevgisi gönüldedir,",
        "Canımızdan değerlidir.",
      ],
    },
    {
      key: "poem_bilim",
      title: "Bilimin Işığı",
      emoji: "🔬",
      lines: [
        "Karanlıkta bir ışık yakılır,",
        "Merakla sorulan bir soru.",
        "Deney yapılır, düşünülür,",
        "Cevap bulunur yavaş yavaş.",
        "Bilim budur: aramak, bulmak,",
        "Dünyayı daha iyi anlamak.",
        "Einstein de böyle başladı,",
        "Sen de yapabilirsin!",
      ],
    },
    {
      key: "poem_gelecek",
      title: "Geleceğe Mektup",
      emoji: "✉️",
      lines: [
        "Sevgili gelecekteki ben,",
        "Bugün güzel hayaller kuruyorum.",
        "Doğayı seviyorum, insanları da,",
        "Daha iyi bir dünya istiyorum.",
        "Çalış, üret, sev, paylaş,",
        "Mutlu olmayı unutma sakın.",
        "Geçmişteki sen seni izliyor,",
        "Gurur duyacak bir hayat yaşa.",
      ],
    },
    {
      key: "poem_ozgurluk",
      title: "Özgürlük",
      emoji: "🕊️",
      lines: [
        "Özgürlük bir kuş gibidir,",
        "Kanatlanmak ister gökyüzüne.",
        "Zincirlenmez, hapsolmaz,",
        "Açık alanlarda koşar.",
        "İnsanlar da böyle olmalı,",
        "Düşünmek, konuşmak, var olmak.",
        "Özgürlük en büyük hediyedir,",
        "Korumak gerekir her daim.",
      ],
    },
  ],
};

const levelTabs: { key: Level; label: string }[] = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" },
];

export default function PoemsPage() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const [level, setLevel] = useState<Level>(
    (profile?.level as Level) || "ilkokul",
  );
  const [readTopics, setReadTopics] = useState<string[]>(() =>
    profile ? getReadTopics(profile.studentNumber) : [],
  );

  const handleMemorized = (key: string) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 8);
    setReadTopics((prev) => [...prev, key]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 to-purple-500">
      <div className="p-4">
        <Button
          data-ocid="poems.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4"
        >
          ← Geri
        </Button>
        <h1 className="text-3xl font-black text-white mb-4">🎭 Şiirler</h1>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {levelTabs.map((t) => (
            <button
              type="button"
              key={t.key}
              data-ocid="poems.tab"
              onClick={() => setLevel(t.key)}
              className={`py-3 rounded-2xl font-bold text-xs transition-all ${level === t.key ? "bg-white text-violet-600" : "bg-white/20 text-white hover:bg-white/30"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {poems[level].map((p) => {
            const isDone = readTopics.includes(p.key);
            return (
              <div
                key={p.key}
                className={`bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isDone ? "border-2 border-yellow-300" : ""}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl">{p.emoji}</span>
                  <div className="text-white font-black text-lg">{p.title}</div>
                  {isDone && (
                    <span className="ml-auto text-yellow-300 text-xl">⭐</span>
                  )}
                </div>
                <div className="mb-4">
                  {p.lines.map((line) => (
                    <p
                      key={line}
                      className="text-white/90 text-sm italic leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                {!isDone && profile && (
                  <button
                    type="button"
                    data-ocid="poems.read_button"
                    onClick={() => handleMemorized(p.key)}
                    className="bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
                  >
                    🎤 Ezberledim! +8 puan
                  </button>
                )}
                {isDone && (
                  <span className="text-yellow-300 text-xs font-bold">
                    ⭐ Ezberlendi (+8 puan kazanıldı)
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
