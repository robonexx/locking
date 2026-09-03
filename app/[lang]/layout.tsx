import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { isLocale, locales, ui } from '@/lib/i18n';
import '../globals.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: candidate } = await params;
  const lang = isLocale(candidate) ? candidate : 'sv';
  const descriptions = {
    sv: 'Locking.se – för lockers runt om i världen.',
    en: 'Locking.se – for the lockers around the world.',
    fr: 'Locking.se – pour les lockers du monde entier.',
    fi: 'Locking.se – lockereille ympäri maailmaa.',
  };

  return {
    metadataBase: new URL('https://locking.se'),
    title: {
      default: 'Locking.se',
      template: '%s | Locking.se',
    },
    description: descriptions[lang],
    alternates: {
      canonical: `/${lang}`,
      languages: { sv: '/sv', en: '/en', fr: '/fr', fi: '/fi', 'x-default': '/sv' },
    },
  };
}

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
          {ui[lang].skip}
        </a>
        <SiteHeader lang={lang} />
        <main id="main-content">{children}</main>
        <SiteFooter lang={lang} />
      </body>
    </html>
  );
}
