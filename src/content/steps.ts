import type { Locale } from '@/lib/i18n';
import type { DanceStep } from '@/lib/content';
import { stepsStoryFi } from './fi.generated';
import { stepsStoryKo } from './ko.generated';

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
  fr: {
    countLabel: 'pas et mouvements',
    intro: [
      'Les pas et mouvements du Campbellocking et du Locking ne sont pas nés sous la forme d’une liste fermée. Don Campbell y a intégré ses propres idées et des éléments déjà présents autour de lui, tandis que d’autres pionniers créaient, transformaient, nommaient et combinaient des mouvements au fil du développement de la danse.',
      'Une partie de ce vocabulaire s’appuie sur des gestes déjà employés au quotidien — pointer du doigt, saluer ou se taper dans la main — ainsi que sur des social party dances. D’autres éléments ont des précédents plus anciens dans l’African American vernacular jazz dance et les claquettes, notamment le travail rythmique des pieds, les splits, l’acrobatie et la présence scénique. Ces formes s’inscrivent dans un continuum afrodiasporique plus vaste, lié à des pratiques de danse africaines traditionnelles. Cela ne signifie pas que chaque pas ci-dessous possède une source unique et directe : le Locking s’est développé par héritage, échange, transformation et invention nouvelle dans le Los Angeles afro-américain.',
    ],
    frameworkEyebrow: 'Un document d’O.G. Skeeter Rabbit',
    frameworkTitle: 'Cinq composantes qui, ensemble, forment le Locking',
    frameworkIntro:
      'O.G. Skeeter Rabbit a décrit cinq familles de mouvements pour montrer que le Locking dépasse largement un seul geste. Ces composantes peuvent exister séparément, mais elles prennent une fonction particulière lorsqu’elles sont associées au timing, au caractère et aux locks de la danse.',
    movements: [
      {
        title: 'Improvisation et bases techniques',
        original: 'Improvisational Locking',
        text: 'Locks, points, hand slaps, wrist rolls, freezes et autres mouvements fondamentaux utilisés en freestyle.',
      },
      {
        title: 'Pas de Locking synchronisés',
        original: 'Synchronized Locking Steps',
        text: 'Pas développés par plusieurs pionniers et utilisés en solo, en duo ou en groupe pour construire des routines.',
      },
      {
        title: 'Cascades et tricks',
        original: 'Show-stopping moves',
        text: 'Splits, knee drops, dives, flips et tricks avec accessoires qui deviennent partie intégrante du Locking lorsqu’ils sont reliés au reste de son langage.',
      },
      {
        title: 'Social party dances',
        original: 'Social Party Dances',
        text: 'Les danses sociales de l’époque apportent groove, timing et transitions entre les mouvements de Locking, tout en maintenant vivant le lien avec la piste de danse.',
      },
      {
        title: 'Danses spécialisées',
        original: 'Specialty dances',
        text: 'Robot, slow motion et mime sont des formes distinctes qui peuvent être intégrées pour créer du contraste, de l’animation et de nouvelles combinaisons.',
      },
    ],
    documentAlt: 'Le texte The Locking artform and movement d’O.G. Skeeter Rabbit',
    documentCaption: 'Texte original d’O.G. Skeeter Rabbit, conservé et partagé avec Locking.se.',
    openImage: 'Ouvrir l’image originale',
    listNote: 'Les noms et les attributions peuvent varier selon la tradition orale et les sources proches des participants. Lorsque les éléments disponibles ne suffisent pas, l’attribution reste donc ouverte. Cette liste pourra être enrichie à mesure que de nouvelles informations seront documentées.',
    sourcesTitle: 'Sources et lectures complémentaires',
  },
  fi: stepsStoryFi,
  ko: stepsStoryKo,
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

