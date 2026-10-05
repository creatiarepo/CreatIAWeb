'use client';

import { motion, type Variants } from 'framer-motion';
import { Check, type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export function ServiceCard({ icon: Icon, title, description, details }: ServiceCardProps) {
  return (
    <motion.article 
      className="group relative p-8 md:p-10 rounded-2xl bg-black/[0.02] dark:bg-white/[0.015] border border-black/5 dark:border-white/5 transition-all duration-300 hover:bg-white dark:hover:bg-white/[0.03] hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-none hover:-translate-y-1"
      variants={cardVariants}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mb-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="font-body text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3" aria-label={`Detalles de ${title}`}>
        {details.map((d) => (
          <li key={d} className="flex items-start gap-3">
            <Check size={18} className="text-cyan-500 shrink-0 mt-0.5" aria-hidden="true" />
            <span className="font-body text-[15px] text-neutral-700 dark:text-neutral-300">{d}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
