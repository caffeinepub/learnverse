import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { WordDefinitionTooltip } from "../components/WordDefinitionTooltip";
import { Button } from "../components/ui/button";
import { storiesEn } from "../data/stories-en";
import { storiesEs } from "../data/stories-es";
import { useLanguage } from "../i18n/LanguageContext";
import {
  getCurrentUser,
  getReadTopics,
  incrementDailyContentRead,
  isFavorite,
  markTopicRead,
  toggleFavorite,
  trackContentVisit,
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
    {
      key: "story_kar_tanesi",
      title: "Kar Tanesi",
      emoji: "❄️",
      text: "Küçük bir kar tanesi gökyüzünden düşüyordu. 'Ben nereye gidiyorum?' diye düşündü. Bir çocuğun burnuna kondu ve eridi. 'Ben artık o çocuğun gülüşüyüm!' dedi mutlu bir şekilde.",
    },
    {
      key: "story_kirmizi_baslikh",
      title: "Kırmızı Başlıklı Kız",
      emoji: "🧺",
      text: "Kırmızı başlıklı kız büyükannesine yemek götürüyordu. Ormanda kötü bir kurtla karşılaştı. Ama o korkusuz ve akıllıydı. Oduncu yardımına yetişti ve herkes mutlu oldu. Yabancılara dikkat etmek gerekir.",
    },
    {
      key: "story_tohumun_macerasi",
      title: "Tohumun Macerası",
      emoji: "🌱",
      text: "Küçük bir tohum toprağa düştü. 'Burada ne işim var?' diye düşündü. Yağmur yağdı, güneş doğdu. Günler geçti ve tohum büyük, güzel bir ağaç oldu. Sabırlı olmak büyük şeyler doğurur.",
    },
    {
      key: "story_renkli_balik",
      title: "Renkli Balık",
      emoji: "🐠",
      text: "Okyanus derinliklerinde renkli bir balık yaşardı. Tüm arkadaşları aynı renkteydi ama o farklıydı. Başta üzüldü, sonra fark etti: farklı olmak özeldir. Arkadaşları onu en çok seven oldu.",
    },
    {
      key: "story_kuyudaki_kurbaga",
      title: "Kuyudaki Kurbağa",
      emoji: "🐸",
      text: "Bir kurbağa kuyuda yaşıyordu. 'Dünya bu kuyudan ibarettir' diyordu. Bir gün bir kuş gelip büyük denizleri anlattı. Kurbağa hayret etti ve dünyayı keşfetmeye çıktı. Merak insanı büyütür.",
    },
    {
      key: "story_yeni_1",
      title: "Sevimli Köpek Pamuq",
      emoji: "🐶",
      text: "Pamuk adında beyaz tüylü bir köpek vardı. Her gün sahibiyle parka giderdi. Parkta çocuklarla oyun oynar, top koşturdu. Akşam eve döndüğünde mutluluktan kuyruk sallardı. İyi bir gün geçirmenin en güzel yolu dostluktur.",
    },
    {
      key: "story_yeni_2",
      title: "Sihirli Kalem",
      emoji: "✏️",
      text: "Ali'nin bir sihirli kalemi vardı. Çizdiği her şey gerçek oluyordu. Güneş çizdi, oda aydınlandı. Çiçek çizdi, oda güzelleşti. Ama en güzeli arkadaşı çizdiğinde, yanında gerçek bir dost belirdi.",
    },
    {
      key: "story_yeni_3",
      title: "Küçük Yıldız",
      emoji: "⭐",
      text: "Gökyüzünde küçük bir yıldız vardı. 'Ben çok küçüğüm, kimse beni görmez' diye üzülürdü. Ama bir gece kaybolmuş bir çocuk yıldızın ışığıyla evini buldu. Küçük olsun, ama yardımcı olmak büyük mutluluktur.",
    },
    {
      key: "story_yeni_4",
      title: "Rüzgâr ve Çiçek",
      emoji: "🌺",
      text: "Güçlü bir rüzgâr esiyordu. Bahçedeki küçük çiçeğe dedi ki: 'Seni eğerim!' Çiçek güldü: 'Ben eğilirim ama kırılmam.' Rüzgâr geçti, çiçek doğruldu. Güçlü olan direnç gösterendir.",
    },
    {
      key: "story_yeni_5",
      title: "Komşu Tavşanlar",
      emoji: "🐰",
      text: "İki tavşan komşuydu: Biri hep paylaşır, diğeri paylaşmazdı. Kış geldi, cimri tavşanın yiyeceği tükendi. Paylaşan tavşan ona yardım etti. Cimri tavşan anladı: paylaşmak ne güzel şeymiş!",
    },
    {
      key: "story_t9_kelebek",
      title: "Kelebek ve Çiçek",
      emoji: "🦋",
      text: "Küçük bir kelebek bahçede uçuyordu. Kırmızı bir çiçeğe kondu. Çiçek güldü, kelebek de güldü.",
    },
    {
      key: "story_t9_bulut",
      title: "Bulutun Yolculuğu",
      emoji: "☁️",
      text: "Beyaz bir bulut gökyüzünde yüzüyordu. Rüzgar onu dağlara götürdü. Orada yağmura dönüştü ve toprak onu sevinerek içti.",
    },
    {
      key: "story_t9_fil",
      title: "Küçük Fil",
      emoji: "🐘",
      text: "Küçük fil su birikintisine baktı. Hortumunu daldırdı ve suyu havaya fırlattı. Güneş gökkuşağı yarattı, fil mutlu oldu.",
    },
    {
      key: "story_t9_ay",
      title: "Ay ve Yıldızlar",
      emoji: "🌙",
      text: "Gece ay çıktı, yıldızlar etrafında dans etti. Küçük kız pencereden izledi. 'İyi geceler ay!' dedi ve uyudu.",
    },
    {
      key: "story_t9_nar",
      title: "Nar Taneleri",
      emoji: "🍎",
      text: "Bahçede kırmızı bir nar vardı. Çatladı, içinden yüzlerce tanecik döküldü. Kuşlar geldi ve hepsini paylaşarak yedi.",
    },
    {
      key: "story_kucuk_ay",
      title: "Küçük Ay'ın Yolculuğu",
      emoji: "🌙",
      text: "Küçük Ay her gece gökyüzünde yalnız dolaşırdı. Bir gece yıldızlarla arkadaş oldu. Yıldızlar ona parlamayı öğretti. Artık Küçük Ay, her gece yıldızlarla birlikte parlıyordu.",
    },
    {
      key: "story_cesur_fare",
      title: "Cesur Fare",
      emoji: "🐭",
      text: "Küçük fare her gün ekmek bulmak için çalışırdı. Bir gün büyük bir aslan tuzağa düştü. Küçük fare ipi keserek aslanı kurtardı. Artık ikisi en iyi arkadaştı.",
    },
    {
      key: "story_kar_tanesi",
      title: "Kar Tanesi",
      emoji: "❄️",
      text: "Her kar tanesi birbirinden farklıdır. Bir kar tanesi buluttan yere düştü. Güneş çıkınca eridi ve toprak sulandı. Çiçekler o suyla büyüdü. Kar tanesi çiçeğe dönüştü.",
    },
    {
      key: "story_renkli_gokkusagi",
      title: "Renkli Gökkuşağı",
      emoji: "🌈",
      text: "Yağmur yağdı ve durdu. Gökyüzünde rengarenk bir gökkuşağı belirdi. Çocuklar dışarı çıkıp baktı. Kırmızı, turuncu, sarı, yeşil, mavi... Hepsi el ele tuttu ve dans etti.",
    },
    {
      key: "story_sihirli_orman",
      title: "Sihirli Orman",
      emoji: "🌳",
      text: "Küçük Ali ormanda yürürken konuşan bir ağaç duydu. Ağaç, 'Beni kes!' dedi. Ali hayır, dedi. Ertesi gün ağaç meyve verdi. İyilik, her zaman geri döner.",
    },
    {
      key: "story_yildizli_gece",
      title: "Yıldızlı Gece",
      emoji: "⭐",
      text: "Büyük bir köpek yıldızına bakarak dilek diledi. Sabah güzel bir kemik buldu. Dilek tutunca çalışmak da lazım, dedi annesi.",
    },
    {
      key: "story_kurbaga_ve_gunes",
      title: "Kurbağa ve Güneş",
      emoji: "🐸",
      text: "Kurbağa havuzdan çıkıp güneşi selamlardı her sabah. Bir gün bulutlar kapladı göğü. Kurbağa şarkı söyledi, bulutlar dağıldı. Sevincin gücü büyüktür.",
    },
    {
      key: "story_kucuk_fil_dost",
      title: "Küçük Fil ve Dostları",
      emoji: "🐘",
      text: "Küçük fil hiç arkadaşı olmadığı için üzülürdü. Bir gün nehre düşen sincabı kurtardı. Sincap teşekkür etti ve iki can dost oldular.",
    },
    {
      key: "story_kirmizi_sandal",
      title: "Kırmızı Sandalye",
      emoji: "🪑",
      text: "Çocuk okulda hep aynı kırmızı sandalyeye otururdu. Bir gün sandalye kayboldu. Sınıf onu aramak için birlikte çalıştı. Birlik olmak sorunları çözer.",
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
    {
      key: "story_robot_arkadasim",
      title: "Robot Arkadaşım",
      emoji: "🤖",
      text: "Emre bir robot yaptı ama robot arkadaş edinmekte zorlanıyordu. Emre ona çeşitli şeyler öğretti: paylaşmayı, gülmeyi, yardım etmeyi. Bir gün robot gerçek anlamda arkadaş oldu. Dostluk öğrenilebilir.",
    },
    {
      key: "story_kucuk_mucit",
      title: "Küçük Mucit",
      emoji: "⚙️",
      text: "Selin her şeyi tamir etmeyi severdi. Bozuk oyuncakları, kırık kalemi, delik kovayı... Bir gün okulda ışıklar söndü. Herkes paniklerken Selin bir araya koşup sorunu çözdü. Merak ve çalışkanlık her şeyi mümkün kılar.",
    },
    {
      key: "story_yagmur_damlasi",
      title: "Yağmur Damlasının Yolculuğu",
      emoji: "🌧️",
      text: "Bir yağmur damlası buluttan düştü. Önce bir yaprağa, sonra toprağa, ardından nehre aktı. Nehirden denize ulaştı. Güneşle buharlaştı ve tekrar bulut oldu. Suyun döngüsü böyle işler!",
    },
    {
      key: "story_tarih_kitabi",
      title: "Tarihin Kitabı",
      emoji: "📜",
      text: "Ahmet büyükannesinin eski bir kitabını buldu. Sayfaları sararmış, yazıları silikti. Büyükannesine sordu: 'Bu kim?' Büyükannesinin gözleri parladı: 'Dedenin dedesi. Savaşta vatanı korudu.' Tarih aile içinde yaşar.",
    },
    {
      key: "story_paylasilmis_ekmek",
      title: "Paylaşılan Ekmek",
      emoji: "🍞",
      text: "Okul çıkışında Fatma'nın sadece bir ekmeği vardı. Bir köpek sokakta aç bekliyordu. Fatma ekmeğini ikiye böldü. Eve gidince annesi 'Hem sen hem köpek toktunuz, bu nasıl?' dedi. Paylaşınca herkes tok olur.",
    },
    {
      key: "story_yeni_6",
      title: "Deney Çocuğu",
      emoji: "🔬",
      text: "Zeynep her gün evde deney yapardı. Bir gün karbonat ve sirkeyle volkan yaptı. Ailesi şaşırdı. Öğretmeni onu bilim fuarına gönderdi. Birinci oldu. Merak etmek büyük başarılara kapı açar.",
    },
    {
      key: "story_yeni_7",
      title: "Futbol Takımı",
      emoji: "⚽",
      text: "Ahmet'in takımı turnuvaya hazırlanıyordu. Ama en iyi oyuncu hastalandı. Ahmet korktu ama antrenör dedi ki: 'Takım olarak kazanırız.' Birlikte çalıştılar ve kupayı aldılar. Takım ruhu her şeyin üstündedir.",
    },
    {
      key: "story_yeni_8",
      title: "Kütüphane Sırrı",
      emoji: "📚",
      text: "Elif okul kütüphanesinde eski bir kitap buldu. Kitabın son sayfasında bir not vardı: 'Bu kitabı okuyan çocuk büyük bir keşif yapacak.' Elif okumaya başladı. Bitirdiğinde anladı: keşif bilginin kendisiymiş.",
    },
    {
      key: "story_yeni_9",
      title: "Kardeş Kavgası",
      emoji: "👧",
      text: "İki kardeş oyuncak yüzünden kavga etti. Anneleri onları oturttı: 'Siz birbirinizin en değerli arkadaşısınız.' Kardeşler düşündü. Barıştılar ve birlikte oynadılar. Kardeş kavgası çabuk biter, sevgi hiç bitmez.",
    },
    {
      key: "story_yeni_10",
      title: "Kayıp Köpek",
      emoji: "🐕",
      text: "Mahallede bir köpek kaybolmuştu. Çocuklar onu aramaya başladı. Duvar köşelerini, bahçeleri aradılar. Onu parkın arkasında buldular. Sahibine teslim ettiler. İyilik yapmak kalbi ısıtır.",
    },
    {
      key: "story_t9_kahraman",
      title: "Küçük Kahraman",
      emoji: "🦸",
      text: "Ali okul yolunda yaşlı bir teyzeyi gördü, elindeki poşetler düşmüştü. Hızla koştu ve hepsini topladı. Teyze teşekkür etti. 'İyilik yapmak en büyük güçtür' dedi Ali.",
    },
    {
      key: "story_t9_kitap",
      title: "Sihirli Kitap",
      emoji: "📚",
      text: "Zeynep kütüphanede eski bir kitap buldu. Açınca sayfalar ışıl ışıl parladı. Hikayeler sanki gerçekmişçesine canlandı. O günden sonra kitapları çok daha çok sevdi.",
    },
    {
      key: "story_t9_tohum",
      title: "Tohum'un Yolculuğu",
      emoji: "🌱",
      text: "Küçük bir tohum toprağa düştü. Karanlıkta kaldı ama pes etmedi. Yavaş yavaş kökler saldı, gövde oluştu. Sonunda güneşe doğru uzandı ve çiçek açtı. Azimle her şey mümkündür.",
    },
    {
      key: "story_t9_yildiz",
      title: "Düşen Yıldız",
      emoji: "⭐",
      text: "Can gece kayalıkta yatarken bir yıldız düştü. Koştu ve parlayan bir taş buldu. Onu bilim insanlarına götürdü. 'Göktaşı' dediler. Can bilime olan ilgisini o gün keşfetti.",
    },
    {
      key: "story_t9_kopru",
      title: "Köprü Kuran Çocuklar",
      emoji: "🌉",
      text: "İki mahalle arasındaki dere taşmıştı. Köprü yıkılmıştı. Çocuklar toplandı, taş ve tahta topladılar. Birlikte köprü inşa ettiler. Büyükler hayretle izledi: birlikte her engel aşılır.",
    },
    {
      key: "story_bilge_cocuk",
      title: "Bilge Çocuk",
      emoji: "📚",
      text: "Ali her gün kütüphaneye gider ve kitap okurdu. Bir gün sınıfta zor bir soru soruldu. Hiç kimse cevap veremedi, yalnızca Ali biliyordu. Öğretmeni Kitap okumanın gücü budur dedi. Ali o günden sonra arkadaşlarına da kitap okumayı sevdirdi.",
    },
    {
      key: "story_kayip_kedi",
      title: "Kayıp Kedi",
      emoji: "🐱",
      text: "Mia kedisi Pamuk'u kaybetti. Mahallede Pamuk kayboldu diye afişler astı. Komşular Mia'ya yardım etti. Bir hafta sonra komşunun bahçesinde minik yavrularıyla birlikte buldular. Pamuk anne olmuştu!",
    },
    {
      key: "story_tohum_agac",
      title: "Küçük Tohum Büyük Ağaç",
      emoji: "🌱",
      text: "Büyükbaba torunu Efe'ye bir elma tohumu verdi. Ekersen büyür dedi. Efe toprağa dikti, her gün suladı. Yıllar geçti, küçük tohum koca bir elma ağacı oldu. İlk meyveyi birlikte yediler.",
    },
    {
      key: "story_deniz_macerasi",
      title: "Deniz Macerası",
      emoji: "🌊",
      text: "Yaz tatilinde Selin deniz kenarında yunus gördü. Yunuslar ona yaklaştı ve oynamaya başladılar. Deniz canlıları arkadaştır dedi annesi. Selin o günden sonra denizi ve hayvanlarını korumaya yemin etti.",
    },
    {
      key: "story_okul_gezisi",
      title: "Okul Gezisi",
      emoji: "🚌",
      text: "Sınıf fabrikayı ziyarete gitti. Fabrikada bisküvi üretimi nasıl olur gördüler. Ahmet bir şey öğrendi: Her yediğin şeyin arkasında emek var. O günden sonra israf etmedi.",
    },
    {
      key: "story_masal_kitabi",
      title: "Masal Kitabı",
      emoji: "📖",
      text: "Elif kütüphanede eski bir kitap buldu. Sayfaları sararmış, kapağı yıpranmıştı. Okumaya başlayınca saatler geçti. En güzel hazineler kitaplarda saklıdır.",
    },
    {
      key: "story_yeni_arkadasim",
      title: "Yeni Arkadaşım",
      emoji: "🤝",
      text: "Yeni öğrenci sınıfa girdi ve köşeye oturdu. Kimse konuşturmadı onu. Taner gidip yanına oturdu ve gülümsedi. O günden sonra ikisi en iyi arkadaş oldu.",
    },
    {
      key: "story_doga_temizligi",
      title: "Doğa Temizliği",
      emoji: "♻️",
      text: "Parkta piknik yapan aile çöplerini doğaya bırakmadı. Hatta başkalarının çöplerini de topladı. Bir kuş gelip teşekkür eder gibi şakıdı. Doğayı sevmek onu korumaktır.",
    },
    {
      key: "story_matematik_yarismasi",
      title: "Matematik Yarışması",
      emoji: "🔢",
      text: "Zeynep matematik yarışmasından korkuyordu. Ama her gece çalıştı. Yarışma gününde doğru cevabı verdi. Çalışmak korkuyu yener.",
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
    {
      key: "story_matematik_dahisi",
      title: "Matematik Dahisi",
      emoji: "🔢",
      text: "Lale matematiği seviyor ama korkuyordu. Öğretmeni bir gün 'Hatalar öğrenmenin kapısıdır' dedi. Lale her hatayı not aldı, üzerinde çalıştı. Olimpiyata girdi ve ödül kazandı. Korku değil, cesaret başarıya götürür.",
    },
    {
      key: "story_deniz_altindaki_hazine",
      title: "Deniz Altındaki Hazine",
      emoji: "🌊",
      text: "Zekai dalış yapmayı öğreniyordu. Bir gün eski bir gemi enkazı buldu. İçinde altın yok ama kitaplar vardı: yüzyıllar öncesinden günlükler. Tarihçilere bildirdi; tarih yazıldı. En büyük hazine bilgidir.",
    },
    {
      key: "story_robot_yarismasi",
      title: "Robot Yarışması",
      emoji: "🏆",
      text: "Okul takımı büyük robot yarışmasına hazırlanıyordu. Son gün robotları bozuldu. Tüm gece çalıştılar. Sabah robot yeniden çalıştı. Finale girdiler ve ikinci oldular. 'İkinciyiz!' diye üzüldüler. Öğretmen: 'Pes etmemeniz birinci ödülünüzdür' dedi.",
    },
    {
      key: "story_yazar_olmak",
      title: "Yazar Olmak",
      emoji: "✍️",
      text: "Deren her gün günlük tutuyordu. Öğretmeni bir hikayesini okuyunca: 'Bunu yarışmaya gönder' dedi. Deren korktu ama gönderdi. Üçüncü oldu. Hikayesi çocuk dergisinde yayımlandı. Küçük kelimeler büyük dünyalar kurar.",
    },
    {
      key: "story_yapay_zeka",
      title: "Yapay Zeka Arkadaşım",
      emoji: "🧠",
      text: "Can okulda bir yapay zeka projesi geliştirdi. Yapay zeka derslerinde yardımcı oluyordu. Ama bir gün yapay zeka: 'Seni anlayamıyorum, sen çok karmaşıksın' dedi. Can güldü. 'Biz insanız, bunu seviyoruz!' dedi. İnsan olmanın gizemi.",
    },
    {
      key: "story_yeni_11",
      title: "Kod Yazan Kız",
      emoji: "💻",
      text: "Selin 12 yaşında kod yazmayı öğrendi. Bir uygulama geliştirdi: yaşlılara yardım için komşuluk ağı. Uygulaması ödül aldı. 'Teknolojiyi insanlar için kullanmak en anlamlısı' dedi. Geleceği gençler inşa eder.",
    },
    {
      key: "story_yeni_12",
      title: "Matematik Yarışması",
      emoji: "🏆",
      text: "Mert matematik olimpiyatına hazırlandı. Günlerce çalıştı. Finalde zor bir soruyla karşılaştı. Sakinleşti, adım adım çözdü. Birincilik ödülünü kazandı. Sabır ve düzenli çalışma başarının sırrıdır.",
    },
    {
      key: "story_yeni_13",
      title: "İklim Aktivisti",
      emoji: "🌍",
      text: "Deniz okulda iklim değişikliği hakkında araştırma yaptı. Belediyeye bir proje sundu: okul çatılarına güneş paneli. Belediye kabul etti. Deniz anladı: gençlerin sesi duyulabilir.",
    },
    {
      key: "story_yeni_14",
      title: "Müzik Yolculuğu",
      emoji: "🎵",
      text: "Alp bir piyanist olmak istiyordu. Ailesi buna karşıydı. Ama o her gün pratik yaptı. Konservauvar sınavını kazandı. Ailesi gururlandı. Tutkuyla takip edilen hayaller gerçek olur.",
    },
    {
      key: "story_yeni_15",
      title: "Uzay Araştırmacısı",
      emoji: "🚀",
      text: "Ayşe TÜBİTAK'a bir proje gönderdi: Mars'ta yaşam olasılığı. Projesi kabul edildi. Bilim insanlarıyla çalışmaya başladı. 'Evren sonsuz, merakımız sonsuz' dedi. Bilim insanı olmak bir tutkudur.",
    },
    {
      key: "story_t9_bilge",
      title: "Bilgenin Sorusu",
      emoji: "🧠",
      text: "Ünlü bilge öğrencilerine şunu sordu: 'Dünyada en değerli şey nedir?' Kimi altın dedi, kimi güç. Genç Fatma kalktı: 'Bilgi' dedi, 'çünkü ne alınır ne çalınır.' Bilge güldü: 'Doğru söyledin, zira bilgi insanı özgür kılar.'",
    },
    {
      key: "story_t9_mucit",
      title: "Genç Mucit",
      emoji: "⚙️",
      text: "17 yaşındaki Emre, köyüne güneş enerjisiyle çalışan su pompası tasarladı. Malzemeleri hurdalıktan topladı. Aylarca çalıştı. Pompa çalışınca köylüler alkışladı. 'Hayal et, çalış, gerçekleştir' dedi Emre. Bilim çocuklarına kapılarını açar.",
    },
    {
      key: "story_t9_miras",
      title: "Büyükannenin Mirası",
      emoji: "🏡",
      text: "Büyükannem öldüğünde bana eski bir günlük bıraktı. İçinde Anadolu'nun 1940'larını anlatan notlar vardı. Kıtlık, dayanışma, umut. Her satır derinden etkiledi beni. Tarihi kitaplarda değil, insanların kalbinde öğrendim.",
    },
    {
      key: "story_t9_okyanus",
      title: "Okyanusun Sırrı",
      emoji: "🌊",
      text: "Dalgıç Defne derin sularda tuhaf bir ışık gördü. Yaklaştığında fosforesans bakteri kolonisiydi. Karanlıkta mavi ışıklar yayıyorlardı. Defne anladı: Doğada her şey bir amaç taşır. Keşfetmek için bakmak gerekir, ama görmek için düşünmek gerekir.",
    },
    {
      key: "story_t9_tercih",
      title: "İki Yol",
      emoji: "🛤️",
      text: "Genç Ahmet üniversite sınavından önce ikilemde kaldı: hukuk mu, müzik mi? Babası hukuku istiyordu, kalbi müziği. Hocası dedi: 'Hangi seçim seni sabah mutlu kalkırır?' Ahmet müziği seçti. Yıllar sonra hem başarılı bir müzisyen oldu hem de hukuk okudu. Hiçbir kapı sonsuza dek kapalı değildir.",
    },
    {
      key: "story_mucit_cocuk",
      title: "Genç Mucit",
      emoji: "⚙️",
      text: "Kerem her gün köyde elektrik olmadığı için ödevlerini yapamıyordu. Okulda güneş enerjisini öğrendi. Ahşap ve metal parçalardan küçük bir güneş paneli yaptı. Artık köyde ışık vardı. Köylüler ona Genç Mucit dedi.",
    },
    {
      key: "story_tarih_yolculugu",
      title: "Tarihe Yolculuk",
      emoji: "🏛️",
      text: "Tarih dersinde uyuyakalan Deniz, rüyasında Osmanlı dönemine gitti. Topkapı Sarayı'nı gezdi, pazarlarda dolaştı. Sabah uyandığında defterine her şeyi yazdı. Öğretmeni o yazıyı okuyunca şaşırdı: Sen gerçekten yaşamışsın gibi yazmışsın!",
    },
    {
      key: "story_matematik_sirri",
      title: "Matematiğin Sırrı",
      emoji: "🔢",
      text: "Zeynep matematikten nefret ederdi. Bir gün yaşlı bir komşu ona Matematik dünyanın dilidir dedi ve altın oranı anlattı. Çiçeklerde, deniz kabuklarında, hatta yüzünde matematiksel desen gördü. Zeynep o gün matematiği sevmeye başladı.",
    },
    {
      key: "story_sanal_dunya",
      title: "Sanal Dünya",
      emoji: "💻",
      text: "Can her gün saatlerce ekrana bakardı. Bir gün programlama öğrendi ve kendi oyununu yaptı. Arkadaşları oynadı ve beğendi. Ekranı tüketmek değil, üretmek için kullanmak gerekiyor dedi annesi. Can artık bir yapımcıydı.",
    },
    {
      key: "story_siber_guvenlik",
      title: "Siber Güvenlik",
      emoji: "🔐",
      text: "Mehmet sosyal medyada tanımadığı biriyle arkadaş oldu. Biri ona şifresini sormaya başladı. Annesine söyledi. Sahte hesaplar tehlikelidir. Kişisel bilgilerini kimseyle paylaşma.",
    },
    {
      key: "story_uzay_kasisifi",
      title: "Uzay Kaşifi",
      emoji: "🚀",
      text: "Lale NASA'nın bir yarışmasında proje hazırladı. Mars'a nasıl su taşınır konusunu araştırdı. Jüriden büyük beğeni aldı. Hayal kurmak, geleceği şekillendirir.",
    },
    {
      key: "story_selcuklu_donemi",
      title: "Selçuklu'nun Kervansarayı",
      emoji: "🏛️",
      text: "Orta Asya'dan Anadolu'ya gelen tüccar kervansarayda konakladı. Selçuklular, yolcular için ücretsiz barınak kurmuştu. Bu cömertlik yüzyıllar öncesinden geliyordu. Paylaşmak insanlığın en güzel değeridir.",
    },
    {
      key: "story_yapay_zeka",
      title: "Yapay Zeka ve Biz",
      emoji: "🤖",
      text: "Cemre bir yapay zeka yarattı. Yapay zeka ona sorular sordu. Cemre fark etti: İnsan, sorular soran varlıktır. Teknoloji insana hizmet etmeli, insanın yerini almamalı.",
    },
    {
      key: "story_cu_bulbul",
      title: "Öğretmen Bülbül",
      emoji: "🐦",
      text: "Köy okulunda öğretmen yoktu. Bülbül adlı genç üniversite mezunu köye geldi. Çocuklara okuma yazmayı öğretti. On yıl sonra o köyden iki doktor, üç mühendis çıktı.",
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
  const { t, lang } = useLanguage();
  const activeStories =
    lang === "en" ? storiesEn : lang === "es" ? storiesEs : stories;
  const profile = getCurrentUser();

  // biome-ignore lint/correctness/useExhaustiveDependencies: one-time mount tracking
  useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "stories");
  }, []);
  const [level, setLevel] = useState<Level>(
    (profile?.level as Level) || "ilkokul",
  );
  const [readTopics, setReadTopics] = useState<string[]>(() =>
    profile ? getReadTopics(profile.studentNumber) : [],
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [comprehensionStory, setComprehensionStory] = useState<{
    key: string;
    title: string;
    level: string;
  } | null>(null);
  const [comprAnswer, setComprAnswer] = useState<number | null>(null);
  const [comprStep, setComprStep] = useState(0);
  const [comprScore, setComprScore] = useState(0);
  const [comprDone, setComprDone] = useState(false);
  const lookedUpWords = useRef<Set<string>>(new Set());
  const [favKeys, setFavKeys] = useState<Set<string>>(() => {
    if (!profile) return new Set();
    return new Set(
      ["story"].flatMap(() =>
        Object.keys(stories).flatMap((lvl) =>
          (stories as any)[lvl]
            .filter((s: any) =>
              isFavorite(profile.studentNumber, "story", s.key),
            )
            .map((s: any) => s.key),
        ),
      ),
    );
  });
  function handleToggleFav(s: { key: string; title: string; emoji: string }) {
    if (!profile) return;
    const added = toggleFavorite(profile.studentNumber, {
      type: "story",
      key: s.key,
      title: s.title,
      emoji: s.emoji,
    });
    setFavKeys((prev) => {
      const next = new Set(prev);
      if (added) next.add(s.key);
      else next.delete(s.key);
      return next;
    });
  }

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
      utt.lang = lang === "en" ? "en-US" : lang === "es" ? "es-ES" : "tr-TR";
      utt.onend = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utt);
    }
  };

  const filteredStories = activeStories[level].filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.text.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const COMPREHENSION_QUESTIONS = [
    {
      q_tr: "Bu hikayeyi okumak nasıl bir his uyandırdı?",
      q_en: "How did reading this story make you feel?",
      options_tr: ["Mutlu 😊", "Düşündürücü 🤔", "Heyecanlı 🎉", "Hüzünlü 😢"],
      options_en: ["Happy 😊", "Thoughtful 🤔", "Excited 🎉", "Sad 😢"],
    },
    {
      q_tr: "Hikayenin vermek istediği mesaj neydi?",
      q_en: "What was the main message of the story?",
      options_tr: [
        "İyilik güzeldir",
        "Çalışmak önemli",
        "Arkadaşlık değerli",
        "Bilgi güçtür",
      ],
      options_en: [
        "Kindness matters",
        "Hard work pays off",
        "Friendship is precious",
        "Knowledge is power",
      ],
    },
    {
      q_tr: "Bu hikayeyi bir arkadaşına anlatır mıydın?",
      q_en: "Would you recommend this story to a friend?",
      options_tr: [
        "Kesinlikle evet! ⭐⭐⭐",
        "Evet, anlatırdım ⭐⭐",
        "Belki ⭐",
        "Hayır",
      ],
      options_en: [
        "Definitely yes! ⭐⭐⭐",
        "Yes, I would ⭐⭐",
        "Maybe ⭐",
        "No",
      ],
    },
  ];

  const handleRead = (key: string, title: string) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
    setComprAnswer(null);
    setComprStep(0);
    setComprScore(0);
    setComprehensionStory({ key, title, level });
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
        <h1 className="text-3xl font-black text-white mb-4">
          📖 {t("stories_title")}
        </h1>
        <button
          type="button"
          onClick={() => navigate({ to: "/reading-fluency" })}
          className="w-full mb-4 py-2 px-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-2xl flex items-center justify-center gap-2 text-sm"
        >
          📖⏱️ Okuma Akıcılığı Modu
        </button>
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
        {/* Progress indicator */}
        {(() => {
          const total = activeStories[level].length;
          const done = activeStories[level].filter((s) =>
            readTopics.includes(s.key),
          ).length;
          const pct = total > 0 ? Math.round((done / total) * 100) : 0;
          return (
            <div className="bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3">
              <span className="text-2xl">📚</span>
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
          );
        })()}
        <div className="relative mb-4">
          <input
            type="text"
            data-ocid="stories.search_input"
            placeholder={`🔍 ${t("search_placeholder")}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/20 text-white placeholder-white/50 rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:bg-white/30 transition-all"
          />
        </div>
        <div className="space-y-4">
          {filteredStories.length === 0 ? (
            <div className="text-center text-white/60 py-8">
              Sonuç bulunamadı 🔍
            </div>
          ) : (
            filteredStories.map((s) => {
              const isRead = readTopics.includes(s.key);
              return (
                <div
                  key={s.key}
                  className={`bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isRead ? "border-2 border-green-300" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{s.emoji}</span>
                    <div className="text-white font-black text-lg flex-1">
                      {s.title}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleToggleFav(s)}
                      className="text-xl hover:scale-125 transition-transform"
                      title={
                        favKeys.has(s.key)
                          ? "Favoriden çıkar"
                          : "Favorilere ekle"
                      }
                    >
                      {favKeys.has(s.key) ? "⭐" : "☆"}
                    </button>
                    {isRead && (
                      <span className="text-green-300 text-xl">✓</span>
                    )}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    <WordDefinitionTooltip
                      text={s.text}
                      lookedUpWords={lookedUpWords.current}
                      onWordLookup={(word) => {
                        lookedUpWords.current.add(word);
                        if (profile) updatePoints(profile.studentNumber, 5);
                      }}
                    />
                  </p>
                  <button
                    type="button"
                    data-ocid="stories.listen_button"
                    onClick={() => handleSpeak(s.key, s.text)}
                    className="bg-white/20 hover:bg-white/40 text-white text-xs font-bold px-3 py-1 rounded-full transition-all mr-2 mb-2"
                  >
                    {speakingId === s.key
                      ? `⏹ ${t("stop")}`
                      : `🔊 ${t("listen")}`}
                  </button>
                  {!isRead && profile && (
                    <button
                      type="button"
                      data-ocid="stories.read_button"
                      onClick={() => handleRead(s.key, s.title)}
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
            })
          )}
        </div>
      </div>

      {comprehensionStory && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-3xl p-6 w-full max-w-sm relative">
            <button
              type="button"
              onClick={() => setComprehensionStory(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl font-bold leading-none"
            >
              ×
            </button>
            <div className="text-white font-black text-lg mb-1 pr-8">
              📖 {comprehensionStory.title}
            </div>
            {comprStep < 3 ? (
              <>
                <div className="text-white/50 text-xs mb-4">
                  {lang === "en"
                    ? `Question ${comprStep + 1}/3`
                    : `Soru ${comprStep + 1}/3`}
                </div>
                <div className="text-white font-bold text-sm mb-4">
                  {lang === "en"
                    ? COMPREHENSION_QUESTIONS[comprStep].q_en
                    : COMPREHENSION_QUESTIONS[comprStep].q_tr}
                </div>
                <div className="space-y-2">
                  {(lang === "en"
                    ? COMPREHENSION_QUESTIONS[comprStep].options_en
                    : COMPREHENSION_QUESTIONS[comprStep].options_tr
                  ).map((opt, idx) => (
                    <button
                      type="button"
                      key={opt}
                      disabled={comprAnswer !== null}
                      onClick={() => {
                        setComprAnswer(idx);
                        setTimeout(() => {
                          const nextStep = comprStep + 1;
                          const nextScore = comprScore + 1;
                          if (comprStep === 2) {
                            setComprStep(3);
                            setComprScore(nextScore);
                            if (profile)
                              updatePoints(profile.studentNumber, 15);
                            setComprehensionStory((prev) =>
                              prev ? { ...prev } : null,
                            );
                            setComprDone(true);
                            setTimeout(() => {
                              setComprDone(false);
                              setComprehensionStory(null);
                            }, 2000);
                          } else {
                            setComprStep(nextStep);
                            setComprScore(nextScore);
                            setComprAnswer(null);
                          }
                        }, 600);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                        comprAnswer === idx
                          ? "bg-yellow-400 text-yellow-900"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-5xl mb-3">🎉</div>
                <div className="text-white font-black text-2xl mb-1">
                  {comprScore}/3 ✨
                </div>
                <div className="text-yellow-400 font-bold text-sm">
                  {lang === "en" ? "+15 points earned!" : "+15 puan kazandın!"}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {comprDone && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 font-black px-6 py-3 rounded-full shadow-2xl z-50 text-sm animate-bounce">
          ✨ +15 puan kazandın!
        </div>
      )}
    </div>
  );
}
