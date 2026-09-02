'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuGroups } from '@/content/site';
import type { Locale } from '@/lib/i18n';
import { ui } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import styles from './SiteHeader.module.css';

type Dropdown = 'history' | 'knowledge';

export function SiteHeader({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<Dropdown | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const copy = ui[lang];

  const close = useCallback(() => {
    setOpen(false);
    setOpenMenu(null);
  }, []);

  useEffect(() => {
    const closeDropdown = () => setOpenMenu(null);
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) close();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    document.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('scroll', closeDropdown, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('scroll', closeDropdown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(close);
    return () => window.cancelAnimationFrame(frame);
  }, [close, pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const toggleDropdown = (dropdown: Dropdown) => {
    setOpenMenu((current) => current === dropdown ? null : dropdown);
  };

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={`shell ${styles.headerBar}`}>
        <Link className={styles.wordmark} href={`/${lang}`} onClick={close}>
          <span>LOCKING</span>
          <span>CAMPBELLOCKING</span>
        </Link>

        <button
          className={`${styles.menuToggle} ${open ? styles.menuOpen : ''}`}
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => open ? close() : setOpen(true)}
        >
          <span className={styles.menuIconLines} aria-hidden="true" />
          <span className="sr-only">{open ? copy.close : copy.menu}</span>
        </button>

        <nav
          id="site-navigation"
          className={`${styles.mainNav} ${open ? styles.navOpen : ''}`}
        >
          <Link href={`/${lang}`} onClick={close}>{copy.home}</Link>
          <Link href={`/${lang}/about`} onClick={close}>{copy.about}</Link>

          <div className={`${styles.dropdown} ${openMenu === 'history' ? styles.dropdownOpen : ''}`}>
            <button
              className={styles.dropdownButton}
              type="button"
              aria-haspopup="true"
              aria-expanded={openMenu === 'history'}
              onClick={() => toggleDropdown('history')}
            >
              {copy.history}
            </button>
            <div className={styles.flyout}>
              {menuGroups.history.map((page) => (
                <Link key={page.slug} href={`/${lang}/${page.slug}`} onClick={close}>
                  {page.title[lang]}
                </Link>
              ))}
            </div>
          </div>

          <div className={`${styles.dropdown} ${openMenu === 'knowledge' ? styles.dropdownOpen : ''}`}>
            <button
              className={styles.dropdownButton}
              type="button"
              aria-haspopup="true"
              aria-expanded={openMenu === 'knowledge'}
              onClick={() => toggleDropdown('knowledge')}
            >
              {copy.knowledge}
            </button>
            <div className={styles.flyout}>
              {menuGroups.knowledge.map((page) => (
                <Link key={page.slug} href={`/${lang}/${page.slug}`} onClick={close}>
                  {page.title[lang]}
                </Link>
              ))}
            </div>
          </div>

          <Link href={`/${lang}/stories`} onClick={close}>{copy.stories}</Link>
          <Link href={`/${lang}/contact`} onClick={close}>{copy.contact}</Link>
        </nav>

        <LanguageSwitcher lang={lang} />
      </div>
    </header>
  );
}