const frenchStepDescriptions: Record<string, string> = {
  '1': 'Le Basic Lock consiste à suspendre ou figer les bras sur les temps de la musique. Don Campbell l’a créé à la fin des années 1960 ou au début des années 1970, lorsqu’il s’arrêtait en essayant une social dance populaire appelée Funky Chicken. Ces pauses furent appelées locks, ou locking up. Plus tard, Leo « Fluky Luke » Williamson introduisit un lock singulier en posant le bord extérieur des deux mains sur la taille, les coudes verrouillés vers l’avant : le Leo Lock.',
  '2': 'Ce hand slap exprime un accord entre deux personnes, ou avec soi-même pendant la danse. Don Campbell l’intégrait entre ses locks et ses social dances. Donner ou recevoir un five était depuis longtemps un geste de reconnaissance dans la communauté afro-américaine, bien avant son intégration à la danse. Lorsque les gens souriaient et approuvaient un mouvement, Don et d’autres pionniers tendaient souvent la main pour recevoir un five ; répondre par une tape signifiait accepter ce signe d’approbation.',
  '3': 'Ces points furent ensuite appelés Uncle Sam points, en référence à l’affiche de recrutement des forces armées américaines où le personnage d’Uncle Sam pointe vers le spectateur. Pointer vers un ami ou un partenaire constituait aussi un message et un signe de reconnaissance dans la communauté afro-américaine, notamment pour saluer quelqu’un à distance, avant que Don Campbell ne l’intègre à son style. Selon le récit, une femme assise à une table riait de sa manière singulière de danser ; Don a alors fait ce que tout le monde faisait et l’a pointée pour lui montrer qu’il l’avait vue. Ce fut le premier point élémentaire du Locking. Avec le développement de la danse, d’autres pionniers ont introduit des doubles et triples points qui ont fluidifié son rythme.',
  '4': 'Les back hand claps et back-front hand claps étaient également fondamentaux au début. Marqués par des départs et arrêts brusques, ils étaient souvent exécutés seuls pendant le pacing ou entre d’autres mouvements. Don intégra aussi les premiers wrist rolls à son style. Par la suite, diverses combinaisons de wrist rolls et d’autres mouvements furent placées avant les back-front hand claps, contribuant à la continuité et à l’évolution de la danse.',
  '5,': 'L’Uplock, souvent appelé aujourd’hui Muscle Man, consiste à lancer les deux bras vers le haut, généralement au début d’un mouvement de Locking. C’est une annonce comparable à un geste de salutation dans la rue : « Hey » ou « What’s up? »',
  '6': 'Créé par Don Campbell, ce déplacement glissé lui permettait d’avancer entre ses locks et ses stunts.',
  '6b': 'Mouvement gestuel qui imite un guitariste jouant au rythme de la musique. LockerLegends le documente dans de premières apparitions de Damita Jo Freeman sur Soul Train et dans la danse qu’elle partageait en couple avec Don Campbell.',
  '7': 'Créé par Jimmy « Scooby Doo » Foster. Le Scooby Doo de base commence par une annonce d’uplock à deux mains, suivie d’un kick step.',
  '8': 'Également créé par Jimmy « Scooby Doo » Foster, le Scoobot de base est un pas singulier.',
  '9': 'Le mouvement imite l’auto-stop : le danseur se déplace de côté, pouce levé, en l’associant au groove funky des hanches du Rocksteady.',
  '10': 'La manière de marcher de Jimmy Foster, proche de ce que Greg appelait le Pimp Walk.',
  '11': 'Créé par Greg « Campbellock Jr. » Pope. De nombreux mouvements qu’il a introduits dans le Locking ont favorisé la fluidité et la continuité du style. Greg a également transformé le Scoobot en mouvement sauté. Certains mouvements cités plus haut, comme le Sneek et le Stop N Go (Quickies), furent créés par Jimmy « Scooby Doo » Foster avec la contribution de Greg Campbellock Jr. Beaucoup furent nommés par Damita Jo Freeman.',
  '12': 'Le Sneek était une variante de la danse soul appelée Breakdown. Le haut du corps pivotait d’un côté à l’autre tandis que les bras extérieurs se levaient dans un geste de recherche. Plus tard, The Lockers ont utilisé le bras intérieur afin de mieux s’adapter aux angles de caméra lors de prestations commerciales.',
  '13': 'Les Quickies, parfois appelés Stop N Go, sont devenus une variante de l’ancien pas Sara Walk. Leur mouvement rapide imitait le redressement élastique d’un personnage de dessin animé.',
  '14': 'Créé par James « Skeeter Rabbit » Higgins. Ce pas s’inspirait des shuffles des Nicholas Brothers et du jeu de rue hopscotch. En ajoutant cette fin au Scooby Doo, Skeeter en fit un mouvement continu qu’il exécutait de plusieurs manières. D’autres pionniers ont créé des variantes du Skeeter Rabbit shuffle. Au milieu des années 1970, un développement notable fut l’intégration de mouvements issus de la culture des gangs de rue : la street dance appelée Crip Walk fut ajoutée comme finition du Skeeter Rabbit par Michael « Peekaboo » Frenke et Leo « Shaboo » Walker.',
  '15': 'Les hat twirls existaient déjà chez différents artistes avant d’être intégrés au Locking. Plusieurs lockers les ont adaptés, notamment « Sneaky T » et John « Okie Doke » Wilson. Le mouvement devint ensuite l’une des signatures de Don Campbell, mais le hat spin de base lui fut d’abord enseigné par Skeeter Rabbit en 1974, pendant la première grande tournée de The Lockers.',
  '16': 'Leo « Fluky Luke » Williamson a fait du Which-A-Way un mouvement signature du Locking. À l’origine, Damita Jo Freeman l’avait créé comme social party dance step, en tournant les hanches plus lentement que Fluky. Elle appelait sa version le « DJ Which-A-Way » et on peut la voir l’exécuter dans plusieurs extraits de Soul Train.',
  '17': 'Le Leo Lock était exécuté par Leo et d’autres lockers très souples, capables de verrouiller leurs bras avec les mains sur les hanches et les coudes tournés vers l’avant.',
  '18': 'Le Leo Walk est un déplacement latéral accompagné d’un mouvement de balancement.',
  '19': 'Geste près du sol dans lequel le danseur frappe le sol au rythme de la musique, comme s’il cherchait à attraper ou tuer un insecte. Killing Roaches, Slapping Roaches et Catching Roaches sont différents noms employés pour ce mouvement. Les récits et la terminologie divergent ; aucun créateur unique n’est donc indiqué ici.',
  '20': 'Introduit dans le Locking par Fred « Mr. Penguin » Berry, le Slow Motion est une imitation du Locking inspirée du mime, dans laquelle tout est ralenti et les expressions du visage sont accentuées.',
  '21': 'Le Volkswagon s’inspire de la conduite d’une voiture à boîte manuelle. Il imite le changement de vitesse et les à-coups de la voiture au rythme de la musique.',
  '22': 'The Helicopter était la manière de Mr. Penguin de pointer vers toutes les personnes autour de lui et de les saluer dans un mouvement continu.',
  '23': 'Créé par Tony Lewis et Buddy Lombard des GoGo Brothers, le Keepa Runnin est un mouvement de footwork combinant kick, step et slide.',
  '24': 'Le Sara Walk est un mouvement de pacing vers l’avant et l’arrière.',
  '25': 'Mouvement avec un chapeau dans lequel on secoue la tête en imitant une mouche qui bourdonne.',
  '26': 'Mouvement au sol proche d’un handspring arrière, créé et intégré à un style singulier de Locking par Alpha Omega Anderson. Il comprenait une forme rapide et tournoyante de Locking, semblable à un tire-bouchon.',
  '27': 'Les half splits étaient déjà exécutés par des chanteurs, danseurs et groupes comme les Nicholas Brothers et le Sammy Davis Jr. Trio. Dans les années 1960 et 1970, James Brown les a rendus populaires. Ses danses et ses pas étaient largement imités lors de fêtes sociales afro-américaines, avec des half splits et des mouvements au sol comme The Alligator. Le Camel Walk et le Mashed Potato furent également repris de son spectacle. Cette influence fut immense. Dans le prolongement des party dances, Don Campbell a continué d’utiliser half splits et knee drops entre ses social dances et ses locks. Il a introduit les kick splits dans le Locking, bien que James Brown, des danseurs de claquettes et des party dancers les aient pratiqués auparavant. High-flying knee drops, running knee drops et Swan Dive ont eux aussi intégré son style.',
  '28': 'Créé par John « Sambo Lock » McCloud, ce stunt dynamique et audacieux consiste à sauter, tendre les deux pieds devant soi et retomber sur les fesses exactement sur un temps musical.',
  '29': 'Vues pour la première fois chez Damita Jo Freeman et Jimmy « Scooby Doo » Foster pendant un concours de danse de Soul Train. Certaines poignées de main du Locking furent créées par Greg « Campbellock Jr. » Pope et d’abord exécutées par Greg Campbellock Jr. et Fluky Luke — voir la vidéo de Wattstax. Les GoGo Brothers en ont introduit plusieurs autres. Elles représentaient les poignées de main d’unité pratiquées dans les rues des quartiers populaires.',
  '30': 'Bien que le Robot ne soit pas techniquement un lock, le Roboting fait partie du Locking depuis l’amitié entre Don Campbell et Charles « Robot » Washington. Il fut intégré au développement du mouvement comme aux spectacles commerciaux de Locking et lui restera donc toujours lié. Charles « Robot » Washington a introduit le Roboting comme danse et dans la subculture Locking.',
};

export function getDanceStepCopy(step: DanceStep, lang: Locale): DanceStep {
  if (lang !== 'fr') return step;
  return { ...step, desc: frenchStepDescriptions[step.id] ?? step.desc };
}
