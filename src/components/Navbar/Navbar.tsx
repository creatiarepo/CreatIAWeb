'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';

import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { key: 'services', href: '#servicios' },
  { key: 'whyUs',    href: '#por-que' },
  { key: 'about',    href: '#nosotros' },
  { key: 'contact',  href: '#contacto' },
] as const;

export function Navbar() {
  const t      = useTranslations('nav');
  const locale = useLocale();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const switchLocale = () => {
    const next = locale === 'es' ? 'en' : 'es';
    // Quita el prefijo de locale actual y agrega el nuevo
    // e.g. /es/about → /en/about, / → /en
    const currentPath = window.location.pathname;
    const withoutLocale = currentPath.replace(new RegExp(`^/${locale}`), '') || '/';
    window.location.href = `/${next}${withoutLocale === '/' ? '' : withoutLocale}`;
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      id="top"
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a
          href="#top"
          className={styles.logo}
          aria-label="CreatIA — Inicio"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <span className={styles.logoText}>Creat</span>
          <span className={styles.logoAccent}>IA</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Navegación principal">
          {NAV_LINKS.map(({ key, href }) => (
            <button
              key={key}
              className={styles.navLink}
              onClick={() => handleNavClick(href)}
            >
              {t(key)}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={styles.langBtn}
            onClick={switchLocale}
            aria-label={`Cambiar idioma a ${locale === 'es' ? 'Inglés' : 'Español'}`}
          >
            {t('langSwitch')}
          </button>
          <button
            className={styles.ctaBtn}
            onClick={() => handleNavClick('#contacto')}
          >
            {t('contact')}
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className={styles.mobileMenu} role="navigation">
          {NAV_LINKS.map(({ key, href }) => (
            <button
              key={key}
              className={styles.mobileLink}
              onClick={() => handleNavClick(href)}
            >
              {t(key)}
            </button>
          ))}
          <div className={styles.mobileDivider} />
          <button className={styles.langBtn} onClick={switchLocale}>
            {t('langSwitch')}
          </button>
        </div>
      )}
    </header>
  );
}
