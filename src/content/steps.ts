import type { Locale } from '@/lib/i18n';

type MovementFamily = {
  title: string;
  original: string;
  text: string;
};

type StepsStory = {
  countLabel: string;
  intro: string[];
  frameworkEyebrow: string;
  frameworkTitle: string;
  frameworkIntro: string;
  movements: MovementFamily[];
  documentAlt: string;
  documentCaption: string;
  openImage: string;
  listNote: string;
  sourcesTitle: string;
};

export const stepsStory: Record<Locale, StepsStory> = {
  sv: {
    countLabel: 'steg och rörelser',
    intro: [
      'Stegen och rörelserna i Campbellocking och Locking uppstod inte som en sluten lista. Don Campbell förde in egna idéer och sådant som redan levde i hans omgivning, och andra pionjärer skapade, förändrade, namngav och kombinerade material när dansen utvecklades.',
      'En del av materialet bygger på gester som människor redan använde – att peka, hälsa eller ge five – och på sociala partydanser. Andra delar har äldre föregångare inom afroamerikansk vernacular jazz dance och tap, till exempel rytmiskt fotarbete, splits, akrobatik och sceniskt uttryck. Dessa former ingår i ett längre afrodiasporiskt sammanhang med kopplingar till traditionella afrikanska danspraktiker. Det betyder inte att varje steg nedan har en enda rak källa; Locking växte fram genom både arv, utbyte, omformning och nya uppfinningar i det afroamerikanska Los Angeles.',
    ],
    frameworkEyebrow: 'O.G. Skeeter Rabbits dokument',
    frameworkTitle: 'Fem delar som tillsammans formar Locking',
    frameworkIntro:
      'O.G. Skeeter Rabbit beskrev fem rörelsefamiljer för att visa hur Locking blev större än en enskild rörelse. Delarna kan existera var för sig, men får en särskild funktion när de kombineras med dansens timing, karaktär och locks.',
    movements: [
      {
        title: 'Improvisation och teknisk grund',
        original: 'Improvisational Locking',
        text: 'Locks, points, hand slaps, wrist rolls, freezes och andra grundrörelser som kan användas i fri dans.',
      },
      {
        title: 'Synkroniserade Lockingsteg',
        original: 'Synchronized Locking Steps',
        text: 'Steg utvecklade av flera pionjärer och använda individuellt, i duos och grupper för att bygga rutiner.',
      },
      {
        title: 'Stunts och tricks',
        original: 'Show-stopping moves',
        text: 'Splits, knee drops, dives, flips och rekvisitatrick som blir del av Locking när de integreras med dansens övriga språk.',
      },
      {
        title: 'Sociala partydanser',
        original: 'Social Party Dances',
        text: 'Tidens sociala danser ger groove, timing och övergångar mellan Lockingrörelserna och håller kopplingen till dansgolvet levande.',
      },
      {
        title: 'Specialiserade danser',
        original: 'Specialty dances',
        text: 'Robot, slow motion och mime är egna uttryck som kan vävas in för kontrast, animation och nya kombinationer.',
      },
    ],
    documentAlt: 'O.G. Skeeter Rabbits text The Locking artform and movement',
    documentCaption: 'Originaltext av O.G. Skeeter Rabbit, bevarad och delad med Locking.se.',
    openImage: 'Öppna originalbild',
    listNote: 'Benämningar och upphovsuppgifter kan skilja sig mellan den muntliga traditionen och olika deltagarnära källor. Därför lämnas upphov öppet när underlaget inte räcker. Listan kan byggas ut när fler uppgifter kan beläggas.',
    sourcesTitle: 'Källor och vidare läsning',
  },
  en: {
    countLabel: 'steps and moves',
    intro: [
      'The steps and moves within Campbellocking and Locking did not begin as a closed list. Don Campbell brought in ideas of his own and material already present around him, while other pioneers created, transformed, named and combined movements as the dance developed.',
      'Some of the material draws on gestures people already used – pointing, greeting or giving five – and on social party dances. Other elements have older precedents in African American vernacular jazz dance and tap, including rhythmic footwork, splits, acrobatics and showmanship. These forms sit within a longer African diasporic continuum connected to traditional African dance practices. This does not mean that every step below has one direct source; Locking grew through inheritance, exchange, transformation and new invention in African American Los Angeles.',
    ],
    frameworkEyebrow: 'A document by O.G. Skeeter Rabbit',
    frameworkTitle: 'Five parts that form Locking together',
    frameworkIntro:
      'O.G. Skeeter Rabbit described five movement families to show how Locking became larger than any single move. The parts can exist independently, but take on a particular role when combined with the dance’s timing, character and locks.',
    movements: [
      {
        title: 'Improvisation and technical foundation',
        original: 'Improvisational Locking',
        text: 'Locks, points, hand slaps, wrist rolls, freezes and other foundational movements used within freestyle.',
      },
      {
        title: 'Synchronized Locking steps',
        original: 'Synchronized Locking Steps',
        text: 'Steps developed by several pioneers and used by individuals, duos and groups to construct routines.',
      },
      {
        title: 'Stunts and tricks',
        original: 'Show-stopping moves',
        text: 'Splits, knee drops, dives, flips and prop tricks that become part of Locking when integrated with the rest of its language.',
      },
      {
        title: 'Social party dances',
        original: 'Social Party Dances',
        text: 'The social dances of the time provide groove, timing and transitions between Locking movements while keeping the dance-floor connection alive.',
      },
      {
        title: 'Specialty dances',
        original: 'Specialty dances',
        text: 'Robot, slow motion and mime are distinct forms that can be woven in to create contrast, animation and new combinations.',
      },
    ],
    documentAlt: 'O.G. Skeeter Rabbit’s text The Locking artform and movement',
    documentCaption: 'Original text by O.G. Skeeter Rabbit, preserved and shared with Locking.se.',
    openImage: 'Open original image',
    listNote: 'Names and creator claims can differ across oral tradition and participant-adjacent sources. Attribution is therefore left open where the evidence is insufficient. This list can grow as more details can be documented.',
    sourcesTitle: 'Sources and further reading',
  },
};

export const stepsSources = [
  {
    label: 'LockerLegends — The Steps & Moves of Locking',
    url: 'https://www.lockerlegends.net/the-steps-moves-of-locking/',
  },
  {
    label: 'Library of Congress — Tap Dance in America: A Short History',
    url: 'https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/tap-dance/',
  },
  {
    label: 'E. Moncell Durden — The Morphology of Afro-Kinetic Memory',
    url: 'https://academic.oup.com/florida-scholarship-online/book/44412/chapter-abstract/373712883',
  },
];
