import { u as useNavigate, d as getCurrentUser, a as useLanguage, r as reactExports, E as getLastQuizScore, _ as hasPlayedQuizToday, $ as getDueSpacedItems, j as jsxRuntimeExports, B as Button, a0 as markSpacedRepCorrect, a1 as markSpacedRepWrong, a2 as playAudio, a3 as saveWrongAnswer, a4 as addToSpacedRep, f as updatePoints, a5 as markQuizPlayedToday, J as updateDailyGoals, a6 as updateStreak, a7 as saveTopicStats, a8 as saveQuizResult, a9 as setLastQuizScore, aa as syncToBackend } from "./index-CVbKHV8b.js";
const questionsOkulOncesi = [
  {
    text: "Kaç tane parmağın var? (iki elin toplam)",
    choices: ["5", "10", "15", "20"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Gökyüzü hangi renktir?",
    choices: ["Kırmızı", "Mavi", "Yeşil", "Sarı"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Kedi ne der?",
    choices: ["Hav hav", "Miyav", "Möö", "Çık çık"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "2 + 2 kaçtır?",
    choices: ["3", "4", "5", "6"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Elma hangi renktir?",
    choices: ["Mavi", "Sarı", "Kırmızı", "Mor"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Güneş hangi yönden doğar?",
    choices: ["Batı", "Kuzey", "Doğu", "Güney"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi hayvan havada uçar?",
    choices: ["Köpek", "Kedi", "Kuş", "Balık"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "3 + 1 kaçtır?",
    choices: ["3", "4", "5", "6"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Kar hangi renktir?",
    choices: ["Beyaz", "Siyah", "Kırmızı", "Mavi"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Hangi meyve sarı renktedir?",
    choices: ["Domates", "Muz", "Üzüm", "Çilek"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Köpek ne der?",
    choices: ["Miyav", "Möö", "Hav hav", "Çık çık"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "1 + 1 kaçtır?",
    choices: ["1", "2", "3", "4"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi renk trafikte dur anlamına gelir?",
    choices: ["Yeşil", "Sarı", "Mavi", "Kırmızı"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Kelebeğin kaç kanadı var?",
    choices: ["2", "4", "6", "8"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Ay hangi gökte görülür?",
    choices: ["Gündüz", "Gece", "Sabah", "Öğle"],
    correctIndex: 1,
    type: "multiple"
  },
  // Ek sorular (30 yeni)
  {
    text: "Hangi hayvan 'miyav' der?",
    choices: ["Köpek", "Kedi", "İnek", "At"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Bir üçgenin kaç kenarı var?",
    choices: ["2", "3", "4", "5"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi renk gökyüzünün rengidir?",
    choices: ["Kırmızı", "Mavi", "Yeşil", "Sarı"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "4 - 2 kaçtır?",
    choices: ["1", "2", "3", "4"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi hayvan en büyüktür?",
    choices: ["Kedi", "Köpek", "Fil", "Tavuk"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Portakal hangi renktir?",
    choices: ["Kırmızı", "Mavi", "Turuncu", "Sarı"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "1 + 3 kaçtır?",
    choices: ["3", "4", "5", "6"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi meyve kırmızıdır?",
    choices: ["Muz", "Çilek", "Üzüm", "Kavun"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Kaç tane gözün var?",
    choices: ["1", "2", "3", "4"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Yaz mevsiminde hava nasıldır?",
    choices: ["Sıcak", "Soğuk", "Yağmurlu", "Karlı"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Hangi hayvan suda yaşar?",
    choices: ["Kedi", "Köpek", "Balık", "Tavuk"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "3 - 1 kaçtır?",
    choices: ["1", "2", "3", "4"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi hayvanın uzun boynu vardır?",
    choices: ["Kedi", "Köpek", "Zürafa", "At"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "5 + 1 kaçtır?",
    choices: ["5", "6", "7", "8"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi mevsimde çiçekler açar?",
    choices: ["İlkbahar", "Yaz", "Sonbahar", "Kış"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Bir dairenin kaç köşesi var?",
    choices: ["0", "2", "4", "6"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "2 + 3 kaçtır?",
    choices: ["4", "5", "6", "7"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi yiyecek beyazdır?",
    choices: ["Çilek", "Süt", "Elma", "Muz"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "4 + 4 kaçtır?",
    choices: ["6", "8", "10", "12"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi mevsimde kar yağar?",
    choices: ["İlkbahar", "Yaz", "Sonbahar", "Kış"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Gökkuşağında kaç renk var?",
    choices: ["5", "6", "7", "8"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "3 + 3 kaçtır?",
    choices: ["5", "6", "7", "8"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi renk çimen rengidir?",
    choices: ["Sarı", "Yeşil", "Mavi", "Kırmızı"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi hayvan 'vak vak' der?",
    choices: ["Tavuk", "Ördek", "İnek", "At"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "5 - 3 kaçtır?",
    choices: ["1", "2", "3", "4"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi renk kan rengidir?",
    choices: ["Kırmızı", "Mavi", "Sarı", "Yeşil"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Kelebek hangi evreden çıkar?",
    choices: ["Yumurta", "Tırtıl", "Koza", "Hepsi"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Hangi meyve üzümden yapılır?",
    choices: ["Elma suyu", "Şarap", "Pekmez", "Limonata"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangisi bir sebzedir?",
    choices: ["Muz", "Portakal", "Havuç", "Elma"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Kış mevsiminde ne yağar?",
    choices: ["Yağmur", "Dolu", "Kar", "Hepsi olabilir"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Baş üstünde ne taşırız?",
    choices: ["Ayakkabı", "Çanta", "Şapka", "Ceket"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi hayvan en yavaş yürür?",
    choices: ["Tavşan", "Kaplumbağa", "Köpek", "Kedi"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türk bayrağı hangi renklerdedir?",
    choices: ["Mavi-Beyaz", "Sarı-Siyah", "Kırmızı-Beyaz", "Yeşil-Kırmızı"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Gökkuşağı kaç renktir?",
    choices: ["5", "6", "7", "8"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangisi sürüngen değildir?",
    choices: ["Timsah", "Yılan", "Kertenkele", "Kaplumbağa"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "3 + 4 kaçtır?",
    choices: ["6", "7", "8", "9"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi hayvan ağaçta yaşar?",
    choices: ["Balık", "Tavuk", "Maymun", "İnek"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Güneş hangi yönden doğar?",
    choices: ["Batı", "Kuzey", "Güney", "Doğu"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Hangisi tatlıdır?",
    choices: ["Limon", "Tuz", "Bal", "Biber"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hava durumu yağmurlu iken ne giyeriz?",
    choices: ["Şapka", "Yağmurluk", "Şort", "Sandalet"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Kaç mevsim vardır?",
    choices: ["3", "4", "5", "6"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi araç havada uçar?",
    choices: ["Gemi", "Araba", "Uçak", "Tren"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Bir ayda kaç gün vardır?",
    choices: ["28-31", "20-25", "10-15", "30-35"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Hangisi sıcak bir ülkededir?",
    choices: ["Rusya", "Kanada", "Mısır", "İzlanda"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Kuşlar hangi organlarıyla uçar?",
    choices: ["Ayakları", "Kanatları", "Gözleri", "Gagaları"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi renk karışımı yeşil yapar?",
    choices: ["Kırmızı+Mavi", "Sarı+Mavi", "Sarı+Kırmızı", "Mavi+Beyaz"],
    correctIndex: 1,
    type: "multiple"
  },
  // Tur 9 ek sorular
  {
    text: "Güneş sabah hangi yönden doğar?",
    choices: ["Batı", "Kuzey", "Doğu", "Güney"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi hayvan 'miyav' sesi çıkarır?",
    choices: ["Köpek", "Kedi", "İnek", "At"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Kaç parmağımız var (her iki elimizde)?",
    choices: ["8", "9", "10", "12"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Yağmur neden yağar?",
    choices: [
      "Güneş yakar",
      "Bulutlar ağırdır",
      "Rüzgar taşır",
      "Toprak ister"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi renk gökyüzünün rengidir?",
    choices: ["Yeşil", "Sarı", "Mavi", "Kırmızı"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Ağaçların yaprakları sonbaharda ne olur?",
    choices: ["Büyür", "Yeşilleşir", "Dökülür", "Çiçeklenir"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Üçgenin kaç köşesi vardır?",
    choices: ["2", "3", "4", "5"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi hayvan uçar?",
    choices: ["Balık", "Kurbağa", "Kuş", "Kedi"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Çilek hangi renktir?",
    choices: ["Sarı", "Mavi", "Kırmızı", "Mor"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Bir haftada kaç gün vardır?",
    choices: ["5", "6", "7", "8"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi mevsimde kar yağar?",
    choices: ["İlkbahar", "Yaz", "Sonbahar", "Kış"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Balıklar nerede yaşar?",
    choices: ["Ormanda", "Suda", "Çölde", "Dağda"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Elma hangi renkte olabilir?",
    choices: ["Mavi", "Kırmızı", "Siyah", "Turuncu"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Bir günde kaç saat vardır?",
    choices: ["12", "20", "24", "30"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi hayvan 'hav hav' sesi çıkarır?",
    choices: ["Kedi", "Köpek", "İnek", "Koyun"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Karın rengi nedir?",
    choices: ["Siyah", "Sarı", "Beyaz", "Mavi"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Çiçekler ne ile büyür?",
    choices: ["Sütle", "Suyla", "Meyvesiyle", "Etle"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Kurbağa nerede yaşar?",
    choices: ["Çölde", "Dağda", "Hem suda hem karada", "Yalnız ormanda"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "En büyük tek basamaklı rakam hangisidir?",
    choices: ["5", "7", "9", "6"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Daire hangi şekildir?",
    choices: ["Köşeli", "Yuvarlak", "Üçgen", "Kare"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi sebze turuncu renktedir?",
    choices: ["Salatalık", "Havuç", "Marul", "Patlıcan"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Ayın ışığı nereden gelir?",
    choices: [
      "Kendi parlar",
      "Güneşten yansır",
      "Yıldızlardan gelir",
      "Dünyadan gelir"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Baykuş gündüz mü gece mi aktif olur?",
    choices: ["Gündüz", "Gece", "Her ikisi", "Hiç değil"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi hayvan çok yavaş hareket eder?",
    choices: ["Tavşan", "Kaplumbağa", "At", "Kartal"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Gökkuşağında kaç renk vardır?",
    choices: ["5", "6", "7", "8"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Kaç parmağın var?",
    choices: ["8", "9", "10", "11"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangisi bir hayvan değildir?",
    choices: ["Kedi", "Köpek", "Elma", "Kuş"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Güneş neyi verir?",
    choices: ["Yağmur", "Kar", "Işık ve ısı", "Rüzgar"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi renk gökyüzünün rengidir?",
    choices: ["Kırmızı", "Sarı", "Yeşil", "Mavi"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Ağaç neyi üretir?",
    choices: ["Taş", "Meyve", "Cam", "Metal"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Kaç mevsim vardır?",
    choices: ["2", "3", "4", "5"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Yağmur hangi mevsimde çok yağar?",
    choices: ["Yaz", "İlkbahar", "Kış", "Sonbahar"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi hayvan miyav der?",
    choices: ["Köpek", "İnek", "Kedi", "At"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Elma hangi renk olabilir?",
    choices: ["Mavi", "Kırmızı", "Siyah", "Mor"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Kitap ne işe yarar?",
    choices: [
      "Yemek pişirir",
      "Okumak için kullanılır",
      "Su içmek için",
      "Uyumak için"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi hayvan yumurta yumurtlar?",
    choices: ["Kedi", "Köpek", "Tavuk", "At"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "1+1 kaç eder?",
    choices: ["1", "2", "3", "4"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi araç havada uçar?",
    choices: ["Araba", "Tekne", "Uçak", "Bisiklet"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Çiçek nerede büyür?",
    choices: ["Denizde", "Gökyüzünde", "Toprakta", "Buzda"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi hayvan uzun boynu ile tanınır?",
    choices: ["Fil", "Zürafa", "Aslan", "Maymun"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Ay ne zaman görünür?",
    choices: ["Gündüz", "Akşam ve gece", "Sabah erken", "Öğle"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi meyve sarı renktedir?",
    choices: ["Elma", "Kiraz", "Muz", "Çilek"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Balık nerede yaşar?",
    choices: ["Ağaçta", "Suda", "Toprakta", "Gökyüzünde"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "3-1 kaç eder?",
    choices: ["1", "2", "3", "4"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi şekil yuvarlaktır?",
    choices: ["Kare", "Üçgen", "Daire", "Dikdörtgen"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Gökyüzü hangi renktir?",
    choices: ["Yeşil", "Mavi", "Kırmızı", "Sarı"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Elma hangi renktir?",
    choices: ["Mavi", "Sarı", "Kırmızı", "Mor"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Kaç parmağın var?",
    choices: ["8", "9", "10", "11"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi hayvan havlar?",
    choices: ["Kedi", "Köpek", "İnek", "At"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Kar hangi mevsimde yağar?",
    choices: ["Yaz", "Sonbahar", "Kış", "İlkbahar"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Üçgenin kaç köşesi vardır?",
    choices: ["2", "3", "4", "5"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi hayvan 'miyav' der?",
    choices: ["Köpek", "İnek", "Kedi", "Kuş"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "2 + 3 kaç eder?",
    choices: ["4", "5", "6", "7"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi meyve sarı ve uzundur?",
    choices: ["Elma", "Muz", "Çilek", "Kiraz"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Güneş nerede doğar?",
    choices: ["Batıda", "Güneyde", "Kuzeyde", "Doğuda"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Hangi renk tehlike işaretidir?",
    choices: ["Mavi", "Yeşil", "Kırmızı", "Sarı"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Bir haftada kaç gün vardır?",
    choices: ["5", "6", "7", "8"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi hayvan yumurta yumurtlar?",
    choices: ["İnek", "At", "Tavuk", "Kedi"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Çilek hangi renktir?",
    choices: ["Sarı", "Yeşil", "Mavi", "Kırmızı"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "5 - 2 kaç eder?",
    choices: ["1", "2", "3", "4"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi mevsimde çiçekler açar?",
    choices: ["Kış", "Sonbahar", "İlkbahar", "Yaz"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Kare kaç kenara sahiptir?",
    choices: ["3", "4", "5", "6"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi hayvan denizde yaşar?",
    choices: ["Aslan", "Balık", "Tavşan", "Keçi"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Sabahleyin ne yeniyor?",
    choices: ["Akşam yemeği", "Öğle yemeği", "Kahvaltı", "İkindi"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "4 + 1 kaç eder?",
    choices: ["4", "5", "6", "3"],
    correctIndex: 1,
    type: "multiple"
  }
];
const questionsIlkokul = [
  {
    text: "Türkiye'nin başkenti neresidir?",
    choices: ["İstanbul", "Ankara", "İzmir", "Bursa"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "5 × 6 kaçtır?",
    choices: ["25", "30", "35", "40"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Su'nun kimyasal formülü nedir?",
    choices: ["CO2", "H2O", "O2", "NaCl"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türk alfabesinde kaç harf vardır?",
    choices: ["26", "29", "31", "33"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Bir yılda kaç ay vardır?",
    choices: ["10", "11", "12", "13"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "100 - 37 kaçtır?",
    choices: ["63", "67", "73", "57"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Hangi hayvan kış uykusuna yatar?",
    choices: ["Kuş", "Balık", "Ayı", "At"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Güneş sistemimizdeki en büyük gezegen hangisidir?",
    choices: ["Satürn", "Jüpiter", "Mars", "Neptün"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "3 × 8 kaçtır?",
    choices: ["21", "24", "27", "30"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi mevsimde yapraklar dökülür?",
    choices: ["İlkbahar", "Yaz", "Sonbahar", "Kış"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Osmanlı İmparatorluğu'nun kurucusu kimdir?",
    choices: ["Orhan Gazi", "Osman Gazi", "Fatih Sultan Mehmet", "Yavuz Selim"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Bir hafta kaç gündür?",
    choices: ["5", "6", "7", "8"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "45 + 38 kaçtır?",
    choices: ["73", "83", "93", "63"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Atatürk hangi yıl doğdu?",
    choices: ["1878", "1881", "1885", "1890"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi organ kanı pompalar?",
    choices: ["Beyin", "Karaciğer", "Böbrek", "Kalp"],
    correctIndex: 3,
    type: "multiple"
  },
  // Ek sorular (30 yeni)
  {
    text: "Türkiye'nin bayrağındaki semboller nelerdir?",
    choices: ["Kartal", "Ay ve yıldız", "Güneş", "Hilal"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "6 × 7 kaçtır?",
    choices: ["36", "42", "48", "54"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangisi bir gezegen değildir?",
    choices: ["Güneş", "Mars", "Venüs", "Satürn"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Türkçede kaç sesli harf var?",
    choices: ["6", "8", "10", "12"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "250 + 150 kaçtır?",
    choices: ["350", "400", "450", "500"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi organ nefes alır?",
    choices: ["Kalp", "Karaciğer", "Akciğer", "Böbrek"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Türkiye hangi kıtadadır?",
    choices: ["Sadece Avrupa", "Asya ve Avrupa", "Sadece Asya", "Afrika"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "9 × 9 kaçtır?",
    choices: ["72", "81", "90", "99"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi hayvan en hızlı koşar?",
    choices: ["At", "Aslan", "Çita", "Kurt"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "200 ÷ 4 kaçtır?",
    choices: ["40", "50", "60", "70"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi bitki güneşe yönelik döner?",
    choices: ["Ayçiçeği", "Gül", "Lale", "Papatya"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Cumhuriyet Bayramı hangi gün kutlanır?",
    choices: ["23 Nisan", "19 Mayıs", "29 Ekim", "30 Ağustos"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "7 × 8 kaçtır?",
    choices: ["48", "56", "64", "72"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi hayvan yumurtadan çıkar?",
    choices: ["Köpek", "Kedi", "Kaplumbağa", "At"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Dünya'nın şekli nedir?",
    choices: ["Düzlemsel", "Küre", "Kare", "Silindir"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "150 - 75 kaçtır?",
    choices: ["50", "75", "100", "125"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türk Kurtuluş Savaşı hangi yılda kazanıldı?",
    choices: ["1919", "1920", "1922", "1923"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "4 × 12 kaçtır?",
    choices: ["36", "48", "52", "60"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi mevsimde gündüzler en uzundur?",
    choices: ["İlkbahar", "Yaz", "Sonbahar", "Kış"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "72 ÷ 8 kaçtır?",
    choices: ["8", "9", "10", "11"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi ülke Türkiye'nin komşusudur?",
    choices: ["Yunanistan", "İspanya", "Fransa", "İtalya"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "5 × 11 kaçtır?",
    choices: ["44", "55", "60", "66"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangisi bir katı cisimdir?",
    choices: ["Buz", "Su", "Buhar", "Hava"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "İstanbul'da hangi ünlü köprü var?",
    choices: [
      "Boğaziçi Köprüsü",
      "Eiffel Kulesi",
      "Tower Bridge",
      "Brooklyn Köprüsü"
    ],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "64 ÷ 8 kaçtır?",
    choices: ["6", "8", "10", "12"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Atatürk ne zaman vefat etti?",
    choices: ["1923", "1930", "1938", "1945"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi organ düşünmemizi sağlar?",
    choices: ["Beyin", "Kalp", "Karaciğer", "Akciğer"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Türkiye hangi kıtadadır?",
    choices: ["Avrupa", "Asya", "Her ikisi", "Afrika"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Bir dakika kaç saniyedir?",
    choices: ["30", "60", "100", "120"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Cumhuriyet ne zaman ilan edildi?",
    choices: ["1919", "1920", "1923", "1925"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "İnsanın kaç dişi vardır (yetişkin)?",
    choices: ["28", "30", "32", "34"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi organ kanı pompalar?",
    choices: ["Akciğer", "Karaciğer", "Kalp", "Böbrek"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Güneş sistemi kaç gezegenden oluşur?",
    choices: ["7", "8", "9", "10"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "6 × 9 kaçtır?",
    choices: ["48", "54", "56", "63"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Su hangi maddelerden oluşur?",
    choices: [
      "Karbon ve Oksijen",
      "Hidrojen ve Oksijen",
      "Azot ve Hidrojen",
      "Oksijen ve Demir"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türkiye'nin en büyük gölü hangisidir?",
    choices: ["Burdur Gölü", "Eğirdir Gölü", "Van Gölü", "Tuz Gölü"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "96 ÷ 8 kaçtır?",
    choices: ["10", "11", "12", "13"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Işık en hızlı nerede yayılır?",
    choices: ["Suda", "Havada", "Boşlukta", "Camda"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Fotosentez için hangi gaz gerekir?",
    choices: ["Oksijen", "Karbondioksit", "Hidrojen", "Azot"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türk alfabesinde kaç harf vardır?",
    choices: ["26", "27", "28", "29"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Bir yılda kaç hafta vardır?",
    choices: ["48", "50", "52", "54"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Dünya'nın en büyük okyanusu hangisidir?",
    choices: ["Atlantik", "Hint", "Arktik", "Pasifik"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Hangi organ ses çıkarmamıza yardım eder?",
    choices: ["Akciğer", "Gırtlak", "Burun", "Dil"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "135 + 265 kaçtır?",
    choices: ["380", "390", "400", "410"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Isı biriminin adı nedir?",
    choices: ["Newton", "Joule", "Kelvin", "Watt"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi renk tüm ışığı yansıtır?",
    choices: ["Siyah", "Gri", "Kırmızı", "Beyaz"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "İnsanda kaç tane organ sistemi vardır?",
    choices: ["8", "10", "11", "13"],
    correctIndex: 2,
    type: "multiple"
  },
  // Tur 9 ek sorular
  {
    text: "Türkiye'nin başkenti neresidir?",
    choices: ["İstanbul", "İzmir", "Ankara", "Bursa"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Su kaç derecede kaynar?",
    choices: ["50°C", "75°C", "100°C", "120°C"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Fotosentez yapan kısım hangisidir?",
    choices: ["Kök", "Gövde", "Yaprak", "Çiçek"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "12 x 12 kaç eder?",
    choices: ["124", "134", "144", "154"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "İstanbul Boğazı hangi iki denizi birleştirir?",
    choices: [
      "Karadeniz-Akdeniz",
      "Karadeniz-Marmara",
      "Ege-Marmara",
      "Akdeniz-Ege"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi organ kanı pompalar?",
    choices: ["Beyin", "Mide", "Kalp", "Karaciğer"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Çanakkale Savaşı hangi yılda oldu?",
    choices: ["1912", "1915", "1918", "1920"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türkiye'nin en uzun nehri hangisidir?",
    choices: ["Dicle", "Fırat", "Kızılırmak", "Sakarya"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Bir dikdörtgenin karşılıklı kenarları nasıldır?",
    choices: ["Eşitsiz", "Eşit ve paralel", "Paralel değil", "Dik değil"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi gezegen Güneş'e en yakındır?",
    choices: ["Venüs", "Mars", "Merkür", "Dünya"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi madde ısıyı iyi iletir?",
    choices: ["Tahta", "Plastik", "Metal", "Lastik"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Milli Mücadele'nin başladığı yer neresidir?",
    choices: ["İstanbul", "Ankara", "Samsun", "İzmir"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Havada en çok bulunan gaz hangisidir?",
    choices: ["Oksijen", "Karbondioksit", "Azot", "Hidrojen"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "10'dan küçük kaç asal sayı vardır?",
    choices: ["3", "4", "5", "6"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türkiye kaç denizle çevrilidir?",
    choices: ["1", "2", "3", "4"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi organ sindirim sistemine dahil değildir?",
    choices: ["Mide", "Bağırsak", "Kalp", "Karaciğer"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Cumhuriyet hangi tarihte ilan edildi?",
    choices: [
      "30 Ağustos 1922",
      "29 Ekim 1923",
      "19 Mayıs 1919",
      "10 Kasım 1938"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Isı ölçmek için hangi araç kullanılır?",
    choices: ["Barometre", "Termometre", "Voltmetre", "Amperölçer"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Bir çemberin çevresi nasıl hesaplanır?",
    choices: ["r²", "2πr", "πr²", "4r"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türkiye'nin en yüksek dağı hangisidir?",
    choices: ["Palandöken", "Uludağ", "Ağrı Dağı", "Kaçkarlar"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi vitamin güneş ışığından elde edilir?",
    choices: ["A vitamini", "B vitamini", "C vitamini", "D vitamini"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Osmanlı İmparatorluğu'nun kurucusu kimdir?",
    choices: [
      "Fatih Sultan Mehmet",
      "Osman Bey",
      "Yavuz Sultan Selim",
      "Kanuni Sultan Süleyman"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Yüzde 50, kesir olarak nasıl yazılır?",
    choices: ["1/4", "1/3", "1/2", "2/3"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi duyu organı sesi alır?",
    choices: ["Göz", "Burun", "Kulak", "Dil"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Marmara Denizi hangi şehire yakındır?",
    choices: ["Ankara", "İzmir", "İstanbul", "Antalya"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Türkiye'nin başkenti neresidir?",
    choices: ["İstanbul", "İzmir", "Ankara", "Bursa"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "En büyük okyanus hangisidir?",
    choices: ["Atlantik", "Hint", "Arktik", "Pasifik"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Güneş sistemi kaç gezegen içerir?",
    choices: ["7", "8", "9", "10"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "1 dakika kaç saniyedir?",
    choices: ["30", "45", "60", "100"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "İnsan vücudunda kaç kemik vardır?",
    choices: ["106", "206", "306", "406"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi vitamin güneş ışığından elde edilir?",
    choices: ["A vitamini", "B vitamini", "C vitamini", "D vitamini"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Su hangi molekülden oluşur?",
    choices: ["HO", "H2O", "H3O", "CO2"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türkiye kaç ilde bulunur?",
    choices: ["71", "79", "81", "83"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi gezegen güneşe en yakındır?",
    choices: ["Venüs", "Dünya", "Mars", "Merkür"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "1 yıl kaç gündür?",
    choices: ["300", "350", "365", "400"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Atatürk hangi yıl doğdu?",
    choices: ["1878", "1881", "1885", "1890"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi hayvan en hızlı koşar?",
    choices: ["Aslan", "Çita", "At", "Köpek"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Fotosentez nedir?",
    choices: [
      "Hayvanların nefes alması",
      "Bitkilerin güneşten besin üretmesi",
      "Suyun buharlaşması",
      "Taşların erimesi"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türkçede kaç sesli harf vardır?",
    choices: ["6", "7", "8", "9"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi organ kanı pompalar?",
    choices: ["Beyin", "Akciğer", "Böbrek", "Kalp"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "2x5 kaç eder?",
    choices: ["7", "8", "9", "10"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Türkiye hangi kıtadadır?",
    choices: ["Afrika", "Asya ve Avrupa", "Amerika", "Okyanusya"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi renk tehlike işareti olarak kullanılır?",
    choices: ["Mavi", "Yeşil", "Kırmızı", "Sarı"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Karlar neden beyazdır?",
    choices: [
      "Boya içerir",
      "Tüm ışığı yansıtır",
      "Buz kristallerinden oluşur",
      "Hava nedeniyle"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Güneş bir yıldız mıdır?",
    choices: ["Evet", "Hayır", "Bilinmiyor", "Bazen"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Işık hızı saniyede kaç km'dir?",
    choices: ["100.000 km", "200.000 km", "300.000 km", "400.000 km"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi organ kan pompalar?",
    choices: ["Ciğer", "Kalp", "Böbrek", "Mide"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "12 × 5 kaç eder?",
    choices: ["50", "55", "60", "65"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Türkiye hangi kıtadadır?",
    choices: ["Afrika", "Amerika", "Avustralya", "Asya-Avrupa"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Güneş sistemi kaç gezegenden oluşur?",
    choices: ["7", "8", "9", "10"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hava durumunu hangi alet ölçer?",
    choices: ["Termometre", "Barograf", "Barometre", "Higrometre"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Türkçe'de kaç sesli harf vardır?",
    choices: ["6", "7", "8", "9"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Bir yılda kaç ay vardır?",
    choices: ["10", "11", "12", "13"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi hayvan en büyük kara hayvanıdır?",
    choices: ["Aslan", "Fil", "Zürafa", "Su aygırı"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "24 ÷ 6 kaç eder?",
    choices: ["3", "4", "5", "6"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Güneş hangi yönde batar?",
    choices: ["Doğu", "Kuzey", "Batı", "Güney"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Türkiye'nin en uzun nehri hangisidir?",
    choices: ["Sakarya", "Kızılırmak", "Yeşilırmak", "Fırat"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Bitkiler fotosentez için ne kullanır?",
    choices: ["Oksijen", "Karbondioksit", "Azot", "Hidrojen"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Bir dikdörtgenin kaç köşesi vardır?",
    choices: ["3", "4", "5", "6"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi renk karışımı yeşil oluşturur?",
    choices: [
      "Kırmızı + Mavi",
      "Sarı + Mavi",
      "Kırmızı + Sarı",
      "Sarı + Siyah"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Kuşlar neden göç eder?",
    choices: [
      "Yiyecek aramak için",
      "Yıkanmak için",
      "Uyumak için",
      "Oynamak için"
    ],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "7 × 8 kaç eder?",
    choices: ["54", "56", "58", "60"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türkiye'de hava en sıcak hangi ilde olur?",
    choices: ["Ankara", "İstanbul", "Adana", "Erzurum"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi gezegen Güneş'e en yakındır?",
    choices: ["Venüs", "Merkür", "Mars", "Dünya"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "100 - 37 kaç eder?",
    choices: ["63", "53", "73", "43"],
    correctIndex: 0,
    type: "multiple"
  }
];
const questionsOrtaokul = [
  {
    text: "Türkiye kaç ile ayrılmıştır?",
    choices: ["72", "81", "75", "90"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Pi sayısının yaklaşık değeri nedir?",
    choices: ["3.12", "3.14", "3.16", "3.18"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Işığın boşluktaki hızı yaklaşık kaçtır?",
    choices: ["200.000 km/s", "300.000 km/s", "400.000 km/s", "500.000 km/s"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "DNA'nın açılımı nedir?",
    choices: [
      "Dezoksiribonükleik asit",
      "Ribonükleik asit",
      "Adenozin trifosfat",
      "Doymuş yağ asidi"
    ],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Osmanlı İmparatorluğu kaçıncı yüzyılda kuruldu?",
    choices: ["12. yüzyıl", "13. yüzyıl", "14. yüzyıl", "15. yüzyıl"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "(-3) × (-4) kaçtır?",
    choices: ["-12", "-7", "7", "12"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Fotosentez nerede gerçekleşir?",
    choices: ["Kök", "Gövde", "Kloroplast", "Mitokondri"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Türkiye'nin en uzun nehri hangisidir?",
    choices: ["Fırat", "Dicle", "Kızılırmak", "Sakarya"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "√144 kaçtır?",
    choices: ["10", "11", "12", "13"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Kimyada altının sembolü nedir?",
    choices: ["Al", "Au", "Ag", "At"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Newton'un birinci hareket yasası neyi ifade eder?",
    choices: ["F=ma", "Eylemsizlik", "Etki-tepki", "Yerçekimi"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "İstanbul hangi iki kıtayı birleştirir?",
    choices: ["Afrika-Avrupa", "Asya-Afrika", "Avrupa-Asya", "Amerika-Avrupa"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "2^10 kaçtır?",
    choices: ["512", "1024", "2048", "256"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Güneş sisteminde kaç gezegen vardır?",
    choices: ["7", "8", "9", "10"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Cumhuriyet hangi yıl ilan edildi?",
    choices: ["1920", "1922", "1923", "1924"],
    correctIndex: 2,
    type: "multiple"
  },
  // Ek sorular (30 yeni)
  {
    text: "Hangi element periyodik tabloda Au sembolü ile gösterilir?",
    choices: ["Altın", "Gümüş", "Alüminyum", "Bakır"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Bir dikdörtgenin alanı nasıl hesaplanır?",
    choices: [
      "Uzunluk × Genişlik",
      "Kenar × 4",
      "Taban × Yükseklik ÷ 2",
      "Çap × Pi"
    ],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Hangi organ insülin üretir?",
    choices: ["Karaciğer", "Böbrek", "Pankreas", "Mide"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "3² + 4² kaçtır?",
    choices: ["14", "20", "25", "49"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi ülke dünyanın en büyük yüzölçümüne sahiptir?",
    choices: ["Rusya", "Kanada", "ABD", "Çin"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Havanın en çok hangi gazdan oluşur?",
    choices: ["Azot", "Oksijen", "Karbondioksit", "Argon"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "x + 7 = 15 ise x kaçtır?",
    choices: ["7", "8", "9", "10"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi bilim insanı yerçekimini keşfetti?",
    choices: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla"
    ],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Bir küpün kaç yüzü vardır?",
    choices: ["4", "6", "8", "12"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türkiye'nin en yüksek dağı hangisidir?",
    choices: ["Ağrı Dağı", "Erciyes", "Kaçkar", "Uludağ"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "(2 + 3) × 4 kaçtır?",
    choices: ["14", "20", "24", "28"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi vitamin güneş ışığıyla elde edilir?",
    choices: ["A Vitamini", "C Vitamini", "D Vitamini", "B12 Vitamini"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Osmanlı İmparatorluğu yaklaşık kaç yıl sürdü?",
    choices: ["300 yıl", "600 yıl", "900 yıl", "1200 yıl"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Bir üçgenin iç açıları toplamı kaç derecedir?",
    choices: ["90", "180", "270", "360"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi element en hafif elementtir?",
    choices: ["Hidrojen", "Helyum", "Lityum", "Karbon"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "5² - 3² kaçtır?",
    choices: ["4", "16", "25", "34"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Doğal seçilim teorisini kim ortaya koydu?",
    choices: [
      "Charles Darwin",
      "Gregor Mendel",
      "Louis Pasteur",
      "Isaac Newton"
    ],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "2³ × 2² kaçtır?",
    choices: ["16", "32", "64", "128"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi organel hücrenin enerji merkezi olarak bilinir?",
    choices: ["Mitokondri", "Ribozom", "Kloroplast", "Çekirdek"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Bir çemberin çevresi nasıl hesaplanır?",
    choices: ["2πr", "πr²", "4πr", "πr"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Birinci Dünya Savaşı hangi yılda başladı?",
    choices: ["1912", "1914", "1916", "1918"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "√169 kaçtır?",
    choices: ["12", "13", "14", "15"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türkiye kaç denizle çevrilidir?",
    choices: ["2 deniz", "3 deniz", "5 deniz", "4 deniz"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "-5 + 8 kaçtır?",
    choices: ["-3", "3", "13", "-13"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi madde en iyi ısı iletkenine sahiptir?",
    choices: ["Ahşap", "Cam", "Bakır", "Plastik"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Bir dikdörtgenin çevresi nasıl hesaplanır?",
    choices: [
      "2(uzunluk + genişlik)",
      "uzunluk × genişlik",
      "4 × kenar",
      "uzunluk + genişlik"
    ],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Güneş sistemi hangi galakside bulunur?",
    choices: ["Samanyolu", "Andromeda", "Whirlpool", "Triangulum"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "3x = 21 ise x kaçtır?",
    choices: ["6", "7", "8", "9"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Atom hangi parçacıklardan oluşur?",
    choices: [
      "Proton, nötron, elektron",
      "Proton, foton, nötron",
      "Elektron, foton, kuark",
      "Nötron, meson, proton"
    ],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Osmanlı Devleti hangi yıl kuruldu?",
    choices: ["1071", "1299", "1453", "1517"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hücre zarı hangi maddeden oluşur?",
    choices: [
      "Protein",
      "Fosfolipit çift katmanlı yapı",
      "Nükleik asit",
      "Polisakkarit"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Elektrik yükünün birimi nedir?",
    choices: ["Watt", "Volt", "Amper", "Coulomb"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "İstanbul'un fethinde hangi silah kullanıldı?",
    choices: ["Tüfek", "Kılıç", "Toplar", "Ok-yay"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "DNA neden önemlidir?",
    choices: [
      "Enerji üretir",
      "Genetik bilgiyi taşır",
      "Oksijen üretir",
      "Besin depolar"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Sürtünme kuvvetinin birimi nedir?",
    choices: ["Joule", "Watt", "Newton", "Pascal"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi gaz en fazla sera etkisi yapar?",
    choices: ["Oksijen", "Azot", "Karbondioksit", "Hidrojen"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Karekök 144 kaçtır?",
    choices: ["11", "12", "13", "14"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Mendel'in deneyleri neyle yapılmıştır?",
    choices: ["Fare", "Sinek", "Bezelye", "Maya"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Fotosentezde açığa çıkan gaz hangisidir?",
    choices: ["Karbondioksit", "Hidrojen", "Oksijen", "Azot"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Türkiye'de kaç il vardır?",
    choices: ["79", "80", "81", "82"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi kuvvet gezegenleri yörüngede tutar?",
    choices: [
      "Elektrik kuvveti",
      "Manyetik kuvvet",
      "Nükleer kuvvet",
      "Gravitasyon"
    ],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "En basit asit-baz testi nedir?",
    choices: [
      "Alevle test",
      "Turnusol kağıdı",
      "Brom suyu",
      "Fehling çözeltisi"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Çözeltide asit özelliği gösteren pH değeri nedir?",
    choices: ["pH > 7", "pH = 7", "pH < 7", "pH = 14"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Bir üçgenin açıları 40°, 60° ise üçüncü açı kaçtır?",
    choices: ["70°", "80°", "90°", "100°"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Bitkiler gece ne yapar?",
    choices: ["Fotosentez yapar", "Solunum yapar", "Uyur", "Hiçbir şey yapmaz"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Kan gruplarını kim keşfetti?",
    choices: ["Fleming", "Pasteur", "Landsteiner", "Darwin"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "İlk Türk devleti hangisidir?",
    choices: ["Selçuklu", "Osmanlı", "Göktürk", "Uygur"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Bir kuvvet uygulandığında cismin ivmesi neyle doğru orantılıdır?",
    choices: ["Kütlesiyle", "Hızıyla", "Uygulanan kuvvetle", "Sürtünmeyle"],
    correctIndex: 2,
    type: "multiple"
  },
  // Tur 9 ek sorular
  {
    text: "Atom çekirdeğinde hangi parçacıklar bulunur?",
    choices: [
      "Elektron ve proton",
      "Proton ve nötron",
      "Elektron ve nötron",
      "Sadece elektron"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Osmanlı'nın son padişahı kimdir?",
    choices: ["Abdülaziz", "Abdülhamit II", "Vahdettin", "Abdülmecit"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Türk edebiyatında Tanzimat dönemi ne zaman başlar?",
    choices: ["1789", "1839", "1876", "1908"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Işığın boşluktaki hızı yaklaşık kaçtır?",
    choices: ["150.000 km/s", "200.000 km/s", "300.000 km/s", "400.000 km/s"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Pi sayısının yaklaşık değeri nedir?",
    choices: ["2.14", "3.14", "4.14", "5.14"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "DNA'nın tam açılımı nedir?",
    choices: [
      "Deoksiribonükleik Asit",
      "Diribonükleik Asit",
      "Deoksiriboz Nükleik Asit",
      "Dinamik Nükleik Asit"
    ],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Kurtuluş Savaşı'nda İzmir ne zaman kurtarıldı?",
    choices: [
      "9 Eylül 1921",
      "9 Eylül 1922",
      "26 Ağustos 1922",
      "1 Kasım 1922"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Namık Kemal hangi edebiyat dönemine aittir?",
    choices: ["Divan", "Tanzimat", "Milli", "Cumhuriyet"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Dünya'nın eksen eğikliği kaç derecedir?",
    choices: ["17.5°", "23.5°", "29.5°", "33.5°"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hücrenin enerji santrali hangi organel olarak bilinir?",
    choices: ["Ribozom", "Lizozom", "Mitokondri", "Kloroplast"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Bir sayının 10 tabanındaki logaritması 0 ise sayı kaçtır?",
    choices: ["0", "1", "10", "100"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Coğrafi keşiflerin başlamasını tetikleyen gelişme hangisidir?",
    choices: [
      "Rönesans",
      "Reform",
      "Matbaanın icadı",
      "Osmanlı'nın Konstantinopolis'i fethi"
    ],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Türkçede yüklem ve özne dışındaki temel öge nedir?",
    choices: ["Zarf tümleci", "Nesne", "Dolaylı tümleç", "Edat tümleci"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Avrupa'nın en uzun nehri hangisidir?",
    choices: ["Tuna", "Ren", "Volga", "Loire"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Elektrik akımının birimi nedir?",
    choices: ["Volt", "Watt", "Amper", "Ohm"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Klorofil hangi rengi yansıtır?",
    choices: ["Kırmızı", "Sarı", "Mavi", "Yeşil"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Birinci Dünya Savaşı hangi yılda başladı?",
    choices: ["1912", "1914", "1916", "1918"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türkiye Cumhuriyeti'nin kurucusu kimdir?",
    choices: [
      "İsmet İnönü",
      "Mustafa Kemal Atatürk",
      "Kazım Karabekir",
      "Ali Fuat Cebesoy"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Bir cismin ağırlığı en az hangi gezegende olur?",
    choices: ["Mars", "Venüs", "Merkür", "Jüpiter"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Türkçede küçük ünlü uyumu hangi sesleri düzenler?",
    choices: ["a/e uyumu", "i tipi ünlüler", "Damak sesleri", "Dudak sesleri"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Periyodik tabloda kaç element vardır?",
    choices: ["98", "108", "118", "128"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "İkinci Dünya Savaşı hangi yıl bitti?",
    choices: ["1943", "1944", "1945", "1946"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Sinir sistemi hücrelerine ne denir?",
    choices: ["Eritrosit", "Nöron", "Lökosit", "Trombosit"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Ahmet Hamdi Tanpınar hangi eseriyle tanınır?",
    choices: ["Çalıkuşu", "Huzur", "Yaban", "Sinekli Bakkal"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Düzgün altıgenin iç açılarının toplamı kaçtır?",
    choices: ["540°", "630°", "720°", "810°"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "DNA'nın açılımı nedir?",
    choices: [
      "Deoksiribonükleik asit",
      "Dinamik nükleer ajan",
      "Derin nöral algoritma",
      "Direkt nükleotid analizi"
    ],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Osmanlı İmparatorluğu kaçıncı yüzyılda kuruldu?",
    choices: ["11. yüzyıl", "12. yüzyıl", "13. yüzyıl", "14. yüzyıl"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Pi sayısı yaklaşık olarak kaçtır?",
    choices: ["2.14", "3.14", "4.14", "5.14"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Işığın hızı yaklaşık olarak nedir?",
    choices: ["100.000 km/s", "200.000 km/s", "300.000 km/s", "400.000 km/s"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi element periyodik tabloda Au sembolüyle gösterilir?",
    choices: ["Gümüş", "Altın", "Alüminyum", "Arsen"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türkiye Cumhuriyeti hangi yıl kuruldu?",
    choices: ["1919", "1921", "1923", "1925"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Mitoz bölünmede oluşan hücre sayısı kaçtır?",
    choices: ["1", "2", "4", "8"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi organ insülin üretir?",
    choices: ["Karaciğer", "Böbrek", "Pankreas", "Dalak"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Newton'un birinci yasası neyi anlatır?",
    choices: [
      "Enerji korunumu",
      "Eylemsizlik",
      "Hareket-kuvvet ilişkisi",
      "Yerçekimi"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Dünya'nın katmanları sıralaması dıştan içe nasıldır?",
    choices: [
      "Manto-Kabuk-Çekirdek",
      "Kabuk-Manto-Çekirdek",
      "Çekirdek-Kabuk-Manto",
      "Kabuk-Çekirdek-Manto"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi gaz sera etkisine en çok katkıda bulunur?",
    choices: ["Azot", "Oksijen", "Karbondioksit", "Hidrojen"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Fransız İhtilali kaç yılında gerçekleşti?",
    choices: ["1789", "1815", "1848", "1871"],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Hücrenin enerji üretim merkezi hangisidir?",
    choices: ["Ribozom", "Golgi Aygıtı", "Mitokondri", "Çekirdek"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Türkçede kaç harf vardır?",
    choices: ["26", "27", "29", "31"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Ay'ın kendi ışığı var mıdır?",
    choices: [
      "Evet, var",
      "Hayır, Güneş ışığını yansıtır",
      "Bazen var",
      "Çok az var"
    ],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Büyük Selçuklu Devleti'nin kurucusu kimdir?",
    choices: ["Alparslan", "Tuğrul Bey", "Melikşah", "Osman Gazi"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Asit yağmurlarının ana sebebi nedir?",
    choices: [
      "Ozon tabakası",
      "Sera gazları",
      "Sülfür dioksit emisyonu",
      "Orman yangınları"
    ],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Hangi matematik dalı şekil ve uzay inceler?",
    choices: ["Cebir", "Analiz", "Geometri", "İstatistik"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "İpek yolunun başlangıç noktası neresidir?",
    choices: ["İstanbul", "Çin", "Hindistan", "İran"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Fotosentez sonucunda hangi gaz üretilir?",
    choices: ["Karbondioksit", "Azot", "Oksijen", "Hidrojen"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "DNA'nın açılımı nedir?",
    choices: [
      "Dioksiribonükleik Asit",
      "Dinamik Nöron Ağı",
      "Dijital Nükleik Asit",
      "Dinamik Asit"
    ],
    correctIndex: 0,
    type: "multiple"
  },
  {
    text: "Osmanlı İmparatorluğu ne zaman kuruldu?",
    choices: ["1099", "1299", "1453", "1071"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türkiye Cumhuriyeti hangi yılda kuruldu?",
    choices: ["1919", "1920", "1922", "1923"],
    correctIndex: 3,
    type: "multiple"
  },
  {
    text: "Atom çekirdeğinde hangi parçacıklar bulunur?",
    choices: [
      "Elektron ve Proton",
      "Nötron ve Elektron",
      "Proton ve Nötron",
      "Kuark ve Elektron"
    ],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Dünyanın uydusu hangisidir?",
    choices: ["Fobos", "Ay", "Titan", "Deimos"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "İstanbul'un fethinde kullanılan top kimin döneminde yapıldı?",
    choices: [
      "II. Murat",
      "Yavuz Sultan Selim",
      "II. Mehmed",
      "Kanuni Sultan Süleyman"
    ],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Omurgalılar kaç sınıfa ayrılır?",
    choices: ["4", "5", "6", "7"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Işığın kırılması olayına ne denir?",
    choices: ["Yansıma", "Kırılma", "Soğurulma", "Polarizasyon"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türkiye'nin en yüksek dağı hangisidir?",
    choices: ["Erciyes", "Uludağ", "Ağrı", "Kaz"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Yunan mitolojisinde denizler tanrısı kimdir?",
    choices: ["Zeus", "Poseidon", "Hades", "Apollo"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Newton'un kaç hareket yasası vardır?",
    choices: ["2", "3", "4", "5"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Anadolu'nun en eski uygarlıklarından biri hangisidir?",
    choices: ["Sümerler", "Hititler", "Mısırlılar", "Romalılar"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi element periyodik tabloda Au sembolüyle gösterilir?",
    choices: ["Gümüş", "Bakır", "Altın", "Alüminyum"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "√144 kaçtır?",
    choices: ["11", "12", "13", "14"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Dünya'nın yarıçapı yaklaşık kaç km'dir?",
    choices: ["4.371 km", "5.371 km", "6.371 km", "7.371 km"],
    correctIndex: 2,
    type: "multiple"
  },
  {
    text: "Bir üçgenin iç açıları toplamı kaç derecedir?",
    choices: ["90", "180", "270", "360"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Divan edebiyatında en çok kullanılan nazım birimi hangisidir?",
    choices: ["Dörtlük", "Beyit", "Mısra", "Bent"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Türkiye'nin en büyük gölü hangisidir?",
    choices: ["Tuz Gölü", "Van Gölü", "Beyşehir Gölü", "Eğirdir Gölü"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "Hangi bilim insanı yerçekimi kuvvetini keşfetti?",
    choices: ["Einstein", "Newton", "Galileo", "Kepler"],
    correctIndex: 1,
    type: "multiple"
  },
  {
    text: "2^10 kaçtır?",
    choices: ["512", "1024", "2048", "256"],
    correctIndex: 1,
    type: "multiple"
  }
];
function getDailyQuestions(level) {
  const today = (/* @__PURE__ */ new Date()).toDateString();
  let pool;
  if (level === "okul_oncesi") pool = questionsOkulOncesi;
  else if (level === "ilkokul") pool = questionsIlkokul;
  else pool = questionsOrtaokul;
  let seed = today.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const shuffled = [...pool].sort(() => {
    seed = seed * 1664525 + 1013904223 & 4294967295;
    return seed & 1 ? 1 : -1;
  });
  return shuffled.slice(0, 10);
}
function getAdaptiveDailyQuestions(level, lastScorePct) {
  if (lastScorePct === null) return getDailyQuestions(level);
  if (lastScorePct >= 80) {
    const pool = getDailyQuestions(level);
    return pool.slice(Math.floor(pool.length / 2)).concat(pool.slice(0, Math.floor(pool.length / 2))).slice(0, 10);
  }
  if (lastScorePct <= 40) {
    return getDailyQuestions(level).slice(0, 10);
  }
  return getDailyQuestions(level);
}
const questionsEnPreschool = [
  {
    type: "multiple",
    text: "What color is the sun?",
    choices: ["Blue", "Yellow", "Red", "Green"],
    correctIndex: 1
  },
  {
    type: "multiple",
    text: "How many legs does a cat have?",
    choices: ["2", "4", "6", "8"],
    correctIndex: 1
  },
  {
    type: "multiple",
    text: "Which fruit is yellow and curved?",
    choices: ["Apple", "Orange", "Banana", "Grape"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "What do fish live in?",
    choices: ["Land", "Sky", "Water", "Trees"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "Which season has snow?",
    choices: ["Summer", "Spring", "Autumn", "Winter"],
    correctIndex: 3
  },
  {
    type: "multiple",
    text: "What sound does a dog make?",
    choices: ["Meow", "Moo", "Woof", "Oink"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "How many fingers are on one hand?",
    choices: ["3", "4", "5", "6"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "Which is a fruit?",
    choices: ["Carrot", "Potato", "Apple", "Broccoli"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "What shape is a ball?",
    choices: ["Square", "Triangle", "Round", "Rectangle"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "What do bees make?",
    choices: ["Milk", "Honey", "Butter", "Juice"],
    correctIndex: 1
  }
];
const questionsEnPrimary = [
  {
    type: "multiple",
    text: "What is 7 × 8?",
    choices: ["54", "56", "58", "60"],
    correctIndex: 1
  },
  {
    type: "multiple",
    text: "What is the capital of Turkey?",
    choices: ["Istanbul", "Izmir", "Ankara", "Bursa"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "Which gas do plants need for photosynthesis?",
    choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "How many continents are there on Earth?",
    choices: ["5", "6", "7", "8"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "What is the largest organ in the human body?",
    choices: ["Heart", "Brain", "Liver", "Skin"],
    correctIndex: 3
  },
  {
    type: "multiple",
    text: "How many days are in a week?",
    choices: ["5", "6", "7", "8"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "Which planet do we live on?",
    choices: ["Mars", "Venus", "Earth", "Jupiter"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "What is 100 ÷ 4?",
    choices: ["20", "25", "30", "35"],
    correctIndex: 1
  },
  {
    type: "multiple",
    text: "Which animal is the king of the jungle?",
    choices: ["Tiger", "Elephant", "Lion", "Bear"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "How many months are in a year?",
    choices: ["10", "11", "12", "13"],
    correctIndex: 2
  }
];
const questionsEnMiddle = [
  {
    type: "multiple",
    text: "What is the chemical symbol for water?",
    choices: ["CO2", "O2", "H2O", "NaCl"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "Who wrote Romeo and Juliet?",
    choices: ["Dickens", "Shakespeare", "Tolstoy", "Hugo"],
    correctIndex: 1
  },
  {
    type: "multiple",
    text: "What is the speed of light (approximately)?",
    choices: ["100,000 km/s", "300,000 km/s", "500,000 km/s", "700,000 km/s"],
    correctIndex: 1
  },
  {
    type: "multiple",
    text: "Which planet is closest to the Sun?",
    choices: ["Venus", "Earth", "Mercury", "Mars"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "What is the square root of 144?",
    choices: ["10", "11", "12", "13"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "What is the powerhouse of the cell?",
    choices: ["Nucleus", "Ribosome", "Mitochondria", "Vacuole"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "Which element has the symbol 'Fe'?",
    choices: ["Fluorine", "Iron", "Francium", "Fermium"],
    correctIndex: 1
  },
  {
    type: "multiple",
    text: "What is 15% of 200?",
    choices: ["20", "25", "30", "35"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "Who developed the theory of relativity?",
    choices: ["Newton", "Einstein", "Darwin", "Curie"],
    correctIndex: 1
  },
  {
    type: "multiple",
    text: "How many bones are in the adult human body?",
    choices: ["186", "196", "206", "216"],
    correctIndex: 2
  }
];
const questionsEsPreschool = [
  {
    type: "multiple",
    text: "¿De qué color es el sol?",
    choices: ["Azul", "Amarillo", "Rojo", "Verde"],
    correctIndex: 1
  },
  {
    type: "multiple",
    text: "¿Cuántas patas tiene un gato?",
    choices: ["2", "4", "6", "8"],
    correctIndex: 1
  },
  {
    type: "multiple",
    text: "¿Qué fruta es amarilla y curvada?",
    choices: ["Manzana", "Naranja", "Plátano", "Uva"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "¿Dónde viven los peces?",
    choices: ["Tierra", "Cielo", "Agua", "Árboles"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "¿En qué estación nieva?",
    choices: ["Verano", "Primavera", "Otoño", "Invierno"],
    correctIndex: 3
  },
  {
    type: "multiple",
    text: "¿Qué sonido hace un perro?",
    choices: ["Miau", "Muu", "Guau", "Oink"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "¿Cuántos dedos tiene una mano?",
    choices: ["3", "4", "5", "6"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "¿Cuál es una fruta?",
    choices: ["Zanahoria", "Patata", "Manzana", "Brócoli"],
    correctIndex: 2
  }
];
const questionsEsPrimary = [
  {
    type: "multiple",
    text: "¿Cuánto es 7 × 8?",
    choices: ["54", "56", "58", "60"],
    correctIndex: 1
  },
  {
    type: "multiple",
    text: "¿Cuál es la capital de España?",
    choices: ["Barcelona", "Sevilla", "Madrid", "Valencia"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "¿Qué gas necesitan las plantas para la fotosíntesis?",
    choices: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "¿Cuántos continentes hay en la Tierra?",
    choices: ["5", "6", "7", "8"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "¿Cuántos días tiene una semana?",
    choices: ["5", "6", "7", "8"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "¿En qué planeta vivimos?",
    choices: ["Marte", "Venus", "Tierra", "Júpiter"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "¿Cuánto es 100 ÷ 4?",
    choices: ["20", "25", "30", "35"],
    correctIndex: 1
  },
  {
    type: "multiple",
    text: "¿Cuántos meses tiene un año?",
    choices: ["10", "11", "12", "13"],
    correctIndex: 2
  }
];
const questionsEsMiddle = [
  {
    type: "multiple",
    text: "¿Cuál es el símbolo químico del agua?",
    choices: ["CO2", "O2", "H2O", "NaCl"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "¿Quién escribió Don Quijote?",
    choices: ["Lope de Vega", "Cervantes", "Calderón", "Quevedo"],
    correctIndex: 1
  },
  {
    type: "multiple",
    text: "¿Qué planeta está más cerca del Sol?",
    choices: ["Venus", "Tierra", "Mercurio", "Marte"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "¿Cuál es la raíz cuadrada de 144?",
    choices: ["10", "11", "12", "13"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "¿Cuál es la central energética de la célula?",
    choices: ["Núcleo", "Ribosoma", "Mitocondria", "Vacuola"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "¿Qué elemento tiene el símbolo 'Fe'?",
    choices: ["Flúor", "Hierro", "Francio", "Fermio"],
    correctIndex: 1
  },
  {
    type: "multiple",
    text: "¿Cuánto es el 15% de 200?",
    choices: ["20", "25", "30", "35"],
    correctIndex: 2
  },
  {
    type: "multiple",
    text: "¿Quién desarrolló la teoría de la relatividad?",
    choices: ["Newton", "Einstein", "Darwin", "Curie"],
    correctIndex: 1
  }
];
const TOPIC_CONFIG = [
  {
    id: "all",
    icon: "📋",
    label: "Tümü / All",
    keywords: [],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "science",
    icon: "🔬",
    label: "Fen / Science",
    keywords: [
      "fen",
      "bilim",
      "hayvan",
      "bitki",
      "canlı",
      "enerji",
      "madde",
      "atom",
      "hücre",
      "güneş",
      "gezegen"
    ],
    color: "from-green-500 to-teal-500"
  },
  {
    id: "history",
    icon: "🏛️",
    label: "Tarih / History",
    keywords: [
      "tarih",
      "atatürk",
      "osmanlı",
      "savaş",
      "padişah",
      "sultan",
      "cumhuriyet"
    ],
    color: "from-amber-500 to-orange-500"
  },
  {
    id: "geography",
    icon: "🌍",
    label: "Coğrafya / Geography",
    keywords: [
      "coğrafya",
      "ülke",
      "başkent",
      "kıta",
      "dağ",
      "nehir",
      "deniz",
      "okyanus",
      "şehir",
      "il"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "math",
    icon: "🔢",
    label: "Matematik / Math",
    keywords: [
      "sayı",
      "toplama",
      "çarpma",
      "bölme",
      "çıkarma",
      "matematik",
      "hesap",
      "oran"
    ],
    color: "from-rose-500 to-red-500"
  },
  {
    id: "general",
    icon: "💡",
    label: "Genel / General",
    keywords: [],
    color: "from-violet-500 to-indigo-500"
  }
];
function filterQuestionsByTopic(questions, topic) {
  if (topic === "all") return questions;
  const cfg = TOPIC_CONFIG.find((t) => t.id === topic);
  if (!cfg || cfg.keywords.length === 0) {
    const excludeKeywords = TOPIC_CONFIG.filter(
      (t) => t.keywords.length > 0
    ).flatMap((t) => t.keywords);
    const filtered2 = questions.filter((q) => {
      const lower = q.text.toLowerCase();
      return !excludeKeywords.some((kw) => lower.includes(kw));
    });
    return filtered2.length > 0 ? filtered2.slice(0, 10) : questions.slice(0, 10);
  }
  const filtered = questions.filter((q) => {
    const lower = q.text.toLowerCase();
    return cfg.keywords.some((kw) => lower.includes(kw));
  });
  if (filtered.length === 0) {
    return [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
  }
  return [...filtered].sort(() => Math.random() - 0.5).slice(0, 10);
}
function getLangLabel(lang, key) {
  if (lang === "es") {
    const map2 = {
      Choose_Quiz_Topic: "Elige el tema del quiz",
      Select_topic_or_daily: "Selecciona un tema o juega el quiz diario",
      Already_played: "✅ Ya jugaste hoy",
      Daily_quiz_info: "Quiz diario • 1 por día • gana racha",
      Topic_quiz_info: "Quiz temático • Ilimitado",
      Play_Again: "Jugar de nuevo",
      Review: "Repaso",
      questions_due_sub: "Aparecerán al inicio de tu próximo quiz"
    };
    if (key === "questions_due") return "";
    return map2[key] || key;
  }
  if (lang === "en") {
    const map2 = {
      Choose_Quiz_Topic: "Choose Quiz Topic",
      Select_topic_or_daily: "Select a topic or play the daily quiz",
      Already_played: "✅ Already played today",
      Daily_quiz_info: "Daily quiz • 1 per day • earns streak",
      Topic_quiz_info: "Topic quiz • Unlimited",
      Play_Again: "Play Again",
      Review: "Review"
    };
    return map2[key] || key;
  }
  const map = {
    Choose_Quiz_Topic: "Quiz Konusu Seç",
    Select_topic_or_daily: "Bir konu seç veya günlük quiz oyna",
    Already_played: "✅ Bugün oynadın",
    Daily_quiz_info: "Günlük quiz • Günde 1 kez • Seri kazanır",
    Topic_quiz_info: "Konu quizi • Sınırsız",
    Play_Again: "Tekrar Oyna",
    Review: "Tekrar"
  };
  return map[key] || key;
}
function QuizPage() {
  var _a, _b, _c;
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const { t, lang } = useLanguage();
  const [phase, setPhase] = reactExports.useState("topicSelect");
  const [selectedTopic, setSelectedTopic] = reactExports.useState("all");
  const [allQuestions] = reactExports.useState(() => {
    const level = (profile == null ? void 0 : profile.level) || "ilkokul";
    if (lang === "es") {
      if (level === "okul_oncesi") return questionsEsPreschool;
      if (level === "ortaokul") return questionsEsMiddle;
      return questionsEsPrimary;
    }
    if (lang === "en") {
      if (level === "okul_oncesi") return questionsEnPreschool;
      if (level === "ortaokul") return questionsEnMiddle;
      return questionsEnPrimary;
    }
    const lastScore = getLastQuizScore((profile == null ? void 0 : profile.studentNumber) || "");
    return getAdaptiveDailyQuestions(level, lastScore);
  });
  const [questions, setQuestions] = reactExports.useState([]);
  const [current, setCurrent] = reactExports.useState(0);
  const [selected, setSelected] = reactExports.useState(null);
  const [correct, setCorrect] = reactExports.useState(0);
  const [timer, setTimer] = reactExports.useState(60);
  const [feedbackCorrect, setFeedbackCorrect] = reactExports.useState(false);
  const [srItemIds, setSrItemIds] = reactExports.useState(/* @__PURE__ */ new Map());
  const nextQuestion = reactExports.useCallback(() => {
    if (current + 1 >= questions.length) {
      setPhase("done");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setTimer(60);
      setPhase("question");
    }
  }, [current, questions.length]);
  reactExports.useEffect(() => {
    if (phase !== "question") return;
    if (timer <= 0) {
      nextQuestion();
      return;
    }
    const tid = setTimeout(() => setTimer((tt) => tt - 1), 1e3);
    return () => clearTimeout(tid);
  }, [timer, phase, nextQuestion]);
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    const filtered = filterQuestionsByTopic(allQuestions, topic);
    const dueItems = profile ? getDueSpacedItems(profile.studentNumber) : [];
    const srQuestions = dueItems.slice(0, 3).map((item) => ({
      text: item.question,
      choices: item.choices,
      correctIndex: item.correctIndex,
      type: "multiple"
    }));
    const srMap = /* @__PURE__ */ new Map();
    dueItems.slice(0, 3).forEach((item, i) => srMap.set(i, item.id));
    setSrItemIds(srMap);
    setQuestions([...srQuestions, ...filtered]);
    setCurrent(0);
    setCorrect(0);
    setSelected(null);
    setTimer(60);
    setPhase("question");
  };
  const handleAnswer = (idx) => {
    if (phase !== "question" || !profile) return;
    setSelected(idx);
    const isCorrect = idx === questions[current].correctIndex;
    setFeedbackCorrect(isCorrect);
    const srId = srItemIds.get(current);
    if (srId) {
      if (isCorrect) markSpacedRepCorrect(profile.studentNumber, srId);
      else markSpacedRepWrong(profile.studentNumber, srId);
    }
    if (isCorrect) {
      setCorrect((c) => c + 1);
      playAudio("correct_answer");
    } else {
      playAudio("wrong_answer");
      const wa = {
        id: Date.now().toString(),
        studentNumber: profile.studentNumber,
        question: questions[current].text,
        choices: questions[current].choices,
        correctIndex: questions[current].correctIndex,
        userIndex: idx,
        savedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      saveWrongAnswer(wa);
      addToSpacedRep({
        studentNumber: profile.studentNumber,
        question: questions[current].text,
        choices: questions[current].choices,
        correctIndex: questions[current].correctIndex
      });
    }
    setPhase("feedback");
    setTimeout(() => nextQuestion(), 1500);
  };
  const handleFinish = () => {
    if (!profile) return;
    const score = correct * 10;
    updatePoints(profile.studentNumber, score);
    if (selectedTopic === "all") {
      markQuizPlayedToday(profile.studentNumber);
      updateDailyGoals(profile.studentNumber, { quizDone: true });
    }
    updateStreak(profile.studentNumber);
    if (selectedTopic !== "all") {
      saveTopicStats(
        profile.studentNumber,
        selectedTopic,
        correct,
        questions.length
      );
    }
    saveQuizResult({
      studentNumber: profile.studentNumber,
      date: (/* @__PURE__ */ new Date()).toISOString(),
      score: correct * 10,
      total: questions.length,
      correct,
      level: profile.level
    });
    setLastQuizScore(
      profile.studentNumber,
      Math.round(correct / questions.length * 100)
    );
    syncToBackend(profile.studentNumber);
    playAudio("game_end");
    navigate({ to: "/home" });
  };
  if (!profile) return null;
  if (phase === "topicSelect") {
    const alreadyPlayed = hasPlayedQuizToday(profile.studentNumber);
    const dueCount = getDueSpacedItems(profile.studentNumber).length;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "quiz.back_button",
          onClick: () => navigate({ to: "/home" }),
          className: "text-white font-bold text-sm mb-6 block",
          children: [
            "← ",
            t("back")
          ]
        }
      ),
      dueCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "quiz.spaced_rep_card",
          className: "bg-orange-500/90 backdrop-blur-sm rounded-2xl p-4 mb-4 flex items-center gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: "🔁" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-sm", children: lang === "es" ? `${dueCount} pregunta${dueCount > 1 ? "s" : ""} para repasar` : lang === "en" ? `${dueCount} question${dueCount > 1 ? "s" : ""} due for review` : `${dueCount} soru tekrar için bekliyor` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-orange-100 text-xs", children: lang === "es" ? "Aparecerán al inicio de tu próximo quiz" : lang === "en" ? "These will appear at the start of your next quiz" : "Bir sonraki quizinin başında görünecekler" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-3xl p-6 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl text-center mb-3", children: "🎯" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white font-black text-2xl text-center mb-1", children: getLangLabel(lang, "Choose_Quiz_Topic") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm text-center", children: getLangLabel(lang, "Select_topic_or_daily") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: TOPIC_CONFIG.map((tc) => {
        const isAllTopic = tc.id === "all";
        const disabled = isAllTopic && alreadyPlayed;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": `quiz.topic_${tc.id}`,
            onClick: () => !disabled && handleTopicSelect(tc.id),
            disabled,
            className: `bg-gradient-to-br ${tc.color} rounded-2xl p-5 text-left shadow-xl transition-transform ${disabled ? "opacity-40 cursor-not-allowed" : "hover:scale-105 active:scale-95"} ${isAllTopic ? "col-span-2" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: tc.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-base leading-tight", children: tc.label }),
              isAllTopic && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-xs mt-1", children: disabled ? getLangLabel(lang, "Already_played") : getLangLabel(lang, "Daily_quiz_info") }),
              !isAllTopic && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-xs mt-1", children: getLangLabel(lang, "Topic_quiz_info") })
            ]
          },
          tc.id
        );
      }) })
    ] }) });
  }
  if (phase === "done") {
    const score = correct * 10;
    const topicLabel = ((_a = TOPIC_CONFIG.find((tc) => tc.id === selectedTopic)) == null ? void 0 : _a.label) || "";
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 text-center max-w-sm w-full shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: correct >= 7 ? "🎉" : correct >= 5 ? "😊" : "💪" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mb-1", children: topicLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-black text-gray-800 mb-2", children: t("quiz_finished") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 mb-4", children: [
        t("quiz_score"),
        ": ",
        correct,
        "/",
        questions.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-purple-600 mb-6", children: [
        "+",
        score,
        " ",
        t("points")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "quiz.play_again_button",
            onClick: () => {
              setPhase("topicSelect");
              setQuestions([]);
              setCurrent(0);
              setCorrect(0);
            },
            className: "flex-1 bg-white border-2 border-purple-500 text-purple-600 font-bold py-3 rounded-xl hover:bg-purple-50",
            children: getLangLabel(lang, "Play_Again")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "quiz.finish_button",
            onClick: handleFinish,
            className: "flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl",
            children: t("quiz_home")
          }
        )
      ] })
    ] }) });
  }
  const q = questions[current];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "quiz.back_button",
          onClick: () => setPhase("topicSelect"),
          className: "text-white font-bold text-sm",
          children: [
            "← ",
            t("back")
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/70 text-xs font-bold", children: [
        (_b = TOPIC_CONFIG.find((tc) => tc.id === selectedTopic)) == null ? void 0 : _b.icon,
        " ",
        (_c = TOPIC_CONFIG.find((tc) => tc.id === selectedTopic)) == null ? void 0 : _c.label
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-bold text-sm", children: [
          current + 1,
          "/",
          questions.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${timer <= 10 ? "bg-red-500 text-white animate-pulse" : "bg-white/30 text-white"}`,
            children: timer
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-3xl p-6 mb-4", children: [
      srItemIds.has(current) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs bg-orange-400/80 text-white px-3 py-1 rounded-full font-bold mb-3 inline-block", children: [
        "🔁 ",
        getLangLabel(lang, "Review")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-black text-xl leading-relaxed text-center", children: q.text })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: q.choices.map((choice, idx) => {
      let cls = "w-full text-left p-4 rounded-2xl font-bold text-base transition-all ";
      if (phase === "feedback") {
        if (idx === q.correctIndex)
          cls += "bg-green-500 text-white scale-105";
        else if (idx === selected) cls += "bg-red-500 text-white";
        else cls += "bg-white/20 text-white";
      } else {
        cls += "bg-white/20 text-white hover:bg-white/40 active:scale-95";
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": `quiz.choice.${idx + 1}`,
          className: cls,
          onClick: () => handleAnswer(idx),
          disabled: phase === "feedback",
          children: choice
        },
        choice
      );
    }) }),
    phase === "feedback" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "quiz.feedback",
        className: `mt-6 p-4 rounded-2xl text-center font-black text-xl ${feedbackCorrect ? "bg-green-500/80 text-white" : "bg-red-500/80 text-white"}`,
        children: feedbackCorrect ? `✅ ${t("correct")}` : `❌ ${t("quiz_wrong")}`
      }
    )
  ] }) });
}
export {
  QuizPage as default
};
