'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { languageTags, locales, type Locale } from '@/lib/i18n';
import styles from './LanguageSwitcher.module.css';

const languageNames: Record<Locale, string> = {
  sv: 'Svenska',
  en: 'English',
  fr: 'Français',
  fi: 'Suomi',
  ko: '한국어',
  ja: '日本語',
};

const chooserLabels: Record<Locale, string> = {
  sv: 'Välj språk',
  en: 'Choose language',
  fr: 'Choisir la langue',
  fi: 'Valitse kieli',
  ko: '언어 선택',
  ja: '言語を選択',
};

export function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);
  const localePattern = new RegExp(`^/(${locales.join('|')})(?=/|$)`);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (!switcherRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  return (
    <div className={styles.languageSwitcher} ref={switcherRef}>
      <button
        className={styles.trigger}
        type="button"
        aria-label={chooserLabels[lang]}
        aria-expanded={open}
        aria-controls="language-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{lang.toUpperCase()}</span>
        <ChevronDown aria-hidden="true" />
      </button>

      {open && (
        <ul className={styles.menu} id="language-menu">
          {locales.map((locale) => {
            const href = pathname.replace(localePattern, `/${locale}`) || `/${locale}`;
            return (
              <li key={locale}>
                <Link
                  className={locale === lang ? styles.current : undefined}
                  href={href}
                  hrefLang={languageTags[locale]}
                  lang={languageTags[locale]}
                  aria-current={locale === lang ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span>{languageNames[locale]}</span>
                  <small>{locale.toUpperCase()}</small>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
