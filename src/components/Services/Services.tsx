'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Zap, Brain, MessageSquare } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { ServiceCard } from './ServiceCard';
import styles from './Services.module.css';

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
    <section id="servicios" ref={ref} className={`section ${styles.services}`}>
      <div className="container">
        <SectionTitle
          tag={t('tag')}
          title={t('title')}
          highlight={t('titleAccent')}
          description={t('description')}
        />

        <motion.div
          className={styles.grid}
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
