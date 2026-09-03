import type { MetadataRoute } from 'next';
import { contentPages } from '@/content/site';
import { defaultLocale, locales } from '@/lib/i18n';

const siteUrl = 'https://locking.se';
const paths = ['', ...contentPages.map((page) => `/${page.slug}`)];

function localizedUrl(locale: string, path: string) {
  return `${siteUrl}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) => {
    const languages = Object.fromEntries([
      ...locales.map((locale) => [locale, localizedUrl(locale, path)]),
      ['x-default', localizedUrl(defaultLocale, path)],
    ]);

    return locales.map((locale) => ({
      url: localizedUrl(locale, path),
      changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
      alternates: { languages },
    }));
  });
}
