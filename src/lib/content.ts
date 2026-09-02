import { promises as fs } from 'node:fs';
import path from 'node:path';

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

export async function readRecoveredPage(fileName: string) {
  const value = await fs.readFile(path.join(recoveryRoot, 'pages', fileName), 'utf8');
  return value.replace(
    /^# .*?\n\nKälla:.*?\n\n> Automatiskt återvunnen originaltext\..*?\n\n/s,
    ''
  );
}

async function readData<T>(fileName: string): Promise<T> {
  const value = await fs.readFile(path.join(recoveryRoot, 'data', fileName), 'utf8');
  return JSON.parse(value) as T;
}

export function readPioneers() {
  return readData<Pioneer[]>('pioneers.json');
}

export function readDanceSteps() {
  return readData<DanceStep[]>('steps.json');
}
