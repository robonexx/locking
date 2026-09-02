import Image from 'next/image';
import type { ContentPage } from '@/content/site';
import type { Locale } from '@/lib/i18n';
import styles from './PageHero.module.css';

export function PageHero({ page, lang }: { page: ContentPage; lang: Locale }) {
  return (
    <header className={`${styles.hero} ${page.image ? '' : styles.placeholder}`}>
      {page.image && (
        <Image
          src={page.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.image}
          style={{
            objectFit: page.imageFit,
            objectPosition: page.imagePosition,
            transform: page.imageScale ? `scale(${page.imageScale})` : undefined,
            transformOrigin: page.imageTransformOrigin,
          }}
        />
      )}
      <div className={styles.noise} aria-hidden="true" />
      <div className={`shell ${styles.content}`}>
        <p className="eyebrow">{page.kicker[lang]}</p>
        <h1>{page.title[lang]}</h1>
        <p>{page.summary[lang]}</p>
      </div>
    </header>
  );
}
