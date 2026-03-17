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

const stories: Record<
  Level,
  { key: string; title: string; emoji: string; text: string }[]
> = {
  okul_oncesi: [
    {
      key: "story_kucuk_kedi",
      title: "Küçük Kedi Minnoş",
      emoji: "🐱",
      text: "Minnoş adında küçük bir kedi vardı. Her sabah bahçede oynardı. Bir gün bahçede güzel bir kelebek gördü. Kelebeğin peşinden koştu ama yakalayamadı. Gülerek eve döndü.",
    },
    {
      key: "story_tavsan_kaplumbaga",
      title: "Tavşan ile Kaplumbağa",
      emoji: "🐢",
      text: "Tavşan ve kaplumbağa yarış yapacaktı. Tavşan çok hızlı koştu ve dinlenmeye yattı. Kaplumbağa yavaş yavaş ama durmadan yürüdü. Kaplumbağa yarışı kazandı. Sabır her zaman kazanır!",
    },
    {
      key: "story_cesur_fare",
      title: "Cesur Fare Piko",
      emoji: "🐭",
      text: "Piko adında cesur bir fare vardı. Arkadaşları kediyle karşılaşmaktan korkardı. Ama Piko korkmazdı. Bir gün tüm farelere yardım etti ve onları güvene ulaştırdı. Herkes Piko'yu çok sevdi.",
    },
    {
      key: "story_uc_kucuk_domuz",
      title: "Üç Küçük Domuz",
      emoji: "🐷",
      text: "Üç küçük domuz ev kurdu. Biri saman, biri tahta, biri tuğlayla yaptı. Kurt gelip saman ve tahta evi üfledi, yıktı. Ama tuğla evi yıkamadı. Sağlam iş yapmak önemlidir!",
    },
  ],
  ilkokul: [
    {
      key: "story_altin_balik",
      title: "Altın Balık",
      emoji: "🐟",
      text: "Denizde parlayan bir balık vardı. Bir çocuk onu yakaladı ama balık konuştu: 'Beni bırak, bir dileğini gerçekleştireyim.' Çocuk balığı bırakarak 'Annem iyileşsin' dedi. Sabah annesi sağlıklıydı. İyilik en büyük dilektir.",
    },
    {
      key: "story_kayip_koy",
      title: "Kayıp Köy",
      emoji: "🏔️",
      text: "Ali dağların arkasında gizli bir köy olduğunu duymuştu. Arkadaşlarıyla yola çıktı. Dağları aşarken beraber çalışarak zorluklarla başa çıktılar. Köyü buldular ve orada yaşayan insanlara yardım ettiler. Birliktelik güç kazandırır.",
    },
    {
      key: "story_bilim_arisi",
      title: "Bilim Arısı Maya",
      emoji: "🐝",
      text: "Maya bir arıydı ve çiçeklerden balmumu üretiyordu. Bir gün merak etti: neden çiçekler tatlı? Kovanına dönerek arkadaşlarına anlattı. Hep birlikte araştırdılar. Öğrenmenin tadı balmumundan daha tatlıdır.",
    },
    {
      key: "story_uzay_yolculugu",
      title: "Uzay Yolculuğu",
      emoji: "🚀",
      text: "Zeynep'in hayali astronot olmaktı. Her gece teleskopla yıldızlara bakardı. Okulda çok çalıştı ve matematik dersini sevdi. Büyüyünce gerçekten uzaya gitti. Hayal kurmak, başarmanın ilk adımıdır.",
    },
  ],
  ortaokul: [
    {
      key: "story_ataturk_cocuklugu",
      title: "Küçük Mustafa'nın Azmi",
      emoji: "🎖️",
      text: "Küçük Mustafa Selanik'te büyürdü. Öğrenmek için çok çalışırdı. Askeri okulda başarıyla okudu. Arkadaşları ona 'Kemal' adını verdi. Bu azimli çocuk ilerleyen yıllarda Türkiye'nin kurucusu Mustafa Kemal Atatürk olacaktı.",
    },
    {
      key: "story_iklim_savasci",
      title: "İklim Savaşçısı",
      emoji: "🌱",
      text: "Elif, şehrindeki fabrikaların havayı kirlettiğini fark etti. Arkadaşlarıyla çevre kulübü kurdu. Belediyeye dilekçe yazdılar, okullarda bilinçlendirme yaptılar. Fabrikalar yavaş yavaş değişti. Küçük adımlar büyük fark yaratır.",
    },
    {
      key: "story_gece_kutuphanesi",
      title: "Gece Kütüphanesi",
      emoji: "📚",
      text: "Kaan her gece kütüphaneye gider, ama açık olmadığından dışarıdan bakardı. Bir gün kütüphaneci bunu gördü ve anahtar verdi. Kaan geceleri okuyarak büyük bir yazar oldu. Bilgiye duyulan sevgi sınır tanımaz.",
    },
    {
      key: "story_dijital_dunya",
      title: "Dijital Dünya ve Gerçek Hayat",
      emoji: "💻",
      text: "Mert günde 8 saat oyun oynuyordu. Bir gün gözleri ağrıdı, arkadaşlarıyla konuşamaz oldu. Doktoru 'Dijital detoks' dedi. Bir hafta dışarıda zaman geçirdi. Güneş, arkadaşlar ve spor hayatına renk kattı.",
    },
  ],
};

const levelTabs: { key: Level; label: string }[] = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" },
];

export default function StoriesPage() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const [level, setLevel] = useState<Level>(
    (profile?.level as Level) || "ilkokul",
  );
  const [readTopics, setReadTopics] = useState<string[]>(() =>
    profile ? getReadTopics(profile.studentNumber) : [],
  );

  const handleRead = (key: string) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    setReadTopics((prev) => [...prev, key]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 to-pink-500">
      <div className="p-4">
        <Button
          data-ocid="stories.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4"
        >
          ← Geri
        </Button>
        <h1 className="text-3xl font-black text-white mb-4">📖 Hikayeler</h1>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {levelTabs.map((t) => (
            <button
              type="button"
              key={t.key}
              data-ocid="stories.tab"
              onClick={() => setLevel(t.key)}
              className={`py-3 rounded-2xl font-bold text-xs transition-all ${level === t.key ? "bg-white text-rose-600" : "bg-white/20 text-white hover:bg-white/30"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {stories[level].map((s) => {
            const isRead = readTopics.includes(s.key);
            return (
              <div
                key={s.key}
                className={`bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isRead ? "border-2 border-green-300" : ""}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl">{s.emoji}</span>
                  <div className="text-white font-black text-lg">{s.title}</div>
                  {isRead && (
                    <span className="ml-auto text-green-300 text-xl">✓</span>
                  )}
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {s.text}
                </p>
                {!isRead && profile && (
                  <button
                    type="button"
                    data-ocid="stories.read_button"
                    onClick={() => handleRead(s.key)}
                    className="bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
                  >
                    📖 Okudum! +10 puan
                  </button>
                )}
                {isRead && (
                  <span className="text-green-300 text-xs font-bold">
                    ✅ Okundu (+10 puan kazanıldı)
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
