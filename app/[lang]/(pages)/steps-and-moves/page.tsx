import { ContentPage, getContentPageMetadata, type LocaleParams } from '@/features/ContentPage';
export function generateMetadata({ params }: { params: LocaleParams }) { return getContentPageMetadata(params, 'steps-and-moves'); }
export default function Page({ params }: { params: LocaleParams }) { return <ContentPage params={params} slug="steps-and-moves" />; }
