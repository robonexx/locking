import type { Locale } from '@/lib/i18n';
import { aboutEn, aboutFi, aboutFr, aboutSv } from './about.generated';
import { aboutKo } from './ko.generated';

export type AboutMedia = {
  src: string;
  alt: string;
  caption: string;
};

export type JourneySection = {
  period: string;
  title: string;
  paragraphs: readonly string[];
  media?: readonly AboutMedia[];
  mediaAfterParagraph?: number;
};

export type AboutStory = {
  intro: readonly string[];
  sections: readonly JourneySection[];
  dedicationTitle: string;
  dedication: readonly string[];
  acknowledgementsTitle: string;
  acknowledgements: readonly string[];
  continuationTitle: string;
  continuation: readonly string[];
};

export const aboutStory: Record<Locale, AboutStory> = {
  sv: aboutSv,
  en: aboutEn,
  fr: aboutFr,
  fi: aboutFi,
  ko: aboutKo,
};
