'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { Rocket, Target, Users, Zap, TrendingUp, HeartHandshake } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';

const REASON_ICONS = [Rocket, Target, Users, Zap, TrendingUp, HeartHandshake];

export function WhyCreatIA() {
  const t   = useTranslations('whyCreatia');
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const stats   = t.raw('stats')   as Array<{ value: string; label: string }>;
  const reasons = t.raw('reasons') as Array<{ title: string; description: string }>;

  return (
    <section id="por-que" ref={ref} className="py-24 md:py-32 relative bg-neutral-50 dark:bg-black/20 border-t border-black/5 dark:border-white/5">
      <div className="container mx-auto px-6 max-w-[1140px] relative z-10">
        <SectionTitle
          tag={t('tag')}
          title={t('title')}
          highlight={t('titleAccent')}
          description={t('description')}
        />

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-white dark:bg-[#08090C] border border-black/5 dark:border-white/5 text-center transition-transform hover:-translate-y-1">
              <span className="font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2">{s.value}</span>
              <span className="font-body text-sm text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((r, i) => {
            const Icon = REASON_ICONS[i] ?? Rocket;
            return (
              <motion.div
                key={r.title}
                className="group flex flex-col gap-4 p-8 rounded-2xl bg-white dark:bg-white/[0.015] border border-transparent dark:border-white/5 hover:border-black/5 hover:shadow-lg hover:shadow-black/5 dark:hover:bg-white/[0.03] dark:hover:shadow-none transition-all"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-white transition-transform group-hover:scale-110" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-neutral-900 dark:text-white mb-2">{r.title}</h3>
                  <p className="font-body text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed">{r.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
