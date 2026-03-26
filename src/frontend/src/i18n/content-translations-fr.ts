type ContentTranslationFr = {
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

export const contentTranslationsFr: Record<string, ContentTranslationFr> = {
  // PROVERBS
  pr_damla: {
    title: "Petit à petit l'oiseau fait son nid",
    text: "Petit à petit l'oiseau fait son nid.",
    meaning: "Les petites choses s'accumulent pour devenir grandes.",
  },
  pr_erken: {
    title: "Le monde appartient à ceux qui se lèvent tôt",
    text: "Le monde appartient à ceux qui se lèvent tôt.",
    meaning: "Commencer tôt facilite les choses.",
  },
  pr_karpuz: {
    title: "On ne peut pas tout avoir",
    text: "On ne peut pas tout avoir en même temps.",
    meaning: "On ne peut pas tout faire en même temps.",
  },
  pr_komsu: {
    title: "Un voisin proche vaut mieux qu'un frère lointain",
    text: "Les voisins s'entraident mutuellement.",
    meaning: "Les voisins se soutiennent les uns les autres.",
  },
  pr_kervan: {
    title: "Les chiens aboient, la caravane passe",
    text: "Les chiens aboient, la caravane passe.",
    meaning: "Les obstacles ne peuvent pas nous arrêter.",
  },
  pr_bugun: {
    title: "Ne remets pas à demain ce que tu peux faire aujourd'hui",
    text: "Ne remets pas à demain ce que tu peux faire aujourd'hui.",
    meaning: "Fais les choses à temps.",
  },
  pr_agac: {
    title: "Il faut plier l'arbre quand il est jeune",
    text: "Il faut plier l'arbre quand il est jeune.",
    meaning: "Il est plus facile d'apprendre quand on est jeune.",
  },
  pr_sabir: {
    title: "La patience est mère de toutes les vertus",
    text: "La patience amène le succès.",
    meaning: "Être patient mène au succès.",
  },
  pr_degirmen: {
    title: "Sans effort constant, pas de résultat",
    text: "Sans eau constante, le moulin ne tourne pas.",
    meaning: "Un effort inconsistant ne donne pas de résultats.",
  },
  pr_dost: {
    title: "C'est dans le besoin qu'on connaît ses amis",
    text: "C'est dans le besoin qu'on connaît ses vrais amis.",
    meaning: "Les vrais amis apparaissent dans les moments difficiles.",
  },
  pr_saglik: {
    title: "La santé est la plus grande richesse",
    text: "La santé est la plus grande richesse.",
    meaning: "La santé est la valeur la plus importante.",
  },
  pr_emek: {
    title: "Sans travail, pas de récompense",
    text: "Sans travail, pas de récompense.",
    meaning: "Le succès nécessite du travail.",
  },
  pr_sukut: {
    title: "Le silence est d'or",
    text: "Le silence est d'or.",
    meaning: "Parfois, le silence vaut mieux que la parole.",
  },
  pr_kalkar: {
    title: "On se relève là où on est tombé",
    text: "On se relève là où on est tombé.",
    meaning: "Apprends de tes échecs et recommence.",
  },
  pr_akil: {
    title: "Deux têtes valent mieux qu'une",
    text: "Deux têtes valent mieux qu'une.",
    meaning: "La collaboration mène à de meilleures décisions.",
  },
  // GRAMMAR
  gr_harf_a: {
    title: "Les lettres de l'alphabet",
    rule: "L'alphabet français compte 26 lettres.",
    example: "A, B, C, D, E... sont des lettres de l'alphabet.",
  },
  gr_hece: {
    title: "Les syllabes",
    rule: "Une syllabe est un groupe de sons prononcés ensemble.",
    example: "Ma-ma, pa-pa, é-co-le sont des mots divisés en syllabes.",
  },
  gr_sesli: {
    title: "Les voyelles",
    rule: "Les voyelles sont : A, E, I, O, U, Y.",
    example: '"A" dans "ami" est une voyelle.',
  },
  gr_sessiz: {
    title: "Les consonnes",
    rule: "Les consonnes sont toutes les lettres qui ne sont pas des voyelles.",
    example: '"M" dans "maison" est une consonne.',
  },
  gr_nokta: {
    title: "Le point",
    rule: "Le point termine une phrase.",
    example: "Je vais à l'école. Je reste à la maison.",
  },
  gr_buyuk: {
    title: "La majuscule",
    rule: "On met une majuscule au début d'une phrase et aux noms propres.",
    example: "Paris est une belle ville. Marie aime apprendre.",
  },
  gr_isim: {
    title: "Le nom",
    rule: "Le nom désigne une personne, un animal, un lieu ou une chose.",
    example: "Chien, ville, enfant sont des noms.",
  },
  gr_fiil_okul: {
    title: "Le verbe (niveau primaire)",
    rule: "Le verbe exprime une action ou un état.",
    example: "Je cours, tu manges, il dort.",
  },
  gr_fiil_zaman: {
    title: "Les temps du verbe",
    rule: "Les verbes se conjuguent selon le temps : présent, passé, futur.",
    example: "Je mange (présent), j'ai mangé (passé), je mangerai (futur).",
  },
  gr_gecmis: {
    title: "Le passé composé",
    rule: "Le passé composé exprime une action terminée dans le passé.",
    example: "Hier, j'ai mangé une pomme. Je suis allé à l'école.",
  },
  gr_gelecek: {
    title: "Le futur simple",
    rule: "Le futur simple exprime une action qui se passera plus tard.",
    example: "Demain, j'irai au parc. Je mangerai du gâteau.",
  },
  gr_sifat: {
    title: "L'adjectif",
    rule: "L'adjectif décrit un nom.",
    example: "Un grand arbre, une belle maison, un petit chat.",
  },
  gr_zarf: {
    title: "L'adverbe",
    rule: "L'adverbe modifie un verbe, un adjectif ou un autre adverbe.",
    example: "Il court vite. Elle parle doucement. Très beau.",
  },
  gr_soru: {
    title: "La question",
    rule: "Une phrase interrogative pose une question et se termine par '?'.",
    example: "Où vas-tu ? Qu'est-ce que tu fais ? Comment t'appelles-tu ?",
  },
  gr_baglac: {
    title: "La conjonction",
    rule: "La conjonction relie deux propositions ou deux mots.",
    example: "J'aime les pommes et les oranges. Je suis fatigué mais heureux.",
  },
  gr_noktalama: {
    title: "La ponctuation",
    rule: "La ponctuation aide à organiser les phrases.",
    example:
      "Le point, la virgule, le point d'interrogation, le point d'exclamation.",
  },
  gr_edilgen: {
    title: "La voix passive",
    rule: "Dans la voix passive, le sujet subit l'action.",
    example: "Le livre est lu par l'élève.",
  },
  gr_etken: {
    title: "La voix active",
    rule: "Dans la voix active, le sujet fait l'action.",
    example: "L'élève lit le livre.",
  },
  gr_paragraf: {
    title: "Le paragraphe",
    rule: "Un paragraphe est un groupe de phrases autour d'une idée principale.",
    example: "Chaque paragraphe commence par une nouvelle ligne.",
  },
  // VOCABULARY
  v_mutlu: {
    word: "Heureux",
    definition: "Qui ressent de la joie, du bonheur",
    synonym: "Joyeux, content, ravi",
    antonym: "Triste, malheureux",
    example: "Je suis heureux quand je joue avec mes amis.",
  },
  v_guzel: {
    word: "Beau",
    definition: "Agréable à voir, joli",
    synonym: "Joli, magnifique, splendide",
    antonym: "Laid, vilain",
    example: "Les fleurs sont belles au printemps.",
  },
  v_buyuk: {
    word: "Grand",
    definition: "De taille importante, vaste",
    synonym: "Immense, énorme, vaste",
    antonym: "Petit, minuscule",
    example: "La tour Eiffel est très grande.",
  },
  v_hizli: {
    word: "Rapide",
    definition: "Qui se déplace vite",
    synonym: "Vite, prompt, agile",
    antonym: "Lent, lentement",
    example: "Le chétah est l'animal le plus rapide.",
  },
  v_sicak: {
    word: "Chaud",
    definition: "Qui a une température élevée",
    synonym: "Brûlant, tiède, torride",
    antonym: "Froid, frais, glacial",
    example: "En été, le soleil est chaud.",
  },
  v_sert: {
    word: "Dur",
    definition: "Qui résiste à la pression, difficile",
    synonym: "Solide, rigide, ferme",
    antonym: "Mou, doux, souple",
    example: "La pierre est dure.",
  },
  v_temiz: {
    word: "Propre",
    definition: "Sans salété, ordonné",
    synonym: "Net, pur, immaculé",
    antonym: "Sale, désordonné",
    example: "Garde ta chambre propre.",
  },
  v_sessiz: {
    word: "Silencieux",
    definition: "Qui ne fait pas de bruit",
    synonym: "Tranquille, calme, muet",
    antonym: "Bruyant, fort, tapageur",
    example: "La bibliothèque est silencieuse.",
  },
  v_cesur: {
    word: "Courageux",
    definition: "Qui n'a pas peur du danger",
    synonym: "Brave, intrépide, valeureux",
    antonym: "Peureux, lâche",
    example: "Le pompier courageux a sauvé l'enfant.",
  },
  v_sabir: {
    word: "Patient",
    definition: "Qui sait attendre sans s'énerver",
    synonym: "Calme, serein, posé",
    antonym: "Impatient, nerveux",
    example: "Il faut être patient pour apprendre.",
  },
  v_merak: {
    word: "Curieux",
    definition: "Qui veut apprendre et découvrir",
    synonym: "Intéressé, avide de savoir",
    antonym: "Indifférent, blasé",
    example: "L'élève curieux pose beaucoup de questions.",
  },
  v_basari: {
    word: "Succès",
    definition: "Résultat positif d'un effort",
    synonym: "Victoire, réussite, triomphe",
    antonym: "Échec, défaite",
    example: "Son succès à l'examen a rendu ses parents fiers.",
  },
  v_fedakar: {
    word: "Généreux",
    definition: "Qui donne sans compter",
    synonym: "Altruiste, dévoué, serviable",
    antonym: "Ava re, égoïste",
    example: "Elle est généreuse avec son temps.",
  },
  v_akilli: {
    word: "Intelligent",
    definition: "Qui comprend vite et bien",
    synonym: "Sage, habile, perspicace",
    antonym: "Sot, stupide",
    example: "Un élève intelligent résout les problèmes facilement.",
  },
  v_dürüst: {
    word: "Honnête",
    definition: "Qui dit la vérité et respecte les règles",
    synonym: "Sincère, intègre, loyal",
    antonym: "Malhonête, menteur",
    example: "Il est honnête envers ses amis.",
  },
  v_mesgul: {
    word: "Occupé",
    definition: "Qui a beaucoup de choses à faire",
    synonym: "Pris, absorbé, affairé",
    antonym: "Libre, disponible",
    example: "Je suis occupé avec mes devoirs.",
  },
  v_empati: {
    word: "Empathie",
    definition: "Capacité à comprendre les émotions des autres",
    synonym: "Compassion, compréhension",
    antonym: "Indifférence, froideur",
    example: "Elle a montré beaucoup d'empathie envers son ami triste.",
  },
  v_analiz: {
    word: "Analyse",
    definition: "Examen détaillé d'un sujet",
    synonym: "Examen, étude, investigation",
    antonym: "Synthèse, résumé",
    example: "L'analyse du texte a révélé son message principal.",
  },
  v_hipotez: {
    word: "Hypothèse",
    definition: "Supposition non encore prouvée",
    synonym: "Théorie, conjecture, supposition",
    antonym: "Certitude, fait, preuve",
    example: "Les scientifiques formulent des hypothèses à tester.",
  },
  v_paradoks: {
    word: "Paradoxe",
    definition: "Déclaration apparemment contradictoire mais vraie",
    synonym: "Contradiction, dilemme",
    antonym: "Cohérence, harmonie",
    example: "'Moins c'est plus' est un paradoxe.",
  },
};
