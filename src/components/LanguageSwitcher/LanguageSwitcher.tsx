'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import styles from './LanguageSwitcher.module.css';

export function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const target = lang === 'sv' ? 'en' : 'sv';
  const href = pathname.replace(/^\/(sv|en)(?=\/|$)/, `/${target}`);

  return (
    <Link className={styles.switcher} href={href || `/${target}`} lang={target}>
      <span aria-hidden="true">{target.toUpperCase()}</span>
      <span className="sr-only">
        {lang === 'sv' ? 'Switch to English' : 'Byt till svenska'}
      </span>
    </Link>
  );
}
