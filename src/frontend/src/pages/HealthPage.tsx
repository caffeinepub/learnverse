import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import {
  getCurrentUser,
  getReadTopics,
  incrementDailyContentRead,
  markTopicRead,
  trackContentVisit,
  updatePoints,
} from "../store";

type Level = "okul_oncesi" | "ilkokul" | "ortaokul";
type Category = "egzersiz" | "beslenme" | "hijyen";

type HealthItem = {
  key: string;
  title: string;
  emoji: string;
  category: Category;
  content: string;
  tip: string;
};

const healthData: Record<Level, HealthItem[]> = {
  okul_oncesi: [
    {
      key: "h1",
      title: "Her Sabah Germe",
      emoji: "🤸",
      category: "egzersiz",
      content:
        "Sabah uyandığında kollarını ve bacaklarını gererek güne başla. Bu vücudunu uyandırır.",
      tip: "💡 Kollarını 10 saniye yukarı uzat!",
    },
    {
      key: "h2",
      title: "Su İçmeyi Unutma",
      emoji: "💧",
      category: "beslenme",
      content:
        "Her gün en az 6-8 bardak su içmelisin. Su vücudunun en iyi arkadaşıdır.",
      tip: "💡 Her öğün yanında bir bardak su iç!",
    },
    {
      key: "h3",
      title: "Diş Fırçalama",
      emoji: "🦷",
      category: "hijyen",
      content:
        "Sabah ve akşam en az 2 dakika dişlerini fırçala. Bu çürümelerden korur.",
      tip: "💡 2 dakika = 120 saniye. Say bakalım!",
    },
    {
      key: "h4",
      title: "Zıpla Oyna",
      emoji: "🏃",
      category: "egzersiz",
      content:
        "Her gün en az 30 dakika dışarıda zıpla, koş ve oyna. Vücudun güçlenir.",
      tip: "💡 İp atlama çok eğlenceli bir egzersizdir!",
    },
    {
      key: "h5",
      title: "Meyve Sebze",
      emoji: "🥦",
      category: "beslenme",
      content:
        "Her gün farklı renklerde meyve ve sebze ye. Her renk farklı vitamin içerir.",
      tip: "💡 Gökkuşağı gibi tabağın renkli olsun!",
    },
    {
      key: "h6",
      title: "El Yıkama",
      emoji: "🧼",
      category: "hijyen",
      content:
        "Yemekten önce ve sonra, tuvaletten sonra ellerini yıka. En az 20 saniye ovalayarak.",
      tip: "💡 'Doğum günü' şarkısını iki kez söyle - tam 20 saniye eder!",
    },
    {
      key: "h7",
      title: "Denge Egzersizi",
      emoji: "🦩",
      category: "egzersiz",
      content:
        "Bir ayak üzerinde durmaya çalış. Önce 10 saniye, sonra 20 saniye. Denge güçlenir.",
      tip: "💡 Her gün biraz daha uzun tutmaya çalış!",
    },
    {
      key: "h8",
      title: "Kahvaltı Yap",
      emoji: "🍳",
      category: "beslenme",
      content:
        "Sabah kahvaltısı beyni çalıştırır. Okula tok git, daha iyi öğrenirsin.",
      tip: "💡 Yumurta, peynir, ekmek harika bir kahvaltıdır!",
    },
  ],
  ilkokul: [
    {
      key: "h_i1",
      title: "Isınma Hareketleri",
      emoji: "🏋️",
      category: "egzersiz",
      content:
        "Her egzersizden önce 5 dakika ısınma yapılmalıdır. Boyun, kol ve bacakları yavaşça hareket ettir.",
      tip: "💡 Isınmadan egzersiz yapmak sakatlanmaya yol açabilir!",
    },
    {
      key: "h_i2",
      title: "Sağlıklı Tabak",
      emoji: "🍽️",
      category: "beslenme",
      content:
        "Her öğünde tabağının yarısı sebze-meyve, dörtte biri protein (et, yumurta), dörtte biri de karbonhidrat (ekmek, pirinç) olmalı.",
      tip: "💡 Tabak modelini çiz ve oranları işaretle!",
    },
    {
      key: "h_i3",
      title: "Kişisel Hijyen",
      emoji: "🚿",
      category: "hijyen",
      content:
        "Her gün duş al veya yıkan. Temiz kıyafet giy. Saçlarını tarayarak çık.",
      tip: "💡 Temizlik sadece vücut için değil, özgüven için de önemlidir!",
    },
    {
      key: "h_i4",
      title: "Mekik Çekme",
      emoji: "💪",
      category: "egzersiz",
      content:
        "Sırtüstü yat, dizlerini büküp göbeğine bak. Bu hareket karın kaslarını güçlendirir. 10 tekrar ile başla.",
      tip: "💡 Her gün 5 tane daha ekle!",
    },
    {
      key: "h_i5",
      title: "Şeker ve Fast Food",
      emoji: "🍔",
      category: "beslenme",
      content:
        "Şeker ve fast food yiyecekler çok kalori içerir ama az vitamin. Bunları nadir ye, vücudun daha sağlıklı olur.",
      tip: "💡 Haftada 1 kez fast food olabilir, ama her gün değil!",
    },
    {
      key: "h_i6",
      title: "Uyku Düzeni",
      emoji: "😴",
      category: "hijyen",
      content:
        "10-12 yaş çocuklar günde 9-11 saat uyumalıdır. Düzenli uyku büyümeye ve öğrenmeye yardımcı olur.",
      tip: "💡 Yatmadan 1 saat önce ekranı kapat!",
    },
    {
      key: "h_i7",
      title: "Koşu ve Yürüyüş",
      emoji: "🏃",
      category: "egzersiz",
      content:
        "Her gün en az 20-30 dakika koş veya hızlı yürü. Kalp ve akciğerler güçlenir.",
      tip: "💡 Okul yolunu yürüyerek git, hem egzersiz hem tasarruf!",
    },
    {
      key: "h_i8",
      title: "Vitamin Kaynakları",
      emoji: "🍊",
      category: "beslenme",
      content:
        "C Vitamini: portakal, kivi. D Vitamini: güneş ışığı, süt. B Vitamini: kepekli ekmek, fındık.",
      tip: "💡 Her vitamin farklı bir görevi üstlenir!",
    },
  ],
  ortaokul: [
    {
      key: "h_o1",
      title: "Aerobik Egzersiz",
      emoji: "🚴",
      category: "egzersiz",
      content:
        "Koşu, yüzme, bisiklet gibi kalp atışını artıran egzersizlere aerobik denir. Haftada 3-5 kez, 30+ dakika yapılmalıdır.",
      tip: "💡 Aerobik egzersiz kalp-damar sağlığını doğrudan iyileştirir!",
    },
    {
      key: "h_o2",
      title: "Makro Besinler",
      emoji: "🧬",
      category: "beslenme",
      content:
        "Protein (kas yapar), karbonhidrat (enerji verir), yağ (organ korur). Üçü de dengeli alınmalıdır.",
      tip: "💡 Diyet = eksik beslenme değil, dengeli beslenme!",
    },
    {
      key: "h_o3",
      title: "Stres Yönetimi",
      emoji: "🧘",
      category: "hijyen",
      content:
        "Stres kalp atışını ve kan basıncını yükseltir. Derin nefes, meditasyon ve egzersiz stres azaltır.",
      tip: "💡 4-7-8 tekniği: 4 say nefes al, 7 say tut, 8 say ver.",
    },
    {
      key: "h_o4",
      title: "Anaerobik Egzersiz",
      emoji: "🏋️",
      category: "egzersiz",
      content:
        "Şınav, squat gibi kas gücü gerektiren egzersizlere anaerobik denir. Kasları güçlendirir ve kemikleri sağlamlaştırır.",
      tip: "💡 Her büyük kas grubunu haftada 2 kez çalıştır!",
    },
    {
      key: "h_o5",
      title: "Glisemik İndeks",
      emoji: "📊",
      category: "beslenme",
      content:
        "Şekerin ne kadar hızlı kana karıştığını gösterir. Düşük Gİ (kepekli, baklagil) daha sağlıklıdır.",
      tip: "💡 Beyaz ekmek yerine tam buğday ekmeği tercih et!",
    },
    {
      key: "h_o6",
      title: "Hijyen ve Mikroplar",
      emoji: "🦠",
      category: "hijyen",
      content:
        "Bakteriler ve virüsler hastalığa yol açar. El yıkama, temiz su ve gıda güvenliği ile çoğu hastalık önlenir.",
      tip: "💡 Mikrop bulaşmasının %80'i elleri yıkamakla önlenebilir!",
    },
    {
      key: "h_o7",
      title: "BMI Nedir?",
      emoji: "⚖️",
      category: "beslenme",
      content:
        "Beden Kitle İndeksi = ağırlık (kg) / boy² (m²). 18.5-24.9 normal aralıktır. Sağlıklı kiloyu gösterir.",
      tip: "💡 Kilo sağlığın tek göstergesi değildir!",
    },
    {
      key: "h_o8",
      title: "Postur ve Duruş",
      emoji: "🧍",
      category: "egzersiz",
      content:
        "Omurga düzgün tutulmalıdır. Çanta tek omuzda değil, sırt çantasıyla taşınmalıdır. Ekranda dik otur.",
      tip: "💡 Kötü duruş kronik sırt ağrısına yol açar!",
    },
  ],
};

