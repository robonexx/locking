import Image from 'next/image';
import { ArrowUpRight, Download, GitBranch, Star } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SourceList } from '@/components/SourceList';
import { timelineContent, timelineSources } from '@/content/timeline';
import type { Locale } from '@/lib/i18n';
import styles from './TimelinePage.module.css';

const chartImages = [
  '/media/locking-history-chart-1.jpg',
  '/media/locking-history-chart-2.jpg',
] as const;

export function TimelinePage({ lang }: { lang: Locale }) {
  const copy = timelineContent[lang];

  return (
    <div>
      <Reveal as="section" className={styles.intro}>
        <p className="eyebrow eyebrow-dark">
          {lang === 'sv' ? 'Källkarta / 1970–2007' : lang === 'fr' ? 'Diagramme source / 1970–2007' : 'Source map / 1970–2007'}
        </p>
        <h2>{copy.introTitle}</h2>
        {copy.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <div className={styles.legend} aria-label={lang === 'sv' ? 'Förklaring' : lang === 'fr' ? 'Légende' : 'Legend'}>
          <span><Star aria-hidden="true" />{copy.keyEventLabel}</span>
          <span><GitBranch aria-hidden="true" />{copy.branchLabel}</span>
        </div>
      </Reveal>

      {copy.eras.map((era, eraIndex) => (
        <section className={styles.era} key={era.range}>
          <Reveal className={styles.eraHeader} distance="short">
            <span>{String(eraIndex + 1).padStart(2, '0')}</span>
            <div>
              <p>{era.range}</p>
              <h2>{era.title}</h2>
              <p>{era.intro}</p>
            </div>
          </Reveal>

          <ol className={styles.events}>
            {era.events.map((event, eventIndex) => (
              <Reveal
                as="li"
                className={`${styles.event} ${event.keyEvent ? styles.keyEvent : ''}`}
                delay={(eventIndex % 2) * 70}
                key={`${event.period}-${event.title}`}
              >
                <div className={styles.marker} aria-hidden="true">
                  {event.keyEvent ? <Star /> : <span />}
                </div>
                <article className={styles.card}>
                  <div className={styles.cardTopline}>
                    <time>{event.period}</time>
                    {event.keyEvent && <span>{copy.keyEventLabel}</span>}
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  {event.names && (
                    <div className={styles.names}>
                      <p>{copy.peopleLabel}</p>
                      <ul>
                        {event.names.map((name) => <li key={name}>{name}</li>)}
                      </ul>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </ol>
        </section>
      ))}

      <Reveal as="section" className={styles.source}>
        <div className={styles.sourceCopy}>
          <p className="eyebrow">Steven Notario / PDF metadata 2007</p>
          <h2>{copy.sourceTitle}</h2>
          {copy.sourceText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <a className={styles.download} href="/media/locking-history-chart.pdf" download>
            <Download aria-hidden="true" />
            {copy.downloadPdf}
          </a>
        </div>

        <div className={styles.charts}>
          {chartImages.map((src, index) => (
            <figure key={src}>
              <a href={src} target="_blank" rel="noreferrer">
                <Image
                  src={src}
                  alt={copy.chartAlt[index]}
                  width={2336}
                  height={3091}
                  sizes="(max-width: 760px) calc(100vw - 48px), 50vw"
                />
                <span>{copy.openImage}<ArrowUpRight aria-hidden="true" /></span>
              </a>
              <figcaption>{copy.chartCaption[index]}</figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <SourceList title={copy.sourcesTitle} sources={timelineSources} />
    </div>
  );
}
