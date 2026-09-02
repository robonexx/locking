export const locales = ['sv', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'sv';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const ui = {
  sv: {
    skip: 'Hoppa till innehållet',
    menu: 'Meny',
    close: 'Stäng meny',
    home: 'Hem',
    about: 'Om oss',
    history: 'Historia',
    knowledge: 'Kunskap',
    stories: 'Intervjuer & artiklar',
    contact: 'Kontakt',
    sourceLabel: 'Originalmaterial',
    sourceNotice:
      'Originaltexten är tills vidare på engelska. Den svenska översättningen ska faktagranskas innan publicering.',
    readMore: 'Utforska sidan',
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close menu',
    home: 'Home',
    about: 'About',
    history: 'History',
    knowledge: 'Knowledge',
    stories: 'Interviews & articles',
    contact: 'Contact',
    sourceLabel: 'Original material',
    sourceNotice:
      'This is recovered source copy. Spelling and historical claims have not yet been edited.',
    readMore: 'Explore the page',
  },
} satisfies Record<Locale, Record<string, string>>;
