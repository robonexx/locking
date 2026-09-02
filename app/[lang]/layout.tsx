import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { isLocale, locales } from '@/lib/i18n';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://locking.se'),
  title: {
    default: 'Locking.se',
    template: '%s | Locking.se',
  },
  description: 'Locking.se – for the lockers around the world.',
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang}>
      <body>
        <a className="skip-link" href="#main-content">
          {lang === 'sv' ? 'Hoppa till innehållet' : 'Skip to content'}
        </a>
        <SiteHeader lang={lang} />
        <main id="main-content">{children}</main>
        <SiteFooter lang={lang} />
      </body>
    </html>
  );
}
