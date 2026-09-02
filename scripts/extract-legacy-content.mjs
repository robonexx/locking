import { promises as fs } from 'node:fs';
import path from 'node:path';

const workspace = process.cwd();
const legacyRoot = path.join(
  workspace,
  'legacy-import',
  'lockerlegends2022-main'
);
const sourceRoot = path.join(legacyRoot, 'src');
const outputRoot = path.join(workspace, 'content-recovery');
const pagesRoot = path.join(outputRoot, 'pages');
const dataRoot = path.join(outputRoot, 'data');

const pageNames = new Map([
  ['src/pages/index.js', 'home'],
  ['src/pages/about/index.js', 'about'],
  ['src/pages/contact/index.js', 'contact'],
  ['src/pages/gogobrothers/index.js', 'gogo-brothers'],
  ['src/pages/groups/index.js', 'groups-and-dancers'],
  ['src/pages/history/index.js', 'history'],
  ['src/pages/memorial/index.js', 'memorial'],
  ['src/pages/pioneers/index.js', 'pioneers-page'],
  ['src/pages/socialparty/index.js', 'social-party'],
  ['src/pages/soultrain/index.js', 'soul-train'],
  ['src/pages/steps/index.js', 'steps-page'],
  ['src/pages/terminology/index.js', 'terminology'],
  ['src/pages/timeline/index.js', 'timeline'],
  ['src/pages/wattsstaxx/index.js', 'wattsstax'],
  ['src/pages/blog/index.js', 'blog-index'],
  ['src/pages/blog/[slug].js', 'blog-template'],
  ['src/pages/memorial/[id].js', 'memorial-template'],
]);

const interfaceFiles = new Set([
  'src/layouts/footer/Footer.js',
  'src/layouts/header/Header.js',
  'src/layouts/hero/Hero.js',
  'src/components/banner/Banner.js',
  'src/components/topmenu/TopMenu.js',
]);

const entityMap = new Map([
  ['nbsp', ' '],
  ['amp', '&'],
  ['quot', '"'],
  ['apos', "'"],
  ['#39', "'"],
  ['lt', '<'],
  ['gt', '>'],
]);

function normalizePath(filePath) {
  return path.relative(legacyRoot, filePath).split(path.sep).join('/');
}

function decodeEntities(value) {
  return value.replace(/&([a-z]+|#\d+);/gi, (full, entity) => {
    const direct = entityMap.get(entity.toLowerCase());
    if (direct !== undefined) return direct;
    if (/^#\d+$/.test(entity)) {
      return String.fromCodePoint(Number(entity.slice(1)));
    }
    return full;
  });
}

