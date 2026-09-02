import { ContentProse } from '@/components/ContentProse';
import { SourceNotice } from '@/components/SourceNotice';
import type { Locale } from '@/lib/i18n';

export function RecoveredPage({ content, lang }: { content: string; lang: Locale }) {
  return (
    <>
      <SourceNotice lang={lang} />
      <ContentProse>{content}</ContentProse>
    </>
  );
}
