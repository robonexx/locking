import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, Mic2, Sparkles } from 'lucide-react';
import { ContentProse } from '@/components/ContentProse';
import { Reveal } from '@/components/Reveal';
import { SourceNotice } from '@/components/SourceNotice';
import { contentPages } from '@/content/site';
import { readRecoveredPage } from '@/lib/content';
import type { Locale } from '@/lib/i18n';
import styles from './HomePage.module.css';

export async function HomePage({ lang }: { lang: Locale }) {
  const originalHome = await readRecoveredPage('home.md');
  const featured = contentPages.filter((page) => ['history', 'soul-train', 'pioneers'].includes(page.slug));
  const copy = lang === 'sv'
    ? {
        eyebrow: 'Street history · Los Angeles · 1960–70-tal', titleTop: 'Känn rytmen.', titleBottom: 'Lär historien.',
        lead: 'Ett levande kulturarkiv om människorna, platserna och rörelsen bakom Campbellocking och Locking.',
        cta: 'Börja med historien', archive: 'Utforska arkivet', manifesto: 'Mer än steg.',
        manifestoBody: 'Locking föddes ur musik, gemenskap, stolthet och kreativt motstånd. Här står rösterna från den ursprungliga eran i centrum.',
        featured: 'Tre vägar in', stories: 'Nya röster. Verkliga berättelser.',
        storiesBody: 'Intervjuer, artiklar och senare nyheter får en egen, enkel redaktionell del — den enda delen som behöver CMS.',
        original: 'Räddat från 2022-sidan',
      }
    : {
        eyebrow: 'Street history · Los Angeles · 1960s–70s', titleTop: 'Feel the rhythm.', titleBottom: 'Know the history.',
        lead: 'A living cultural archive about the people, places and movement behind Campbellocking and Locking.',
        cta: 'Start with the history', archive: 'Explore the archive', manifesto: 'More than steps.',
        manifestoBody: 'Locking grew from music, community, pride and creative resistance. The voices of the original era stay at the center here.',
        featured: 'Three ways in', stories: 'New voices. Real stories.',
        storiesBody: 'Interviews, articles and later news get one focused editorial area — the only part that needs a CMS.',
        original: 'Recovered from the 2022 site',
      };

  return (
    <>
      <section className={styles.hero}>
        <Image src="/media/soultrain.png" alt="Soul Train dance floor" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.noise} aria-hidden="true" />
        <div className={`shell ${styles.heroContent}`}>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1><span>{copy.titleTop}</span><span>{copy.titleBottom}</span></h1>
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
          <p className="eyebrow eyebrow-dark">Culture / Context / Credit</p>
          <h2>{copy.manifesto}</h2>
          <p className={styles.largeCopy}>{copy.manifestoBody}</p>
        </div>
        <Sparkles className={styles.manifestoIcon} aria-hidden="true" />
      </Reveal>

      <section className={`${styles.featureSection} section-space`}>
        <Reveal className="shell">
          <div className={styles.sectionHeading}><span>02</span><h2>{copy.featured}</h2></div>
          <div className={styles.featureGrid}>
            {featured.map((page, index) => (
              <Link className={`${styles.featureCard} ${styles[`card${index + 1}`]}`} href={`/${lang}/${page.slug}`} key={page.slug}>
                <div className={styles.cardImageWrap}>
                  <Image src={page.image} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" className={styles.cardImage} />
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
          <div><p className="eyebrow">Interviews / Editorials / News</p><h2>{copy.stories}</h2><p>{copy.storiesBody}</p></div>
          <Link className={styles.circleLink} href={`/${lang}/stories`} aria-label={copy.stories}><ArrowDownRight aria-hidden="true" /></Link>
        </Reveal>
      </section>

      <Reveal as="section" className={`shell section-space ${styles.archive}`}>
        <div className={styles.sectionHeading}><span>03</span><h2>{copy.original}</h2></div>
        <SourceNotice lang={lang} />
        <ContentProse>{originalHome}</ContentProse>
      </Reveal>
    </>
  );
}
