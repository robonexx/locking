export const locales = ['sv', 'en', 'fr', 'fi', 'ko', 'ja', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const languageTags = {
  sv: 'sv',
  en: 'en',
  fr: 'fr',
  fi: 'fi',
  ko: 'ko-KR',
  ja: 'ja-JP',
  zh: 'zh-CN',
} satisfies Record<Locale, string>;

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
  ko: {
    skip: '본문으로 건너뛰기',
    menu: '메뉴',
    close: '메뉴 닫기',
    home: '홈',
    about: '소개',
    history: '역사',
    knowledge: '자료',
    stories: '인터뷰 & 기사',
    contact: '연락처',
    readMore: '페이지 둘러보기',
  },
  ja: {
    skip: '本文へ移動',
    menu: 'メニュー',
    close: 'メニューを閉じる',
    home: 'ホーム',
    about: 'このサイトについて',
    history: '歴史',
    knowledge: '資料',
    stories: 'インタビュー & 記事',
    contact: 'お問い合わせ',
    readMore: 'ページを見る',
  },
  zh: {
    skip: '跳到主要内容',
    menu: '菜单',
    close: '关闭菜单',
    home: '首页',
    about: '关于本站',
    history: '历史',
    knowledge: '知识',
    stories: '访谈与文章',
    contact: '联系',
    readMore: '查看页面',
  },
} satisfies Record<Locale, Record<string, string>>;
