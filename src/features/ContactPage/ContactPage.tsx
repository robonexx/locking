import { ContentProse } from '@/components/ContentProse';
import { contactContent } from '@/content/contact';
import type { Locale } from '@/lib/i18n';

export function ContactPage({ lang }: { lang: Locale }) {
  return <ContentProse>{contactContent[lang]}</ContentProse>;
}
