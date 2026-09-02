import { Reveal } from '@/components/Reveal';
import styles from './StoryTimeline.module.css';

export type TimelineSection = {
  period: string;
  title: string;
  paragraphs: string[];
};

export function StoryTimeline({ sections }: { sections: TimelineSection[] }) {
  return (
    <div className={styles.list}>
      {sections.map((section, index) => (
        <Reveal as="section" className={styles.item} delay={(index % 2) * 80} key={section.period}>
          <p className={styles.period}>{section.period}</p>
          <div>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
