import { Fragment } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import styles from './StoryTimeline.module.css';

export type TimelineSection = {
  period: string;
  title: string;
  paragraphs: readonly string[];
  media?: readonly {
    src: string;
    alt: string;
    caption: string;
  }[];
  mediaAfterParagraph?: number;
  video?: {
    src: string;
    title: string;
    caption: string;
  };
};

function TimelineMedia({ media }: { media: NonNullable<TimelineSection['media']> }) {
  const layoutClass = media.length === 1
    ? styles.mediaSingle
    : media.length === 2
      ? styles.mediaPair
      : '';

  return (
    <div className={`${styles.media} ${layoutClass}`}>
      {media.map((item) => (
        <figure className={styles.figure} key={item.src}>
          <div className={styles.imageFrame}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={media.length === 1 ? '(max-width: 900px) 100vw, 760px' : '(max-width: 900px) 100vw, 38vw'}
              className={styles.image}
            />
          </div>
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function TimelineVideo({ video }: { video: NonNullable<TimelineSection['video']> }) {
  return (
    <figure className={styles.videoFigure}>
      <div className={styles.videoFrame}>
        <video
          aria-label={video.title}
          className={styles.video}
          controls
          playsInline
          preload="metadata"
        >
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
      <figcaption>{video.caption}</figcaption>
    </figure>
  );
}

export function StoryTimeline({ sections }: { sections: readonly TimelineSection[] }) {
  return (
    <div className={styles.list}>
      {sections.map((section, index) => (
        <Reveal as="section" className={styles.item} delay={(index % 2) * 80} key={`${section.period}-${section.title}`}>
          <p className={styles.period}>{section.period}</p>
          <div className={styles.content}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <Fragment key={paragraph}>
                <p>{paragraph}</p>
                {section.media && section.mediaAfterParagraph === paragraphIndex && (
                  <TimelineMedia media={section.media} />
                )}
              </Fragment>
            ))}
            {section.media && section.mediaAfterParagraph === undefined && <TimelineMedia media={section.media} />}
            {section.video && <TimelineVideo video={section.video} />}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
