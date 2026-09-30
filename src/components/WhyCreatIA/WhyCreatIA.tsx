'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { Rocket, Target, Users, Zap, TrendingUp, HeartHandshake } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import styles from './WhyCreatIA.module.css';

const REASON_ICONS = [Rocket, Target, Users, Zap, TrendingUp, HeartHandshake];

export function WhyCreatIA() {
  const t   = useTranslations('whyCreatia');
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const stats   = t.raw('stats')   as Array<{ value: string; label: string }>;
  const reasons = t.raw('reasons') as Array<{ title: string; description: string }>;

  return (
    <section id="por-que" ref={ref} className={`section ${styles.section}`}>
      {/* Glow background */}
      <div className={styles.glow} aria-hidden="true" />

      <div className="container">
        <SectionTitle
          tag={t('tag')}
          title={t('title')}
          highlight={t('titleAccent')}
          description={t('description')}
        />

        {/* Stats */}
        <motion.div
          className={styles.statsGrid}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Reasons */}
        <div className={styles.reasonsGrid}>
          {reasons.map((r, i) => {
            const Icon = REASON_ICONS[i] ?? Rocket;
            return (
              <motion.div
                key={r.title}
                className={styles.reasonCard}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
              >
                <div className={styles.reasonIcon} aria-hidden="true">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className={styles.reasonTitle}>{r.title}</h3>
                  <p className={styles.reasonDesc}>{r.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
