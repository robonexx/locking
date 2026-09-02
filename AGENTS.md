# Locking.se project guide

## Purpose

This is the new, independent Locking / Campbellocking website for `locking.se`. It must not fetch page content from WordPress. Historical content is stored locally until the editorial CMS is introduced.

## Stack

- Next.js App Router
- React and TypeScript in strict mode
- CSS Modules for component- and page-specific styling
- Global CSS only for design tokens, resets and genuinely shared utilities
- Swedish is the primary locale; English is the current secondary locale

## Project structure

- `app/[lang]/` contains routing only. Every public page must have its own route folder and `page.tsx`.
- Route groups such as `(home)` and `(pages)` may organize routes without changing public URLs.
- `src/features/` contains page-level implementations.
- `src/components/ComponentName/` contains reusable components. Keep the component, its CSS Module and its public `index.ts` together.
- `src/content/` contains curated bilingual content and navigation metadata.
- `content-recovery/` contains text and structured data recovered from the 2022 project. It is currently required at build time and must remain committed.
- `public/media/` contains all images required by the current site and must remain committed.
- `legacy-import/` is reference material only and must not be committed.

## Styling rules

- Use `ComponentName.module.css` beside the component that owns the styles.
- Do not add page- or component-specific selectors to `src/app/globals.css`.
- Prefer reusable components over copying layout and typography rules between pages.
- Preserve the current urban, funk-inspired visual language and respect `prefers-reduced-motion`.

## Content rules

- Preserve cultural context, source attribution and distinctions between pioneers from Locking's original Los Angeles era and pioneers of later local scenes.
- Avoid unsupported claims and vague labels. Use precise, respectful language in both Swedish and English.
- Keep external research links in the content source lists.
- Do not introduce a WordPress dependency.

## Before handing off changes

Run:

```bash
npm run lint
npm run typecheck
npm run build
```

When content extraction changes, also run `npm run test:smoke`.
