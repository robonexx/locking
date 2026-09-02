import type { Locale } from '@/lib/i18n';

export type MemorialPerson = {
  id: string;
  name: string;
  role: string;
  image: string;
  contribution: string;
  text: string;
  group: 'pioneer' | 'inspiration';
};

type MemorialPage = {
  intro: string;
  pioneersTitle: string;
  inspirationsTitle: string;
  openLabel: string;
  closeLabel: string;
  people: MemorialPerson[];
};

export const memorial: Record<Locale, MemorialPage> = {
  sv: {
    intro:
      'Den gamla sidan byggdes som en rad personliga minneskort. Här får samma idé leva vidare: ett rum för människorna vars dans, musik, arbete och generositet fortsätter att finnas i kulturen.',
    pioneersTitle: 'Pionjärer från ursprungseran vi minns',
    inspirationsTitle: 'Musiken och plattformarna som bar rörelsen',
    openLabel: 'Läs minnesord',
    closeLabel: 'Stäng',
    people: [
      {
        id: 'don-campbell',
        name: 'Don Campbell',
        role: 'The Godfather · The Campbellock',
        image: '/media/web_don.png',
        contribution: 'The Lock · Pacing · Hand Slaps · Campbell Walk · Splits',
        text: 'Don skapade The Campbellock, det personliga och improviserade uttryck som växte till dansen vi känner som Locking. Hans rytmiska stopp, gester och kontakt med publiken gav världen en ny dansform. Utan hans idé och mod hade ingen av oss haft samma dans att utöva, utveckla och älska.',
        group: 'pioneer',
      },
      {
        id: 'fred-berry',
        name: 'Fred “Mr. Penguin” Berry',
        role: 'The Lockers · Dansare · Skådespelare',
        image: '/media/web_fred.png',
        contribution: 'The Helicopter · Slow Motion · Master Butt Drop',
        text: 'Många känner Fred som Rerun från tv-serien What’s Happening!!, men i Locking-familjen var han också “Ping”: vännen, underhållaren och den kraftfulla dansaren i The Lockers. Han använde sin kropp med humor, grace och stolthet och beskrivs som en människa som gärna delade med sig. Hans leende och tunga landningar glöms inte.',
        group: 'pioneer',
      },
      {
        id: 'shabba-doo',
        name: 'Adolfo “Shabba-Doo” Quiñones',
        role: 'The Lockers · Dansare · Koreograf · Skådespelare',
        image: '/media/web_shab.png',
        contribution: 'Sway · Scenisk precision · Global spridning',
        text: 'Shabba-Doo var en explosiv och smidig medlem av The Lockers och blev senare känd som Ozone i Breakin’ och Breakin’ 2. Genom dans, koreografi och film hjälpte han Locking och västkustens streetdans att nå en publik över hela världen.',
        group: 'pioneer',
      },
      {
        id: 'greg-pope',
        name: 'Greg “Campbellock Jr.” Pope',
        role: 'Pionjär · Koreograf · Historiebärare',
        image: '/media/web_greg.png',
        contribution: 'Stop & Go · Handshakes · Rutiner och undervisning',
        text: 'Greg var en av personerna bakom LockerLegends när sidan startade 2004. Hans mål var att synliggöra både Locking och de många människor och sammanhang som byggde kulturen. I workshops delade han steg, koncept och historia. Vi minns en stor dansare, koreograf och förespråkare för en korrekt och inkluderande berättelse.',
        group: 'pioneer',
      },
      {
        id: 'don-cornelius',
        name: 'Don Cornelius',
        role: 'Soul Train · Producent · Programledare',
        image: '/media/web_doncorne.png',
        contribution: 'Plattformen Soul Train',
        text: 'Som skapare och programledare för Soul Train öppnade Don Cornelius ett fönster mot afroamerikansk musik, mode, kreativitet och dans. Programmet gav artister och streetdansare en nationell scen och blev avgörande för att Locking skulle kunna inspirera människor långt utanför Los Angeles.',
        group: 'inspiration',
      },
      {
        id: 'james-brown',
        name: 'James Brown',
        role: 'The Godfather of Soul',
        image: '/media/web_theboss.png',
        contribution: 'Funk · Rytm · Attityd · Energi',
        text: 'James Browns musik, energi och rörelsespråk var en stark drivkraft för funken och för dansarna. Musiken gav Locking puls, stolthet och en kraft som var större än underhållning. Hans inflytande känns fortfarande varje gång en locker svarar på ett break, ett slag eller ett rop i musiken.',
        group: 'inspiration',
      },
      {
        id: 'aretha-franklin',
        name: 'Aretha Franklin',
        role: 'The Queen of Soul',
        image: '/media/web_aretha.png',
        contribution: 'Soul · Stöd · Scen',
        text: 'Aretha Franklin var en av soulmusikens största röster och visade stöd för The Lockers, bland annat genom att dela scen och sammanhang med gruppen. Hennes musik och närvaro hör till den ljudvärld som gav rörelsen styrka och själ.',
        group: 'inspiration',
      },
      {
        id: 'prince',
        name: 'Prince',
        role: 'Artist · Kompositör · Multiinstrumentalist',
        image: '/media/web_prince.png',
        contribution: 'Minneapolis sound · Funk · Frihet',
        text: 'Prince byggde ett eget musikaliskt universum av funk, soul, rock, pop och kompromisslös individualitet. Hans rytm, scenpersonlighet och kreativitet fortsätter att ge dansare mod att vara originella.',
        group: 'inspiration',
      },
      {
        id: 'michael-jackson',
        name: 'Michael Jackson',
        role: 'Artist · Dansare · Global inspiration',
        image: '/media/web_mj.png',
        contribution: 'Musikalitet · Scen · Global räckvidd',
        text: 'Michael Jackson tog sitt musik- och dansuttryck till en publik av sällan skådad storlek. Hans spins, glides, precision och tolkningar av streetdans gjorde rörelsespråken synliga för miljoner. För Locking-kulturen blev han både musikalisk inspiration och en länk mellan sociala dansmiljöer, scenen och världen.',
        group: 'inspiration',
      },
    ],
  },
  en: {
    intro:
      'The old page was built as a series of personal memorial cards. The same idea lives on here: a room for the people whose dance, music, work and generosity remain present in the culture.',
    pioneersTitle: 'Original pioneers we remember',
    inspirationsTitle: 'The music and platforms that carried the movement',
    openLabel: 'Read tribute',
    closeLabel: 'Close',
    people: [
      {
        id: 'don-campbell', name: 'Don Campbell', role: 'The Godfather · The Campbellock', image: '/media/web_don.png',
        contribution: 'The Lock · Pacing · Hand Slaps · Campbell Walk · Splits',
        text: 'Don created The Campbellock, the personal and improvisational expression that grew into the dance we know as Locking. His rhythmic stops, gestures and connection with the audience gave the world a new dance form. Without his idea and courage, none of us would have the same dance to practise, develop and love.', group: 'pioneer',
      },
      {
        id: 'fred-berry', name: 'Fred “Mr. Penguin” Berry', role: 'The Lockers · Dancer · Actor', image: '/media/web_fred.png',
        contribution: 'The Helicopter · Slow Motion · Master Butt Drop',
        text: 'Many knew Fred as Rerun from What’s Happening!!, but to the Locking family he was also “Ping”: a friend, entertainer and powerful dancer in The Lockers. He used his body with humour, grace and pride and is remembered as someone who shared what he had. His smile and thunderous landings are not forgotten.', group: 'pioneer',
      },
      {
        id: 'shabba-doo', name: 'Adolfo “Shabba-Doo” Quiñones', role: 'The Lockers · Dancer · Choreographer · Actor', image: '/media/web_shab.png',
        contribution: 'Sway · Stage precision · Global reach',
        text: 'Shabba-Doo was an explosive, smooth member of The Lockers and later became known as Ozone in Breakin’ and Breakin’ 2. Through dance, choreography and film, he helped Locking and West Coast street dance reach audiences around the world.', group: 'pioneer',
      },
      {
        id: 'greg-pope', name: 'Greg “Campbellock Jr.” Pope', role: 'Pioneer · Choreographer · Historian', image: '/media/web_greg.png',
        contribution: 'Stop & Go · Handshakes · Routines and teaching',
        text: 'Greg was one of the people behind LockerLegends when the website began in 2004. His aim was to make both Locking and its many contributors and contexts visible. In workshops he shared steps, concepts and history. We remember a great dancer, choreographer and advocate for an accurate, inclusive history.', group: 'pioneer',
      },
      {
        id: 'don-cornelius', name: 'Don Cornelius', role: 'Soul Train · Producer · Host', image: '/media/web_doncorne.png', contribution: 'The Soul Train platform',
        text: 'As the creator and host of Soul Train, Don Cornelius opened a window into African American music, fashion, creativity and dance. The programme gave artists and street dancers a national stage and helped Locking inspire people far beyond Los Angeles.', group: 'inspiration',
      },
      {
        id: 'james-brown', name: 'James Brown', role: 'The Godfather of Soul', image: '/media/web_theboss.png', contribution: 'Funk · Rhythm · Attitude · Energy',
        text: 'James Brown’s music, energy and movement were a powerful force for funk and for dancers. The music gave Locking pulse, pride and a power larger than entertainment. His influence remains every time a locker answers a break, hit or shout in the music.', group: 'inspiration',
      },
      {
        id: 'aretha-franklin', name: 'Aretha Franklin', role: 'The Queen of Soul', image: '/media/web_aretha.png', contribution: 'Soul · Support · Stage',
        text: 'Aretha Franklin was one of soul music’s greatest voices and showed support for The Lockers, sharing stages and important moments with the group. Her music and presence belong to the sound that gave the movement its strength and soul.', group: 'inspiration',
      },
      {
        id: 'prince', name: 'Prince', role: 'Artist · Composer · Multi-instrumentalist', image: '/media/web_prince.png', contribution: 'Minneapolis sound · Funk · Freedom',
        text: 'Prince created a musical universe of funk, soul, rock, pop and uncompromising individuality. His rhythm, stage presence and creativity continue to give dancers permission to be original.', group: 'inspiration',
      },
      {
        id: 'michael-jackson', name: 'Michael Jackson', role: 'Artist · Dancer · Global inspiration', image: '/media/web_mj.png', contribution: 'Musicality · Stage · Global reach',
        text: 'Michael Jackson brought his music and dance expression to an audience of extraordinary scale. His spins, glides, precision and interpretations of street dance made these forms visible to millions. For Locking culture, he became both a musical inspiration and a bridge between social dance spaces, stage and the world.', group: 'inspiration',
      },
    ],
  },
};
