import ReactMarkdown from 'react-markdown';
import styles from './ContentProse.module.css';

export function ContentProse({ children }: { children: string }) {
  return <div className={styles.prose}><ReactMarkdown>{children}</ReactMarkdown></div>;
}
