import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { poemsEn } from "../data/poems-en";
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
        "Kuşlar söyler şarki.",
      ],
    },
    {
      key: "poem_kelebek",
      title: "Kelebek",
      emoji: "🦸",
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
    {
      key: "poem_kar",
      title: "Kar Yağdı",
      emoji: "❄️",
      lines: [
        "Kar yağdı beyaz beyaz,",
        "Toprakları örttü.",
        "Kuşlar kondu damlarıma,",
        "Tohumlar uyku kurdu.",
      ],
    },
    {
      key: "poem_gunes",
      title: "Güneş",
      emoji: "☀️",
      lines: [
        "Güneş doğdu ufuktan,",
        "Altın ışıklar saçtı.",
        "Sabahı mırgıldıyorum ben,",
        "Her gün yeni bir armağan.",
      ],
    },
    {
      key: "poem_hayvanlar",
      title: "Hayvanlar",
      emoji: "🐾",
      lines: [
        "Köpek havlar, kedi miyavlar,",
        "İnek möö diye bağırır.",
        "Tavuk gıdıklak gıdaklar,",
        "Her biri bir Şarkı söyler.",
      ],
    },
    {
      key: "poem_tatil",
      title: "Tatil Sevinci",
      emoji: "🏖️",
      lines: [
        "Tatil geldi, ne güzel!",
        "Deniz, kum ve güneş.",
        "Arkadaşlarla oyun,",
        "Gülüş dolu günler.",
      ],
    },
    {
      key: "poem_renkler",
      title: "Renkler",
      emoji: "🌈",
      lines: [
        "Kırmızı, mavi, sarı,",
        "Yeşilin tüm tonları.",
        "Gökyüzünde gökkusagi,",
        "Rengarenk dünyâmız.",
      ],
    },
    {
      key: "poem_gunes",
      title: "Güneş",
      emoji: "☀️",
      lines: [
        "Güneş doğdu sabahleyin,",
        "Işıklandı her yer.",
        "Çiçekler güldü ona,",
        "Çocuklar oynadı neşeyle.",
      ],
    },
    {
      key: "poem_deniz",
      title: "Deniz",
      emoji: "🌊",
      lines: [
        "Denizin dalgaları gelir,",
        "Kumları öper hafifçe.",
        "Balıklar yüzer derinde,",
        "Ben de yüzmek isterim.",
      ],
    },
    {
      key: "poem_arı",
      title: "Arı",
      emoji: "🐝",
      lines: [
        "Küçük arı vızıldıyor,",
        "Çiçekten bal topluyor.",
        "Çalışkan, sabırlı arı,",
        "Bize bal yapıyor.",
      ],
    },
    {
      key: "poem_kar",
      title: "Kar",
      emoji: "❄️",
      lines: [
        "Kar yağıyor, kar yağıyor,",
        "Her yer beyaza boyandı.",
        "Çocuklar koştu dışarı,",
        "Kardan adam yaptılar.",
      ],
    },
    {
      key: "poem_anne",
      title: "Annem",
      emoji: "💝",
      lines: [
        "Annem beni çok sever,",
        "Her gece öper alından.",
        "Ben de onu severim,",
        "Dünyadan çok, kalpten.",
      ],
    },
    {
      key: "poem_t9_kus",
      title: "Küçük Kuş",
      emoji: "🐦",
      lines: [
        "Küçük kuş dala kondu,",
        "Ötüyor neşeyle.",
        "Sabah güneş doğunca,",
        "Hepimiz uyanır sevinçle.",
      ],
    },
    {
      key: "poem_t9_balik",
      title: "Balık",
      emoji: "🐠",
      lines: [
        "Balık yüzer suda,",
        "Pulları parlar durur.",
        "Derinlere dalar,",
        "Sonra yukarı çıkar.",
      ],
    },
    {
      key: "poem_t9_yagmur",
      title: "Yağmur Damlası",
      emoji: "🌧️",
      lines: [
        "Yağmur düşer damla damla,",
        "Toprak içer hepsini.",
        "Çiçekler açar sonra,",
        "Doğa güler yeniden.",
      ],
    },
    {
      key: "poem_t9_kar",
      title: "Kar Tanesi",
      emoji: "❄️",
      lines: [
        "Kar tanesi düşer usul,",
        "Beyaz örter her yeri.",
        "Çocuklar koşar dışarı,",
        "Kar topu yapar sevinerek.",
      ],
    },
    {
      key: "poem_t9_ates",
      title: "Ateş Böceği",
      emoji: "✨",
      lines: [
        "Ateş böceği gece uçar,",
        "Işığını saçar etrafa.",
        "Karanlıkta umut olur,",
        "Küçük ama parlak yanar.",
      ],
    },
    {
      key: "poem_kucuk_el",
      title: "Küçük El",
      emoji: "🤚",
      lines: [
        "Küçük elim var benim,",
        "Oynarım onunla ben.",
        "Çizirim, yapıştırırım,",
        "Her şeyi yaparım sen.",
      ],
    },
    {
      key: "poem_balik",
      title: "Balık",
      emoji: "🐟",
      lines: [
        "Balık yüzer suda,",
        "Kuyruğu kıpır kıpır.",
        "Renkli pulları var,",
        "Güzel görünür pır pır.",
      ],
    },
    {
      key: "poem_gunes",
      title: "Güneş",
      emoji: "☀️",
      lines: [
        "Güneş doğdu sabahtan,",
        "Işınlar saçıyor,",
        "Çiçekler açıyor,",
        "Kuşlar şarkı söylüyor.",
      ],
    },
    {
      key: "poem_uyku",
      title: "Uyku Vakti",
      emoji: "😴",
      lines: [
        "Akşam oldu gece de,",
        "Göz kapakları kapandı,",
        "Yıldızlar saydım birer birer,",
        "Uykum geldi dallandı.",
      ],
    },
    {
      key: "poem_marti",
      title: "Martı",
      emoji: "🕊️",
      lines: [
        "Martı uçar gökyüzünde,",
        "Dalgalar oynar suyun üstünde,",
        "Ben de uçmak istiyorum,",
        "Rüzgârla dans etmek istiyorum.",
      ],
    },
    {
      key: "poem_cicek_bahcesi",
      title: "Çiçek Bahçesi",
      emoji: "🌸",
      lines: [
        "Bahçemizde renk renk çiçek,",
        "Pembe, mor, sarı, beyaz,",
        "Arılar gelir petek,",
        "Sabah açar hepsi bir yaz.",
      ],
    },
    {
      key: "poem_tavsan",
      title: "Sevimli Tavşan",
      emoji: "🐰",
      lines: [
        "Uzun kulakları var tavşanın,",
        "Havuç sever her zaman,",
        "Zıplar, hoplar, oynar,",
        "En sevimli dostumdan.",
      ],
    },
    {
      key: "poem_gece",
      title: "İyi Geceler",
      emoji: "🌙",
      lines: [
        "Gece geldi karanlık,",
        "Yıldızlar yakar ışık,",
        "Yatağıma giriyorum,",
        "İyi geceler diyorum.",
      ],
    },
    {
      key: "poem_parmak",
      title: "On Parmağım",
      emoji: "✋",
      lines: [
        "Bir, iki, üç, dört, beş,",
        "Parmaklar sayar, yapar iş,",
        "Altı, yedi, sekiz, dokuz, on,",
        "On parmak hizmetinde benim.",
      ],
    },
  ],
  ilkokul: [
    {
      key: "poem_okul",
      title: "Okul Sevinci",
      emoji: "🏢",
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
        "Korurüm yürekten.",
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
    {
      key: "poem_teknoloji",
      title: "Teknoloji Dostu",
      emoji: "📱",
      lines: [
        "Ekranlara baktım çok,",
        "Ama güneş çağrıyor.",
        "Kitap sayfa sayfa açılır,",
        "Teknoloji bakış açısı sunar.",
        "Aklımı kullansam eğer,",
        "Geleceğim parıldıyor.",
      ],
    },
    {
      key: "poem_arkadas",
      title: "Arkadaşlık",
      emoji: "🤝",
      lines: [
        "Arkadaş günler paylaşır,",
        "Zor günde yanımda durur.",
        "Gülüeğim, ağlasam da,",
        "Elini tutar gelir.",
        "Dünyada en büyük servet,",
        "Samimi bir arkadaştır.",
      ],
    },
    {
      key: "poem_su",
      title: "Su Gibi",
      emoji: "💧",
      lines: [
        "Su hayatın kaynağıdır,",
        "Her şeyi yeniler.",
        "Dağı delen bir damla,",
        "Sabrın sırrını bilir.",
        "Koru suyu, koru doğayı,",
        "Gelecek nesle emanet.",
      ],
    },
    {
      key: "poem_kitap",
      title: "Kitabın Sesi",
      emoji: "📚",
      lines: [
        "Bir kitap açtım bir gece,",
        "Sayfaları konuşmaya başladı.",
        "Tarih anlattı, bilim gösterdi,",
        "Hayal kurmayı öğretti.",
        "Kitap her evin işiği,",
        "Aydınlatan en güzel arkadaş.",
      ],
    },
    {
      key: "poem_okul",
      title: "Okul",
      emoji: "🏫",
      lines: [
        "Okul kapısı açıldı,",
        "Sınıfa koştum hemen.",
        "Öğretmenim güldü bana,",
        "Öğrenmek ne güzel şeymiş!",
      ],
    },
    {
      key: "poem_ataturk",
      title: "Atatürk",
      emoji: "🇹🇷",
      lines: [
        "Atatürk kurdu yurdumuzu,",
        "Özgürlük verdi bize.",
        "Bayrağımız dalgalanır,",
        "O'nun anısına her daim.",
      ],
    },
    {
      key: "poem_bahar",
      title: "Bahar",
      emoji: "🌸",
      lines: [
        "Bahar geldi, karlar eridi,",
        "Çiçekler açtı her yerde.",
        "Kuşlar döndü yuvaya,",
        "Doğa uyandı yeniden.",
      ],
    },
    {
      key: "poem_dost",
      title: "Dostluk",
      emoji: "🤝",
      lines: [
        "Dost olan paylaşır,",
        "Zor günde yanında durur.",
        "Gülen yüz, sıcak el,",
        "Dostluk en büyük hazinedir.",
      ],
    },
    {
      key: "poem_nehir",
      title: "Nehir",
      emoji: "🏞️",
      lines: [
        "Nehir akar durur,",
        "Taşları aşar yolunda.",
        "Engel tanımaz hiçbir,",
        "Denize varır er ya da geç.",
      ],
    },
    {
      key: "poem_t9_mevsim",
      title: "Mevsimler",
      emoji: "🌸",
      lines: [
        "İlkbaharda çiçek açar,",
        "Yazın güneş kavurur.",
        "Sonbaharda yaprak döker,",
        "Kışın kar sustururur.",
      ],
    },
    {
      key: "poem_t9_okuma",
      title: "Okuma Sevinci",
      emoji: "📖",
      lines: [
        "Kitap açtım sayfasını,",
        "Kelimeler dans eder.",
        "Her satırda yeni dünya,",
        "Hayal gücüm kanatlanır.",
      ],
    },
    {
      key: "poem_t9_toprak",
      title: "Toprak",
      emoji: "🌍",
      lines: [
        "Toprak verir meyve bize,",
        "Eker biçeriz onu.",
        "Onun sahibi değiliz,",
        "O bizim annemizdir.",
      ],
    },
    {
      key: "poem_t9_kalem",
      title: "Kalemim",
      emoji: "✏️",
      lines: [
        "Kalemim küçük bir sihir,",
        "Kağıda düşünce yazar.",
        "Bir çizgiyle dünya doğar,",
        "Bir kelimeyle rüya yaşar.",
      ],
    },
    {
      key: "poem_t9_mavi",
      title: "Mavi Okyanus",
      emoji: "🌊",
      lines: [
        "Okyanusun mavi suları,",
        "Uzak diyarlara uzanır.",
        "Dalgalar söyler şarkılar,",
        "Kulaklarımda hâlâ çınlar.",
      ],
    },
    {
      key: "poem_mevsimler",
      title: "Mevsimler",
      emoji: "🍁",
      lines: [
        "İlkbaharda çiçekler açar,",
        "Yazın güneş yakar,",
        "Sonbaharda yaprak döker,",
        "Kışın kar yağar.",
      ],
    },
    {
      key: "poem_okul",
      title: "Okul Sevinci",
      emoji: "🏫",
      lines: [
        "Sabah erkenden kalkarım,",
        "Çantamı omzuma takarım.",
        "Koşarak okula giderim,",
        "Arkadaşlarla gülerim.",
      ],
    },
    {
      key: "poem_aile",
      title: "Ailem",
      emoji: "👨‍👩‍👧",
      lines: [
        "Annem benim güneşim,",
        "Babam kaya gibi sağlam.",
        "Kardeşim can arkadaşım,",
        "Ailem her şeyim tamam.",
      ],
    },
    {
      key: "poem_doga",
      title: "Doğa",
      emoji: "🌿",
      lines: [
        "Yeşil ormanlar, mavi göl,",
        "Kuşların şarkısı eşlik eder yola.",
        "Çiçekler açar, böcekler uçar,",
        "Doğa en güzel rüya.",
      ],
    },
    {
      key: "poem_kutuphanede",
      title: "Kütüphanede",
      emoji: "📚",
      lines: [
        "Kütüphaneye girdim sessizce,",
        "Satırlar konuştu bana,",
        "Yazar yaşadı yüz yıl önce,",
        "Ama sesi geldi buraya.",
      ],
    },
    {
      key: "poem_turkiye",
      title: "Türkiye'm",
      emoji: "🇹🇷",
      lines: [
        "Dağlarında kar, ovalarında buğday,",
        "Denizlerinde balık, tarihinde canlı,",
        "Her köşesinde bir masal var,",
        "Türkiye'm, seni çok seviyorum.",
      ],
    },
    {
      key: "poem_karinca",
      title: "Karınca",
      emoji: "🐜",
      lines: [
        "Küçücük karınca çalışır durmaz,",
        "Yorulmaz, şikâyet etmez, susmaz,",
        "En ağır yükü taşır,",
        "Çünkü bilir: emek karşılıksız kalmaz.",
      ],
    },
    {
      key: "poem_sabah",
      title: "Sabah Oldu",
      emoji: "🌅",
      lines: [
        "Sabah güneş doğdu dağdan,",
        "Kuşlar uyandı daldan,",
        "Ben de kalktım sevinçle,",
        "Yeni bir güne yeni hevesle.",
      ],
    },
    {
      key: "poem_matematik",
      title: "Sayıların Dansı",
      emoji: "🔢",
      lines: [
        "Bir artı bir iki,",
        "İki artı iki dört,",
        "Sayılar dans eder,",
        "Matematiğe doydum kört.",
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
    {
      key: "poem_zaman",
      title: "Zaman",
      emoji: "⏳",
      lines: [
        "Zaman bir ırmak gibi akar,",
        "Geri dönmez hiçbir damlası.",
        "Her an bir hediyedir sana,",
        "Boşa harcama şimdişerden.",
        "Sevdiklerinle geçir günleri,",
        "İyi işler yap, iz bırak.",
        "Zaman geçer, anılar kalır,",
        "Kalbinçe ne ekersen biçersin.",
      ],
    },
    {
      key: "poem_doga",
      title: "Doğanın Sesi",
      emoji: "🌿",
      lines: [
        "Orman konuşur yapraklarla,",
        "Rüzgar taşır gizli sırları.",
        "Nehir anlatır taşlara,",
        "Güneş boyar ufukları.",
        "Biz de doğanın parçasıyız,",
        "Onu kirletmek kendimizi kirletmek.",
        "Koru, sev, yaşat doğayı,",
        "Gelecek nesle bırak safızı.",
      ],
    },
    {
      key: "poem_adalet",
      title: "Adalet",
      emoji: "⚖️",
      lines: [
        "Adalet gözleri kapalı tartışır,",
        "Zülfé düşmez hiçbir tarafına.",
        "Güçlü değil, haklı olan kazanır,",
        "Bu dünyanın en büyük temeli.",
        "Savun mazlumu, dik dur zulme,",
        "Susma gördüğünde haksızlığı.",
        "Bir toplumun şeref taşı adalettir,",
        "Onsuz yıkılır her yapı.",
      ],
    },
    {
      key: "poem_umut",
      title: "Umut",
      emoji: "🌟",
      lines: [
        "En karanlık gecede bile,",
        "Bir yıldız ışlığavık çıkar.",
        "Umut budur: vazgeçmemek,",
        "Fırtınaya göğüs germek.",
        "En derin çukurdan çıkılır,",
        "Güneşe dönülür yeniden.",
        "Umut kalbüe yakıt ol,",
        "Söndürme hiçbir zaman.",
      ],
    },
    {
      key: "poem_yeni_o1",
      title: "Bilim",
      emoji: "🔬",
      lines: [
        "Bilim ışığı söndürülmez,",
        "Karanlığa meydan okur.",
        "Her soru bir kapı açar,",
        "Her cevap yeni sorular doğurur.",
        "Meraklı zihinde sonsuz evren,",
        "Keşfedilmeyi bekler sessizce.",
      ],
    },
    {
      key: "poem_yeni_o2",
      title: "Gençlik",
      emoji: "🌟",
      lines: [
        "Gençlik ateş, gençlik güç,",
        "Geleceği inşa eder bu gençler.",
        "Hayal kurmaktan korkmayın,",
        "Hayaller gerçeğin tohumudur.",
        "Kendinize inanın her zaman,",
        "Çünkü dünya sizinle değişir.",
      ],
    },
    {
      key: "poem_yeni_o3",
      title: "Türkiye",
      emoji: "🗺️",
      lines: [
        "Anadolu'nun kalbinden geçer,",
        "Binlerce yıllık tarih sesi.",
        "Her taşında bir destan,",
        "Her nehirde bir şiir.",
        "Bu topraklar bizim mirasımız,",
        "Sevgiyle korumalıyız.",
      ],
    },
    {
      key: "poem_yeni_o4",
      title: "Teknoloji",
      emoji: "💻",
      lines: [
        "Dijital çağda koşuyoruz,",
        "Veriler akar nehir gibi.",
        "Ama insan kalbi,",
        "Hiçbir kodla yazılmaz.",
        "Teknolojiyi insan için kullan,",
        "Anlam verir her piksele.",
      ],
    },
    {
      key: "poem_yeni_o5",
      title: "Çevre",
      emoji: "🌍",
      lines: [
        "Dünya bizim evimiz,",
        "Kirletmeyelim bu güzelliği.",
        "Her ağaç bir nefes,",
        "Her damla bir hayat.",
        "Gelecek nesillere bırakalım,",
        "Temiz, yeşil, güzel bir dünya.",
      ],
    },
    {
      key: "poem_t9_sehir",
      title: "Şehrin Sesi",
      emoji: "🏙️",
      lines: [
        "Şehir uyumaz geceleri,",
        "Işıklar yanar sönmeden.",
        "Her pencerede bir hikaye,",
        "Her kalpte bir özlem gizli.",
        "Ben de bu kalabalıkta,",
        "Sessizce düşünürüm.",
      ],
    },
    {
      key: "poem_t9_hafiza",
      title: "Hafıza",
      emoji: "🧩",
      lines: [
        "Geçmiş bir sis perdesidir,",
        "Kimi şeffaf, kimi koyu.",
        "Hatırlamak acı verir bazen,",
        "Ama unutmak daha zor.",
        "Hafıza kalkanımız,",
        "Ve en kırılgan yerimiz.",
      ],
    },
    {
      key: "poem_t9_insan",
      title: "İnsan Olmak",
      emoji: "🌟",
      lines: [
        "İnsan olmak güç işi,",
        "Hem güçlü hem kırılgan.",
        "Aşk, öfke, sevinç, acı,",
        "Hepsi bir arada yaşar.",
        "Bu çelişkiler içinde,",
        "Anlam ararız durmadan.",
      ],
    },
    {
      key: "poem_t9_degisim",
      title: "Değişim",
      emoji: "🔄",
      lines: [
        "Her şey değişir zamanla,",
        "Nehir akar, taş yıpranır.",
        "Biz de değişiriz sessizce,",
        "Fark etmeden, içten içe.",
        "Değişim hayatın kendisidir,",
        "Direnmek su götürmez.",
      ],
    },
    {
      key: "poem_t9_bilim2",
      title: "Bilimin Işığı",
      emoji: "🔭",
      lines: [
        "Bir deney masasında oturur,",
        "Bilim insanı sabırsız.",
        "Soruların peşinde koşar,",
        "Cevaplar ışığa kavuşur.",
        "Her keşif yeni kapı açar,",
        "Evren sonsuz, merak da öyle.",
      ],
    },
    {
      key: "poem_zaman",
      title: "Zaman",
      emoji: "⏳",
      lines: [
        "Zaman akar durdurulamaz,",
        "Her an geçip gider,",
        "Yarın dünden güzel olmak için,",
        "Bugün en iyi ol!",
      ],
    },
    {
      key: "poem_umut",
      title: "Umut",
      emoji: "🌟",
      lines: [
        "Karanlıkta bile bir ışık var,",
        "Umut asla sönmez,",
        "Düşsen de kalk, bak ileriye,",
        "Güzel günler bitmez.",
      ],
    },
    {
      key: "poem_vatan",
      title: "Vatan",
      emoji: "🇹🇷",
      lines: [
        "Bu topraklar atalardan emanet,",
        "Koru, sahip çık ona,",
        "Bayrak dalgalanır özgürce,",
        "Vatan sevgisi en büyük dua.",
      ],
    },
    {
      key: "poem_bilim",
      title: "Bilim",
      emoji: "🔬",
      lines: [
        "Merak et, sor, araştır,",
        "Dünya sırlarla dolu,",
        "Bilim kapıyı açar sana,",
        "Geleceğin en büyük yolu.",
      ],
    },
    {
      key: "poem_zaman",
      title: "Zaman",
      emoji: "⏳",
      lines: [
        "Zaman nehir gibi akar,",
        "Geçmişi tutar değil, bırakır,",
        "Her sabah yeni bir sayfa açar,",
        "Ama geçmişi yazan biri kalır.",
      ],
    },
    {
      key: "poem_ozgurluk",
      title: "Özgürlük",
      emoji: "🕊️",
      lines: [
        "Özgürlük rüzgâr gibidir,",
        "Görülmez ama hissedilir,",
        "Zincirler kırılır bir gün,",
        "Yürekler umutla beslenir.",
      ],
    },
    {
      key: "poem_anadolu",
      title: "Anadolu Toprakları",
      emoji: "🌾",
      lines: [
        "Anadolu binlerce yıldır yaşar,",
        "Her taşında bir uygarlık saklı,",
        "Hitit'ten Selçuklu'ya uzanır,",
        "Bu toprak tarihe tanıklık eder.",
      ],
    },
    {
      key: "poem_dugme",
      title: "Işığı Yak",
      emoji: "💡",
      lines: [
        "Bir fikir doğar karanlıkta,",
        "Sönük bir mum gibi titrer,",
        "Düşünen eller kavrar onu,",
        "Aydınlık bütün dünyaya yeter.",
      ],
    },
    {
      key: "poem_deniz_cagrisii",
      title: "Denizin Çağrısı",
      emoji: "🌊",
      lines: [
        "Deniz çağırır uzaktan beni,",
        "Dalgalar yıkar eski derdi,",
        "Ufukta kaybolur gemi,",
        "Ama rüzgâr taşır özgürlüğü.",
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
  const { t, lang } = useLanguage();
  const activePoems = lang === "en" ? poemsEn : poems;
  const profile = getCurrentUser();

  // biome-ignore lint/correctness/useExhaustiveDependencies: one-time mount tracking
  useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "poems");
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
      utt.lang = lang === "en" ? "en-US" : "tr-TR";
      utt.onend = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utt);
    }
  };

  const filteredPoems = activePoems[level].filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.lines.join(" ").toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleMemorized = (key: string) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 8);
    incrementDailyContentRead(profile.studentNumber);
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
        <h1 className="text-3xl font-black text-white mb-4">
          🎭 {t("poems_title")}
        </h1>
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
        {/* Progress indicator */}
        {(() => {
          const total = activePoems[level].length;
          const done = activePoems[level].filter((p) =>
            readTopics.includes(p.key),
          ).length;
          const pct = total > 0 ? Math.round((done / total) * 100) : 0;
          return (
            <div className="bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3">
              <span className="text-2xl">🎭</span>
              <div className="flex-1">
                <div className="flex justify-between text-white text-xs mb-1">
                  <span className="font-bold">Bu seviyedeki ilerleme</span>
                  <span className="font-black">
                    {done}/{total}
                  </span>
                </div>
                <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-yellow-300 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
              <span className="text-white font-black text-sm">{pct}%</span>
            </div>
          );
        })()}
        <div className="relative mb-4">
          <input
            type="text"
            data-ocid="poems.search_input"
            placeholder={`🔍 ${t("search_placeholder")}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/20 text-white placeholder-white/50 rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:bg-white/30 transition-all"
          />
        </div>
        <div className="space-y-4">
          {filteredPoems.length === 0 ? (
            <div className="text-center text-white/60 py-8">
              Sonuç bulunamadı 🔍
            </div>
          ) : (
            filteredPoems.map((p) => {
              const isDone = readTopics.includes(p.key);
              return (
                <div
                  key={p.key}
                  className={`bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isDone ? "border-2 border-yellow-300" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{p.emoji}</span>
                    <div className="text-white font-black text-lg">
                      {p.title}
                    </div>
                    {isDone && (
                      <span className="ml-auto text-yellow-300 text-xl">
                        ⭐
                      </span>
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
                  <button
                    type="button"
                    data-ocid="poems.listen_button"
                    onClick={() => handleSpeak(p.key, p.lines.join(" "))}
                    className="bg-white/20 hover:bg-white/40 text-white text-xs font-bold px-3 py-1 rounded-full transition-all mr-2 mb-2"
                  >
                    {speakingId === p.key
                      ? `⏹ ${t("stop")}`
                      : `🔊 ${t("listen")}`}
                  </button>
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
            })
          )}
        </div>
      </div>
    </div>
  );
}
