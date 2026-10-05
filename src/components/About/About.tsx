'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';

export function About() {
  const t      = useTranslations('about');
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="nosotros" ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <SectionTitle
          tag={t('tag')}
          title={t('title')}
          highlight={t('titleAccent')}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-16">
          {/* Mission */}
          <motion.div
            className="flex flex-col gap-4 p-8 md:p-10 rounded-2xl bg-black/[0.02] dark:bg-white/[0.015] border border-black/5 dark:border-white/5 transition-colors hover:bg-white dark:hover:bg-white/[0.03]"
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="mb-2">
              <span className="inline-block px-3 py-1 rounded-full bg-neutral-200/50 dark:bg-white/10 font-display text-xs font-bold tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
                {t('missionLabel')}
              </span>
            </div>
            <p className="font-body text-[15px] md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {t('mission')}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="flex flex-col gap-4 p-8 md:p-10 rounded-2xl bg-[#38BDF8]/5 dark:bg-[#38BDF8]/10 border border-[#38BDF8]/20 transition-colors hover:bg-[#38BDF8]/10 dark:hover:bg-[#38BDF8]/20"
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="mb-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#38BDF8]/20 font-display text-xs font-bold tracking-widest uppercase text-[#0369A1] dark:text-[#7DD3FC]">
                {t('visionLabel')}
              </span>
            </div>
            <p className="font-body text-[15px] md:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed">
              {t('vision')}
            </p>
          </motion.div>
        </div>

        {/* Values strip */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-16 p-6 rounded-2xl bg-white dark:bg-[#08090C] border border-black/5 dark:border-white/5"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          {['Creatividad', 'Innovación', 'Automatización', 'Impacto', 'Calidad'].map((v, i) => (
            <span key={v} className="flex items-center gap-4 md:gap-8">
              <span className="font-display text-base md:text-lg font-medium text-neutral-600 dark:text-neutral-400">
                {v}
              </span>
              {i < 4 && <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 hidden md:block" aria-hidden="true" />}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
