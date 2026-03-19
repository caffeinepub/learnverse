type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

export const poemsEn: Record<
  Level,
  {
    key: string;
    title: string;
    emoji: string;
    lines: string[];
    author?: string;
  }[]
> = {
  okul_oncesi: [
    {
      key: "poem_yagmur",
      title: "The Rain",
      emoji: "🌧️",
      lines: [
        "Pitter patter, drops of rain,",
        "Falling on the windowpane.",
        "Flowers drink and trees grow tall,",
        "Rain is good for one and all!",
      ],
    },
    {
      key: "poem_kelebek",
      title: "The Butterfly",
      emoji: "🦋",
      lines: [
        "A butterfly flutters by,",
        "Colorful wings against the sky.",
        "Landing soft on flower tops,",
        "Then up again and never stops!",
      ],
    },
    {
      key: "poem_ay",
      title: "The Moon",
      emoji: "🌙",
      lines: [
        "Moon, oh moon up in the night,",
        "How you shine with silver light.",
        "Stars around you dance and play,",
        "Sleep tight till the break of day.",
      ],
    },
    {
      key: "poem_bahce",
      title: "Our Garden",
      emoji: "🌷",
      lines: [
        "Roses bloom in our garden,",
        "Sunflowers reach for the sky.",
        "Bees hum and birds are singing,",
        "As happy days go by.",
      ],
    },
    {
      key: "poem_gunes",
      title: "The Sun",
      emoji: "☀️",
      lines: [
        "Sun, sun, come on down,",
        "Light up yard and every town.",
        "Shine on flowers, shine on me,",
        "How warm and bright the world can be!",
      ],
    },
    {
      key: "poem_kedi",
      title: "My Little Cat",
      emoji: "🐱",
      lines: [
        "My little cat, soft and white,",
        "Sleeps beside me every night.",
        "Purring softly, cozy and warm,",
        "Keeping me safe from every storm.",
      ],
    },
    {
      key: "poem_renk",
      title: "Colors",
      emoji: "🌈",
      lines: [
        "Red is roses, blue is sky,",
        "Yellow's the sun that's always high.",
        "Green are leaves and orange the fruit,",
        "Colors are beautiful, that's no doubt!",
      ],
    },
    {
      key: "poem_sayi",
      title: "Counting Song",
      emoji: "🔢",
      lines: [
        "One, two, three and four,",
        "Count the apples on the floor.",
        "Five and six and seven too,",
        "Counting is so fun to do!",
      ],
    },
    {
      key: "poem_deniz",
      title: "The Sea",
      emoji: "🌊",
      lines: [
        "Rolling waves upon the shore,",
        "Calling me to come explore.",
        "Sand between my little toes,",
        "Where the sea goes, no one knows!",
      ],
    },
    {
      key: "poem_yildiz",
      title: "Stars",
      emoji: "⭐",
      lines: [
        "Stars are scattered through the night,",
        "Each one shining with its light.",
        "Maybe someday I will fly,",
        "And touch the stars up in the sky!",
      ],
    },
  ],
  ilkokul: [
    {
      key: "poem_turkiye",
      title: "My Country",
      emoji: "🇹🇷",
      lines: [
        "My country stretches wide and far,",
        "Its mountains reach to every star.",
        "Its seas are blue, its fields are green,",
        "The most beautiful land I've ever seen.",
      ],
    },
    {
      key: "poem_ogretmen",
      title: "My Teacher",
      emoji: "👩‍🏫",
      lines: [
        "My teacher is a guiding light,",
        "Helping me to read and write.",
        "Patient, kind, and always there,",
        "Showing me how much they care.",
      ],
    },
    {
      key: "poem_kitap",
      title: "The Book",
      emoji: "📖",
      lines: [
        "Open a book and you will find,",
        "Worlds and wonders of every kind.",
        "Cities, jungles, oceans wide,",
        "All of them wait just inside!",
      ],
    },
    {
      key: "poem_dost",
      title: "A Friend",
      emoji: "🤝",
      lines: [
        "A friend is someone who cares for you,",
        "Someone who's always loyal and true.",
        "Through good times and hard ones too,",
        "Friends make everything feel brand new.",
      ],
    },
    {
      key: "poem_ilkbahar",
      title: "Spring",
      emoji: "🌷",
      lines: [
        "Flowers bloom and birds all sing,",
        "Welcome, welcome, lovely spring!",
        "Green returns to every tree,",
        "Spring is here for you and me.",
      ],
    },
    {
      key: "poem_okul",
      title: "School",
      emoji: "🏫",
      lines: [
        "School is where I learn each day,",
        "Mix hard work with time to play.",
        "Friends and teachers all around,",
        "The best of knowledge to be found.",
      ],
    },
    {
      key: "poem_ataturk",
      title: "A Great Leader",
      emoji: "🌟",
      lines: [
        "A great leader brave and true,",
        "Who showed the nation what to do.",
        "Freedom, peace, and learning's light,",
        "His legacy shines forever bright.",
      ],
    },
    {
      key: "poem_kuslar",
      title: "Birds",
      emoji: "🐦",
      lines: [
        "Birds in branches, birds in flight,",
        "Singing from dawn until the night.",
        "Feathers soft and colors bright,",
        "Birds are nature's pure delight.",
      ],
    },
    {
      key: "poem_anne",
      title: "Mother",
      emoji: "💕",
      lines: [
        "Mother's arms so warm and safe,",
        "Her love no other can replace.",
        "She sees me through my every day,",
        "A love that never fades away.",
      ],
    },
    {
      key: "poem_doga",
      title: "Nature",
      emoji: "🌿",
      lines: [
        "The forest breathes, the river sings,",
        "Nature holds a thousand things.",
        "Listen well and you will find,",
        "Wisdom that soothes the restless mind.",
      ],
    },
  ],
  ortaokul: [
    {
      key: "poem_ozgur_ruh",
      title: "Free Spirit",
      emoji: "🕊️",
      lines: [
        "Beyond the hills and past the sea,",
        "My spirit longs to wander free.",
        "To question, dream, and dare to grow,",
        "To learn the things I do not know.",
      ],
    },
    {
      key: "poem_zaman",
      title: "Time",
      emoji: "⏰",
      lines: [
        "Time flows on like a river's tide,",
        "It does not slow, it will not hide.",
        "Use each hour while you may,",
        "For time once lost won't come back your way.",
      ],
    },
    {
      key: "poem_umut",
      title: "Hope",
      emoji: "🌅",
      lines: [
        "Hope is the light when darkness falls,",
        "A quiet voice that gently calls.",
        "Hold it close through storm and rain,",
        "For after night the sun shines again.",
      ],
    },
    {
      key: "poem_bilgi",
      title: "Knowledge",
      emoji: "🎓",
      lines: [
        "Knowledge opens every door,",
        "Gives you courage to explore.",
        "No treasure shines as bright as learning,",
        "Keep your mind forever yearning.",
      ],
    },
    {
      key: "poem_vatan",
      title: "Homeland",
      emoji: "🏔️",
      lines: [
        "These mountains and these rivers wide,",
        "This soil in which our roots reside.",
        "Our homeland calls through wind and rain,",
        "A love that echoes like a refrain.",
      ],
    },
    {
      key: "poem_genclik",
      title: "Youth",
      emoji: "🌱",
      lines: [
        "Youth is strength and youth is fire,",
        "Reach up high and set your aim higher.",
        "The future waits for those who dare,",
        "Build your dreams with love and care.",
      ],
    },
    {
      key: "poem_adalet",
      title: "Justice",
      emoji: "⚖️",
      lines: [
        "Justice stands on steady ground,",
        "Where truth and fairness both are found.",
        "Speak for those who have no voice,",
        "Standing right is always a choice.",
      ],
    },
    {
      key: "poem_insanlik",
      title: "Humanity",
      emoji: "🌍",
      lines: [
        "We are many, we are one,",
        "Sharing earth beneath one sun.",
        "When we help and when we care,",
        "Humanity is everywhere.",
      ],
    },
    {
      key: "poem_sessizlik",
      title: "Silence",
      emoji: "🌌",
      lines: [
        "In the quiet of the night,",
        "Shining with a gentle light,",
        "Silence speaks what words can't say,",
        "Listen close -- don't turn away.",
      ],
    },
    {
      key: "poem_gelecek",
      title: "The Future",
      emoji: "🚀",
      lines: [
        "The future shines beyond the hill,",
        "A world of wonder, waiting still.",
        "Take up the torch, take up the call,",
        "The future needs the best of all.",
      ],
    },
  ],
};
