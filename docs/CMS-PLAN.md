# Plan för det lilla CMS:et

CMS:et ska bara hantera:

- intervjuer
- artiklar/inlägg
- eventuella nyheter som kan lyftas på startsidan

Historiska standardsidor, pionjärer, danssteg och terminologi ligger kvar som versionshanterade innehållsfiler. Det minskar risken att viktig arkivtext råkar skrivas över i adminläget.

## Rekommenderad teknik

Supabase passar bättre än MongoDB för den här avgränsade redaktionsdelen. Postgres gör relationen mellan ett inlägg och flera språkversioner tydlig, och Supabase ger både inloggning och behörighetsregler. Cloudinary används för uppladdning, leverans och framtida bildtransformationer.

CMS:et byggs inne i samma Next.js-app under en skyddad route, exempelvis `/studio`.

## Datamodell

### `articles`

- `id` — UUID
- `slug` — gemensam stabil URL-nyckel
- `type` — `interview`, `article` eller `news`
- `status` — `draft`, `review` eller `published`
- `cover_media_id` — referens till media
- `published_at`
- `created_by`
- `created_at`
- `updated_at`

### `article_translations`

- `article_id`
- `locale` — först `sv` och `en`
- `title`
- `excerpt`
- `body` — block-JSON eller Markdown
- `translation_status` — `missing`, `draft`, `reviewed`
- unik kombination av `article_id` och `locale`

### `media_assets`

- `id`
- `cloudinary_public_id`
- `resource_type`
- `width`
- `height`
- `format`
- `credit`
- `copyright_note`
- `alt_sv`
- `alt_en`

## Behörigheter

- Alla besökare får endast läsa publicerade artiklar.
- Inloggade redaktörer får skapa och redigera utkast.
- Endast administratörer får publicera eller radera.
- Supabase Row Level Security aktiveras på samtliga exponerade tabeller.
- Cloudinary-signaturer skapas på serversidan; hemliga nycklar exponeras aldrig i webbläsaren.

## Redigeringsflöde

1. Välj innehållstyp.
2. Skriv svensk titel, ingress och innehåll.
3. Lägg till omslagsbild, bildtext, alt-text och fotograf/källa.
4. Spara som utkast.
5. Skapa eller uppdatera den engelska språkversionen.
6. Förhandsgranska båda språken.
7. Markera som granskad och publicera.

## Senare språk

När svenska och engelska fungerar läggs `fr`, `es`, `ja`, `zh` och `ko` till i samma översättningstabell. Inga nya kolumner eller separata artikelkopior behövs.

## Källor

- Next.js internationalisering: https://nextjs.org/docs/app/guides/internationalization
- Supabase Auth för Next.js: https://supabase.com/docs/guides/auth/quickstarts/nextjs
- Supabase Row Level Security: https://supabase.com/docs/guides/database/postgres/row-level-security
- Cloudinary uppladdning med Node.js: https://cloudinary.com/documentation/node_image_and_video_upload
