import { ContentProse } from '@/components/ContentProse';
import { Reveal } from '@/components/Reveal';
import { SourceNotice } from '@/components/SourceNotice';
import type { Locale } from '@/lib/i18n';

export function RecoveredPage({ content, lang }: { content: string; lang: Locale }) {
  return (
    <>
      <SourceNotice lang={lang} />
      <Reveal><ContentProse>{content}</ContentProse></Reveal>
    </>
  );
}
