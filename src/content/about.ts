import type { Locale } from '@/lib/i18n';

type JourneySection = {
  period: string;
  title: string;
  paragraphs: string[];
};

type AboutStory = {
  intro: string;
  sections: JourneySection[];
  dedicationTitle: string;
  dedication: string[];
  closing: string;
  tributeTitle: string;
  tribute: string[];
};

export const aboutStory: Record<Locale, AboutStory> = {
  sv: {
    intro:
      'Det här är berättelsen om min koppling till Locking – från filmerna på 1980-talet till möten med pionjärer, resan till Los Angeles och skapandet av Funkcamp.',
    sections: [
      {
        period: '1980-talet',
        title: 'Allt började med filmerna',
        paragraphs: [
          'Mitt intresse för Locking började redan på 1980-talet, genom filmer som Breakin’. Sedan dess har stilen legat mig varmt om hjärtat. Dansstegen fanns med från tiden då jag såg Breakin’, även om jag då ännu inte hade hela historien eller de rätta namnen på det jag såg.',
        ],
      },
      {
        period: '1990-talet',
        title: 'Klipp, samtal och ny kunskap',
        paragraphs: [
          'Det var först på 1990-talet som jag började få rätt information om stilen. Jag fick tag på videoklipp och pratade med människor som Damon Frost, Patrik Helge aka Prime, Be-bop, Karl Dyall, Micke Strandljung och många fler.',
          'Senare fick jag se material med The Lockers, Don Campbell, Suga-Pop, Skeeter Rabbit och andra dansare. Rörelserna kändes redan bekanta, men nu började också människorna, rötterna och sammanhanget bakom dem bli synliga.',
        ],
      },
      {
        period: '2005',
        title: 'Los Angeles och starten på Funkcamp',
        paragraphs: [
          'År 2005 reste vi till USA och tog klasser för Don Campbell och andra pionjärer i Los Angeles. Redan samma höst skapade vi eventet Funkcamp. Det blev en samlingspunkt för människor med ett starkt intresse för Locking, från hela Sverige och så småningom även från andra delar av världen.',
          'Några av oss som tog passionen längre in i stilens grunder och rötter var Emenuell Schutt, Oskar Pitre, Chalire Prag och Patrik Helge. Det finns samtidigt många andra som måste nämnas, bland andra Isse Omari, Karim Carlsson, Joe Jobe och Benke.',
        ],
      },
      {
        period: 'Idag',
        title: 'En ny generation för kulturen vidare',
        paragraphs: [
          'Sedan Funkcamp startade 2005 har utvecklingen fortsatt genom yngre generationer här i Sverige. Funky 4 Brothers gjorde ett stort avtryck. Därefter har bland andra Arvidos, Yared, Akira, Jörgen och Mimmi fortsatt att bidra – och idag finns det ännu fler.',
          'Varje generation hittar sitt eget uttryck, men relationen till musiken, människorna och historien behöver fortsätta vara levande.',
        ],
      },
    ],
    dedicationTitle: 'Varför den här sidan finns',
    dedication: [
      'Den här sidan är dedikerad till dansstilen Locking – eller Campbellocking, som det ursprungligen kallades efter Don Campbells personliga freestyle. Från en människas sätt att röra sig växte en dans fram genom en hel grupp av kreativa människor. Den spreds genom USA och vidare ut i världen via tv, media och film. Här står vi idag.',
      'Sidan finns för att lyfta fram historien, människornas egna berättelser och dansen som den faktiskt är: energifylld, funkig, rå och skapad av folket. Från klubbar och sociala dansgolv till dansskolor och stora event.',
    ],
    closing: 'Mer kärlek och själ. Till döden skiljer oss åt.',
    tributeTitle: 'En tribute till O.G. Skeeter Rabbit',
    tribute: [
      'En stor del av den historiska information som har format och inspirerat den här sidan kommer från O.G. Skeeter Rabbit och hans arbete med LockerLegends.',
      'Hans vilja att dokumentera kulturen, människorna och deras egna berättelser har inspirerat mig att föra historien vidare – inte bara hans historia, utan allas. De röster som byggde kulturen ska få höras, minnas och leva vidare för kommande generationer.',
      'Tack, Skeeter, för kunskapen, arbetet och inspirationen.',
    ],
  },
  en: {
    intro:
      'This is the story of my connection to Locking – from the films of the 1980s to meeting pioneers, traveling to Los Angeles and creating Funkcamp.',
    sections: [
      {
        period: 'The 1980s',
        title: 'It started with the films',
        paragraphs: [
          'My interest in Locking began in the 1980s through films such as Breakin’. The style has stayed close to my heart ever since. The steps were already there when I first saw Breakin’, even though I did not yet know the full history or the correct names for what I was seeing.',
        ],
      },
      {
        period: 'The 1990s',
        title: 'Clips, conversations and new knowledge',
        paragraphs: [
          'It was not until the 1990s that I began receiving accurate information about the style. I found video clips and spoke with people including Damon Frost, Patrik Helge aka Prime, Be-bop, Karl Dyall, Micke Strandljung and many others.',
          'Later I saw material featuring The Lockers, Don Campbell, Suga-Pop, Skeeter Rabbit and other dancers. The movements already felt familiar, but now the people, roots and cultural context behind them were becoming visible too.',
        ],
      },
      {
        period: '2005',
        title: 'Los Angeles and the beginning of Funkcamp',
        paragraphs: [
          'In 2005 we traveled to the United States and took classes with Don Campbell and other pioneers in Los Angeles. That same autumn, we created the Funkcamp event. It became a meeting place for people with a deep interest in Locking from across Sweden and, in time, from other parts of the world.',
          'Some of us who took this passion deeper into the foundations and roots of the style were Emenuell Schutt, Oskar Pitre, Chalire Prag and Patrik Helge. Many others also deserve to be mentioned, including Isse Omari, Karim Carlsson, Joe Jobe and Benke.',
        ],
      },
      {
        period: 'Today',
        title: 'A new generation carries the culture forward',
        paragraphs: [
          'Since Funkcamp began in 2005, younger generations in Sweden have continued to move the culture forward. Funky 4 Brothers made a major impact. Arvidos, Yared, Akira, Jörgen and Mimmi are among those who followed – and there are many more today.',
          'Every generation finds its own expression, but the relationship to the music, the people and the history must remain alive.',
        ],
      },
    ],
    dedicationTitle: 'Why this site exists',
    dedication: [
      'This site is dedicated to the dance style Locking – or Campbellocking, as it was originally called after Don Campbell’s personal freestyle. One person’s way of moving grew into a dance through an entire group of creative people. It spread across the United States and then around the world through television, media and film. This is where we stand today.',
      'The site exists to bring forward the history, people’s own stories and the dance as it really is: energetic, funky, raw and created by the people. From clubs and social dance floors to dance schools and major events.',
    ],
    closing: 'More love and soul. Until death do us part.',
    tributeTitle: 'A tribute to O.G. Skeeter Rabbit',
    tribute: [
      'A large part of the historical information that shaped and inspired this site comes from O.G. Skeeter Rabbit and his work with LockerLegends.',
      'His commitment to documenting the culture, its people and their own stories inspired me to carry the history forward – not only his story, but everyone’s. The voices that built the culture deserve to be heard, remembered and kept alive for future generations.',
      'Thank you, Skeeter, for the knowledge, the work and the inspiration.',
    ],
  },
};
