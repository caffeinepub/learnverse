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

const historyData: Record<
  Level,
  { key: string; emoji: string; title: string; info: string; fact: string }[]
> = {
  okul_oncesi: [
    {
      key: "hist_ataturk1",
      emoji: "🌟",
      title: "Atatürk",
      info: "Mustafa Kemal Atatürk, Türkiye Cumhuriyeti'nin kurucusudur. Çocukları çok severdi.",
      fact: "Atatürk 10 Kasım 1938'de vefat etmiştir.",
    },
    {
      key: "hist_bayrak",
      emoji: "🇹🇷",
      title: "Türk Bayrağı",
      info: "Türk bayrağı kırmızı zemin üzerinde ay ve yıldızdan oluşur.",
      fact: "Bayrağımızdaki kırmızı renk cesareti simgeler.",
    },
    {
      key: "hist_cumhuriyet",
      emoji: "🏛️",
      title: "Cumhuriyet",
      info: "Türkiye Cumhuriyeti 29 Ekim 1923'te kurulmuştur.",
      fact: "29 Ekim Cumhuriyet Bayramı olarak kutlanır.",
    },
    {
      key: "hist_23nisan",
      emoji: "🌸",
      title: "23 Nisan",
      info: "23 Nisan 1920'de Türkiye Büyük Millet Meclisi açıldı. Bu gün çocuklara armağan edildi.",
      fact: "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı'dır.",
    },
    {
      key: "hist_mektup",
      emoji: "✉️",
      title: "Atatürk'ün Çocuklara Mektubu",
      info: "Atatürk gençliğe hitabında memleketi sevmemizi istedi.",
      fact: "Atatürk 'Gençliğe Hitabe'yi 1927'de yazdı.",
    },
    {
      key: "hist_istanbul",
      emoji: "🕌",
      title: "İstanbul",
      info: "İstanbul, hem Avrupa'da hem Asya'da yer alan Türkiye'nin en büyük şehridir.",
      fact: "İstanbul eskiden Konstantinopolis olarak bilinirdi.",
    },
  ],
  ilkokul: [
    {
      key: "hist_kurtulus",
      emoji: "⚔️",
      title: "Kurtuluş Savaşı",
      info: "1919-1923 yılları arasında Türk halkı vatanını kurtarmak için savaştı. Atatürk bu savaşa liderlik etti.",
      fact: "Zafer Bayramı 30 Ağustos'ta kutlanır.",
    },
    {
      key: "hist_osmanlı",
      emoji: "👑",
      title: "Osmanlı İmparatorluğu",
      info: "Osmanlı İmparatorluğu yaklaşık 600 yıl hüküm sürdü. Başkenti İstanbul'du.",
      fact: "Osmanlı İmparatorluğu 1299'da kuruldu.",
    },
    {
      key: "hist_selçuk",
      emoji: "🏹",
      title: "Selçuklular",
      info: "Selçuklu Türkleri, Anadolu'ya 1071'de Malazgirt Savaşı'ndan sonra yerleşti.",
      fact: "Malazgirt Savaşı 1071'de yapıldı.",
    },
    {
      key: "hist_ataturk2",
      emoji: "🌟",
      title: "Atatürk'ün Reformları",
      info: "Atatürk alfabe, takvim, hukuk ve eğitimde devrimler yaptı. Kadınlara oy hakkı verdi.",
      fact: "Latin alfabesi 1928'de kabul edildi.",
    },
    {
      key: "hist_fatih",
      emoji: "🏰",
      title: "Fatih Sultan Mehmet",
      info: "Fatih Sultan Mehmet 1453'te İstanbul'u fethetti ve Osmanlı'nın en büyük sultanlarından biri oldu.",
      fact: "İstanbul'un fethi 1453'te gerçekleşti.",
    },
    {
      key: "hist_suleyman",
      emoji: "🌹",
      title: "Kanuni Sultan Süleyman",
      info: "Kanuni, Osmanlı'nın en uzun süre hüküm süren ve en güçlü dönemlerinden birini yönetti.",
      fact: "Kanuni 46 yıl hüküm sürdü.",
    },
    {
      key: "hist_19mayis",
      emoji: "🔥",
      title: "19 Mayıs",
      info: "19 Mayıs 1919'da Atatürk Samsun'a çıktı ve Kurtuluş Savaşı'nı başlattı.",
      fact: "Bu gün Atatürk'ü Anma, Gençlik ve Spor Bayramı olarak kutlanır.",
    },
    {
      key: "hist_anadolu",
      emoji: "🏺",
      title: "Anadolu Uygarlıkları",
      info: "Hititler, Frigler, Lidyalılar ve daha birçok uygarlık Anadolu'da yaşadı.",
      fact: "Hititler dünyanın ilk yazılı barış antlaşmasını yaptı.",
    },
  ],
  ortaokul: [
    {
      key: "hist_ilkçag",
      emoji: "🏛️",
      title: "İlkçağ Uygarlıkları",
      info: "Mezopotamya, Mısır, Yunan ve Roma uygarlıkları tarih öncesi dönemden sonra gelişti.",
      fact: "Mezopotamya 'nehirler arası' anlamına gelir.",
    },
    {
      key: "hist_ipek",
      emoji: "🧵",
      title: "İpek Yolu",
      info: "Çin'den Avrupa'ya uzanan ticaret yolu, kültürleri birbirine bağladı.",
      fact: "İpek Yolu 4000 km'den uzundur.",
    },
    {
      key: "hist_haçlı",
      emoji: "⚔️",
      title: "Haçlı Seferleri",
      info: "11-13. yüzyıllarda Avrupa'dan Doğu'ya çok sayıda dini savaş düzenlendi.",
      fact: "Toplam 8 büyük Haçlı Seferi yapıldı.",
    },
    {
      key: "hist_rönesans",
      emoji: "🎨",
      title: "Rönesans",
      info: "14-17. yüzyıllarda Avrupa'da sanat, bilim ve düşüncede büyük bir yeniden doğuş yaşandı.",
      fact: "Leonardo da Vinci Rönesans'ın en önemli isimlerinden biridir.",
    },
    {
      key: "hist_reform",
      emoji: "⛪",
      title: "Sanayi Devrimi",
      info: "18-19. yüzyıllarda buhar makinesi ile başlayan sanayi devrimi yaşam biçimini değiştirdi.",
      fact: "İlk buhar makinesi 1769'da James Watt tarafından geliştirildi.",
    },
    {
      key: "hist_1dünya",
      emoji: "🌐",
      title: "I. Dünya Savaşı",
      info: "1914-1918 yılları arasında Avrupa merkezli büyük savaş yaşandı. Osmanlı da katıldı.",
      fact: "I. Dünya Savaşı'nda yaklaşık 17 milyon kişi hayatını kaybetti.",
    },
    {
      key: "hist_cumhuriyetkur",
      emoji: "🏛️",
      title: "Türkiye Cumhuriyeti'nin Kuruluşu",
      info: "1923'te kurulan Türkiye Cumhuriyeti parlamenter sistemle yönetilmeye başlandı.",
      fact: "Cumhuriyet'in ilk Cumhurbaşkanı Atatürk'tür.",
    },
    {
      key: "hist_sogsavas",
      emoji: "🧊",
      title: "Soğuk Savaş",
      info: "1945-1991 yılları arasında ABD ve SSCB arasında ideolojik gerilim yaşandı.",
      fact: "Berlin Duvarı 1989'da yıkıldı.",
    },
    {
      key: "hist_bm",
      emoji: "🌐",
      title: "Birleşmiş Milletler",
      info: "BM, 1945'te dünya barışını korumak amacıyla kuruldu.",
      fact: "BM'nin 193 üye devleti vardır.",
    },
    {
      key: "hist_uzay",
      emoji: "🚀",
      title: "Uzay Yarışı",
      info: "1957-1969 yılları arasında ABD ve SSCB uzayda üstünlük yarışı yaptı.",
      fact: "İlk ay yürüyüşü Neil Armstrong tarafından 1969'da yapıldı.",
    },
  ],
};

const levelTabs: { key: Level; label: string }[] = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" },
];

export default function HistoryPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const profile = getCurrentUser();

  // biome-ignore lint/correctness/useExhaustiveDependencies: one-time mount tracking
  useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "history");
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

  const filtered = historyData[level].filter(
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

  const total = historyData[level].length;
  const done = historyData[level].filter((p) =>
    readTopics.includes(p.key),
  ).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-800 to-yellow-700">
      <div className="p-4">
        <button
          type="button"
          onClick={() => navigate({ to: "/home" })}
          className="text-white mb-4 font-bold text-sm"
        >
          ← Geri
        </button>
        <h1 className="text-3xl font-black text-white mb-4">
          🏛️ Tarih Kartları
        </h1>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {levelTabs.map((t) => (
            <button
              type="button"
              key={t.key}
              onClick={() => setLevel(t.key)}
              className={`py-3 rounded-2xl font-bold text-xs transition-all ${
                level === t.key
                  ? "bg-white text-amber-800"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3">
          <span className="text-2xl">🏛️</span>
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
