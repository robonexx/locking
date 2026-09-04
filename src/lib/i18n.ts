export const locales = ['sv', 'en', 'fr', 'fi'] as const;
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
    readMore: 'Explore the page',
  },
  fr: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    close: 'Fermer le menu',
    home: 'Accueil',
    about: 'À propos',
    history: 'Histoire',
    knowledge: 'Ressources',
    stories: 'Entretiens & articles',
    contact: 'Contact',
    readMore: 'Découvrir la page',
  },
  fi: {
    skip: 'Siirry sisältöön',
    menu: 'Valikko',
    close: 'Sulje valikko',
    home: 'Etusivu',
    about: 'Tietoa sivustosta',
    history: 'Historia',
    knowledge: 'Tietopankki',
    stories: 'Haastattelut ja artikkelit',
    contact: 'Yhteystiedot',
    readMore: 'Tutustu sivuun',
  },
} satisfies Record<Locale, Record<string, string>>;