function decodeJsString(raw, quote) {
  if (quote === '`' && raw.includes('${')) return raw;
  return raw
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '\r')
    .replace(/\\t/g, '\t')
    .replace(/\\([\\'"`])/g, '$1');
}

function lineNumberAt(source, index) {
  let line = 1;
  for (let i = 0; i < index; i += 1) {
    if (source.charCodeAt(i) === 10) line += 1;
  }
  return line;
}

function scanStringLiterals(source) {
  const values = [];
  let i = 0;
  let line = 1;

  while (i < source.length) {
    const char = source[i];
    const next = source[i + 1];

    if (char === '\n') {
      line += 1;
      i += 1;
      continue;
    }

    if (char === '/' && next === '/') {
      i += 2;
      while (i < source.length && source[i] !== '\n') i += 1;
      continue;
    }

    if (char === '/' && next === '*') {
      i += 2;
      while (i < source.length - 1) {
        if (source[i] === '\n') line += 1;
        if (source[i] === '*' && source[i + 1] === '/') {
          i += 2;
          break;
        }
        i += 1;
      }
      continue;
    }

    if (char !== "'" && char !== '"' && char !== '`') {
      i += 1;
      continue;
    }

    const quote = char;
    const startLine = line;
    let raw = '';
    i += 1;

    while (i < source.length) {
      const current = source[i];
      if (current === '\n') line += 1;
      if (current === '\\') {
        raw += current;
        if (i + 1 < source.length) {
          raw += source[i + 1];
          if (source[i + 1] === '\n') line += 1;
          i += 2;
          continue;
        }
      }
      if (current === quote) {
        i += 1;
        break;
      }
      raw += current;
      i += 1;
    }

    values.push({ line: startLine, value: decodeJsString(raw, quote) });
  }

  return values;
}

function cleanJsxText(fragment) {
  let value = fragment
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/<br\s*\/?\s*>/gi, '\u0000')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{\s*(['"`])([\s\S]*?)\1\s*\}/g, '$2')
    .replace(/\{[\s\S]*?\}/g, ' ');

  value = decodeEntities(value)
    .replace(/\r/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*\u0000\s*/g, '\n\n')
    .trim();

  return value;
}

function extractJsxBlocks(source) {
  const blocks = [];
  const tagPattern =
    /<(?<tag>(?:[A-Za-z_$][\w$]*\.)?(?:title|h[1-6]|p|li|blockquote|figcaption|button|label))\b[^>]*>(?<body>[\s\S]*?)<\/\k<tag>>/gi;

  for (const match of source.matchAll(tagPattern)) {
    const text = cleanJsxText(match.groups.body);
    if (!text) continue;
    blocks.push({
      line: lineNumberAt(source, match.index),
      tag: match.groups.tag.split('.').at(-1).toLowerCase(),
      text,
    });
  }

  return blocks.sort((a, b) => a.line - b.line);
}

function extractStaticAttributes(source) {
  const attributes = [];
  const attributePattern =
    /\b(?<name>content|headline|subtitle|pageTitle|title|alt|aria-label)\s*=\s*(?<quote>['"])(?<value>[\s\S]*?)\k<quote>/g;

  for (const match of source.matchAll(attributePattern)) {
    const value = decodeEntities(match.groups.value).replace(/\s+/g, ' ').trim();
    if (!value || value.startsWith('#') || value.startsWith('/')) continue;
    attributes.push({
      line: lineNumberAt(source, match.index),
      name: match.groups.name,
      value,
    });
  }

  return attributes;
}

function markdownForSource(relativePath, blocks, attributes) {
  const title = pageNames.get(relativePath) ?? relativePath;
  const lines = [
    `# ${title}`,
    '',
    `Källa: \`${relativePath}\``,
    '',
    '> Automatiskt återvunnen originaltext. Stavning och sakuppgifter är inte redigerade.',
    '',
  ];

  for (const block of blocks) {
    const text = block.text;
    if (/^h[1-6]$/.test(block.tag)) {
      const level = Math.min(Number(block.tag[1]) + 1, 6);
      lines.push(`${'#'.repeat(level)} ${text}`, '');
    } else if (block.tag === 'li') {
      lines.push(`- ${text}`, '');
    } else if (block.tag === 'blockquote') {
      lines.push(...text.split('\n').map((line) => `> ${line}`), '');
    } else {
      lines.push(text, '');
    }
  }

  if (attributes.length) {
    lines.push('## Metadata och gränssnittstext', '');
    for (const item of attributes) {
      lines.push(`- ${item.name}: ${item.value}`);
    }
    lines.push('');
  }

  return `${lines.join('\n').trim()}\n`;
}

function splitTopLevelObjects(source, arrayName) {
  const marker = `export const ${arrayName}`;
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) return [];
  const arrayStart = source.indexOf('[', markerIndex);
  if (arrayStart === -1) return [];

  const objects = [];
  let depth = 0;
  let objectStart = -1;
  let quote = null;
  let escaped = false;

  for (let i = arrayStart + 1; i < source.length; i += 1) {
    const char = source[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === "'" || char === '"' || char === '`') {
      quote = char;
      continue;
    }
    if (char === '{') {
      if (depth === 0) objectStart = i;
      depth += 1;
      continue;
    }
    if (char === '}') {
      depth -= 1;
      if (depth === 0 && objectStart !== -1) {
        objects.push(source.slice(objectStart, i + 1));
        objectStart = -1;
      }
      continue;
    }
    if (char === ']' && depth === 0) break;
  }

  return objects;
}

function parseStaticObject(objectSource) {
  const result = {};
  const fieldPattern = /\b([A-Za-z_$][\w$]*)\s*:\s*/g;
  let match;

  while ((match = fieldPattern.exec(objectSource))) {
    const field = match[1];
    let i = fieldPattern.lastIndex;
    while (/\s/.test(objectSource[i] ?? '')) i += 1;
    const quote = objectSource[i];

    if (quote === "'" || quote === '"' || quote === '`') {
      let raw = '';
      let escaped = false;
      i += 1;
      for (; i < objectSource.length; i += 1) {
        const char = objectSource[i];
        if (escaped) {
          raw += `\\${char}`;
          escaped = false;
        } else if (char === '\\') {
          escaped = true;
        } else if (char === quote) {
          break;
        } else {
          raw += char;
        }
      }
      result[field] = decodeJsString(raw, quote);
      fieldPattern.lastIndex = i + 1;
      continue;
    }

    const primitive = objectSource.slice(i).match(/^(true|false|null|-?\d+(?:\.\d+)?)/);
    if (primitive) {
      const value = primitive[1];
      result[field] = value === 'true' ? true : value === 'false' ? false : value === 'null' ? null : Number(value);
      fieldPattern.lastIndex = i + value.length;
    }
  }

  return result;
}

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(fullPath)));
    else files.push(fullPath);
  }
  return files;
}

async function writeJson(filePath, value) {
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

async function main() {
  await fs.mkdir(pagesRoot, { recursive: true });
  await fs.mkdir(dataRoot, { recursive: true });

  const allFiles = await walk(sourceRoot);
  const jsFiles = allFiles.filter((file) => file.endsWith('.js'));
  const literalInventory = [];
  const extractionSummary = [];
  const interfaceSections = [];

  for (const file of jsFiles) {
    const source = await fs.readFile(file, 'utf8');
    const relativePath = normalizePath(file);
    const blocks = extractJsxBlocks(source);
    const attributes = extractStaticAttributes(source);

    for (const literal of scanStringLiterals(source)) {
      literalInventory.push({ source: relativePath, ...literal });
    }

    if (pageNames.has(relativePath)) {
      const outputName = `${pageNames.get(relativePath)}.md`;
      await fs.writeFile(
        path.join(pagesRoot, outputName),
        markdownForSource(relativePath, blocks, attributes),
        'utf8'
      );
      extractionSummary.push({
        source: relativePath,
        output: `pages/${outputName}`,
        visibleBlocks: blocks.length,
        staticAttributes: attributes.length,
      });
    } else if (interfaceFiles.has(relativePath)) {
      interfaceSections.push(markdownForSource(relativePath, blocks, attributes));
    }
  }

  if (interfaceSections.length) {
    await fs.writeFile(
      path.join(pagesRoot, 'global-interface.md'),
      interfaceSections.join('\n---\n\n'),
      'utf8'
    );
  }

  const structuredSources = [
    ['pioneers', path.join(sourceRoot, 'content', 'pioneers.js')],
    ['steps', path.join(sourceRoot, 'content', 'steps.js')],
    ['items', path.join(sourceRoot, 'content', 'items.js')],
  ];

  const structuredCounts = {};
  for (const [name, file] of structuredSources) {
    const source = await fs.readFile(file, 'utf8');
    const records = splitTopLevelObjects(source, name).map(parseStaticObject);
    await writeJson(path.join(dataRoot, `${name}.json`), records);
    structuredCounts[name] = records.length;
  }

  const publicRoot = path.join(legacyRoot, 'public');
  const publicFiles = (await walk(publicRoot)).map((file) => {
    const relative = path.relative(publicRoot, file).split(path.sep).join('/');
    return { file: relative, extension: path.extname(file).toLowerCase() };
  });
  await writeJson(path.join(outputRoot, 'media-inventory.json'), publicFiles);
  await writeJson(path.join(outputRoot, 'all-string-literals.json'), literalInventory);
  await writeJson(path.join(outputRoot, 'extraction-summary.json'), {
    generatedAt: new Date().toISOString(),
    legacyRoot: path.relative(workspace, legacyRoot).split(path.sep).join('/'),
    pages: extractionSummary,
    structuredCounts,
    totalStringLiterals: literalInventory.length,
    totalMediaFiles: publicFiles.length,
  });

  const readme = `# Räddat innehåll från LockerLegends 2022\n\n` +
    `Detta är en automatisk, oförändrad återvinning av innehåll från det äldre Next.js-projektet. ` +
    `Stavning, grammatik och historiska sakuppgifter har inte rättats.\n\n` +
    `## Mappar och filer\n\n` +
    `- \`pages/\`: synlig lokal sidtext i läsbart Markdown-format.\n` +
    `- \`data/pioneers.json\`: ${structuredCounts.pioneers} lokala pionjärposter.\n` +
    `- \`data/steps.json\`: ${structuredCounts.steps} lokala danssteg.\n` +
    `- \`data/items.json\`: ${structuredCounts.items} navigations-/innehållskort.\n` +
    `- \`all-string-literals.json\`: komplett råinventering av strängar i JavaScript-källkoden, med fil och rad. Den innehåller även tekniska strängar.\n` +
    `- \`media-inventory.json\`: inventering av lokala bilder, videor, SVG- och ikonfiler.\n` +
    `- \`extraction-summary.json\`: maskinläsbar sammanfattning.\n\n` +
    `## Viktig begränsning\n\n` +
    `Bloggtexterna låg inte i projektet. Appen hämtade dem dynamiskt från ett WordPress GraphQL-API via ` +
    `\`NEXT_PUBLIC_WP_ENDPOINT_2022\`. Minnesposterna hämtades från ett externt JSON-API. ` +
    `De måste exporteras eller hämtas separat innan WordPress stängs.\n\n` +
    `## Språk\n\n` +
    `Originaltexten är huvudsakligen på engelska. Den bör behållas som källversion (\`en\`) och översättas till svenska (\`sv\`) ` +
    `med separat granskningsstatus per text, så att en historiker kan godkänna formuleringar och namn.\n`;

  await fs.writeFile(path.join(outputRoot, 'README.md'), readme, 'utf8');
}

await main();
