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
      'Detta är återvunnet engelskt källmaterial. Språk och benämningar bearbetas varsamt, medan sakuppgifter fortfarande behöver faktagranskas.',
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
      'This is recovered source copy. Language and terminology are being reviewed with care; historical claims still require fact-checking.',
    readMore: 'Explore the page',
  },
} satisfies Record<Locale, Record<string, string>>;
