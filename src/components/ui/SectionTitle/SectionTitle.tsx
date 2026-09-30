import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({
  tag,
  title,
  highlight,
  description,
  align = 'center',
}: SectionTitleProps) {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <h2 className={styles.title}>
        {title}{' '}
        {highlight && (
          <span className={styles.highlight}>{highlight}</span>
        )}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
