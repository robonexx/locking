import Image from 'next/image';
import { Fragment } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SourceList } from '@/components/SourceList';
import { stepsSources, stepsStory } from '@/content/steps';
import type { DanceStep } from '@/lib/content';
import type { Locale } from '@/lib/i18n';
import styles from './StepsPage.module.css';

export function StepsPage({ steps, lang }: { steps: DanceStep[]; lang: Locale }) {
  const story = stepsStory[lang];

  return (
    <div>
      <Reveal className={styles.intro} distance="short">
        <p className="eyebrow eyebrow-dark">
          {steps.length} {story.countLabel}
        </p>
        <div>
          {story.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </Reveal>
      <div className={styles.list}>
        {steps.map((step, index) => (
          <Fragment key={`${step.id}-${index}`}>
            <Reveal as="section" className={styles.item} distance="short">
              <p className="card-index">{String(index + 1).padStart(2, '0')}</p>
              <div>
                <h2>{step.name}</h2>
                <p>{step.desc}</p>
              </div>
            </Reveal>

            {step.id === '6' && (
              <section className={styles.framework}>
                <Reveal className={styles.frameworkHeading} distance="short">
                  <p className="eyebrow">{story.frameworkEyebrow}</p>
                  <h2>{story.frameworkTitle}</h2>
                  <p>{story.frameworkIntro}</p>
                </Reveal>

                <div className={styles.frameworkLayout}>
                  <ol className={styles.frameworkList}>
                    {story.movements.map((movement, movementIndex) => (
                      <Reveal as="li" className={styles.frameworkCard} delay={(movementIndex % 2) * 60} key={movement.title}>
                        <span>{String(movementIndex + 1).padStart(2, '0')}</span>
                        <div>
                          <p>{movement.original}</p>
                          <h3>{movement.title}</h3>
                          <p>{movement.text}</p>
                        </div>
                      </Reveal>
                    ))}
                  </ol>

                  <Reveal as="figure" className={styles.document} distance="short">
                    <a href="/media/campbellock-jr/movement-categories.jpg" target="_blank" rel="noreferrer">
                      <Image
                        src="/media/campbellock-jr/movement-categories.jpg"
                        alt={story.documentAlt}
                        width={1820}
                        height={2507}
                        sizes="(max-width: 860px) calc(100vw - 40px), 42vw"
                      />
                      <span>{story.openImage}<ArrowUpRight aria-hidden="true" /></span>
                    </a>
                    <figcaption>{story.documentCaption}</figcaption>
                  </Reveal>
                </div>
              </section>
            )}
          </Fragment>
        ))}
      </div>
      <p className={styles.listNote}>{story.listNote}</p>
      <SourceList title={story.sourcesTitle} sources={stepsSources} />
    </div>
  );
}
