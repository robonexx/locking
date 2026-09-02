import { Reveal } from '@/components/Reveal';
import { StoryIntro } from '@/components/StoryIntro';
import { StoryTimeline } from '@/components/StoryTimeline';
import { aboutStory } from '@/content/about';
import type { Locale } from '@/lib/i18n';
import styles from './AboutPage.module.css';

export function AboutPage({ lang }: { lang: Locale }) {
  const story = aboutStory[lang];

  return (
    <div>
      <StoryIntro>{story.intro}</StoryIntro>
      <StoryTimeline sections={story.sections} />

      <Reveal as="section" className={styles.dedication}>
        <p className="eyebrow eyebrow-dark">Locking / Campbellocking</p>
        <h2>{story.dedicationTitle}</h2>
        {story.dedication.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p className={styles.closing}>{story.closing}</p>
      </Reveal>

      <Reveal as="section" className={styles.tribute}>
        <p className="eyebrow">O.G. / Historian / Inspiration</p>
        <h2>{story.tributeTitle}</h2>
        {story.tribute.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </Reveal>
    </div>
  );
}
