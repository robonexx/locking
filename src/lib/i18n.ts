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
    sourceLabel: 'Matériau d’origine',
    sourceNotice:
      'Cette page est traduite à partir du texte d’archive récupéré. La langue et la terminologie sont examinées avec soin ; les affirmations historiques doivent encore être vérifiées.',
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
    sourceLabel: 'Alkuperäisaineisto',
    sourceNotice:
      'Tämä sivu on käännetty talteen otetusta arkistotekstistä. Kieltä ja terminologiaa tarkistetaan huolellisesti; historialliset väitteet on vielä tarkistettava.',
    readMore: 'Tutustu sivuun',
  },
} satisfies Record<Locale, Record<string, string>>;
