import { Reveal } from '@/components/Reveal';
import { StoryTimeline } from '@/components/StoryTimeline';
import { aboutStory } from '@/content/about';
import type { Locale } from '@/lib/i18n';
import styles from './AboutPage.module.css';

export function AboutPage({ lang }: { lang: Locale }) {
  const story = aboutStory[lang];

  return (
    <div>
      <Reveal className={styles.intro}>
        {story.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </Reveal>
      <StoryTimeline sections={story.sections} />

      <Reveal as="section" className={styles.dedication}>
        <p className="eyebrow eyebrow-dark">Locking / Campbellocking</p>
        <h2>{story.dedicationTitle}</h2>
        {story.dedication.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </Reveal>

      <Reveal as="section" className={styles.tribute}>
        <p className="eyebrow">
          {lang === 'sv' ? 'Kunskap / Berättelser / Respekt' : lang === 'fr' ? 'Savoir / Histoires / Respect' : lang === 'fi' ? 'Tieto / Tarinat / Kunnioitus' : lang === 'ko' ? '지식 / 이야기 / 존중' : lang === 'ja' ? '知識 / 物語 / 敬意' : 'Knowledge / Stories / Respect'}
        </p>
        <h2>{story.acknowledgementsTitle}</h2>
        {story.acknowledgements.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </Reveal>

      <Reveal as="section" className={styles.continuation}>
        <p className="eyebrow eyebrow-dark">
          {lang === 'sv' ? 'Framåt / Fortsättning' : lang === 'fr' ? 'La suite / L’avenir' : lang === 'fi' ? 'Jatkoa / Tulevaisuus' : lang === 'ko' ? '앞으로 / 계속되는 이야기' : lang === 'ja' ? 'これから / 続いていく物語' : 'Looking ahead / To be continued'}
        </p>
        <h2>{story.continuationTitle}</h2>
        {story.continuation.map((paragraph, index) => (
          <p className={index >= story.continuation.length - 3 ? styles.signoff : undefined} key={paragraph}>
            {paragraph}
          </p>
        ))}
      </Reveal>
    </div>
  );
}
