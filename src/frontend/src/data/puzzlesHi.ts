export type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

export interface Puzzle {
  key: string;
  question: string;
  emoji: string;
  choices: string[];
  correct: number;
}

export const puzzlesHi: Record<Level, Puzzle[]> = {
  okul_oncesi: [
    {
      key: "puzzle_renk_1",
      question: "सूरज का रंग क्या है?",
      emoji: "☀️",
      choices: ["नीला", "लाल", "पीला", "हरा"],
      correct: 2,
    },
    {
      key: "puzzle_hayvan_1",
      question: "कौन उड़ सकता है?",
      emoji: "🐦",
      choices: ["बिल्ली", "चिड़िया", "मछली", "कुत्ता"],
      correct: 1,
    },
    {
      key: "puzzle_sayi_1",
      question: "2 + 3 = ?",
      emoji: "🔢",
      choices: ["4", "6", "5", "7"],
      correct: 2,
    },
    {
      key: "puzzle_meyve_1",
      question: "कौन सा फल नहीं है?",
      emoji: "🍎",
      choices: ["सेब", "केला", "गाजर", "अंगूर"],
      correct: 2,
    },
    {
      key: "puzzle_sekil_1",
      question: "पहिया किस आकार का होता है?",
      emoji: "⭕",
      choices: ["वर्ग", "वृत्त", "त्रिभुज", "आयत"],
      correct: 1,
    },
    {
      key: "puzzle_renk_2",
      question: "आसमान का रंग क्या है?",
      emoji: "🌤️",
      choices: ["हरा", "नीला", "पीला", "लाल"],
      correct: 1,
    },
    {
      key: "puzzle_hayvan_2",
      question: "कौन सा जानवर अंडे देता है?",
      emoji: "🐔",
      choices: ["बिल्ली", "कुत्ता", "मुर्गी", "घोड़ा"],
      correct: 2,
    },
    {
      key: "puzzle_sayi_2",
      question: "10 - 4 = ?",
      emoji: "🔢",
      choices: ["5", "6", "7", "8"],
      correct: 1,
    },
    {
      key: "puzzle_t9_o1",
      question: "मैं हर सुबह उगता हूँ और शाम को डूब जाता हूँ। मैं कौन हूँ?",
      emoji: "☀️",
      choices: ["चाँद", "सूरज", "तारा", "बादल"],
      correct: 1,
    },
    {
      key: "puzzle_t9_o2",
      question: "मेरे दाँत हैं पर मैं काट नहीं सकता। मैं क्या हूँ?",
      emoji: "⚙️",
      choices: ["आरी", "कंघी", "काँटा", "चम्मच"],
      correct: 1,
    },
    {
      key: "puzzle_oo_new1",
      question: "मैं शाम के बाद आता हूँ और तारे लाता हूँ। मैं क्या हूँ?",
      emoji: "🌙",
      choices: ["सुबह", "रात", "दोपहर", "शाम"],
      correct: 3,
    },
    {
      key: "puzzle_oo_new5",
      question: "सर्दियों में कौन सी सफेद चीज गिरती है?",
      emoji: "❄️",
      choices: ["बारिश", "बर्फ", "ओले", "कोहरा"],
      correct: 1,
    },
  ],
  ilkokul: [
    {
      key: "puzzle_matematik_1",
      question: "7 × 8 = ?",
      emoji: "🔢",
      choices: ["54", "56", "58", "64"],
      correct: 1,
    },
    {
      key: "puzzle_cografi_1",
      question: "तुर्की की राजधानी क्या है?",
      emoji: "🏛️",
      choices: ["इस्तांबुल", "अंकारा", "इज़मिर", "बुर्सा"],
      correct: 1,
    },
    {
      key: "puzzle_bilim_1",
      question: "सूर्य के सबसे निकट कौन सा ग्रह है?",
      emoji: "🪐",
      choices: ["शुक्र", "पृथ्वी", "बुध", "मंगल"],
      correct: 2,
    },
    {
      key: "puzzle_dil_1",
      question: "हिंदी वर्णमाला में कितने स्वर होते हैं?",
      emoji: "🔤",
      choices: ["10", "11", "12", "13"],
      correct: 1,
    },
    {
      key: "puzzle_hayvan_3",
      question: "जमीन पर सबसे तेज़ दौड़ने वाला जानवर कौन है?",
      emoji: "🐆",
      choices: ["शेर", "चीता", "तेंदुआ", "बाघ"],
      correct: 1,
    },
    {
      key: "puzzle_tarih_1",
      question: "भारत की राजधानी कौन सी है?",
      emoji: "🏛️",
      choices: ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"],
      correct: 2,
    },
    {
      key: "puzzle_matematik_2",
      question: "षट्भुज में कितनी भुजाएँ होती हैं?",
      emoji: "🔷",
      choices: ["5", "6", "7", "8"],
      correct: 1,
    },
    {
      key: "puzzle_bilim_2",
      question: "पृथ्वी के वायुमंडल में सबसे अधिक कौन सी गैस है?",
      emoji: "💨",
      choices: ["ऑक्सीजन", "CO₂", "नाइट्रोजन", "आर्गन"],
      correct: 2,
    },
    {
      key: "puzzle_cografi_2",
      question: "दुनिया का सबसे बड़ा महासागर कौन सा है?",
      emoji: "🌊",
      choices: ["अटलांटिक", "हिंद", "प्रशांत", "आर्कटिक"],
      correct: 2,
    },
    {
      key: "puzzle_sanat_1",
      question: "मोनालिसा किसने बनाई?",
      emoji: "🎨",
      choices: ["माइकल एंजेलो", "राफेल", "दा विंची", "बोतिचेल्ली"],
      correct: 2,
    },
  ],
  ortaokul: [
    {
      key: "puzzle_o_math_1",
      question: "144 का वर्गमूल क्या है?",
      emoji: "🔢",
      choices: ["11", "12", "13", "14"],
      correct: 1,
    },
    {
      key: "puzzle_o_science_1",
      question: "पानी का रासायनिक सूत्र क्या है?",
      emoji: "💧",
      choices: ["HO", "H₂O", "H₂O₂", "OH"],
      correct: 1,
    },
    {
      key: "puzzle_o_geo_1",
      question: "दुनिया की सबसे लंबी नदी कौन सी है?",
      emoji: "🌍",
      choices: ["अमेज़न", "यांग्त्ज़े", "मिसिसिपी", "नील"],
      correct: 3,
    },
    {
      key: "puzzle_o_hist_1",
      question: "प्रथम विश्व युद्ध कब शुरू हुआ?",
      emoji: "📅",
      choices: ["1912", "1914", "1916", "1918"],
      correct: 1,
    },
    {
      key: "puzzle_o_lit_1",
      question: "रामायण किसने लिखी?",
      emoji: "📚",
      choices: ["तुलसीदास", "वाल्मीकि", "कालिदास", "व्यास"],
      correct: 1,
    },
    {
      key: "puzzle_o_phys_1",
      question: "प्रकाश की गति (km/s) लगभग कितनी है?",
      emoji: "💡",
      choices: ["100,000", "200,000", "300,000", "400,000"],
      correct: 2,
    },
    {
      key: "puzzle_o_bio_1",
      question: "मानव कोशिका में कितने गुणसूत्र होते हैं?",
      emoji: "🧬",
      choices: ["23", "44", "46", "48"],
      correct: 2,
    },
    {
      key: "puzzle_o_chem_1",
      question: "आवर्त सारणी का सबसे हल्का तत्व कौन सा है?",
      emoji: "⚗️",
      choices: ["हीलियम", "लिथियम", "हाइड्रोजन", "बेरिलियम"],
      correct: 2,
    },
  ],
};
