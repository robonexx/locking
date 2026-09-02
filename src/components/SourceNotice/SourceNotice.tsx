import type { Locale } from '@/lib/i18n';
import { ui } from '@/lib/i18n';
import styles from './SourceNotice.module.css';

export function SourceNotice({ lang }: { lang: Locale }) {
  return (
    <aside className={styles.notice}>
      <span>{ui[lang].sourceLabel}</span>
      <p>{ui[lang].sourceNotice}</p>
    </aside>
  );
}
