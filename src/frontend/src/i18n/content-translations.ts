type ContentTranslation = {
  title?: string;
  text?: string;
  meaning?: string;
  rule?: string;
  example?: string;
  word?: string;
  definition?: string;
  synonym?: string;
  antonym?: string;
};

export const contentTranslationsEn: Record<string, ContentTranslation> = {
  // PROVERBS
  pr_damla: {
    title: "Drop by drop a lake forms",
    text: "Drop by drop a lake forms.",
    meaning: "Small things add up to become big.",
  },
  pr_erken: {
    title: "Early riser goes far",
    text: "Early riser goes far.",
    meaning: "Starting early makes things easier.",
  },
  pr_karpuz: {
    title: "You can't hold two watermelons in one hand",
    text: "You can't hold two watermelons in one hand.",
    meaning: "You can't do everything at once.",
  },
  pr_komsu: {
    title: "A neighbor needs a neighbor's ash",
    text: "Neighbors help each other.",
    meaning: "Neighbors support one another.",
  },
  pr_kervan: {
    title: "Dogs bark but the caravan moves on",
    text: "Dogs bark but the caravan moves on.",
    meaning: "Obstacles cannot stop us.",
  },
  pr_bugun: {
    title: "Don't put off today's work till tomorrow",
    text: "Don't put off today's work till tomorrow.",
    meaning: "Do things on time.",
  },
  pr_agac: {
    title: "A tree bends while young",
    text: "A tree bends while young.",
    meaning: "It's easier to learn when young.",
  },
  pr_sabir: {
    title: "Patience brings success",
    text: "Patience brings success.",
    meaning: "Being patient leads to success.",
  },
  pr_degirmen: {
    title: "A mill doesn't run with carried water",
    text: "A mill doesn't run with carried water.",
    meaning: "Inconsistent effort yields no results.",
  },
  pr_dost: {
    title: "A friend in need is a friend indeed",
    text: "A friend in need is a friend indeed.",
    meaning: "True friends appear in hard times.",
  },
  pr_saglik: {
    title: "Health is the most important thing",
    text: "Health is the most important thing.",
    meaning: "Health is the greatest value.",
  },
  pr_emek: {
    title: "No pain, no gain",
    text: "Without labor there is no food.",
    meaning: "Success requires work.",
  },
  pr_sukut: {
    title: "Speech is silver, silence is gold",
    text: "Speech is silver, silence is gold.",
    meaning: "Sometimes silence is better than speaking.",
  },
  pr_yuva: {
    title: "A home is built by the female bird",
    text: "A home is made with patience and effort.",
    meaning: "Home is beautified by patience and effort.",
  },
  pr_bic: {
    title: "Measure twice, cut once",
    text: "Measure a thousand times, cut once.",
    meaning: "Think carefully before deciding.",
  },
  pr_el: {
    title: "There's always someone stronger",
    text: "There is always a hand above a hand.",
    meaning: "There's always someone stronger.",
  },
  pr_cuval: {
    title: "An empty sack can't stand upright",
    text: "An empty sack can't stand upright.",
    meaning: "A person without knowledge cannot be strong.",
  },
  pr_kalkar: {
    title: "People rise from where they fell",
    text: "People rise from where they fell.",
    meaning: "Learn from failure and start again.",
  },
  pr_kilici: {
    title: "Words wound deeper than swords",
    text: "A sword wound heals, a tongue wound does not.",
    meaning: "Words can leave lasting marks.",
  },
  pr_yogurt: {
    title: "Everyone has their own way",
    text: "Every hero has their own way of eating yogurt.",
    meaning: "Everyone has their own unique method.",
  },
  pr_civi: {
    title: "A nail drives out a nail",
    text: "A nail drives out a nail.",
    meaning: "One problem can sometimes be solved by another.",
  },
  pr_akil: {
    title: "Wisdom is in the head, not the age",
    text: "Wisdom is in the head, not the age.",
    meaning: "Intelligence is not related to age.",
  },
  pr_balik: {
    title: "A fish rots from the head",
    text: "A fish rots from the head.",
    meaning: "Problems usually come from the top.",
  },
  pr_deli: {
    title: "You can't be smart without being foolish first",
    text: "You can't be smart without being foolish first.",
    meaning: "We learn from our mistakes.",
  },
  pr_cambaz: {
    title: "Two acrobats can't perform on the same rope",
    text: "Two acrobats can't perform on the same rope.",
    meaning: "Two strong leaders can't coexist in one place.",
  },
  pr_kör: {
    title: "Lie down with blind, wake up squinting",
    text: "Lie down with the blind, wake up squinting.",
    meaning: "Our environment affects us.",
  },
  // GRAMMAR
  gr_harf_a: {
    title: "Letter A",
    rule: "The letter A is written as uppercase 'A' and lowercase 'a'.",
    example: "Apple, Ant, Arrow",
  },
  gr_hece: {
    title: "What is a Syllable?",
    rule: "Words are made of syllables. Each syllable has one vowel.",
    example: "ta-ble, ba-by, home",
  },
  gr_sesli: {
    title: "Vowels",
    rule: "Vowels are: a, e, i, o, u (and their variations)",
    example: "Apple, elephant, ice, open, umbrella",
  },
  gr_sessiz: {
    title: "Consonants",
    rule: "Letters that are not vowels are consonants.",
    example: "b, c, d, f, g, h, j, k, l, m...",
  },
  gr_nokta: {
    title: "Period (.)",
    rule: "We put a period at the end of a sentence.",
    example: "Today the weather is nice.",
  },
  gr_buyuk: {
    title: "Capital Letters",
    rule: "Sentences start with a capital letter. Proper nouns are capitalized.",
    example: "Ali went to school. Ankara is a beautiful city.",
  },
  gr_isim: {
    title: "What is a Noun?",
    rule: "A noun is the name of a person, place, or thing.",
    example: "Pencil, book, school, Ali",
  },
  gr_fiil_okul: {
    title: "Verb (Action Word)",
    rule: "Words that describe actions are verbs.",
    example: "run, write, laugh",
  },
  gr_fiil_zaman: {
    title: "Present Tense",
    rule: "Describes something happening right now.",
    example: "Ali is running. I am writing.",
  },
  gr_gecmis: {
    title: "Past Tense",
    rule: "Describes things that have happened in the past.",
    example: "I went to school yesterday. She read a book.",
  },
  gr_gelecek: {
    title: "Future Tense",
    rule: "Describes things that will happen.",
    example: "I will go to school tomorrow.",
  },
  gr_sifat: {
    title: "What is an Adjective?",
    rule: "Words that describe or modify nouns.",
    example: "red apple, big house, beautiful flower",
  },
  gr_zarf: {
    title: "What is an Adverb?",
    rule: "Words that modify verbs.",
    example: "ran quickly, sang beautifully, worked well",
  },
  gr_soru: {
    title: "Question Sentence",
    rule: "Question sentences end with a question mark.",
    example: "Are you coming too? Is the weather nice?",
  },
  gr_baglac: {
    title: "Conjunction",
    rule: "Words that connect sentences or words.",
    example: "and, but, or, because, although",
  },
  gr_noktalama: {
    title: "Comma (,)",
    rule: "Commas are used in lists and long sentences.",
    example: "I bought apples, pears, and cherries.",
  },
  gr_edilgen: {
    title: "Passive Voice",
    rule: "The doer of the action is unknown or not mentioned.",
    example: "The book was read. The window was broken.",
  },
  gr_etken: {
    title: "Active Voice",
    rule: "The doer of the action is known.",
    example: "Ali read the book. The child threw the ball.",
  },
  gr_doldurma: {
    title: "Indirect Object",
    rule: "Shows where or in what direction an action occurs.",
    example: "I went to school. I stayed at home. I came from school.",
  },
  gr_anlam: {
    title: "Word Meaning",
    rule: "Words can have literal, figurative, technical, or idiomatic meanings.",
    example: "Hand (literal: body part), to lend a hand (figurative: to help)",
  },
  gr_anlatim: {
    title: "Grammatical Error",
    rule: "A grammar or meaning mistake in a sentence.",
    example:
      "Wrong: 'I read read the book.' Correct: 'I read the book repeatedly.'",
  },
  gr_ses_olaylar: {
    title: "Sound Changes",
    rule: "Phonological changes like vowel drops and consonant softening.",
    example: "lose → lost (vowel change)",
  },
  gr_cumle_turleri: {
    title: "Types of Sentences",
    rule: "Affirmative, negative, question, and exclamation sentences.",
    example:
      "Affirmative: She came. Negative: She didn't come. Question: Did she come?",
  },
  gr_paragraf: {
    title: "Paragraph",
    rule: "A unit of text with multiple sentences about one idea.",
    example:
      "Each paragraph has a main idea. The first sentence introduces the topic.",
  },
  // VOCABULARY
  v_mutlu: {
    word: "Happy",
    definition: "Feeling joy and cheerfulness",
    synonym: "Joyful, cheerful",
    antonym: "Sad, unhappy",
    example: "I am very happy today.",
  },
  v_guzel: {
    word: "Beautiful",
    definition: "Pleasing in appearance",
    synonym: "Pretty, lovely",
    antonym: "Ugly, unattractive",
    example: "What a beautiful flower!",
  },
  v_buyuk: {
    word: "Big",
    definition: "Large in size or amount",
    synonym: "Large, huge",
    antonym: "Small, tiny",
    example: "I saw a big elephant.",
  },
  v_hizli: {
    word: "Fast",
    definition: "Moving very quickly",
    synonym: "Quick, swift",
    antonym: "Slow",
    example: "The runner ran very fast.",
  },
  v_sicak: {
    word: "Hot",
    definition: "Having high temperature",
    synonym: "Warm, scorching",
    antonym: "Cold, cool",
    example: "Summer days are very hot.",
  },
  v_sert: {
    word: "Hard",
    definition: "Not easily bent, solid",
    synonym: "Solid, rigid",
    antonym: "Soft, flexible",
    example: "Stone is very hard.",
  },
  v_temiz: {
    word: "Clean",
    definition: "Free from dirt, tidy",
    synonym: "Pure, spotless",
    antonym: "Dirty, filthy",
    example: "Keep your hands clean.",
  },
  v_sessiz: {
    word: "Quiet",
    definition: "Making no noise",
    synonym: "Silent, calm",
    antonym: "Noisy, loud",
    example: "The library is very quiet.",
  },
  v_cesur: {
    word: "Brave",
    definition: "Not afraid of danger, courageous",
    synonym: "Courageous, bold",
    antonym: "Cowardly, fearful",
    example: "The brave hero defeated the monster.",
  },
  v_sabir: {
    word: "Patience",
    definition: "Ability to endure difficulties calmly",
    synonym: "Endurance, tolerance",
    antonym: "Impatience, hastiness",
    example: "If you work with patience, you'll succeed.",
  },
  v_merak: {
    word: "Curiosity",
    definition: "Desire to learn or know",
    synonym: "Interest, inquisitiveness",
    antonym: "Indifference, apathy",
    example: "Curious people learn a lot.",
  },
  v_basari: {
    word: "Success",
    definition: "Achieving a goal",
    synonym: "Achievement, victory",
    antonym: "Failure, defeat",
    example: "Hard work leads to success.",
  },
  v_fedakar: {
    word: "Selfless",
    definition: "Showing sacrifice for others",
    synonym: "Devoted, generous",
    antonym: "Selfish, egotistic",
    example: "Mothers are very selfless.",
  },
  v_akilli: {
    word: "Smart",
    definition: "Intelligent, thoughtful",
    synonym: "Clever, wise",
    antonym: "Foolish, stupid",
    example: "A smart person solved the hard problem.",
  },
  v_dürüst: {
    word: "Honest",
    definition: "Always tells the truth",
    synonym: "Truthful, trustworthy",
    antonym: "Dishonest, deceitful",
    example: "Being honest is important.",
  },
  v_mesgul: {
    word: "Busy",
    definition: "Occupied with work, not free",
    synonym: "Occupied, engaged",
    antonym: "Free, idle",
    example: "The teacher is very busy right now.",
  },
  v_ironik: {
    word: "Ironic",
    definition: "Meaning the opposite of what is said",
    synonym: "Sarcastic, satirical",
    antonym: "Sincere, direct",
    example: "She said ironically: 'how smart!'",
  },
  v_analiz: {
    word: "Analysis",
    definition: "Examining a whole by breaking into parts",
    synonym: "Examination, breakdown",
    antonym: "Synthesis, combination",
    example: "The scientist analyzed the samples.",
  },
  v_hipotez: {
    word: "Hypothesis",
    definition: "An unproven temporary explanation",
    synonym: "Assumption, supposition",
    antonym: "Evidence, certainty",
    example: "The scientist tested their hypothesis.",
  },
  v_empati: {
    word: "Empathy",
    definition: "Ability to understand others' feelings",
    synonym: "Understanding, compassion",
    antonym: "Selfishness, indifference",
    example: "Empathy strengthens relationships.",
  },
  v_paradoks: {
    word: "Paradox",
    definition: "A seemingly contradictory but true statement",
    synonym: "Contradiction, dilemma",
    antonym: "Consistency, harmony",
    example: "'Less is more' is a paradox.",
  },
  v_nostalji: {
    word: "Nostalgia",
    definition: "Longing for the past",
    synonym: "Longing, yearning",
    antonym: "Progress, innovation",
    example: "Old photos evoke nostalgia.",
  },
  v_sinerji: {
    word: "Synergy",
    definition: "Combined effect of working together",
    synonym: "Combined power, cooperation",
    antonym: "Conflict, separation",
    example: "The team achieved great things through synergy.",
  },
  v_ambivalans: {
    word: "Ambivalence",
    definition: "Feeling two opposite emotions simultaneously",
    synonym: "Dilemma, indecision",
    antonym: "Certainty, clarity",
    example:
      "She felt ambivalent about the exam result: both excited and scared.",
  },
};
