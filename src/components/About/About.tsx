'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import styles from './About.module.css';

export function About() {
  const t      = useTranslations('about');
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="nosotros" ref={ref} className={`section ${styles.section}`}>
      <div className="container">
        <SectionTitle
          tag={t('tag')}
          title={t('title')}
          highlight={t('titleAccent')}
          align="center"
        />

        <div className={styles.grid}>
          {/* Mission */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>{t('missionLabel')}</span>
            </div>
            <p className={styles.cardText}>{t('mission')}</p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className={`${styles.card} ${styles.cardAccent}`}
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>{t('visionLabel')}</span>
            </div>
            <p className={styles.cardText}>{t('vision')}</p>
          </motion.div>
        </div>

        {/* Values strip */}
        <motion.div
          className={styles.valuesStrip}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          {['Creatividad', 'Innovación', 'Automatización', 'Impacto', 'Calidad'].map((v, i) => (
            <span key={v} className={styles.valueItem}>
              {v}
              {i < 4 && <span className={styles.valueSep} aria-hidden="true">·</span>}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
