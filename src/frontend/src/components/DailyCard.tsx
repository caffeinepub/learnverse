import { useLanguage } from "../i18n/LanguageContext";

const WORDS_TR = [
  { word: "Azim", meaning: "Bir hedefe ulaşmak için vazgeçmeden çalışmak" },
  { word: "Emevi", meaning: "İslam tarihindeki ilk büyük hanedan" },
  { word: "Cömert", meaning: "İnsanlara karşı eli açık, yardımsever olmak" },
  { word: "Erdem", meaning: "Ahlaki üstünlük, iyilik" },
  {
    word: "Faraday",
    meaning: "Elektromanyetik indüksiyonu keşfeden bilim insanı",
  },
  { word: "Gökyüzü", meaning: "Atmosferin görünen kısmı" },
  {
    word: "Hayal",
    meaning: "Zihinsel olarak canlandırılan düşünce veya resim",
  },
  { word: "İnanç", meaning: "Bir şeyin doğru olduğuna duyulan güçlü his" },
  { word: "Jeotermal", meaning: "Yeraltı ısısından elde edilen enerji" },
  { word: "Kavram", meaning: "Bir nesne veya olgunun zihinsel tasarımı" },
  {
    word: "Liderlik",
    meaning: "Bir grubu yönlendirme ve güçlendirme yeteneği",
  },
  { word: "Merak", meaning: "Yeni şeyler öğrenmek için duyulan istek" },
  { word: "Nebula", meaning: "Uzayda gaz ve tozdan oluşan büyük bulut" },
  { word: "Özgün", meaning: "Başkalarından farklı, kendine has olan" },
  { word: "Perspektif", meaning: "Bir konuya bakış açısı" },
  { word: "Sabır", meaning: "Güçlük karşısında sakin ve kararlı kalmak" },
  { word: "Titiz", meaning: "Her şeyi özenle ve dikkatle yapan" },
  { word: "Ufuk", meaning: "Gökyüzünün yeryüzüyle birleştiği görünen çizgi" },
  { word: "Verimli", meaning: "Az çabayla çok iş başaran, üretken" },
  { word: "Yenilik", meaning: "Daha önce olmayan yeni bir şey ortaya koymak" },
];

const FACTS_TR = [
  "🐙 Ahtapotların üç kalbi vardır.",
  "🌍 Dünya, saniyede 30 km hızla Güneş'in etrafında döner.",
  "🦷 Fil dişleri tüm yaşamı boyunca sadece iki kez çıkar.",
  "🌊 Okyanus suyunun %95'i hâlâ keşfedilmemiştir.",
  "🧠 İnsan beyninde yaklaşık 86 milyar nöron bulunur.",
  "🐝 Bal arıları dans ederek yol tarifi verir.",
  "🌱 Bambu, dünyanın en hızlı büyüyen bitkisidir.",
  "❄️ Hiçbir kar tanesi diğeriyle aynı değildir.",
  "🔭 Işık bir saniyede 300.000 km yol alır.",
  "🐬 Yunuslar uyurken beynin sadece yarısı çalışır.",
  "🦋 Kelebekler tatlarını ayaklarıyla hisseder.",
  "🌙 Ay her yıl Dünya'dan 3.8 cm uzaklaşmaktadır.",
  "🐘 Filler birbirini ismiyle çağırabilir.",
  "🌺 Çiçekler renkleriyle böcekleri kendilerine çeker.",
  "🧊 Antarktika, dünyanın en büyük çöl bölgesidir.",
];

const WORDS_EN = [
  { word: "Perseverance", meaning: "Continuing firmly despite difficulty" },
  { word: "Curiosity", meaning: "A strong desire to know or learn" },
  { word: "Empathy", meaning: "Understanding others' feelings" },
  { word: "Resilience", meaning: "Recovering quickly from difficulties" },
  { word: "Innovation", meaning: "Introducing something new" },
  { word: "Integrity", meaning: "Being honest and having strong morals" },
  { word: "Diligence", meaning: "Careful and persistent work" },
  { word: "Horizon", meaning: "The line where earth meets sky" },
  { word: "Nebula", meaning: "A cloud of gas and dust in space" },
  { word: "Perspective", meaning: "A particular way of viewing things" },
];

const FACTS_EN = [
  "🐙 Octopuses have three hearts.",
  "🌍 Earth travels around the Sun at 30 km per second.",
  "🧠 The human brain has about 86 billion neurons.",
  "🐝 Bees communicate by dancing.",
  "🦋 Butterflies taste with their feet.",
  "🌙 The Moon moves 3.8 cm away from Earth each year.",
  "🐬 Dolphins sleep with half their brain at a time.",
  "❄️ No two snowflakes are identical.",
  "🔭 Light travels 300,000 km per second.",
  "🌱 Bamboo is the fastest-growing plant in the world.",
];

export default function DailyCard() {
  const { lang } = useLanguage();
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
      86400000,
  );

  const isEn = lang === "en";
  const words = isEn ? WORDS_EN : WORDS_TR;
  const facts = isEn ? FACTS_EN : FACTS_TR;

  const word = words[dayOfYear % words.length];
  const fact = facts[dayOfYear % facts.length];

  return (
    <div className="px-4 pb-3 grid grid-cols-2 gap-3">
      {/* Word of the day */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-4">
        <div className="text-white/70 text-xs font-bold uppercase tracking-wide mb-1">
          📚 {isEn ? "Word of the Day" : "Günün Kelimesi"}
        </div>
        <div className="text-white font-black text-base leading-tight mb-1">
          {word.word}
        </div>
        <div className="text-white/80 text-xs leading-snug">{word.meaning}</div>
      </div>
      {/* Fact of the day */}
      <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-4">
        <div className="text-white/70 text-xs font-bold uppercase tracking-wide mb-1">
          🌟 {isEn ? "Did You Know?" : "Biliyor musun?"}
        </div>
        <div className="text-white text-xs leading-snug font-semibold">
          {fact}
        </div>
      </div>
    </div>
  );
}
