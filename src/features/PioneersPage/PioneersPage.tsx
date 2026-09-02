import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import type { Pioneer } from '@/lib/content';
import styles from './PioneersPage.module.css';

export function PioneersPage({ pioneers }: { pioneers: Pioneer[] }) {
  return (
    <div className={styles.grid}>
      {pioneers.map((pioneer, index) => (
        <Reveal as="section" className={styles.card} delay={(index % 2) * 90} key={`${pioneer.id}-${index}`}>
          <div className={styles.copy}>
            <p className="card-index">{String(index + 1).padStart(2, '0')}</p>
            <h2>{pioneer.name}</h2>
            {pioneer.aka && <p className={styles.aka}>{pioneer.aka}</p>}
            <p>{pioneer.desc}</p>
          </div>
          {pioneer.img && (
            <div className={styles.imageWrap}>
              <Image
                src={`/media/${pioneer.img}`}
                alt={pioneer.name}
                fill
                sizes="(max-width: 760px) 100vw, 44vw"
                className={styles.image}
              />
            </div>
          )}
        </Reveal>
      ))}
    </div>
  );
}
