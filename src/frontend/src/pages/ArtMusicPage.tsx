import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import {
  getCurrentUser,
  getReadTopics,
  incrementDailyContentRead,
  markTopicRead,
  trackContentVisit,
  updatePoints,
} from "../store";

const musicNotes = [
  {
    key: "music_do",
    note: "Do",
    emoji: "🎵",
    freq: "C - 261 Hz",
    desc: "Gamın ilk notası. Güçlü ve temel bir sestir. Piyano tuşlarında beyaz tuşla başlar.",
    color: "from-red-400 to-red-600",
  },
  {
    key: "music_re",
    note: "Re",
    emoji: "🎶",
    freq: "D - 294 Hz",
    desc: "İkinci nota. Daha parlak ve açık bir ses. Birçok halk müziğinde temel ses olarak kullanılır.",
    color: "from-orange-400 to-orange-600",
  },
  {
    key: "music_mi",
    note: "Mi",
    emoji: "🎼",
    freq: "E - 330 Hz",
    desc: "Üçüncü nota. Neşeli ve aydınlık bir ses. Gitar akordunda sıkça kullanılır.",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    key: "music_fa",
    note: "Fa",
    emoji: "🎹",
    freq: "F - 349 Hz",
    desc: "Dördüncü nota. Nispeten yumuşak ve dolgun bir ses karakterine sahiptir.",
    color: "from-green-400 to-green-600",
  },
  {
    key: "music_sol",
    note: "Sol",
    emoji: "🎸",
    freq: "G - 392 Hz",
    desc: "Beşinci nota. En önemli notalardan biri. Majör gamda en güçlü uyum Do ile Sol arasındadır.",
    color: "from-teal-400 to-teal-600",
  },
  {
    key: "music_la",
    note: "La",
    emoji: "🎺",
    freq: "A - 440 Hz",
    desc: "Altıncı nota. Uluslararası standart akort sesi. Orkestralarda enstrümanlar 'La' sesine göre akort edilir.",
    color: "from-blue-400 to-blue-600",
  },
  {
    key: "music_si",
    note: "Si",
    emoji: "🥁",
    freq: "B - 494 Hz",
    desc: "Yedinci ve son nota. Yüksek ve dinamik bir ses. Do-Si arasındaki yarım ton geçiş büyüleyicidir.",
    color: "from-violet-400 to-violet-600",
  },
];

