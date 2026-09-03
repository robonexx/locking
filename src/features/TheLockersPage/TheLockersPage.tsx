import { MediaStoryBlock } from '@/components/MediaStoryBlock';
import { ResearchNote } from '@/components/ResearchNote';
import { Reveal } from '@/components/Reveal';
import { SourceList } from '@/components/SourceList';
import { StoryIntro } from '@/components/StoryIntro';
import { StoryTimeline } from '@/components/StoryTimeline';
import { theLockersStory } from '@/content/the-lockers';
import type { Locale } from '@/lib/i18n';
import styles from './TheLockersPage.module.css';

export function TheLockersPage({ lang }: { lang: Locale }) {
  const story = theLockersStory[lang];

  return (
    <div>
      <StoryIntro>{story.intro}</StoryIntro>
      <MediaStoryBlock
        image="/media/campbell.jpg"
        imageAlt="Don Campbell"
        eyebrow={story.donEyebrow}
        title={story.donTitle}
        paragraphs={story.don}
      />
      <StoryTimeline sections={story.sections} />

      <Reveal as="section" className={styles.members}>
        <p className="eyebrow eyebrow-dark">
          {lang === 'sv' ? 'De sju originalmedlemmarna' : lang === 'fr' ? 'Les sept membres originaux' : 'Original seven'}
        </p>
        <h2>{story.membersTitle}</h2>
        <p>{story.membersIntro}</p>
        <ol className={styles.memberList}>
          {story.members.map((member) => <li key={member}>{member}</li>)}
        </ol>
      </Reveal>

      <Reveal as="section" className={styles.fabulous}>
        <p className="eyebrow">
          {lang === 'sv' ? 'Namn / Erkännande / Kontext' : lang === 'fr' ? 'Nom / Reconnaissance / Contexte' : 'Name / Credit / Context'}
        </p>
        <h2>{story.fabulousTitle}</h2>
        {story.fabulous.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </Reveal>

      <ResearchNote title={story.sourceNoteTitle}>{story.sourceNote}</ResearchNote>

      <Reveal as="section" className={styles.legacy}>
        <h2>{story.legacyTitle}</h2>
        <p>{story.legacy}</p>
      </Reveal>

      <SourceList title={story.sourcesTitle} sources={story.sources} />
    </div>
  );
}
