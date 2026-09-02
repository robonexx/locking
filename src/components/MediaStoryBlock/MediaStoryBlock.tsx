import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import styles from './MediaStoryBlock.module.css';

type MediaStoryBlockProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export function MediaStoryBlock({ image, imageAlt, eyebrow, title, paragraphs }: MediaStoryBlockProps) {
  return (
    <Reveal as="section" className={styles.block}>
      <div className={styles.image}>
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 680px) 100vw, 38vw" />
      </div>
      <div className={styles.copy}>
        <p className="eyebrow eyebrow-dark">{eyebrow}</p>
        <h2>{title}</h2>
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </Reveal>
  );
}
