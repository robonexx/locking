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

const recoveryRoot = path.join(process.cwd(), 'content-recovery');

export async function readRecoveredPage(fileName: string, lang: Locale = 'en') {
  const translatedLocale = lang === 'fr' || lang === 'fi' ? lang : null;
  const sourcePath = translatedLocale
    ? path.join(recoveryRoot, 'translations', translatedLocale, fileName)
    : path.join(recoveryRoot, 'pages', fileName);
  const value = await fs.readFile(sourcePath, 'utf8');
  const content = translatedLocale ? value : value.replace(
    /^# .*?\n\nKälla:.*?\n\n> Automatiskt återvunnen originaltext\..*?\n\n/s,
    ''
  );

  return content.replace(
    /^(?:#{1,6}\s*)?[^\r\n]*LockerLegends[^\r\n]*(?:\r?\n){1,2}/i,
    ''
  );
}

async function readData<T>(fileName: string): Promise<T> {
  const value = await fs.readFile(path.join(recoveryRoot, 'data', fileName), 'utf8');
  return JSON.parse(value) as T;
}

export async function readPioneers(lang: Locale = 'en') {
  if (lang === 'fi') {
    const value = await fs.readFile(path.join(recoveryRoot, 'translations', 'fi', 'pioneers.json'), 'utf8');
    return JSON.parse(value) as Pioneer[];
  }
  return readData<Pioneer[]>('pioneers.json');
}

export async function readDanceSteps(lang: Locale = 'en') {
  if (lang === 'fi') {
    const value = await fs.readFile(path.join(recoveryRoot, 'translations', 'fi', 'steps.json'), 'utf8');
    return JSON.parse(value) as DanceStep[];
  }
  return readData<DanceStep[]>('steps.json');
}
