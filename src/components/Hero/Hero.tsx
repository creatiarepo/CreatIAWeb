'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './Hero.module.css';

const ParticleCanvas = dynamic(
  () => import('./ParticleCanvas').then((m) => m.ParticleCanvas),
  { ssr: false }
);

const containerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export function Hero() {
  const t = useTranslations('hero');

  const scrollToServices = () => {
    document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className={styles.hero} aria-label="Sección principal">
      {/* Background particles */}
      <div className={styles.canvasWrapper}>
        <ParticleCanvas />
      </div>

      {/* Glow blobs */}
      <div className={styles.glowBlob1} aria-hidden="true" />
      <div className={styles.glowBlob2} aria-hidden="true" />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.textBlock}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.tagline}>
            <span className={styles.dot} aria-hidden="true" />
            Creatividad · Innovación · Automatización
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.headline}>
            {t('headline')}{' '}
            <span className={styles.headlineAccent}>
              {t('headlineAccent')}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.subheadline}>
            {t('subheadline')}
          </motion.p>

          <motion.div variants={itemVariants} className={styles.ctas}>
            <Button size="lg" variant="primary" onClick={scrollToServices}>
              {t('cta_primary')}
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact}>
              {t('cta_secondary')}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        className={styles.scrollHint}
        onClick={scrollToServices}
        aria-label={t('scrollHint')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className={styles.scrollText}>{t('scrollHint')}</span>
        <ArrowDown size={18} className={styles.scrollArrow} />
      </motion.button>
    </section>
  );
}
