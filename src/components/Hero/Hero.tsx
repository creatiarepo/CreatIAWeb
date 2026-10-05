'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/lib/utils';

const ParticleCanvas = dynamic(
  () => import('./ParticleCanvas').then((m) => m.ParticleCanvas),
  { ssr: false }
);

const containerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-background" aria-label="Sección principal">
      {/* Background particles */}
      <div className="absolute inset-0 z-0 opacity-15 dark:opacity-30">
        <ParticleCanvas />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-[1140px] relative z-10 pt-[120px] pb-32">
        <motion.div
          className="max-w-[820px] flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 w-fit font-body text-xs font-medium text-neutral-600 dark:text-neutral-400 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)] shrink-0" aria-hidden="true" />
            Creatividad · Innovación · Automatización
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-neutral-900 dark:text-gray-50 max-w-none">
            {t('headline')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400">
              {t('headlineAccent')}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="font-body text-[clamp(1.05rem,1.8vw,1.25rem)] max-md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[58ch]">
            {t('subheadline')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center mt-4 max-sm:flex-col max-sm:items-stretch max-sm:w-full">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 bg-transparent border-none cursor-pointer text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white z-10 transition-colors"
        onClick={scrollToServices}
        aria-label={t('scrollHint')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="font-body text-[11px] uppercase tracking-widest font-medium">{t('scrollHint')}</span>
        <ArrowDown size={18} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
