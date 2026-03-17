import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  getCurrentUser,
  getReadTopics,
  markTopicRead,
  updatePoints,
} from "../store";

const people = [
  {
    key: "aziz_sancar",
    icon: "🔬",
    name: "Aziz Sancar",
    desc: "Nobel ödüllü Türk bilim insanı. DNA tamir mekanizmalarını keşfetti.",
  },
  {
    key: "cahit_arf",
    icon: "➕",
    name: "Cahit Arf",
    desc: "Dünyaca ünlü Türk matematiksel. Arf halkası ve Arf değismezi ile tanınır.",
  },
  {
    key: "sabiha_gokcen",
    icon: "✈️",
    name: "Sabiha Gökçen",
    desc: "Dünyanın ilk kadın savaş pilotlarından. Atatürk'ün manevi kızı.",
  },
  {
    key: "naim_suleymanoglu",
    icon: "🏆",
    name: "Naim Süleymanoğlu",
    desc: "Üç kez olimpiyat şampiyonu halterci. 'Cüce Küp' lakabıyla anılır.",
  },
  {
    key: "abidin_dino",
    icon: "🎨",
    name: "Abidin Dino",
    desc: "Türkiye'nin önemli ressam ve yazarı. Paris sanat dünyasında nam salmıştır.",
  },
];

const rules = [
  {
    key: "trafik",
    icon: "🚦",
    title: "Trafik Kuralları",
    items: [
      "Kırmızıda dur, yeşilde geç",
      "Kaldırımda yürü",
      "Emniyet kemeri tak",
      "Zebrada geç",
    ],
  },
  {
    key: "okul",
    icon: "🏫",
    title: "Okul Kuralları",
    items: [
      "Zile dikkat et",
      "Derste sessiz ol",
      "Arkadaşlara saygı göster",
      "Temiz ol",
    ],
  },
  {
    key: "toplum",
    icon: "🤝",
    title: "Toplumsal Kurallar",
    items: [
      "Büyüklerine saygı göster",
      "Kuyruğa katıl",
      "Doğayı kirletme",
      "Yardım etmeye çalış",
    ],
  },
];

const emergency = [
  { num: "110", icon: "🗣️🔥", name: "İtfaiye", color: "bg-red-500" },
  { num: "112", icon: "🚑", name: "Ambulans", color: "bg-green-500" },
  { num: "155", icon: "👮", name: "Polis", color: "bg-blue-500" },
  { num: "156", icon: "💂", name: "Jandarma", color: "bg-gray-600" },
];

const earthquake = [
  "Masa altına gir",
  "Başını koru",
  "Pencerelerden uzak dur",
  "Sarsilma duruncaya kadar bekle",
];
const fire = [
  "Sakin ol ve 110'u ara",
  "Yaşlak bez ile ağzını kapa",
  "Aşağı doğru eğil",
  "Asansör kullanma, merdiven kullan",
];

export default function CulturePage() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const [tab, setTab] = useState<"people" | "rules" | "emergency">("people");
  const [readTopics, setReadTopics] = useState<string[]>(() =>
    profile ? getReadTopics(profile.studentNumber) : [],
  );

  const handleRead = (key: string) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 5);
    setReadTopics((prev) => [...prev, key]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-cyan-600">
      <div className="p-4">
        <Button
          data-ocid="culture.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4"
        >
          ← Geri
        </Button>
        <h1 className="text-3xl font-black text-white mb-4">🌍 Genel Kültür</h1>

        <div className="grid grid-cols-3 gap-2 mb-6">
          {(["people", "rules", "emergency"] as const).map((key) => {
            const labels = {
              people: "🧑 Tanıyalım",
              rules: "📋 Kurallar",
              emergency: "🚨 Acil",
            };
            return (
              <button
                type="button"
                key={key}
                data-ocid={`culture.${key}_tab`}
                onClick={() => setTab(key)}
                className={`py-3 rounded-2xl font-bold text-sm transition-all ${
                  tab === key
                    ? "bg-white text-blue-600"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {labels[key]}
              </button>
            );
          })}
        </div>

        {tab === "people" && (
          <div className="space-y-3">
            {people.map((p) => {
              const isRead = readTopics.includes(p.key);
              return (
                <div
                  key={p.name}
                  className={`bg-white/20 backdrop-blur rounded-2xl p-4 flex gap-3 transition-all ${
                    isRead ? "border-2 border-green-400" : ""
                  }`}
                >
                  <div className="text-4xl">{p.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-black">{p.name}</div>
                      {isRead && (
                        <span className="text-green-300 text-lg">✓</span>
                      )}
                    </div>
                    <div className="text-white/80 text-sm mb-2">{p.desc}</div>
                    {!isRead && profile && (
                      <button
                        type="button"
                        data-ocid="culture.read_button"
                        onClick={() => handleRead(p.key)}
                        className="bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-3 py-1 rounded-full transition-all"
                      >
                        📖 Okudum! +5 puan
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {tab === "rules" && (
          <div className="space-y-4">
            {rules.map((r) => {
              const isRead = readTopics.includes(r.key);
              return (
                <div
                  key={r.title}
                  className={`bg-white/20 backdrop-blur rounded-2xl p-4 transition-all ${
                    isRead ? "border-2 border-green-400" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-white font-black">
                      {r.icon} {r.title}
                    </div>
                    {isRead && (
                      <span className="text-green-300 text-lg">✓</span>
                    )}
                  </div>
                  <ul className="space-y-1 mb-3">
                    {r.items.map((item) => (
                      <li
                        key={item}
                        className="text-white/80 text-sm flex gap-2"
                      >
                        <span className="text-yellow-300">•</span> {item}
                      </li>
                    ))}
                  </ul>
                  {!isRead && profile && (
                    <button
                      type="button"
                      data-ocid="culture.read_button"
                      onClick={() => handleRead(r.key)}
                      className="bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-3 py-1 rounded-full transition-all"
                    >
                      📖 Okudum! +5 puan
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "emergency" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {emergency.map((e) => (
                <div
                  key={e.num}
                  className={`${e.color} rounded-2xl p-4 text-center`}
                >
                  <div className="text-3xl mb-1">{e.icon}</div>
                  <div className="text-white font-black text-2xl">{e.num}</div>
                  <div className="text-white/90 text-sm">{e.name}</div>
                </div>
              ))}
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-4">
              <div className="text-white font-black mb-2">
                🏠 Depremde Ne Yapmalı?
              </div>
              <ol className="space-y-1">
                {earthquake.map((s) => (
                  <li key={s} className="text-white/80 text-sm">
                    {earthquake.indexOf(s) + 1}. {s}
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-4">
              <div className="text-white font-black mb-2">
                🔥 Yanginda Ne Yapmalı?
              </div>
              <ol className="space-y-1">
                {fire.map((s) => (
                  <li key={s} className="text-white/80 text-sm">
                    {fire.indexOf(s) + 1}. {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
