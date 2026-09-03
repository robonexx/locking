'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/i18n';
import styles from './not-found.module.css';

export default function NotFound() {
  const pathname = usePathname();
  const segment = pathname.split('/')[1];
  const lang: Locale = isLocale(segment) ? segment : 'sv';
  const copy = {
    sv: { title: 'Sidan hittades inte', home: 'Till startsidan' },
    en: { title: 'Page not found', home: 'Back to the home page' },
    fr: { title: 'Page introuvable', home: 'Retour à l’accueil' },
    fi: { title: 'Sivua ei löytynyt', home: 'Takaisin etusivulle' },
  }[lang];

  return (
    <section className={`shell section-space ${styles.notFound}`}>
      <p className="eyebrow eyebrow-dark">404</p>
      <h1>{copy.title}</h1>
      <Link className={styles.button} href={`/${lang}`}>{copy.home}</Link>
    </section>
  );
}
