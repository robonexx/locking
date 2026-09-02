import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <section className={`shell section-space ${styles.notFound}`}>
      <p className="eyebrow eyebrow-dark">404</p>
      <h1>Page not found</h1>
      <Link className={styles.button} href="/sv">Till startsidan</Link>
    </section>
  );
}
