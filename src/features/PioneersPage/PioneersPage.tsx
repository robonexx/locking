import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { getPioneerCopy } from '@/content/pioneers';
import type { Pioneer } from '@/lib/content';
import type { Locale } from '@/lib/i18n';
import styles from './PioneersPage.module.css';

export function PioneersPage({ pioneers, lang }: { pioneers: Pioneer[]; lang: Locale }) {
  return (
    <div className={styles.grid}>
      {pioneers.map((pioneer, index) => {
        const copy = getPioneerCopy(pioneer, lang);

        return (
          <Reveal as="section" className={styles.card} delay={(index % 2) * 90} key={`${pioneer.id}-${index}`}>
            <div className={styles.copy}>
              <p className="card-index">{String(index + 1).padStart(2, '0')}</p>
              <h2>{copy.name}</h2>
              {copy.aka && <p className={styles.aka}>{copy.aka}</p>}
              <p>{copy.desc}</p>
            </div>
            {pioneer.img && (
              <div className={styles.imageWrap}>
                <Image
                  src={`/media/${pioneer.img}`}
                  alt={copy.name}
                  fill
                  sizes="(max-width: 760px) 100vw, 44vw"
                  className={styles.image}
                />
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
