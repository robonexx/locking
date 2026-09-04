import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import styles from './SiteFooter.module.css';

export function SiteFooter({ lang }: { lang: Locale }) {
  const copy = {
    sv: { line: 'För lockers runt om i världen.', about: 'Om sidan', contact: 'Kontakt' },
    en: { line: 'For the lockers around the world.', about: 'About the site', contact: 'Contact' },
    fr: { line: 'Pour les lockers du monde entier.', about: 'À propos du site', contact: 'Contact' },
    fi: { line: 'Lockereille ympäri maailmaa.', about: 'Tietoa sivustosta', contact: 'Yhteystiedot' },
    ko: { line: '전 세계 락커들을 위해.', about: '사이트 소개', contact: '연락처' },
    ja: { line: '世界中のロッカーのために。', about: 'サイトについて', contact: 'お問い合わせ' },
    zh: { line: '为世界各地的 Locker 而设。', about: '关于本站', contact: '联系' },
  }[lang];

  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.grid}`}>
        <div>
          <p className={styles.mark}>LOCKING.SE</p>
          <p className={styles.line}>{copy.line}</p>
        </div>
        <div className={styles.links}>
          <Link href={`/${lang}/about`}>{copy.about}</Link>
          <Link href={`/${lang}/contact`}>{copy.contact}</Link>
        </div>
      </div>
    </footer>
  );
}
