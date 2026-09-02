import { ContentPage, getContentPageMetadata, type LocaleParams } from '@/features/ContentPage';
export function generateMetadata({ params }: { params: LocaleParams }) { return getContentPageMetadata(params, 'groups-and-dancers'); }
export default function Page({ params }: { params: LocaleParams }) { return <ContentPage params={params} slug="groups-and-dancers" />; }
