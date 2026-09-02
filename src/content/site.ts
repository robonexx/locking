import type { Locale } from '@/lib/i18n';

export type ContentPage = {
  slug: string;
  source?: string;
  image: string;
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
    kicker: { sv: 'Min väg till Locking', en: 'My journey into Locking' },
    title: { sv: 'Om Locking.se', en: 'About Locking.se' },
    summary: {
      sv: 'Från Breakin’ på 1980-talet till Los Angeles, Funkcamp och dagens svenska generation.',
      en: 'From Breakin’ in the 1980s to Los Angeles, Funkcamp and today’s Swedish generation.',
    },
    group: 'main',
  },
  {
    slug: 'history',
    source: 'history.md',
    image: '/media/mavericksflat.png',
    kicker: { sv: 'Från Campbellocking till Locking', en: 'From Campbellocking to Locking' },
    title: { sv: 'Lockingens historia', en: 'The history of Locking' },
    summary: {
      sv: 'Berättelsen om den ursprungliga eran, berättad genom pionjärernas egna perspektiv.',
      en: 'The story of the original era, told through the perspectives of its pioneers.',
    },
    group: 'history',
  },
  {
    slug: 'memorial',
    source: 'memorial.md',
    image: '/media/penguinscene.png',
    kicker: { sv: 'Vi minns', en: 'We remember' },
    title: { sv: 'Till minne av legenderna', en: 'In memory of the legends' },
    summary: {
      sv: 'En plats för att hedra dem som formade kulturen och inte längre finns med oss.',
      en: 'A place to honor those who shaped the culture and are no longer with us.',
    },
    group: 'history',
  },
  {
    slug: 'groups-and-dancers',
    source: 'groups-and-dancers.md',
    image: '/media/33rpm.png',
    kicker: { sv: 'Kollektiv kraft', en: 'Collective power' },
    title: { sv: 'Grupper & dansare', en: 'Groups & dancers' },
    summary: {
      sv: 'Möt grupperna, crews och individerna som utvecklade uttrycket under den ursprungliga eran.',
      en: 'Meet the groups, crews and individuals who developed the form during its original era.',
    },
    group: 'history',
  },
  {
    slug: 'soul-train',
    source: 'soul-train.md',
    image: '/media/soultrain.png',
    kicker: { sv: 'Dansgolvet som förändrade allt', en: 'The dance floor that changed everything' },
    title: { sv: 'Soul Train', en: 'Soul Train' },
    summary: {
      sv: 'Programmet som gav afroamerikansk musik, dans och kreativitet en nationell scen.',
      en: 'The show that gave African American music, dance and creativity a national stage.',
    },
    group: 'history',
  },
  {
    slug: 'wattstax',
    source: 'wattsstax.md',
    image: '/media/wattsstaxx.png',
    kicker: { sv: 'Musik, motstånd och gemenskap', en: 'Music, resistance and community' },
    title: { sv: 'Wattstax', en: 'Wattstax' },
    summary: {
      sv: 'Konserten, eran och det kulturella sammanhang som gav kraft åt rörelsen.',
      en: 'The concert, era and cultural context that gave power to the movement.',
    },
    group: 'history',
  },
  {
    slug: 'pioneers',
    source: 'pioneers-page.md',
    image: '/media/thelockerslate.png',
    kicker: { sv: 'Original generation', en: 'Original generation' },
    title: { sv: 'Pionjärerna', en: 'The pioneers' },
    summary: {
      sv: 'Personerna vars steg, attityd, rytm och skaparkraft byggde grunden.',
      en: 'The people whose steps, attitude, rhythm and creativity built the foundation.',
    },
    group: 'knowledge',
  },
  {
    slug: 'timeline',
    source: 'timeline.md',
    image: '/media/lockerslate70s.png',
    kicker: { sv: 'En kultur i rörelse', en: 'A culture in motion' },
    title: { sv: 'Tidslinjen', en: 'Timeline of Locking' },
    summary: {
      sv: 'En kronologisk ingång till viktiga ögonblick, grupper och förändringar.',
      en: 'A chronological entry point to important moments, groups and changes.',
    },
    group: 'knowledge',
  },
  {
    slug: 'steps-and-moves',
    source: 'steps-page.md',
    image: '/media/donflying.jpg',
    kicker: { sv: 'Grunden i rörelsen', en: 'The foundation in motion' },
    title: { sv: 'Steg & rörelser', en: 'Steps & moves' },
    summary: {
      sv: 'Namn, ursprung och berättelser bakom rörelserna som formade Locking.',
      en: 'Names, origins and stories behind the moves that shaped Locking.',
    },
    group: 'knowledge',
  },
  {
    slug: 'terminology',
    source: 'terminology.md',
    image: '/media/streetTerm.png',
    kicker: { sv: 'Språket bär kulturen', en: 'Language carries culture' },
    title: { sv: 'Gatuspråk & terminologi', en: 'Street terminology' },
    summary: {
      sv: 'Ord och begrepp får sin betydelse från människorna, platserna och tiden där de uppstod.',
      en: 'Words and terms gain meaning from the people, places and time in which they emerged.',
    },
    group: 'knowledge',
  },
  {
    slug: 'social-party',
    source: 'social-party.md',
    image: '/media/socialdance.png',
    kicker: { sv: 'Före scenen fanns festen', en: 'Before the stage, there was the party' },
    title: { sv: 'Sociala partydanser', en: 'Social party dances' },
    summary: {
      sv: 'Danserna, musiken och de sociala rummen som lade grunden till uttrycket.',
      en: 'The dances, music and social spaces that laid the foundation for the form.',
    },
    group: 'knowledge',
  },
  {
    slug: 'gogo-brothers',
    source: 'gogo-brothers.md',
    image: '/media/gogobrotherswatts.png',
    kicker: { sv: 'Handshake of brotherhood', en: 'Handshake of brotherhood' },
    title: { sv: 'GoGo & YoYo Brothers', en: 'GoGo & YoYo Brothers' },
    summary: {
      sv: 'Historien om gruppen, brödraskapet och vägen från Watts till Japan.',
      en: 'The story of the group, the brotherhood and the journey from Watts to Japan.',
    },
    group: 'knowledge',
  },
  {
    slug: 'the-lockers',
    image: '/media/thelockerslline.png',
    kicker: { sv: 'Gruppen som förändrade dansscenen', en: 'The group that changed the dance scene' },
    title: { sv: 'The Lockers', en: 'The Lockers' },
    summary: {
      sv: 'Från The Campbellockers till en av streetdansens mest inflytelserika grupper.',
      en: 'From The Campbellockers to one of street dance’s most influential groups.',
    },
    group: 'knowledge',
  },
  {
    slug: 'stories',
    source: 'blog-index.md',
    image: '/media/interview.webp',
    kicker: { sv: 'Röster från kulturen', en: 'Voices from the culture' },
    title: { sv: 'Intervjuer & artiklar', en: 'Interviews & articles' },
    summary: {
      sv: 'Det här blir den redaktionella delen som senare kopplas till det lilla CMS:et.',
      en: 'This will become the editorial section connected to the small CMS later.',
    },
    group: 'main',
  },
  {
    slug: 'contact',
    source: 'contact.md',
    image: '/media/wattshandshake.png',
    kicker: { sv: 'Hör av dig', en: 'Get in touch' },
    title: { sv: 'Kontakt', en: 'Contact' },
    summary: {
      sv: 'Frågor, rättelser eller material till arkivet är välkomna.',
      en: 'Questions, corrections and contributions to the archive are welcome.',
    },
    group: 'main',
  },
];

export const pageBySlug = new Map(contentPages.map((page) => [page.slug, page]));

export const menuGroups = {
  history: contentPages.filter((page) => page.group === 'history'),
  knowledge: contentPages.filter((page) => page.group === 'knowledge'),
};