const categoryColors: Record<Category, string> = {
  egzersiz: "bg-orange-500",
  beslenme: "bg-green-500",
  hijyen: "bg-blue-500",
};

const categoryLabels: Record<Category, string> = {
  egzersiz: "Egzersiz",
  beslenme: "Beslenme",
  hijyen: "Hijyen",
};

export default function HealthPage() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const [level, setLevel] = useState<Level>("ilkokul");
  const [filter, setFilter] = useState<Category | "all">("all");
  const [search, setSearch] = useState("");
  const [readTopics, setReadTopics] = useState<string[]>([]);
  const [speakingKey, setSpeakingKey] = useState<string | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: profile ref is stable
  useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "health");
  }, [profile?.studentNumber]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: profile ref is stable
  useEffect(() => {
    if (profile) setReadTopics(getReadTopics(profile.studentNumber));
  }, [profile?.studentNumber]);

  const items = healthData[level];
  const filtered = items.filter((item) => {
    const matchesFilter = filter === "all" || item.category === filter;
    const matchesSearch =
      search === "" ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.content.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const completedCount = items.filter((item) =>
    readTopics.includes(item.key),
  ).length;

  const handleMark = (key: string) => {
    if (!profile) return;
    if (readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics(getReadTopics(profile.studentNumber));
  };

  const handleSpeak = (item: HealthItem) => {
    if (!window.speechSynthesis) return;
    if (speakingKey === item.key) {
      window.speechSynthesis.cancel();
      setSpeakingKey(null);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(item.content);
    utterance.lang = "tr-TR";
    utterance.onend = () => setSpeakingKey(null);
    setSpeakingKey(item.key);
    window.speechSynthesis.speak(utterance);
  };

  const levelLabels: Record<Level, string> = {
    okul_oncesi: "Okul Öncesi",
    ilkokul: "İlkokul",
    ortaokul: "Ortaokul",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-emerald-500">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/20"
            onClick={() => navigate({ to: "/home" })}
            data-ocid="health.back_button"
          >
            ← Geri
          </Button>
          <h1 className="text-2xl font-bold text-white">
            💪 Beden Eğitimi & Sağlık
          </h1>
        </div>

        {/* Level Tabs */}
        <div className="flex gap-2 mb-4" data-ocid="health.level.tab">
          {(["okul_oncesi", "ilkokul", "ortaokul"] as Level[]).map((l) => (
            <button
              type="button"
              key={l}
              onClick={() => setLevel(l)}
              className={`flex-1 py-2 px-3 rounded-xl text-sm font-semibold transition-all ${
                level === l
                  ? "bg-white text-green-600 shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {levelLabels[l]}
            </button>
          ))}
        </div>

        {/* Progress */}
        <div className="bg-white/20 rounded-xl p-3 mb-4">
          <div className="flex justify-between text-white text-sm mb-1">
            <span>İlerleme</span>
            <span>
              {completedCount}/{items.length} tamamlandı
            </span>
          </div>
          <Progress
            value={(completedCount / items.length) * 100}
            className="h-2 bg-white/30"
          />
        </div>

        {/* Category Filters */}
        <div
          className="flex gap-2 mb-4 flex-wrap"
          data-ocid="health.filter.tab"
        >
          {(["all", "egzersiz", "beslenme", "hijyen"] as const).map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setFilter(cat)}
              className={`py-1.5 px-4 rounded-full text-sm font-semibold transition-all ${
                filter === cat
                  ? "bg-white text-green-700 shadow"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {cat === "all" ? "Tümü" : categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          data-ocid="health.search_input"
        />

        {/* Cards */}
        <div className="space-y-4">
          {filtered.length === 0 && (
            <div
              className="text-white/70 text-center py-8"
              data-ocid="health.empty_state"
            >
              Sonuç bulunamadı.
            </div>
          )}
          {filtered.map((item, idx) => {
            const isRead = readTopics.includes(item.key);
            return (
              <div
                key={item.key}
                className={`bg-white rounded-2xl p-5 shadow-lg transition-all ${
                  isRead ? "opacity-90 ring-2 ring-green-400" : ""
                }`}
                data-ocid={`health.item.${idx + 1}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.emoji}</span>
                    <span
                      className={`text-xs font-bold text-white px-2 py-0.5 rounded-full ${categoryColors[item.category]}`}
                    >
                      {categoryLabels[item.category]}
                    </span>
                  </div>
                  {isRead && (
                    <span className="text-green-500 text-sm font-semibold">
                      ✅ Tamamlandı
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {item.content}
                </p>
                <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-3">
                  <p className="text-green-700 italic text-sm">{item.tip}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleSpeak(item)}
                    className="flex-1 py-2 rounded-xl bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 transition-all text-sm"
                    data-ocid={`health.tts.${idx + 1}`}
                  >
                    {speakingKey === item.key ? "⏹ Durdur" : "🔊 Dinle"}
                  </button>
                  {!isRead && (
                    <button
                      type="button"
                      onClick={() => handleMark(item.key)}
                      className="flex-1 py-2 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-all text-sm"
                      data-ocid={`health.mark.${idx + 1}`}
                    >
                      💪 Yapıldı! +10 puan
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