const artists = [
  {
    key: "art_itri",
    name: "Buhurizade Mustafa Itri",
    emoji: "🎵",
    period: "17. Yüzyıl",
    style: "Klasik Türk Müziği",
    work: "Segah Tekbir, Neva Kar",
    desc: "Türk müziğinin en büyük bestekarlrdan biri. Osmanlı saray müziğini zirveye taşıdı.",
    color: "from-amber-500 to-yellow-600",
  },
  {
    key: "art_seker_ahmet",
    name: "Şeker Ahmet Paşa",
    emoji: "🎨",
    period: "19. Yüzyıl",
    style: "Gerçekçilik (Realizm)",
    work: "Ormanda Kaplan, Çiçek Natürmortu",
    desc: "Türk resim sanatının öncülerinden. Paris'te eğitim aldı, doğa ve orman tablolarıyla tanındı.",
    color: "from-green-500 to-emerald-600",
  },
  {
    key: "art_fahrelnissa",
    name: "Fahrelnissa Zeid",
    emoji: "🖌️",
    period: "20. Yüzyıl",
    style: "Soyut Dışavurumculuk",
    work: "Fight Against Abstraction, Resolved Problems",
    desc: "Türk kadın ressamların en güçlü temsilcisi. Renk cümbüşüyle dolu devasa soyut tabloları dünyaca ünlüdür.",
    color: "from-pink-500 to-rose-600",
  },
  {
    key: "art_da_vinci",
    name: "Leonardo da Vinci",
    emoji: "🎭",
    period: "15-16. Yüzyıl",
    style: "Rönesans",
    work: "Mona Lisa, Son Akşam Yemeği",
    desc: "İtalyan rönesans dehası. Ressam, heykeltaş, mühendis ve bilim insanı. 'Mona Lisa' dünyanın en ünlü tablosu.",
    color: "from-slate-500 to-slate-700",
  },
  {
    key: "art_van_gogh",
    name: "Vincent van Gogh",
    emoji: "🌻",
    period: "19. Yüzyıl",
    style: "Post-Empresyonizm",
    work: "Yıldızlı Gece, Ayçiçekleri",
    desc: "Hollandalı ressam. Sıradan insanları ve doğayı güçlü fırça darbeleri ve parlak renklerle resmetti.",
    color: "from-yellow-500 to-orange-600",
  },
  {
    key: "art_picasso",
    name: "Pablo Picasso",
    emoji: "🔷",
    period: "20. Yüzyıl",
    style: "Kübizm",
    work: "Guernica, Les Demoiselles d'Avignon",
    desc: "İspanyol ressam. Kübizm akımının kurucusu. Nesneleri birden fazla açıdan göstererek devrim yarattı.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    key: "art_monet",
    name: "Claude Monet",
    emoji: "🌸",
    period: "19. Yüzyıl",
    style: "İzlenimcilik",
    work: "Nilüfer Havuzları, Sabah Sisi",
    desc: "Fransız ressam. İzlenimcilik akımının öncüsü. Işık ve renklerin doğada nasıl değiştiğini yakalamak için açık havada resim yaptı.",
    color: "from-purple-400 to-pink-500",
  },
  {
    key: "art_mimar_sinan",
    name: "Mimar Sinan",
    emoji: "🕌",
    period: "16. Yüzyıl",
    style: "Osmanlı Mimarisi",
    work: "Süleymaniye Camii, Selimiye Camii",
    desc: "Osmanlı'nın en büyük mimarı. 400'den fazla yapı tasarladı. Selimiye Camii, UNESCO Dünya Mirası Listesi'nde yer alır.",
    color: "from-teal-500 to-green-600",
  },
  {
    key: "art_beethoven",
    name: "Ludwig van Beethoven",
    emoji: "🎵",
    period: "18-19. Yüzyıl",
    style: "Klasizm / Romantizm",
    work: "9. Senfoni, Ay Işığı Sonatı",
    desc: "Alman besteci. İşitme yetisini kaybetmesine rağmen en güzel eserlerini bu dönemde yarattı. 9. Senfoni'nin korosu 'Sevinç Marşı' tüm dünyada bilinir.",
    color: "from-gray-600 to-slate-700",
  },
  {
    key: "art_ahmet_adnan",
    name: "Ahmet Adnan Saygun",
    emoji: "🎼",
    period: "20. Yüzyıl",
    style: "Türk Çağdaş Müziği",
    work: "Yunus Emre Oratoryosu, Kerem Operası",
    desc: "Türk müziğini Batı formlarıyla harmanlayan çağdaş besteci. Bartók ile birlikte Türk halk müziği derlemesi yaptı. Türk Beşleri'nin en önemli temsilcisi.",
    color: "from-red-600 to-rose-700",
  },
  {
    key: "art_osman_hamdi",
    name: "Osman Hamdi Bey",
    emoji: "🎨",
    period: "19. Yüzyıl",
    style: "Oryantalizm",
    work: "Kaplumbağa Terbiyecisi, Silah Taciri",
    desc: "Türk resminin öncüsü ve ilk Türk müzecisi. Paris'te eğitim aldı. 'Kaplumbağa Terbiyecisi' Türkiye'nin en pahalı tablosu. İstanbul Arkeoloji Müzesi'nin kurucusu.",
    color: "from-brown-500 to-amber-800",
  },
];

