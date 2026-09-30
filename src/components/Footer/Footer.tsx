'use client';

import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

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
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Creat</span>
            <span className={styles.logoAccent}>IA</span>
          </div>
          <p className={styles.tagline}>{t('tagline')}</p>
          <p className={styles.desc}>{t('description')}</p>
        </div>

        {/* Links */}
        <div className={styles.linksCol}>
          <span className={styles.colTitle}>{t('links.title')}</span>
          <nav aria-label="Footer navegación">
            {NAV_SECTIONS.map(({ href, key }) => (
              <a key={key} href={href} className={styles.link}>
                {t(`links.${key}`)}
              </a>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div className={styles.linksCol}>
          <span className={styles.colTitle}>{t('services.title')}</span>
          <nav aria-label="Footer servicios">
            {SERVICE_LINKS.map(({ key }) => (
              <a key={key} href="#servicios" className={styles.link}>
                {t(`services.${key}`)}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span className={styles.copyright}>
              {t.raw('copyright').toString().replace('{year}', String(year))}
            </span>
            <div className={styles.legalLinks}>
              <a href="#" className={styles.legalLink}>{t('legal.privacy')}</a>
              <span aria-hidden="true">·</span>
              <a href="#" className={styles.legalLink}>{t('legal.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
