import type { Locale } from '@/lib/i18n';
import { campbellockJrFi } from './fi.generated';
import { campbellockJrKo } from './ko.generated';

type Attribute = {
  title: string;
  original: string;
  text: string;
};

type Source = {
  label: string;
  url: string;
};

type CampbellockJrStory = {
  intro: string;
  mentorEyebrow: string;
  mentorTitle: string;
  mentorQuote: string;
  mentor: string[];
  lifeTitle: string;
  life: string[];
  curriculumEyebrow: string;
  curriculumTitle: string;
  curriculum: string[];
  attributesTitle: string;
  attributesIntro: string;
  attributes: Attribute[];
  equationTitle: string;
  equationIntro: string;
  equation: Attribute[];
  equationResult: string;
  archiveTitle: string;
  archiveIntro: string;
  openImage: string;
  imageCaptions: string[];
  sourceNoteTitle: string;
  sourceNote: string;
  sourcesTitle: string;
  sources: Source[];
};

const sources: Source[] = [
  {
    label: 'The Lockers — History',
    url: 'https://www.thelockersdance.com/about',
  },
  {
    label: 'LockerLegends — 1970s Old School Groups of Locking',
    url: 'https://www.lockerlegends.net/dancers-groups-and-crews/old-school-acknowledgement-room/',
  },
  {
    label: 'Street Dance Roots — Greg Campbellock Jr.',
    url: 'https://www.streetdanceroots.com/hof/gregcampbellockjr',
  },
  {
    label: 'Kick Mag — Greg Campbellock Jr. of The Lockers',
    url: 'https://www.kickmag.net/2010/02/13/greg-campbellock-jr-of-the-lockers-dance-pioneer-legendary-soul-train-dancer-passes/',
  },
  {
    label: 'LOCKOREA — Greg Campbellock Jr.',
    url: 'https://lockorea.com/greg-campbellock-jr/',
  },
];

