# Locking / Campbellocking

En ny, fristående version av en tidigare webbplats om Locking och Campbellocking. Webbplatsen är skapad för att hylla dansstilen Locking, bevara dess historia och i utbildningssyfte sprida och dela kunskap om dansen, kulturen, pionjärerna och människorna runt den.

Projektet har ingen koppling till WordPress. Det historiska innehållet har räddats från den äldre webbplatsen och byggts om i en modern, responsiv struktur med svenska som huvudspråk och engelska som alternativ.

## Teknik

- Next.js 16 med App Router och statisk generering
- React 19
- TypeScript
- CSS Modules för komponent- och sidspecifik styling
- React Markdown för återvunnet historiskt innehåll
- Lucide React för ikoner
- ESLint och Next.js rekommenderade regler för kodkontroll
- Lokala Markdown-, JSON- och TypeScript-filer för innehåll utan WordPress eller databas
- Responsiv navigering, mikroanimationer och stöd för reducerad rörelse
- Språkstruktur för svenska och engelska, förberedd för fler språk

## Kom igång

```bash
npm install
npm run dev
```

Om Next.js eller webbläsaren visar en äldre version kan Next-cachen tömmas före start:

```bash
npm run dev:fresh
```

Öppna `http://localhost:3000`. Rotadressen skickar vidare till svenska på `/sv`; engelska finns på `/en`.

## Kontroller

```bash
npm run typecheck
npm run lint
npm run build
```

Efter att produktionsservern har startats med `npm start` kan routes kontrolleras med:

```bash
npm run test:smoke
```

## Projektstruktur

```text
app/
  [lang]/
    (home)/page.tsx
    (pages)/
      history/page.tsx
      memorial/page.tsx
      pioneers/page.tsx
      ...
src/
  components/       återanvändbara komponenter med egna CSS Modules
  features/         större sidvyer och deras lokala CSS Modules
  content/          svenskt och engelskt redaktionellt innehåll
  lib/              innehållsläsning och språkstöd
public/media/       statiska bilder som används av sidan
content-recovery/   räddat Markdown- och JSON-innehåll från 2022
```

`app` är Next.js App Router och innehåller projektets publika routes. Mappar i parentes organiserar koden men syns inte i URL:en. Exempelvis blir `app/[lang]/(pages)/history/page.tsx` fortfarande `/sv/history`.

`app/globals.css` innehåller bara designvariabler, reset och gemensamma hjälparklasser. Komponent- och sidspecifik styling ligger bredvid respektive komponent som `*.module.css`.

## Innehåll

Det räddade originalinnehållet ligger i [`content-recovery`](./content-recovery). Appen läser Markdown- och JSON-filerna vid bygget, så de historiska sidorna behöver ingen databas.

Originalmaterialet är i huvudsak på engelska. Svensk navigering, sidrubriker och introduktioner finns redan. Längre historiska texter behöver översättas och faktagranskas innan den svenska versionen är färdig för publicering.

## Media

De bilder som används i prototypen ligger tillfälligt i `public/media`. När redaktionsdelen byggs flyttas uppladdade omslagsbilder till Cloudinary. De statiska arkivbilderna kan också migreras senare när rättigheter, bildtexter och metadata är inventerade.

## Redaktionell del

CMS:et är avgränsat till intervjuer, artiklar och eventuella nyheter på startsidan. Planen finns i [`docs/CMS-PLAN.md`](./docs/CMS-PLAN.md).

## Publicering

Filerna i `public/media` och `content-recovery` krävs av den nuvarande produktionbuilden och ska finnas med i GitHub-repot. Byggcache, installerade paket, lokala miljövariabler och det uppackade gamla projektet är exkluderade i `.gitignore`.

Innan push:

```bash
npm run lint
npm run typecheck
npm run build
```
