import type { Locale } from '@/lib/i18n';

export type ContentPage = {
  slug: string;
  source?: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
  imageScale?: number;
  imageTransformOrigin?: string;
  kicker: Record<Locale, string>;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  group: 'history' | 'knowledge' | 'main';
};

export const contentPages: ContentPage[] = [
  {
    slug: 'about',
    source: 'about.md',
    image: '',
    kicker: { sv: 'Min väg till Locking', en: 'My journey into Locking', fr: 'Mon parcours dans le Locking' },
    title: { sv: 'Om Locking.se', en: 'About Locking.se', fr: 'À propos de Locking.se' },
    summary: {
      sv: 'Min historia och koppling till Locking i Sverige – från 1980-talet till Funkcamp och dagens generation.',
      en: 'My story and connection to Locking in Sweden – from the 1980s to Funkcamp and today’s generation.',
      fr: 'Mon histoire et mon lien avec le Locking en Suède, des années 1980 à Funkcamp et à la génération actuelle.',
    },
    group: 'main',
  },
  {
    slug: 'history',
    source: 'history.md',
    image: '/media/mavericksflat.png',
    kicker: { sv: 'Från Campbellocking till Locking', en: 'From Campbellocking to Locking', fr: 'Du Campbellocking au Locking' },
    title: { sv: 'Lockingens historia', en: 'The history of Locking', fr: 'L’histoire du Locking' },
    summary: {
      sv: 'Berättelsen om den ursprungliga eran, berättad genom pionjärernas egna perspektiv.',
      en: 'The story of the original era, told through the perspectives of its pioneers.',
      fr: 'L’histoire de la période fondatrice, racontée à travers les perspectives de ses pionniers.',
    },
    group: 'history',
  },
  {
    slug: 'memorial',
    source: 'memorial.md',
    image: '/media/penguinscene.png',
    kicker: { sv: 'Vi minns', en: 'We remember', fr: 'Nous nous souvenons' },
    title: { sv: 'Till minne av legenderna', en: 'In memory of the legends', fr: 'À la mémoire des légendes' },
    summary: {
      sv: 'En plats för att hedra dem som formade kulturen och inte längre finns med oss.',
      en: 'A place to honor those who shaped the culture and are no longer with us.',
      fr: 'Un espace pour rendre hommage à celles et ceux qui ont façonné la culture et qui nous ont quittés.',
    },
    group: 'history',
  },
  {
    slug: 'groups-and-dancers',
    source: 'groups-and-dancers.md',
    image: '/media/33rpm.png',
    kicker: { sv: 'Kollektiv kraft', en: 'Collective power', fr: 'Force collective' },
    title: { sv: 'Grupper & dansare', en: 'Groups & dancers', fr: 'Groupes & danseurs' },
    summary: {
      sv: 'Möt grupperna, crews och individerna som utvecklade uttrycket under den ursprungliga eran.',
      en: 'Meet the groups, crews and individuals who developed the form during its original era.',
      fr: 'Découvrez les groupes, crews et personnalités qui ont développé cette forme durant sa période fondatrice.',
    },
    group: 'history',
  },
  {
    slug: 'soul-train',
    source: 'soul-train.md',
    image: '/media/soultrain.png',
    kicker: { sv: 'Dansgolvet som förändrade allt', en: 'The dance floor that changed everything', fr: 'La piste de danse qui a tout changé' },
    title: { sv: 'Soul Train', en: 'Soul Train', fr: 'Soul Train' },
    summary: {
      sv: 'Programmet som gav afroamerikansk musik, dans och kreativitet en nationell scen.',
      en: 'The show that gave African American music, dance and creativity a national stage.',
      fr: 'L’émission qui a offert une scène nationale à la musique, à la danse et à la créativité afro-américaines.',
    },
    group: 'history',
  },
  {
    slug: 'wattstax',
    source: 'wattsstax.md',
    image: '/media/wattsstaxx.png',
    kicker: { sv: 'Musik, motstånd och gemenskap', en: 'Music, resistance and community', fr: 'Musique, résistance et communauté' },
    title: { sv: 'Wattstax', en: 'Wattstax', fr: 'Wattstax' },
    summary: {
      sv: 'Konserten, eran och det kulturella sammanhang som gav kraft åt rörelsen.',
      en: 'The concert, era and cultural context that gave power to the movement.',
      fr: 'Le concert, l’époque et le contexte culturel qui ont donné sa force au mouvement.',
    },
    group: 'history',
  },
  {
    slug: 'pioneers',
    source: 'pioneers-page.md',
    image: '/media/thelockerslate.png',
    kicker: { sv: 'Original generation', en: 'Original generation', fr: 'Génération fondatrice' },
    title: { sv: 'Pionjärerna', en: 'The pioneers', fr: 'Les pionniers' },
    summary: {
      sv: 'Personerna vars steg, attityd, rytm och skaparkraft byggde grunden.',
      en: 'The people whose steps, attitude, rhythm and creativity built the foundation.',
      fr: 'Les personnes dont les pas, l’attitude, le rythme et la créativité ont posé les fondations.',
    },
    group: 'knowledge',
  },
  {
    slug: 'the-line-captain',
    image: '/media/web_greg.png',
    imageFit: 'contain',
    imagePosition: 'right top',
    imageScale: 0.82,
    imageTransformOrigin: 'right top',
    kicker: { sv: 'Campbellock Jr. · Mentor · Pionjär', en: 'Campbellock Jr. · Mentor · Pioneer', fr: 'Campbellock Jr. · Mentor · Pionnier' },
    title: { sv: 'The Line Captain', en: 'The Line Captain', fr: 'The Line Captain' },
    summary: {
      sv: 'Dave Gregory Pope, hans mentorskap och den pedagogiska struktur han byggde för Locking.',
      en: 'Dave Gregory Pope, his mentorship and the educational structure he built for Locking.',
      fr: 'Dave Gregory Pope, son rôle de mentor et la structure pédagogique qu’il a bâtie pour le Locking.',
    },
    group: 'knowledge',
  },
  {
    slug: 'timeline',
    source: 'timeline.md',
    image: '/media/lockerslate70s.png',
    kicker: { sv: 'En kultur i rörelse', en: 'A culture in motion', fr: 'Une culture en mouvement' },
    title: { sv: 'Tidslinjen', en: 'Timeline of Locking', fr: 'Chronologie du Locking' },
    summary: {
      sv: 'En kronologisk ingång till viktiga ögonblick, grupper och förändringar.',
      en: 'A chronological entry point to important moments, groups and changes.',
      fr: 'Un parcours chronologique à travers les moments, groupes et évolutions marquants.',
    },
    group: 'knowledge',
  },
  {
    slug: 'steps-and-moves',
    source: 'steps-page.md',
    image: '/media/donflying.jpg',
    kicker: { sv: 'Grunden i rörelsen', en: 'The foundation in motion', fr: 'Les fondations en mouvement' },
    title: { sv: 'Steg & rörelser', en: 'Steps & moves', fr: 'Pas & mouvements' },
    summary: {
      sv: 'Namn, ursprung och berättelser bakom rörelserna som formade Locking.',
      en: 'Names, origins and stories behind the moves that shaped Locking.',
      fr: 'Les noms, les origines et les histoires des mouvements qui ont façonné le Locking.',
    },
    group: 'knowledge',
  },
  {
    slug: 'terminology',
    source: 'terminology.md',
    image: '/media/streetTerm.png',
    kicker: { sv: 'Språket bär kulturen', en: 'Language carries culture', fr: 'La langue porte la culture' },
    title: { sv: 'Gatuspråk & terminologi', en: 'Street terminology', fr: 'Vocabulaire de rue' },
    summary: {
      sv: 'Ord och begrepp får sin betydelse från människorna, platserna och tiden där de uppstod.',
      en: 'Words and terms gain meaning from the people, places and time in which they emerged.',
      fr: 'Les mots et les termes prennent leur sens auprès des personnes, dans les lieux et à l’époque où ils sont apparus.',
    },
    group: 'knowledge',
  },
  {
    slug: 'social-party',
    source: 'social-party.md',
    image: '/media/socialdance.png',
    kicker: { sv: 'Före scenen fanns festen', en: 'Before the stage, there was the party', fr: 'Avant la scène, il y avait la fête' },
    title: { sv: 'Social & Party Dances', en: 'Social & Party Dances', fr: 'Danses sociales & festives' },
    summary: {
      sv: 'Danserna, musiken och de sociala rummen som lade grunden till uttrycket.',
      en: 'The dances, music and social spaces that laid the foundation for the form.',
      fr: 'Les danses, la musique et les espaces sociaux qui ont posé les fondations de cette forme.',
    },
    group: 'knowledge',
  },
  {
    slug: 'gogo-brothers',
    source: 'gogo-brothers.md',
    image: '/media/gogobrotherswatts.png',
    kicker: { sv: 'Handshake of brotherhood', en: 'Handshake of brotherhood', fr: 'Une poignée de main fraternelle' },
    title: { sv: 'GoGo & YoYo Brothers', en: 'GoGo & YoYo Brothers', fr: 'GoGo & YoYo Brothers' },
    summary: {
      sv: 'Historien om gruppen, brödraskapet och vägen från Watts till Japan.',
      en: 'The story of the group, the brotherhood and the journey from Watts to Japan.',
      fr: 'L’histoire du groupe, de la fraternité et du voyage de Watts jusqu’au Japon.',
    },
    group: 'knowledge',
  },
  {
    slug: 'the-lockers',
    image: '/media/thelockerslline.png',
    kicker: { sv: 'Gruppen som förändrade dansscenen', en: 'The group that changed the dance scene', fr: 'Le groupe qui a transformé la scène de la danse' },
    title: { sv: 'The Lockers', en: 'The Lockers', fr: 'The Lockers' },
    summary: {
      sv: 'Från The Campbellockers till en av streetdansens mest inflytelserika grupper.',
      en: 'From The Campbellockers to one of street dance’s most influential groups.',
      fr: 'Des Campbellockers à l’un des groupes les plus influents de la street dance.',
    },
    group: 'knowledge',
  },
  {
    slug: 'stories',
    image: '/media/interview.webp',
    kicker: { sv: 'Röster från kulturen', en: 'Voices from the culture', fr: 'Les voix de la culture' },
    title: { sv: 'Intervjuer & artiklar', en: 'Interviews & articles', fr: 'Entretiens & articles' },
    summary: {
      sv: 'Coming soon.',
      en: 'Coming soon.',
      fr: 'Bientôt disponible.',
    },
    group: 'main',
  },
  {
    slug: 'contact',
    image: '/media/wattshandshake.png',
    kicker: { sv: 'Hör av dig', en: 'Get in touch', fr: 'Écrivez-nous' },
    title: { sv: 'Kontakt', en: 'Contact', fr: 'Contact' },
    summary: {
      sv: 'Kontakta mig med frågor, rättelser eller berättelser till Locking.se.',
      en: 'Contact me with questions, corrections or stories for Locking.se.',
      fr: 'Contactez-nous pour poser une question, proposer une correction ou partager une histoire avec Locking.se.',
    },
    group: 'main',
  },
];

export const pageBySlug = new Map(contentPages.map((page) => [page.slug, page]));

export const menuGroups = {
  history: contentPages.filter((page) => page.group === 'history'),
  knowledge: contentPages.filter((page) => page.group === 'knowledge'),
};