export const campbellockJrStory: Record<Locale, CampbellockJrStory> = {
  sv: {
    intro:
      'Dave Gregory “Greg Campbellock Jr.” Pope var en mästerlig improvisatör, koreograf och lärare. För mig var han också något ännu viktigare: min mentor. Den här sidan handlar om mannen, visionären och den pedagogiska struktur han byggde för att hjälpa lockare att förstå dansen på djupet.',
    mentorEyebrow: 'Personligt minne / Sverige',
    mentorTitle: 'Min mentor – och många andras',
    mentorQuote:
      'Greg var min mentor. För mig var han en av de allra bästa – en mastermind med visioner, som kunde se både dansen och människan bakom den.',
    mentor: [
      'Han var mentor för dansare över hela världen. Jag tror att många av oss aldrig hade lärt oss Locking på samma djup utan honom. Han gav inte bara rörelser vidare; han gav oss ett sätt att tänka, lyssna, träna och hitta vår egen karaktär.',
      'Det är också en viktig del av min svenska koppling till Locking. Det jag tog med mig hem var inte bara steg, utan hans syn på dansen som ett helt språk – med kroppskontroll, musikalitet, precision, attityd, fantasi och funk.',
    ],
    lifeTitle: 'Från pionjär till lärare',
    life: [
      'Greg dansade i Los Angeles klubbscen och blev en återkommande Soul Train-dansare. År 1972 ingick han i Creative Generation vid Watts Writers Workshop, tillsammans med flera andra tidiga lockare. Där möttes improvisation, synkroniserade rutiner och sceniskt arbete.',
      'År 1973 blev han en av de sju originalmedlemmarna i The Lockers. Källor beskriver honom som gruppens “line captain” och som en viktig länk mellan den sociala dansen, pionjärernas steg och den koreograferade scenformen.',
      'Under 1990-talet blev undervisningen allt mer central för honom. Kring millennieskiftet reste han internationellt som lärare, domare och artist. Hans arv lever därför inte bara i det han själv dansade, utan i alla människor han undervisade, uppmuntrade och gav ansvar att föra kunskapen vidare.',
    ],
    curriculumEyebrow: 'Structure / Vision / Pedagogy',
    curriculumTitle: 'En läroplan för en levande dans',
    curriculum: [
      'Greg bidrog starkt till att formulera en läroplan för Locking. Hans anteckningar visar en pedagog som ville göra det osynliga synligt: hur kroppen kontrolleras, hur musik blir rörelse, hur karaktär skapas och hur olika delar tillsammans blir en funkig stil.',
      'Strukturen låser inte fast dansen. Tvärtom hjälper den dansaren att förstå vad som kan varieras. Tekniken blir en grund för improvisation, fantasi och personligt uttryck – inte en ersättning för dem.',
    ],
    attributesTitle: 'The 4 attributes of Locking',
    attributesIntro:
      'I materialet formulerar Greg fyra egenskaper som behöver mötas i en locker. De beskriver inte fyra separata steg, utan fyra kvaliteter som ska finnas i hela dansen.',
    attributes: [
      {
        title: 'Attityd',
        original: 'Attitude',
        text: 'Närvaro, övertygelse och ett tydligt förhållningssätt. Dansaren visar vem den är och vågar rikta energin utåt.',
      },
      {
        title: 'Stil och grace',
        original: 'Style and Grace · Body control',
        text: 'Kroppskontroll ger linjer, balans och ett medvetet utförande. Stilen syns i hur rörelsen formas, inte bara i vilken rörelse som väljs.',
      },
      {
        title: 'Karaktärisering',
        original: 'Characterization · Become animated',
        text: 'Lockern blir animerad och låter ansikte, gester, humor och personlighet vara en aktiv del av dansen.',
      },
      {
        title: 'Pure Funk',
        original: 'Hear every instrument',
        text: 'Att höra instrumenten och reagera på musikens slag, lager och accenter. Musikaliteten driver valen i stunden.',
      },
    ],
    equationTitle: 'Gregs formel för “Funky Style”',
    equationIntro:
      'En annan bild sammanfattar metoden som en ekvation. Den kompletterar de fyra egenskaperna och gör tre träningsområden tydliga:',
    equation: [
      {
        title: 'BC',
        original: 'Body Control',
        text: 'Kontroll över form, riktning, balans och stopp.',
      },
      {
        title: 'EC',
        original: 'Enthusiastic Character',
        text: 'En levande, engagerad karaktär som kommunicerar med publiken.',
      },
      {
        title: 'PMw/m',
        original: 'Precision Moves with music',
        text: 'Rörelser som placeras precist i och tillsammans med musiken.',
      },
    ],
    equationResult: 'Funky Style',
    archiveTitle: 'Idéerna på papper',
    archiveIntro:
      'De bevarade illustrationerna visar hur Greg tänkte visuellt: en nyckel mellan “no lock” och “lock”, olika grader av precision, kroppens linjer samt fantasin som växer ur förmågan att känna musiken.',
    openImage: 'Öppna originalbild',
    imageCaptions: [
      'Nyckeln mellan “no lock” och “lock”.',
      'Tre visuella nivåer av precision.',
      'En skiss för att analysera kroppskontroll framifrån och från sidan.',
      '“Feel the music” som utgångspunkt för imagination.',
    ],
    sourceNoteTitle: 'Om det pedagogiska materialet',
    sourceNote:
      'Fotografierna är privat bevarat kursmaterial märkt “Greg Campbellock Jr. & Associates” och har delats med Locking.se. Sidans svenska och engelska texter är en redaktionell läsning av materialet. Ordet läroplan beskriver Gregs systematiska undervisning; det gör inte anspråk på att vara en universell certifieringsstandard för alla lockare.',
    sourcesTitle: 'Källor och vidare läsning',
    sources,
  },
  en: {
    intro:
      'Dave Gregory “Greg Campbellock Jr.” Pope was a master improviser, choreographer and teacher. To me, he was something even more important: my mentor. This page is about the man, the visionary and the educational structure he built to help lockers understand the dance in depth.',
    mentorEyebrow: 'Personal memory / Sweden',
    mentorTitle: 'My mentor – and a mentor to many',
    mentorQuote:
      'Greg was my mentor. To me, he was one of the very best – a mastermind with vision who could see both the dance and the person behind it.',
    mentor: [
      'He mentored dancers around the world. I believe many of us would never have learned Locking at the same depth without him. He passed on more than movement; he gave us a way to think, listen, train and discover our own character.',
      'This is also an important part of my Swedish connection to Locking. What I brought home was not only steps, but his understanding of the dance as a complete language – with body control, musicality, precision, attitude, imagination and funk.',
    ],
    lifeTitle: 'From pioneer to teacher',
    life: [
      'Greg danced in the Los Angeles club scene and became a regular Soul Train dancer. In 1972, he was part of Creative Generation at the Watts Writers Workshop alongside several other early lockers. The group brought improvisation, synchronized routines and stagecraft together.',
      'In 1973, he became one of the seven original members of The Lockers. Sources describe him as the group’s “line captain” and as an important link between social dance, the pioneers’ steps and the choreographed stage form.',
      'Teaching became increasingly central to him during the 1990s. Around the turn of the millennium, he traveled internationally as a teacher, judge and performer. His legacy therefore lives not only in what he danced, but in all the people he taught, encouraged and trusted to carry the knowledge forward.',
    ],
    curriculumEyebrow: 'Structure / Vision / Pedagogy',
    curriculumTitle: 'A curriculum for a living dance',
    curriculum: [
      'Greg made a major contribution to articulating a Locking curriculum. His notes reveal a teacher who wanted to make the invisible visible: how the body is controlled, how music becomes movement, how character is created and how separate parts combine into a funky style.',
      'The structure does not freeze the dance. It helps the dancer understand what can be varied. Technique becomes a foundation for improvisation, imagination and personal expression – not a replacement for them.',
    ],
    attributesTitle: 'The 4 attributes of Locking',
    attributesIntro:
      'In the material, Greg identifies four attributes that meet within a locker. They are not four separate steps, but four qualities intended to live throughout the dance.',
    attributes: [
      {
        title: 'Attitude',
        original: 'Attitude',
        text: 'Presence, conviction and a clear point of view. The dancer shows who they are and directs their energy outward.',
      },
      {
        title: 'Style and grace',
        original: 'Style and Grace · Body control',
        text: 'Body control creates lines, balance and intention. Style lives in how a movement is shaped, not only in which movement is chosen.',
      },
      {
        title: 'Characterization',
        original: 'Become animated',
        text: 'The locker becomes animated, allowing the face, gestures, humor and personality to take an active part in the dance.',
      },
      {
        title: 'Pure Funk',
        original: 'Hear every instrument',
        text: 'Hearing the instruments and responding to the beats, layers and accents of the music. Musicality drives choices in the moment.',
      },
    ],
    equationTitle: 'Greg’s formula for “Funky Style”',
    equationIntro:
      'Another image summarizes the method as an equation. It complements the four attributes by making three areas of practice explicit:',
    equation: [
      {
        title: 'BC',
        original: 'Body Control',
        text: 'Control of shape, direction, balance and stops.',
      },
      {
        title: 'EC',
        original: 'Enthusiastic Character',
        text: 'A vivid, engaged character that communicates with the audience.',
      },
      {
        title: 'PMw/m',
        original: 'Precision Moves with music',
        text: 'Movement placed precisely in and together with the music.',
      },
    ],
    equationResult: 'Funky Style',
    archiveTitle: 'The ideas on paper',
    archiveIntro:
      'The preserved illustrations show Greg thinking visually: a key between “no lock” and “lock”, different degrees of precision, lines through the body and imagination growing from the ability to feel the music.',
    openImage: 'Open original image',
    imageCaptions: [
      'The key between “no lock” and “lock”.',
      'Three visual levels of precision.',
      'A drawing for analyzing body control from the front and side.',
      '“Feel the music” as the starting point for imagination.',
    ],
    sourceNoteTitle: 'About the teaching material',
    sourceNote:
      'The photographs show privately preserved course material marked “Greg Campbellock Jr. & Associates” and shared with Locking.se. The Swedish and English copy on this page is an editorial reading of the material. The word curriculum describes Greg’s systematic teaching; it does not claim to be a universal certification standard for every locker.',
    sourcesTitle: 'Sources and further reading',
    sources,
  },
  fr: {
    intro:
      'Dave Gregory « Greg Campbellock Jr. » Pope était un maître de l’improvisation, chorégraphe et enseignant. Pour moi, il était plus encore : mon mentor. Cette page est consacrée à l’homme, au visionnaire et à la structure pédagogique qu’il a créée pour aider les lockers à comprendre la danse en profondeur.',
    mentorEyebrow: 'Souvenir personnel / Suède',
    mentorTitle: 'Mon mentor — et celui de beaucoup d’autres',
    mentorQuote:
      'Greg était mon mentor. À mes yeux, il comptait parmi les meilleurs — un esprit visionnaire capable de voir à la fois la danse et la personne qui se trouvait derrière.',
    mentor: [
      'Il a accompagné des danseurs dans le monde entier. Je pense que beaucoup d’entre nous n’auraient jamais appris le Locking avec la même profondeur sans lui. Il transmettait plus que des mouvements : il nous donnait une manière de penser, d’écouter, de nous entraîner et de découvrir notre propre personnage.',
      'C’est aussi une part importante de mon lien suédois avec le Locking. Je n’ai pas seulement rapporté des pas, mais sa compréhension de la danse comme un langage complet — avec contrôle du corps, musicalité, précision, attitude, imagination et funk.',
    ],
    lifeTitle: 'Du pionnier à l’enseignant',
    life: [
      'Greg dansait dans les clubs de Los Angeles et devint un danseur régulier de Soul Train. En 1972, il fit partie de Creative Generation au Watts Writers Workshop, aux côtés de plusieurs autres lockers de la première heure. Le groupe associait improvisation, routines synchronisées et travail scénique.',
      'En 1973, il devint l’un des sept membres originaux de The Lockers. Les sources le décrivent comme le « line captain » du groupe et comme un lien essentiel entre la danse sociale, les pas des pionniers et la forme chorégraphiée destinée à la scène.',
      'L’enseignement prit une place croissante dans sa vie au cours des années 1990. Autour de l’an 2000, il voyagea dans le monde entier comme enseignant, juge et artiste. Son héritage vit donc non seulement dans sa manière de danser, mais aussi chez toutes les personnes qu’il a formées, encouragées et auxquelles il a fait confiance pour transmettre le savoir.',
    ],
    curriculumEyebrow: 'Structure / Vision / Pédagogie',
    curriculumTitle: 'Un programme pour une danse vivante',
    curriculum: [
      'Greg a grandement contribué à formuler un programme pédagogique du Locking. Ses notes révèlent un enseignant qui voulait rendre visible l’invisible : comment contrôler le corps, comment la musique devient mouvement, comment créer un personnage et comment différentes composantes s’unissent dans un style funky.',
      'Cette structure ne fige pas la danse. Elle aide le danseur à comprendre ce qu’il peut faire varier. La technique devient une base pour l’improvisation, l’imagination et l’expression personnelle — elle ne les remplace pas.',
    ],
    attributesTitle: 'Les 4 attributs du Locking',
    attributesIntro:
      'Dans ce matériel, Greg distingue quatre attributs qui se rejoignent chez un locker. Il ne s’agit pas de quatre pas séparés, mais de quatre qualités destinées à vivre dans toute la danse.',
    attributes: [
      {
        title: 'Attitude',
        original: 'Attitude',
        text: 'Présence, conviction et point de vue affirmé. Le danseur montre qui il est et projette son énergie vers l’extérieur.',
      },
      {
        title: 'Style et grâce',
        original: 'Style and Grace · Body control',
        text: 'Le contrôle du corps crée lignes, équilibre et intention. Le style réside dans la manière de façonner un mouvement, et pas seulement dans le mouvement choisi.',
      },
      {
        title: 'Caractérisation',
        original: 'Become animated',
        text: 'Le locker s’anime et permet au visage, aux gestes, à l’humour et à la personnalité de participer pleinement à la danse.',
      },
      {
        title: 'Pure Funk',
        original: 'Hear every instrument',
        text: 'Entendre les instruments et répondre aux rythmes, aux couches et aux accents de la musique. La musicalité guide les choix dans l’instant.',
      },
    ],
    equationTitle: 'La formule du « Funky Style » selon Greg',
    equationIntro:
      'Une autre image résume la méthode sous forme d’équation. Elle complète les quatre attributs en rendant explicites trois domaines de pratique :',
    equation: [
      {
        title: 'BC',
        original: 'Body Control',
        text: 'Maîtrise des formes, des directions, de l’équilibre et des arrêts.',
      },
      {
        title: 'EC',
        original: 'Enthusiastic Character',
        text: 'Un personnage vivant et engagé qui communique avec le public.',
      },
      {
        title: 'PMw/m',
        original: 'Precision Moves with music',
        text: 'Un mouvement placé avec précision dans la musique et avec elle.',
      },
    ],
    equationResult: 'Funky Style',
    archiveTitle: 'Les idées sur le papier',
    archiveIntro:
      'Les illustrations conservées montrent la pensée visuelle de Greg : une clé entre « no lock » et « lock », différents degrés de précision, des lignes traversant le corps et une imagination qui naît de la capacité à ressentir la musique.',
    openImage: 'Ouvrir l’image originale',
    imageCaptions: [
      'La clé entre « no lock » et « lock ».',
      'Trois niveaux visuels de précision.',
      'Un dessin permettant d’analyser le contrôle du corps de face et de profil.',
      '« Feel the music » comme point de départ de l’imagination.',
    ],
    sourceNoteTitle: 'À propos du matériel pédagogique',
    sourceNote:
      'Les photographies montrent un support de cours conservé dans une collection privée, portant la mention « Greg Campbellock Jr. & Associates » et partagé avec Locking.se. Le texte français de cette page est une lecture éditoriale de ce matériel. Le mot programme décrit l’enseignement méthodique de Greg ; il ne prétend pas constituer une norme de certification universelle pour tous les lockers.',
    sourcesTitle: 'Sources et lectures complémentaires',
    sources,
  },
  fi: campbellockJrFi,
  ko: campbellockJrKo,
};
