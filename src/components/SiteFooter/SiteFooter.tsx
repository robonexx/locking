import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import styles from './SiteFooter.module.css';

export function SiteFooter({ lang }: { lang: Locale }) {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.grid}`}>
        <div>
          <p className={styles.mark}>LOCKING.SE</p>
          <p className={styles.line}>For the lockers around the world.</p>
        </div>
        <div className={styles.links}>
          <Link href={`/${lang}/about`}>{lang === 'sv' ? 'Om sidan' : 'About the site'}</Link>
          <Link href={`/${lang}/contact`}>{lang === 'sv' ? 'Kontakt' : 'Contact'}</Link>
        </div>
      </div>
    </footer>
  );
}
