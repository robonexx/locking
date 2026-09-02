import { Reveal } from '@/components/Reveal';
import type { DanceStep } from '@/lib/content';
import type { Locale } from '@/lib/i18n';
import styles from './StepsPage.module.css';

export function StepsPage({ steps, lang }: { steps: DanceStep[]; lang: Locale }) {
  return (
    <div>
      <Reveal className={styles.intro} distance="short">
        <p className="eyebrow eyebrow-dark">
          {steps.length} {lang === 'sv' ? 'steg och rörelser' : 'steps and moves'}
        </p>
        <p>
          {lang === 'sv'
            ? 'Listan kan byggas ut när fler steg, skapare och historiska uppgifter tillkommer.'
            : 'The list can grow as more moves, creators and historical details are added.'}
        </p>
      </Reveal>
      <div className={styles.list}>
        {steps.map((step, index) => (
          <Reveal as="section" className={styles.item} key={`${step.id}-${index}`} distance="short">
            <p className="card-index">{String(index + 1).padStart(2, '0')}</p>
            <div>
              <h2>{step.name}</h2>
              <p>{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
