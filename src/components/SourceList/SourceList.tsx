import { Reveal } from '@/components/Reveal';
import styles from './SourceList.module.css';

type Source = { label: string; url: string };

export function SourceList({ title, sources }: { title: string; sources: Source[] }) {
  return (
    <Reveal as="section" className={styles.sources}>
      <h2>{title}</h2>
      <ul>
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
