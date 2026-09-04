import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { ResearchNote } from '@/components/ResearchNote';
import { Reveal } from '@/components/Reveal';
import { SourceList } from '@/components/SourceList';
import { StoryIntro } from '@/components/StoryIntro';
import { skeeterRabbitSources, skeeterRabbitStory } from '@/content/skeeter-rabbit';
import type { Locale } from '@/lib/i18n';
import styles from './SkeeterRabbitPage.module.css';

const galleryImages = [
  { src: '/media/skeeter-rabbit/skeeter-2005.jpg', width: 2048, height: 1536 },
  { src: '/media/skeeter-rabbit/skeeter-tony.jpg', width: 960, height: 717 },
  { src: '/media/skeeter-rabbit/skeeter-rabbit.jpg', width: 1024, height: 768 },
  { src: '/media/skeeter-rabbit/alex-yared-skeeter-manny.jpg', width: 2048, height: 1536 },
  { src: '/media/about/funkcamp-2005-rob-greg-skeeter.jpg', width: 1920, height: 1440 },
  { src: '/media/about/vegas-2011-don-skeeter-rob.jpg', width: 960, height: 717 },
] as const;

export function SkeeterRabbitPage({ lang }: { lang: Locale }) {
  const story = skeeterRabbitStory[lang];

  return (
    <div>
      <StoryIntro>{story.intro}</StoryIntro>

      <Reveal as="section" className={styles.opening}>
        <div className={styles.portrait}>
          <Image
            src="/media/Skeet.png"
            alt="James “OG Skeeter Rabbit” Higgins"
            width={337}
            height={337}
            sizes="(max-width: 760px) calc(100vw - 72px), 360px"
            priority
          />
          <span aria-hidden="true">OG</span>
        </div>
        <div className={styles.openingCopy}>
          <p className="eyebrow">{story.portraitEyebrow}</p>
          <blockquote>{story.openingQuote}</blockquote>
          <h2>{story.portraitTitle}</h2>
          <p>{story.portraitText}</p>
        </div>
      </Reveal>

      <div className={styles.chapters}>
        {story.sections.map((section, index) => (
          <Reveal
            as="section"
            className={styles.chapter}
            distance="short"
            key={section.title}
          >
            <div className={styles.chapterMarker}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{section.eyebrow}</p>
            </div>
            <div className={styles.chapterCopy}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Reveal>
        ))}
      </div>

      <section className={styles.gallerySection}>
        <Reveal className={styles.galleryHeading} distance="short">
          <p className="eyebrow">{story.galleryEyebrow}</p>
          <h2>{story.galleryTitle}</h2>
        </Reveal>
        <div className={styles.gallery}>
          {galleryImages.map((image, index) => (
            <Reveal as="figure" distance="short" delay={(index % 2) * 60} key={image.src}>
              <Image
                src={image.src}
                alt={story.galleryCaptions[index]}
                width={image.width}
                height={image.height}
                sizes="(max-width: 760px) calc(100vw - 40px), 50vw"
              />
              <figcaption>{story.galleryCaptions[index]}</figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className={styles.closing}>
        <p className="eyebrow eyebrow-dark">{story.closingEyebrow}</p>
        <h2>{story.closingTitle}</h2>
        <div className={styles.closingCopy}>
          {story.closing.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <a href="https://www.lockerlegends.net/" target="_blank" rel="noreferrer">
          {story.archiveLink}
          <ArrowUpRight aria-hidden="true" />
        </a>
        <strong>KEEP THE CULTURE. CREDIT THE PEOPLE. TELL THE STORY.</strong>
      </Reveal>

      <ResearchNote title={story.sourceNoteTitle}>{story.sourceNote}</ResearchNote>
      <SourceList title={story.sourcesTitle} sources={[...skeeterRabbitSources]} />
    </div>
  );
}
