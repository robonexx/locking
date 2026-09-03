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
};

export function StoryTimeline({ sections }: { sections: readonly TimelineSection[] }) {
  return (
    <div className={styles.list}>
      {sections.map((section, index) => (
        <Reveal as="section" className={styles.item} delay={(index % 2) * 80} key={section.period}>
          <p className={styles.period}>{section.period}</p>
          <div className={styles.content}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.media && section.media.length > 0 && (
              <div className={`${styles.media} ${section.media.length === 1 ? styles.mediaSingle : ''}`}>
                {section.media.map((item) => (
                  <figure className={styles.figure} key={item.src}>
                    <div className={styles.imageFrame}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes={section.media?.length === 1 ? '(max-width: 900px) 100vw, 760px' : '(max-width: 900px) 100vw, 30vw'}
                        className={styles.image}
                      />
                    </div>
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
