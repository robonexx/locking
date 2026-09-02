import { Reveal } from '@/components/Reveal';
import styles from './StoryIntro.module.css';

export function StoryIntro({ children }: { children: string }) {
  return <Reveal><p className={styles.intro}>{children}</p></Reveal>;
}
