# Räddat innehåll från LockerLegends 2022

Detta är en automatisk, oförändrad återvinning av innehåll från det äldre Next.js-projektet. Stavning, grammatik och historiska sakuppgifter har inte rättats.

## Mappar och filer

- `pages/`: synlig lokal sidtext i läsbart Markdown-format.
- `data/pioneers.json`: 20 lokala pionjärposter.
- `data/steps.json`: 30 lokala danssteg.
- `data/items.json`: 5 navigations-/innehållskort.
- `all-string-literals.json`: komplett råinventering av strängar i JavaScript-källkoden, med fil och rad. Den innehåller även tekniska strängar.
- `media-inventory.json`: inventering av lokala bilder, videor, SVG- och ikonfiler.
- `extraction-summary.json`: maskinläsbar sammanfattning.

## Viktig begränsning

Bloggtexterna låg inte i projektet. Appen hämtade dem dynamiskt från ett WordPress GraphQL-API via `NEXT_PUBLIC_WP_ENDPOINT_2022`. Minnesposterna hämtades från ett externt JSON-API. De måste exporteras eller hämtas separat innan WordPress stängs.

## Språk

Originaltexten är huvudsakligen på engelska. Den bör behållas som källversion (`en`) och översättas till svenska (`sv`) med separat granskningsstatus per text, så att en historiker kan godkänna formuleringar och namn.
