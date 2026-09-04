import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { Locale } from '@/lib/i18n';

export type Pioneer = {
  name: string;
  aka?: string;
  desc: string;
  img?: string;
  id: string;
};

export type DanceStep = {
  name: string;
  desc: string;
  creator?: string;
  by?: string;
  id: string;
};

const localizedContentRoot = path.join(process.cwd(), 'src', 'content', 'locales');

type ContentLocale = Exclude<Locale, 'sv'>;

function resolveContentLocale(lang: Locale): ContentLocale {
  return lang === 'sv' ? 'en' : lang;
}

export async function readLocalizedPage(fileName: string, lang: Locale = 'en') {
  const contentLocale = resolveContentLocale(lang);
  const sourcePath = path.join(localizedContentRoot, contentLocale, fileName);
  const value = await fs.readFile(sourcePath, 'utf8');
  const content = contentLocale === 'en' ? value.replace(
    /^# .*?\n\nKälla:.*?\n\n> Automatiskt återvunnen originaltext\..*?\n\n/s,
    ''
  ) : value;

  return content.replace(
    /^(?:#{1,6}\s*)?[^\r\n]*LockerLegends[^\r\n]*(?:\r?\n){1,2}/i,
    ''
  );
}

async function readData<T>(fileName: string, lang: ContentLocale = 'en'): Promise<T> {
  const value = await fs.readFile(path.join(localizedContentRoot, lang, fileName), 'utf8');
  return JSON.parse(value) as T;
}

export async function readPioneers(lang: Locale = 'en') {
  const contentLocale = lang === 'fi' || lang === 'ko' ? lang : 'en';
  return readData<Pioneer[]>('pioneers.json', contentLocale);
}

export async function readDanceSteps(lang: Locale = 'en') {
  const contentLocale = lang === 'fi' || lang === 'ko' ? lang : 'en';
  return readData<DanceStep[]>('steps.json', contentLocale);
}
