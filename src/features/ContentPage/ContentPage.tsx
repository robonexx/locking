import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { AboutPage } from '@/features/AboutPage';
import { CampbellockJrPage } from '@/features/CampbellockJrPage';
import { ContactPage } from '@/features/ContactPage';
import { HistoryPage } from '@/features/HistoryPage';
import { MemorialPage } from '@/features/MemorialPage';
import { PioneersPage } from '@/features/PioneersPage';
import { MarkdownPage } from '@/features/MarkdownPage';
import { StepsPage } from '@/features/StepsPage';
import { TheLockersPage } from '@/features/TheLockersPage';
import { TimelinePage } from '@/features/TimelinePage';
import { pageBySlug } from '@/content/site';
import { readDanceSteps, readLocalizedPage, readPioneers } from '@/lib/content';
import { isLocale, languageTags, locales } from '@/lib/i18n';
import styles from './ContentPage.module.css';

export type LocaleParams = Promise<{ lang: string }>;

export async function getContentPageMetadata(params: LocaleParams, slug: string): Promise<Metadata> {
  const { lang } = await params;
  const page = pageBySlug.get(slug);
  if (!page || !isLocale(lang)) return {};
  return {
    title: page.title[lang],
    description: page.summary[lang],
    alternates: {
      canonical: `/${lang}/${slug}`,
      languages: Object.fromEntries([
        ...locales.map((locale) => [languageTags[locale], `/${locale}/${slug}`]),
        ['x-default', `/sv/${slug}`],
      ]),
    },
  };
}

export async function ContentPage({ params, slug }: { params: LocaleParams; slug: string }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const page = pageBySlug.get(slug);
  if (!page) notFound();

  let content: React.ReactNode;
  switch (slug) {
    case 'about':
      content = <AboutPage lang={lang} />;
      break;
    case 'contact':
      content = <ContactPage lang={lang} />;
      break;
    case 'the-line-captain':
      content = <CampbellockJrPage lang={lang} />;
      break;
    case 'history':
      content = <HistoryPage lang={lang} />;
      break;
    case 'memorial':
      content = <MemorialPage lang={lang} />;
      break;
    case 'the-lockers':
      content = <TheLockersPage lang={lang} />;
      break;
    case 'pioneers':
      content = <PioneersPage pioneers={await readPioneers(lang)} lang={lang} />;
      break;
    case 'steps-and-moves':
      content = <StepsPage steps={await readDanceSteps(lang)} lang={lang} />;
      break;
    case 'timeline':
      content = <TimelinePage lang={lang} />;
      break;
    case 'stories':
      content = null;
      break;
    default:
      content = <MarkdownPage content={page.source ? await readLocalizedPage(page.source, lang) : ''} />;
  }

  return (
    <article>
      <PageHero page={page} lang={lang} />
      {content && <div className={`shell section-space ${styles.content}`}>{content}</div>}
    </article>
  );
}
