import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { AboutPage } from '@/features/AboutPage';
import { HistoryPage } from '@/features/HistoryPage';
import { MemorialPage } from '@/features/MemorialPage';
import { PioneersPage } from '@/features/PioneersPage';
import { RecoveredPage } from '@/features/RecoveredPage';
import { StepsPage } from '@/features/StepsPage';
import { TheLockersPage } from '@/features/TheLockersPage';
import { pageBySlug } from '@/content/site';
import { readDanceSteps, readPioneers, readRecoveredPage } from '@/lib/content';
import { isLocale } from '@/lib/i18n';
import styles from './ContentPage.module.css';

export type LocaleParams = Promise<{ lang: string }>;

export async function getContentPageMetadata(params: LocaleParams, slug: string): Promise<Metadata> {
  const { lang } = await params;
  const page = pageBySlug.get(slug);
  if (!page || !isLocale(lang)) return {};
  return {
    title: page.title[lang],
    description: page.summary[lang],
    alternates: { languages: { sv: `/sv/${slug}`, en: `/en/${slug}` } },
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
      content = <PioneersPage pioneers={await readPioneers()} />;
      break;
    case 'steps-and-moves':
      content = <StepsPage steps={await readDanceSteps()} lang={lang} />;
      break;
    default:
      content = <RecoveredPage content={page.source ? await readRecoveredPage(page.source) : ''} lang={lang} />;
  }

  return (
    <article>
      <PageHero page={page} lang={lang} />
      <div className={`shell section-space ${styles.content}`}>{content}</div>
    </article>
  );
}
