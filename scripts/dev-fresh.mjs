import { rm } from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';

const projectRoot = process.cwd();
const cachePath = path.resolve(projectRoot, '.next');
const expectedCachePath = path.join(path.resolve(projectRoot), '.next');

if (cachePath !== expectedCachePath || path.basename(cachePath) !== '.next') {
  throw new Error(`Refusing to remove unexpected cache path: ${cachePath}`);
}

console.log(`Clearing Next.js cache: ${cachePath}`);
await rm(cachePath, { recursive: true, force: true });
console.log('Cache cleared. Starting a fresh development server...');

const nextCli = path.join(
  projectRoot,
  'node_modules',
  'next',
  'dist',
  'bin',
  'next'
);

const child = spawn(process.execPath, [nextCli, 'dev'], {
  cwd: projectRoot,
  stdio: 'inherit',
});

child.on('error', (error) => {
  console.error('Could not start Next.js:', error);
  process.exitCode = 1;
});

child.on('exit', (code) => {
  process.exitCode = code ?? 0;
});
