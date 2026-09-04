import { ContentProse } from '@/components/ContentProse';

export function MarkdownPage({ content }: { content: string }) {
  return <ContentProse>{content}</ContentProse>;
}
