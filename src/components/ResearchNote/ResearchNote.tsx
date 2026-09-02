import { Reveal } from '@/components/Reveal';
import styles from './ResearchNote.module.css';

export function ResearchNote({ title, children }: { title: string; children: string }) {
  return (
    <Reveal as="aside" className={styles.note} distance="short">
      <h2>{title}</h2>
      <p>{children}</p>
    </Reveal>
  );
}
