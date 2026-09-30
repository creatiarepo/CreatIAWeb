'use client';

import { motion } from 'framer-motion';
import { Check, type LucideIcon } from 'lucide-react';
import styles from './Services.module.css';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export function ServiceCard({ icon: Icon, title, description, details }: ServiceCardProps) {
  return (
    <motion.article className={styles.card} variants={cardVariants}>
      <div className={styles.iconWrapper} aria-hidden="true">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <ul className={styles.detailList} aria-label={`Detalles de ${title}`}>
        {details.map((d) => (
          <li key={d} className={styles.detailItem}>
            <Check size={14} className={styles.checkIcon} aria-hidden="true" />
            <span>{d}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
