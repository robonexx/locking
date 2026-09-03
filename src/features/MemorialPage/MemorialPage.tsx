'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { StoryIntro } from '@/components/StoryIntro';
import { memorial } from '@/content/memorial';
import type { Locale } from '@/lib/i18n';
import styles from './MemorialPage.module.css';

export function MemorialPage({ lang }: { lang: Locale }) {
  const page = memorial[lang];
  const [openPersonId, setOpenPersonId] = useState<string | null>(null);

  return (
    <div>
      <StoryIntro>{page.intro}</StoryIntro>
      {(['pioneer', 'inspiration'] as const).map((group) => (
        <section className={styles.group} key={group}>
          <Reveal distance="short">
            <p className="eyebrow eyebrow-dark">
              {lang === 'sv' ? 'R.I.P. / För alltid i groovet' : lang === 'fr' ? 'R.I.P. / À jamais dans le groove' : 'R.I.P. / Forever in the groove'}
            </p>
            <h2 className={styles.groupTitle}>
              {group === 'pioneer' ? page.pioneersTitle : page.inspirationsTitle}
            </h2>
          </Reveal>
          <div className={styles.grid}>
            {page.people.filter((person) => person.group === group).map((person, index) => (
              <Reveal delay={(index % 3) * 70} key={person.id}>
                <details className={styles.card} open={openPersonId === person.id}>
                  <summary
                    aria-controls={`tribute-${person.id}`}
                    aria-expanded={openPersonId === person.id}
                    onClick={(event) => {
                      event.preventDefault();
                      setOpenPersonId((currentId) => currentId === person.id ? null : person.id);
                    }}
                  >
                    <div className={styles.image}>
                      <Image src={person.image} alt={person.name} fill sizes="(max-width: 680px) 100vw, 30vw" />
                    </div>
                    <div className={styles.heading}>
                      <p>{person.role}</p>
                      <h3>{person.name}</h3>
                      <span className={styles.openLabel}>{page.openLabel} +</span>
                      <span className={styles.closeLabel}>{page.closeLabel} −</span>
                    </div>
                  </summary>
                  <div className={styles.copy} id={`tribute-${person.id}`}>
                    <p>{person.text}</p>
                    <p className={styles.contribution}>{person.contribution}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
