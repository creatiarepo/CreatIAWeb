'use client';

import { useTranslations } from 'next-intl';

const NAV_SECTIONS = [
  { href: '#servicios', key: 'services' },
  { href: '#por-que',   key: 'whyUs' },
  { href: '#nosotros',  key: 'about' },
  { href: '#contacto',  key: 'contact' },
] as const;

const SERVICE_LINKS = [
  { key: 'webapp' },
  { key: 'automation' },
  { key: 'ai' },
  { key: 'chatbot' },
] as const;

export function Footer() {
  const t    = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-8 bg-neutral-100 dark:bg-[#030303] border-t border-black/5 dark:border-white/5" role="contentinfo">
      <div className="container mx-auto px-6 max-w-[1140px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="font-display text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            <span>Creat</span>
            <span className="text-[#38BDF8]">IA</span>
          </div>
          <p className="font-display text-sm font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
            {t('tagline')}
          </p>
          <p className="font-body text-[15px] text-neutral-600 dark:text-neutral-500 max-w-sm leading-relaxed mt-2">
            {t('description')}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-5">
          <span className="font-display text-sm font-bold tracking-wider uppercase text-neutral-900 dark:text-white">
            {t('links.title')}
          </span>
          <nav aria-label="Footer navegación" className="flex flex-col gap-3">
            {NAV_SECTIONS.map(({ href, key }) => (
              <a key={key} href={href} className="font-body text-[15px] text-neutral-600 dark:text-neutral-400 hover:text-[#38BDF8] dark:hover:text-[#38BDF8] transition-colors w-fit">
                {t(`links.${key}`)}
              </a>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-5">
          <span className="font-display text-sm font-bold tracking-wider uppercase text-neutral-900 dark:text-white">
            {t('services.title')}
          </span>
          <nav aria-label="Footer servicios" className="flex flex-col gap-3">
            {SERVICE_LINKS.map(({ key }) => (
              <a key={key} href="#servicios" className="font-body text-[15px] text-neutral-600 dark:text-neutral-400 hover:text-[#38BDF8] dark:hover:text-[#38BDF8] transition-colors w-fit">
                {t(`services.${key}`)}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-black/5 dark:border-white/5">
        <div className="container mx-auto px-6 max-w-[1140px] flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body text-sm text-neutral-500 dark:text-neutral-500 text-center md:text-left">
            {t.raw('copyright').toString().replace('{year}', String(year))}
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="font-body text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">{t('legal.privacy')}</a>
            <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
            <a href="#" className="font-body text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">{t('legal.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
