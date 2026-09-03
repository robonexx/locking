import { MediaStoryBlock } from '@/components/MediaStoryBlock';
import { ResearchNote } from '@/components/ResearchNote';
import { Reveal } from '@/components/Reveal';
import { SourceList } from '@/components/SourceList';
import { StoryIntro } from '@/components/StoryIntro';
import { StoryTimeline } from '@/components/StoryTimeline';
import { lockingHistory } from '@/content/history';
import type { Locale } from '@/lib/i18n';
import styles from './HistoryPage.module.css';

export function HistoryPage({ lang }: { lang: Locale }) {
  const story = lockingHistory[lang];

  return (
    <div>
      <StoryIntro>{story.intro}</StoryIntro>
      <MediaStoryBlock
        image="/media/campbell.jpg"
        imageAlt="Don Campbell"
        eyebrow="The Campbellock"
        title={story.originTitle}
        paragraphs={story.origin}
      />
      <StoryTimeline sections={story.sections} />

      <Reveal as="section" className={`${styles.panel} ${styles.world}`}>
        <p className="eyebrow eyebrow-dark">
          {lang === 'sv' ? 'Los Angeles → världen' : lang === 'fr' ? 'Los Angeles → le monde' : lang === 'fi' ? 'Los Angeles → maailma' : 'Los Angeles → the world'}
        </p>
        <h2>{story.worldTitle}</h2>
        {story.world.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </Reveal>

      <Reveal as="section" className={`${styles.panel} ${styles.context}`}>
        <p className="eyebrow">
          {lang === 'sv' ? 'Erkännande / Kontext' : lang === 'fr' ? 'Reconnaissance / Contexte' : lang === 'fi' ? 'Tunnustus / Konteksti' : 'Credit / Context'}
        </p>
        <h2>{story.distinctionTitle}</h2>
        {story.distinction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </Reveal>

      <ResearchNote title={story.sourceNoteTitle}>{story.sourceNote}</ResearchNote>
      <SourceList title={story.sourcesTitle} sources={story.sources} />
    </div>
  );
}
