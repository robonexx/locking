import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Mail, Mic2, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { contentPages } from '@/content/site';
import type { Locale } from '@/lib/i18n';
import styles from './HomePage.module.css';

const primarySlugs = ['history', 'soul-train', 'pioneers'] as const;

const featuredSlugs = [
  'steps-and-moves',
  'groups-and-dancers',
  'the-line-captain',
  'the-lockers',
  'gogo-brothers',
] as const;

const cultureSources = [
  {
    label: 'Los Angeles Times — A hoofer’s place in history',
    url: 'https://www.latimes.com/archives/la-xpm-1995-07-23-tm-26818-story.html',
  },
  {
    label: 'National Museum of African American History & Culture — Black is Beautiful',
    url: 'https://nmaahc.si.edu/explore/stories/black-beautiful-emergence-black-culture-and-identity-60s-and-70s',
  },
  {
    label: 'Smithsonian — The Will to Adorn: African American Dress and Identity',
    url: 'https://folklife.si.edu/will-to-adorn',
  },
];

export function HomePage({ lang }: { lang: Locale }) {
  const primaryPages = primarySlugs
    .map((slug) => contentPages.find((page) => page.slug === slug))
    .filter((page): page is NonNullable<typeof page> => Boolean(page));
  const featured = featuredSlugs
    .map((slug) => contentPages.find((page) => page.slug === slug))
    .filter((page): page is NonNullable<typeof page> => Boolean(page));

  const copy = lang === 'sv'
    ? {
        eyebrow: 'Campbellocking · Locking · Los Angeles',
        titleLines: ['Kulturen.', 'Dansen.', 'Historien.'],
        lead: 'Ett levande kulturarkiv om människorna, platserna, musiken och rörelsen bakom Campbellocking och Locking.',
        cta: 'Börja med historien',
        archive: 'Möt pionjärerna',
        heroAlt: 'Dansare på Soul Trains dansgolv',
        manifestoEyebrow: 'Kultur / Kontext / Erkännande',
        manifesto: 'Mer än en dansstil.',
        manifestoBody: 'Locking växte fram ur musik, gemenskap, personligt uttryck, stolthet och kreativitet. Här får människorna, sammanhangen och rörelsen ta plats tillsammans.',
        rhythm: 'Känn rytmen. Lär historien.',
        rhythmEyebrow: 'Kultur i rörelse',
        rhythmIntro: 'För att förstå Locking behöver man både höra musiken och se den kultur som dansen växte ur. Groove, kläder, karaktär och socialt samspel är inte dekoration runt stegen – de hjälper till att bära uttrycket.',
        musicEyebrow: 'Soul / Funk / Musicality',
        musicTitle: 'Musiken är en byggsten',
        musicBody: 'Soul och funk gav dansgolvet groove, puls och attityd. Basgångar, trummor, breaks och tydliga accenter skapar platser att stanna, explodera, leka och svara på. Locking ligger inte ovanpå musiken; dansaren för ett samtal med den.',
        clothesEyebrow: 'Style / Character / Identity',
        clothesTitle: 'Kläderna förstärker uttrycket',
        clothesBody: 'Stora hattar, randiga strumpor, uppvikta eller korta byxor, färgstarka skjortor, flugor och handskar blev delar av Lockingens visuella språk. På scen kunde de förstärka linjer, hat tricks och karaktär. Stilen är ett kulturhistoriskt uttryck och en form av självpresentation – inte en uniform som krävs för att dansa.',
        musicAlt: 'Dansare på Soul Trains dansgolv',
        clothesAlt: 'The Lockers i sina karaktäristiska scenkläder',
        sources: 'Kulturkällor och vidare läsning',
        ways: 'Tre vägar in',
        featured: 'Utforska dansen',
        stories: 'Nya röster. Verkliga berättelser.',
        storiesEyebrow: 'Intervjuer / Redaktionellt / Nyheter',
        storiesBody: 'Intervjuer och artiklar kommer att ge fler människor och perspektiv en egen plats på Locking.se.',
        contactEyebrow: 'Frågor / Rättelser / Berättelser',
        contactTitle: 'Hjälp historien att fortsätta röra sig.',
        contactBody: 'Har du kunskap, en rättelse eller en berättelse som borde finnas här? Hör av dig. Du kan också följa arbetet och mötena kring dansen genom Funkcamp.',
        contact: 'Kontakta Locking.se',
        funkcamp: 'Besök Funkcamp.se',
      }
    : lang === 'fr'
      ? {
          eyebrow: 'Campbellocking · Locking · Los Angeles',
          titleLines: ['La culture.', 'La danse.', 'L’histoire.'],
          lead: 'Une archive culturelle vivante consacrée aux personnes, aux lieux, à la musique et au mouvement derrière le Campbellocking et le Locking.',
          cta: 'Commencer par l’histoire',
          archive: 'Rencontrer les pionniers',
          heroAlt: 'Des danseurs sur la piste de Soul Train',
          manifestoEyebrow: 'Culture / Contexte / Reconnaissance',
          manifesto: 'Plus qu’un style de danse.',
          manifestoBody: 'Le Locking est né de la musique, de la communauté, de l’expression personnelle, de la fierté et de la créativité. Ici, les personnes, les contextes et le mouvement trouvent ensemble toute leur place.',
          rhythm: 'Ressentez le rythme. Découvrez l’histoire.',
          rhythmEyebrow: 'La culture en mouvement',
          rhythmIntro: 'Pour comprendre le Locking, il faut entendre la musique et voir la culture dont la danse est issue. Le groove, les vêtements, le personnage et l’échange social ne sont pas de simples ornements autour des pas : ils contribuent à porter toute l’expression.',
          musicEyebrow: 'Soul / Funk / Musicalité',
          musicTitle: 'La musique est un élément fondateur',
          musicBody: 'La soul et le funk ont donné à la piste de danse son groove, sa pulsation et son attitude. Lignes de basse, batterie, breaks et accents marqués créent des moments où s’arrêter, exploser, jouer et répondre. Le Locking ne se pose pas sur la musique : le danseur dialogue avec elle.',
          clothesEyebrow: 'Style / Personnage / Identité',
          clothesTitle: 'Les vêtements amplifient l’expression',
          clothesBody: 'Grands chapeaux, chaussettes rayées, pantalons resserrés ou raccourcis, chemises colorées, nœuds papillon et gants ont intégré le langage visuel du Locking. Sur scène, ils pouvaient accentuer les lignes, les hat tricks et les personnages. Ce style est une expression culturelle et une forme de présentation de soi — pas un uniforme indispensable pour danser.',
          musicAlt: 'Des danseurs sur la piste de Soul Train',
          clothesAlt: 'The Lockers dans leurs tenues de scène caractéristiques',
          sources: 'Sources culturelles et lectures complémentaires',
          ways: 'Trois portes d’entrée',
          featured: 'Explorer la danse',
          stories: 'De nouvelles voix. Des histoires vécues.',
          storiesEyebrow: 'Entretiens / Éditorial / Actualités',
          storiesBody: 'Les entretiens et les articles offriront une place dédiée à davantage de personnes et de perspectives sur Locking.se.',
          contactEyebrow: 'Questions / Corrections / Histoires',
          contactTitle: 'Aidez l’histoire à rester en mouvement.',
          contactBody: 'Vous détenez un savoir, une correction ou une histoire qui mérite d’être ici ? Écrivez-nous. Vous pouvez aussi suivre le travail et les rencontres autour de la danse par l’intermédiaire de Funkcamp.',
          contact: 'Contacter Locking.se',
          funkcamp: 'Visiter Funkcamp.se',
        }
      : lang === 'fi'
        ? {
            eyebrow: 'Campbellocking · Locking · Los Angeles',
            titleLines: ['Kulttuuri.', 'Tanssi.', 'Historia.'],
            lead: 'Elävä kulttuuriarkisto Campbellockingin ja Lockingin taustalla olevista ihmisistä, paikoista, musiikista ja liikkeestä.',
            cta: 'Aloita historiasta',
            archive: 'Tutustu pioneereihin',
            heroAlt: 'Tanssijoita Soul Trainin tanssilattialla',
            manifestoEyebrow: 'Kulttuuri / Konteksti / Tunnustus',
            manifesto: 'Enemmän kuin tanssityyli.',
            manifestoBody: 'Locking kasvoi musiikista, yhteisöstä, henkilökohtaisesta ilmaisusta, ylpeydestä ja luovuudesta. Täällä ihmiset, asiayhteydet ja liike saavat tilaa yhdessä.',
            rhythm: 'Tunne rytmi. Opi historia.',
            rhythmEyebrow: 'Kulttuuri liikkeessä',
            rhythmIntro: 'Lockingin ymmärtämiseksi on kuultava musiikki ja nähtävä kulttuuri, josta tanssi kasvoi. Groove, vaatetus, hahmo ja sosiaalinen vuorovaikutus eivät ole askelten ympärillä olevaa koristelua – ne kannattelevat ilmaisua.',
            musicEyebrow: 'Soul / Funk / Musikaalisuus',
            musicTitle: 'Musiikki on rakennuspalikka',
            musicBody: 'Soul ja funk toivat tanssilattialle grooven, sykkeen ja asenteen. Bassolinjat, rummut, breakit ja terävät aksentit luovat paikkoja pysähtyä, räjähtää, leikkiä ja vastata. Locking ei vain asetu musiikin päälle, vaan tanssija käy sen kanssa vuoropuhelua.',
            clothesEyebrow: 'Tyyli / Hahmo / Identiteetti',
            clothesTitle: 'Vaatetus vahvistaa ilmaisua',
            clothesBody: 'Suuret hatut, raidalliset sukat, kapenevat tai lyhyet housut, värikkäät paidat, rusetit ja käsineet tulivat osaksi Lockingin visuaalista kieltä. Lavalla ne saattoivat korostaa linjoja, hat trickejä ja hahmoa. Tyyli on kulttuurinen ilmaus ja tapa esittää itsensä – ei tanssimiseen vaadittava univormu.',
            musicAlt: 'Tanssijoita Soul Trainin tanssilattialla',
            clothesAlt: 'The Lockers tunnusomaisissa esiintymisasuissaan',
            sources: 'Kulttuurilähteet ja lisälukemista',
            ways: 'Kolme reittiä sisään',
            featured: 'Tutustu tanssiin',
            stories: 'Uusia ääniä. Todellisia tarinoita.',
            storiesEyebrow: 'Haastattelut / Artikkelit / Uutiset',
            storiesBody: 'Haastattelut ja artikkelit antavat useammille ihmisille ja näkökulmille oman paikan Locking.se-sivustolla.',
            contactEyebrow: 'Kysymykset / Korjaukset / Tarinat',
            contactTitle: 'Auta pitämään historia liikkeessä.',
            contactBody: 'Onko sinulla tietoa, korjaus tai tarina, joka kuuluu tänne? Ota yhteyttä. Voit myös seurata tanssiin liittyvää työtä ja tapaamisia Funkcampin kautta.',
            contact: 'Ota yhteyttä Locking.seen',
            funkcamp: 'Vieraile Funkcamp.se-sivustolla',
          }
        : lang === 'ko'
          ? {
              eyebrow: 'Campbellocking · Locking · Los Angeles',
              titleLines: ['문화.', '춤.', '역사.'],
              lead: '캠벨락킹과 락킹을 만들어 온 사람들, 장소, 음악, 움직임을 담아 가는 살아 있는 문화 아카이브입니다.',
              cta: '역사부터 시작하기',
              archive: '파이오니어 만나기',
              heroAlt: 'Soul Train 댄스 플로어의 댄서들',
              manifestoEyebrow: '문화 / 맥락 / 크레딧',
              manifesto: '단순한 댄스 스타일 그 이상.',
              manifestoBody: '락킹은 음악, 공동체, 개인의 표현, 자부심, 창의성 속에서 성장했습니다. 이곳에서는 사람과 맥락, 그리고 움직임을 함께 바라봅니다.',
              rhythm: '리듬을 느끼고, 역사를 알아가세요.',
              rhythmEyebrow: '움직이는 문화',
              rhythmIntro: '락킹을 이해하려면 음악을 듣는 것과 동시에 이 춤이 자라난 문화를 바라봐야 합니다. 그루브, 의상, 캐릭터, 사람들 사이의 교류는 스텝 주변의 장식이 아니라 표현 자체를 지탱하는 요소입니다.',
              musicEyebrow: 'Soul / Funk / Musicality',
              musicTitle: '음악은 락킹을 이루는 토대입니다',
              musicBody: '소울과 펑크는 댄스 플로어에 그루브, 맥박, 태도를 불어넣었습니다. 베이스라인, 드럼, 브레이크, 선명한 액센트는 멈추고, 폭발하고, 장난치고, 음악에 응답할 지점을 만들어 줍니다. 락킹은 음악 위에 얹히는 춤이 아니라, 댄서가 음악과 대화하는 방식입니다.',
              clothesEyebrow: 'Style / Character / Identity',
              clothesTitle: '의상은 표현을 더 선명하게 만듭니다',
              clothesBody: '큰 모자, 줄무늬 양말, 폭을 좁히거나 짧게 입은 바지, 화려한 셔츠, 보타이, 장갑은 락킹의 시각적 언어의 일부가 되었습니다. 무대에서는 라인, hat trick, 캐릭터를 더욱 강조하기도 했습니다. 이 스타일은 문화적 표현이자 자기 자신을 보여 주는 방식이지, 락킹을 추기 위해 반드시 갖춰야 하는 유니폼은 아닙니다.',
              musicAlt: 'Soul Train 댄스 플로어의 댄서들',
              clothesAlt: '특징적인 무대 의상을 입은 The Lockers',
              sources: '문화 자료와 더 읽어볼 내용',
              ways: '세 가지 시작점',
              featured: '락킹 더 알아보기',
              stories: '새로운 목소리. 실제 이야기.',
              storiesEyebrow: '인터뷰 / 에디토리얼 / 뉴스',
              storiesBody: '인터뷰와 기사를 통해 더 많은 사람과 관점이 Locking.se 안에서 자신의 자리를 가질 수 있도록 할 예정입니다.',
              contactEyebrow: '질문 / 정정 / 이야기',
              contactTitle: '역사가 계속 움직일 수 있도록 함께해 주세요.',
              contactBody: '이곳에 꼭 담겨야 할 지식, 정정할 내용, 또는 이야기가 있나요? 연락해 주세요. Funkcamp를 통해 춤을 둘러싼 활동과 만남도 함께 따라갈 수 있습니다.',
              contact: 'Locking.se에 연락하기',
              funkcamp: 'Funkcamp.se 방문하기',
            }
          : {
        eyebrow: 'Campbellocking · Locking · Los Angeles',
        titleLines: ['The culture.', 'The dance.', 'The history.'],
        lead: 'A living cultural archive about the people, places, music and movement behind Campbellocking and Locking.',
        cta: 'Start with the history',
        archive: 'Meet the pioneers',
        heroAlt: 'Dancers on the Soul Train dance floor',
        manifestoEyebrow: 'Culture / Context / Credit',
        manifesto: 'More than a dance style.',
        manifestoBody: 'Locking grew from music, community, personal expression, pride and creativity. Here, the people, contexts and movement are given space together.',
        rhythm: 'Feel the rhythm. Know the history.',
        rhythmEyebrow: 'Culture in motion',
        rhythmIntro: 'To understand Locking, we need to hear the music and see the culture from which the dance grew. Groove, clothing, character and social exchange are not decoration around the steps – they help carry the form.',
        musicEyebrow: 'Soul / Funk / Musicality',
        musicTitle: 'Music is a building block',
        musicBody: 'Soul and funk gave the dance floor groove, pulse and attitude. Bass lines, drums, breaks and sharp accents create places to stop, explode, play and answer back. Locking does not sit on top of the music; the dancer is in conversation with it.',
        clothesEyebrow: 'Style / Character / Identity',
        clothesTitle: 'Clothing amplifies expression',
        clothesBody: 'Large hats, striped socks, pegged or cropped trousers, colorful shirts, bow ties and gloves became part of Locking’s visual language. On stage they could emphasize lines, hat tricks and character. The style is a cultural expression and a form of self-presentation – not a uniform required in order to dance.',
        musicAlt: 'Dancers on the Soul Train dance floor',
        clothesAlt: 'The Lockers in their characteristic stage clothing',
        sources: 'Cultural sources and further reading',
        ways: 'Three ways in',
        featured: 'Explore the dance',
        stories: 'New voices. Real stories.',
        storiesEyebrow: 'Interviews / Editorials / News',
        storiesBody: 'Interviews and articles will give more people and perspectives a dedicated place on Locking.se.',
        contactEyebrow: 'Questions / Corrections / Stories',
        contactTitle: 'Help keep the history moving.',
        contactBody: 'Do you have knowledge, a correction or a story that belongs here? Get in touch. You can also follow the work and gatherings around the dance through Funkcamp.',
        contact: 'Contact Locking.se',
        funkcamp: 'Visit Funkcamp.se',
      };

  return (
    <>
      <section className={styles.hero}>
        <Image src="/media/soultrain.png" alt={copy.heroAlt} fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.noise} aria-hidden="true" />
        <div className={`shell ${styles.heroContent}`}>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.titleLines.map((line) => <span key={line}>{line}</span>)}</h1>
          <p className={styles.heroLead}>{copy.lead}</p>
          <div className={styles.actions}>
            <Link className={`${styles.button} ${styles.primary}`} href={`/${lang}/history`}>
              {copy.cta}<ArrowDownRight aria-hidden="true" />
            </Link>
            <Link className={`${styles.button} ${styles.ghost}`} href={`/${lang}/pioneers`}>{copy.archive}</Link>
          </div>
        </div>
        <p className={styles.verticalTag} aria-hidden="true">EDUCATE B4U RECREATE</p>
      </section>

      <Reveal as="section" className={`shell section-space ${styles.manifesto}`}>
        <div className={styles.sectionNumber}>01</div>
        <div>
          <p className="eyebrow eyebrow-dark">{copy.manifestoEyebrow}</p>
          <h2>{copy.manifesto}</h2>
          <p className={styles.largeCopy}>{copy.manifestoBody}</p>
        </div>
        <Sparkles className={styles.manifestoIcon} aria-hidden="true" />
      </Reveal>

      <section className={`${styles.featureSection} section-space`}>
        <Reveal className="shell">
          <div className={styles.sectionHeading}><span>02</span><h2>{copy.ways}</h2></div>
          <div className={styles.waysGrid}>
            {primaryPages.map((page, index) => (
              <Link className={`${styles.featureCard} ${styles[`card${index + 1}`]}`} href={`/${lang}/${page.slug}`} key={page.slug}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={page.image}
                    alt=""
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                    className={styles.cardImage}
                    style={{ objectFit: page.imageFit, objectPosition: page.imagePosition }}
                  />
                </div>
                <p>{page.kicker[lang]}</p><h3>{page.title[lang]}</h3><ArrowDownRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={`${styles.rhythmSection} section-space`}>
        <div className="shell">
          <Reveal className={styles.rhythmHeading} distance="short">
            <span>03</span>
            <div>
              <p className="eyebrow">{copy.rhythmEyebrow}</p>
              <h2>{copy.rhythm}</h2>
              <p>{copy.rhythmIntro}</p>
            </div>
          </Reveal>

          <div className={styles.cultureGrid}>
            <Reveal as="article" className={styles.cultureCard} distance="short">
              <div className={styles.cultureImage}>
                <Image src="/media/soultrain.png" alt={copy.musicAlt} fill sizes="(max-width: 760px) 100vw, 50vw" />
              </div>
              <div className={styles.cultureCopy}>
                <p className="eyebrow">{copy.musicEyebrow}</p>
                <h3>{copy.musicTitle}</h3>
                <p>{copy.musicBody}</p>
              </div>
            </Reveal>

            <Reveal as="article" className={`${styles.cultureCard} ${styles.clothesCard}`} distance="short">
              <div className={styles.cultureImage}>
                <Image src="/media/thelockerslline.png" alt={copy.clothesAlt} fill sizes="(max-width: 760px) 100vw, 50vw" />
              </div>
              <div className={styles.cultureCopy}>
                <p className="eyebrow">{copy.clothesEyebrow}</p>
                <h3>{copy.clothesTitle}</h3>
                <p>{copy.clothesBody}</p>
              </div>
            </Reveal>
          </div>

          <Reveal className={styles.researchLinks} distance="short">
            <h3>{copy.sources}</h3>
            <ul>
              {cultureSources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.label}<ArrowUpRight aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className={`${styles.featureSection} section-space`}>
        <Reveal className="shell">
          <div className={styles.sectionHeading}><span>04</span><h2>{copy.featured}</h2></div>
          <div className={styles.featureGrid}>
            {featured.map((page, index) => (
              <Link className={`${styles.featureCard} ${styles[`card${index + 1}`]}`} href={`/${lang}/${page.slug}`} key={page.slug}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={page.image}
                    alt=""
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                    className={styles.cardImage}
                    style={{ objectFit: page.imageFit, objectPosition: page.imagePosition }}
                  />
                </div>
                <p>{page.kicker[lang]}</p><h3>{page.title[lang]}</h3><ArrowDownRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={styles.storiesBand}>
        <Reveal className={`shell ${styles.storiesInner}`} distance="short">
          <Mic2 aria-hidden="true" />
          <div><p className="eyebrow">{copy.storiesEyebrow}</p><h2>{copy.stories}</h2><p>{copy.storiesBody}</p></div>
          <Link className={styles.circleLink} href={`/${lang}/stories`} aria-label={copy.stories}><ArrowDownRight aria-hidden="true" /></Link>
        </Reveal>
      </section>

      <section className={styles.contactBand}>
        <Reveal className={`shell ${styles.contactInner}`} distance="short">
          <Mail aria-hidden="true" />
          <div>
            <p className="eyebrow">{copy.contactEyebrow}</p>
            <h2>{copy.contactTitle}</h2>
            <p>{copy.contactBody}</p>
            <div className={styles.contactActions}>
              <Link className={`${styles.button} ${styles.contactPrimary}`} href={`/${lang}/contact`}>
                {copy.contact}<ArrowDownRight aria-hidden="true" />
              </Link>
              <a className={`${styles.button} ${styles.contactGhost}`} href="https://funkcamp.se" target="_blank" rel="noreferrer">
                {copy.funkcamp}<ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
