'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Zap, Brain, MessageSquare } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { ServiceCard } from './ServiceCard';

const ICONS = [Globe, Zap, Brain, MessageSquare];

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function Services() {
  const t    = useTranslations('services');
  const ref  = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const items = t.raw('items') as Array<{
    id: string;
    title: string;
    description: string;
    details: string[];
  }>;

  return (
    <section id="servicios" ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <SectionTitle
          tag={t('tag')}
          title={t('title')}
          highlight={t('titleAccent')}
          description={t('description')}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {items.map((item, index) => {
            const Icon = ICONS[index] ?? Globe;
            return (
              <ServiceCard
                key={item.id}
                icon={Icon}
                title={item.title}
                description={item.description}
                details={item.details}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