export default function ArtMusicPage() {
  const navigate = useNavigate();
  const profile = getCurrentUser();

  // biome-ignore lint/correctness/useExhaustiveDependencies: one-time mount tracking
  useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "art-music");
  }, []);
  const [tab, setTab] = useState<"music" | "art">("music");
  const [readTopics, setReadTopics] = useState<string[]>(() =>
    profile ? getReadTopics(profile.studentNumber) : [],
  );

  const handleLearn = (key: string) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 5);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };

  const currentItems = tab === "music" ? musicNotes : artists;
  const doneCount = currentItems.filter((i) =>
    readTopics.includes(i.key),
  ).length;
  const pct =
    currentItems.length > 0
      ? Math.round((doneCount / currentItems.length) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-blue-500">
      <div className="p-4">
        <Button
          data-ocid="artmusic.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4"
        >
          ← Geri
        </Button>
        <h1 className="text-3xl font-black text-white mb-4">
          🎵 Müzik & Sanat
        </h1>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            type="button"
            data-ocid="artmusic.tab"
            onClick={() => setTab("music")}
            className={`py-3 rounded-2xl font-bold text-sm transition-all ${tab === "music" ? "bg-white text-indigo-600" : "bg-white/20 text-white hover:bg-white/30"}`}
          >
            🎵 Müzik
          </button>
          <button
            type="button"
            data-ocid="artmusic.tab"
            onClick={() => setTab("art")}
            className={`py-3 rounded-2xl font-bold text-sm transition-all ${tab === "art" ? "bg-white text-indigo-600" : "bg-white/20 text-white hover:bg-white/30"}`}
          >
            🎨 Sanat
          </button>
        </div>

        {/* Progress bar */}
        <div className="bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3">
          <span className="text-2xl">{tab === "music" ? "🎵" : "🎨"}</span>
          <div className="flex-1">
            <div className="flex justify-between text-white text-xs mb-1">
              <span className="font-bold">Bu bölümdeki ilerleme</span>
              <span className="font-black">
                {doneCount}/{currentItems.length}
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

        {tab === "music" && (
          <div className="space-y-3">
            <p className="text-white/80 text-sm mb-4">
              Do-Re-Mi gamı: Müziğin temel notaları. Her nota farklı bir
              frekansa sahiptir.
            </p>
            {musicNotes.map((n) => {
              const isDone = readTopics.includes(n.key);
              return (
                <div
                  key={n.key}
                  className={`bg-gradient-to-r ${n.color} rounded-2xl p-4 transition-all ${isDone ? "opacity-80 ring-2 ring-white/50" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{n.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-black text-2xl">
                          {n.note}
                        </span>
                        <span className="text-white/70 text-xs">{n.freq}</span>
                      </div>
                    </div>
                    {isDone && <span className="text-white/80">✓</span>}
                  </div>
                  <p className="text-white/90 text-xs mb-3">{n.desc}</p>
                  {!isDone && profile && (
                    <button
                      type="button"
                      data-ocid="artmusic.read_button"
                      onClick={() => handleLearn(n.key)}
                      className="bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-3 py-1 rounded-full transition-all"
                    >
                      🎵 Öğrendim! +5 puan
                    </button>
                  )}
                  {isDone && (
                    <span className="text-white/80 text-xs font-bold">
                      ✅ Öğrenildi (+5 puan)
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "art" && (
          <div className="space-y-4">
            <p className="text-white/80 text-sm mb-4">
              Dünya ve Türk sanatının önemli isimleri. Her sanatçının özgün bir
              stili vardır.
            </p>
            {artists.map((a) => {
              const isDone = readTopics.includes(a.key);
              return (
                <div
                  key={a.key}
                  className={`bg-gradient-to-r ${a.color} rounded-2xl p-4 transition-all ${isDone ? "opacity-80 ring-2 ring-white/50" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{a.emoji}</span>
                    <div className="flex-1">
                      <div className="text-white font-black">{a.name}</div>
                      <div className="text-white/70 text-xs">
                        {a.period} • {a.style}
                      </div>
                    </div>
                    {isDone && <span className="text-white/80">✓</span>}
                  </div>
                  <p className="text-white/90 text-xs mb-1">{a.desc}</p>
                  <p className="text-white/70 text-xs italic mb-3">
                    Ünlü eseri: {a.work}
                  </p>
                  {!isDone && profile && (
                    <button
                      type="button"
                      data-ocid="artmusic.read_button"
                      onClick={() => handleLearn(a.key)}
                      className="bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-3 py-1 rounded-full transition-all"
                    >
                      🎨 Öğrendim! +5 puan
                    </button>
                  )}
                  {isDone && (
                    <span className="text-white/80 text-xs font-bold">
                      ✅ Öğrenildi (+5 puan)
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
