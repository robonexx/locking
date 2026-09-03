import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { ResearchNote } from '@/components/ResearchNote';
import { Reveal } from '@/components/Reveal';
import { SourceList } from '@/components/SourceList';
import { StoryIntro } from '@/components/StoryIntro';
import { campbellockJrStory } from '@/content/campbellock-jr';
import type { Locale } from '@/lib/i18n';
import styles from './CampbellockJrPage.module.css';

const archiveImages = [
  { src: '/media/campbellock-jr/key.jpg', width: 1827, height: 2815 },
  { src: '/media/campbellock-jr/precision.jpg', width: 1820, height: 2383 },
  { src: '/media/campbellock-jr/body-control.jpg', width: 1834, height: 2678 },
  { src: '/media/campbellock-jr/imagination.jpg', width: 1820, height: 2892 },
] as const;

export function CampbellockJrPage({ lang }: { lang: Locale }) {
  const story = campbellockJrStory[lang];

  return (
    <div>
      <StoryIntro>{story.intro}</StoryIntro>

      <Reveal as="section" className={styles.mentor}>
        <div className={styles.mentorPortrait}>
          <Image
            src="/media/web_greg.png"
            alt="Dave Gregory “Greg Campbellock Jr.” Pope"
            width={486}
            height={518}
            sizes="(max-width: 760px) 75vw, 380px"
            priority
          />
        </div>
        <div className={styles.mentorCopy}>
          <p className="eyebrow">{story.mentorEyebrow}</p>
          <h2>{story.mentorTitle}</h2>
          <blockquote>{story.mentorQuote}</blockquote>
          {story.mentor.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </Reveal>

      <Reveal as="section" className={styles.life}>
        <p className="eyebrow eyebrow-dark">Soul Train / Creative Generation / The Lockers</p>
        <h2>{story.lifeTitle}</h2>
        <div className={styles.proseColumns}>
          {story.life.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </Reveal>

      <Reveal as="section" className={styles.curriculum}>
        <p className="eyebrow">{story.curriculumEyebrow}</p>
        <h2>{story.curriculumTitle}</h2>
        {story.curriculum.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </Reveal>

      <section className={styles.attributes}>
        <Reveal className={styles.sectionHeading} distance="short">
          <span>04</span>
          <div>
            <h2>{story.attributesTitle}</h2>
            <p>{story.attributesIntro}</p>
          </div>
        </Reveal>

        <div className={styles.frameworkGrid}>
          <Reveal className={styles.document} distance="short">
            <a href="/media/campbellock-jr/four-attributes.jpg" target="_blank" rel="noreferrer">
              <Image
                src="/media/campbellock-jr/four-attributes.jpg"
                alt={lang === 'sv' ? 'Greg Campbellock Jr:s dokument The 4 attributes of Locking' : lang === 'fr' ? 'Le document The 4 attributes of Locking de Greg Campbellock Jr.' : 'Greg Campbellock Jr.’s document The 4 attributes of Locking'}
                width={1834}
                height={3969}
                sizes="(max-width: 860px) calc(100vw - 40px), 42vw"
              />
              <span>{story.openImage}<ArrowUpRight aria-hidden="true" /></span>
            </a>
          </Reveal>

          <ol className={styles.attributeList}>
            {story.attributes.map((attribute, index) => (
              <Reveal as="li" className={styles.attributeCard} delay={(index % 2) * 60} key={attribute.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p>{attribute.original}</p>
                  <h3>{attribute.title}</h3>
                  <p>{attribute.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Reveal as="section" className={styles.equationSection}>
        <div className={styles.equationCopy}>
          <p className="eyebrow">BC + EC + PMw/m</p>
          <h2>{story.equationTitle}</h2>
          <p>{story.equationIntro}</p>
          <div className={styles.equation}>
            {story.equation.map((part, index) => (
              <div className={styles.equationPart} key={part.title}>
                {index > 0 && <span className={styles.operator} aria-hidden="true">+</span>}
                <strong>{part.title}</strong>
                <span>{part.original}</span>
                <p>{part.text}</p>
              </div>
            ))}
            <span className={styles.equals} aria-hidden="true">=</span>
            <div className={styles.result}>{story.equationResult}</div>
          </div>
        </div>
        <div className={styles.equationImage}>
          <a href="/media/campbellock-jr/funky-style.jpg" target="_blank" rel="noreferrer">
            <Image
              src="/media/campbellock-jr/funky-style.jpg"
              alt={lang === 'sv' ? 'Greg Campbellock Jr:s diagram BC plus EC plus precision moves with music equals Funky Style' : lang === 'fr' ? 'Le diagramme de Greg Campbellock Jr. : BC plus EC plus precision moves with music égale Funky Style' : 'Greg Campbellock Jr.’s diagram: BC plus EC plus precision moves with music equals Funky Style'}
              width={1783}
              height={2805}
              sizes="(max-width: 860px) calc(100vw - 40px), 36vw"
            />
            <span>{story.openImage}<ArrowUpRight aria-hidden="true" /></span>
          </a>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.archive}>
        <p className="eyebrow">Greg Campbellock Jr. &amp; Associates</p>
        <h2>{story.archiveTitle}</h2>
        <p>{story.archiveIntro}</p>
        <div className={styles.archiveGrid}>
          {archiveImages.map((image, index) => (
            <figure key={image.src}>
              <a href={image.src} target="_blank" rel="noreferrer">
                <Image
                  src={image.src}
                  alt={story.imageCaptions[index]}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 620px) calc(100vw - 56px), (max-width: 980px) 42vw, 23vw"
                />
                <span>{story.openImage}<ArrowUpRight aria-hidden="true" /></span>
              </a>
              <figcaption>{story.imageCaptions[index]}</figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <ResearchNote title={story.sourceNoteTitle}>{story.sourceNote}</ResearchNote>
      <SourceList title={story.sourcesTitle} sources={story.sources} />
    </div>
  );
}
