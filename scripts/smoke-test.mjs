const base = process.env.SITE_URL ?? 'http://localhost:3000';
const pages = [
  '/',
  '/sv',
  '/en',
  '/sv/history',
  '/en/history',
  '/sv/pioneers',
  '/sv/the-line-captain',
  '/en/the-line-captain',
  '/sv/steps-and-moves',
  '/sv/stories',
  '/sv/contact',
];

let failed = false;
const media = new Set();

for (const pathname of pages) {
  const response = await fetch(`${base}${pathname}`, { redirect: 'manual' });
  const body = await response.text();
  const expected = pathname === '/' ? 307 : 200;
  const lang = body.match(/<html lang="([^"]+)/)?.[1] ?? '-';
  const headingCount = (body.match(/<h1/g) ?? []).length;

  if (response.status !== expected || (pathname !== '/' && headingCount !== 1)) {
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
