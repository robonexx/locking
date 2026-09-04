const base = process.env.SITE_URL ?? 'http://localhost:3000';
const locales = ['sv', 'en', 'fr', 'fi', 'es', 'pt', 'ko', 'ja', 'zh'];
const languageTags = { sv: 'sv', en: 'en', fr: 'fr', fi: 'fi', es: 'es-419', pt: 'pt-BR', ko: 'ko-KR', ja: 'ja-JP', zh: 'zh-CN' };
const slugs = [
  '',
  'about',
  'contact',
  'gogo-brothers',
  'groups-and-dancers',
  'history',
  'memorial',
  'pioneers',
  'social-party',
  'soul-train',
  'steps-and-moves',
  'stories',
  'terminology',
  'the-line-captain',
  'the-lockers',
  'timeline',
  'wattstax',
];
const pages = [
  '/',
  ...locales.flatMap((locale) => slugs.map((slug) => `/${locale}${slug ? `/${slug}` : ''}`)),
];

let failed = false;
const media = new Set();

for (const pathname of pages) {
  const response = await fetch(`${base}${pathname}`, { redirect: 'manual' });
  const body = await response.text();
  const expected = pathname === '/' ? 307 : 200;
  const lang = body.match(/<html lang="([^"]+)/)?.[1] ?? '-';
  const headingCount = (body.match(/<h1/g) ?? []).length;

  const locale = pathname.split('/')[1];
  const expectedLang = languageTags[locale];
  if (
    response.status !== expected
    || (pathname !== '/' && (headingCount !== 1 || lang !== expectedLang))
  ) {
    failed = true;
  }

  for (const match of body.matchAll(/(?:src|srcSet)="([^"]*\/media\/[^" ,]+)/g)) {
    media.add(match[1].replaceAll('&amp;', '&'));
  }

  console.log(
    `${pathname.padEnd(24)} ${response.status} lang=${lang} h1=${headingCount}`
  );
}

for (const url of media) {
  const response = await fetch(url.startsWith('http') ? url : `${base}${url}`);
  if (!response.ok) failed = true;
  console.log(`asset ${response.status} ${url.slice(0, 120)}`);
}

if (failed) process.exitCode = 1;
