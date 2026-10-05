'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';

const NAV_LINKS = [
  { key: 'services', href: '#servicios' },
  { key: 'whyUs',    href: '#por-que' },
  { key: 'about',    href: '#nosotros' },
  { key: 'contact',  href: '#contacto' },
] as const;

export function Navbar() {
  const t      = useTranslations('nav');
  const locale = useLocale();
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    const currentPath = window.location.pathname;
    const withoutLocale = currentPath.replace(new RegExp(`^/${locale}`), '') || '/';
    window.location.href = `/${next}${withoutLocale === '/' ? '' : withoutLocale}`;
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      id="top"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/70 dark:bg-[#08090C]/70 backdrop-blur-md border-b border-black/5 dark:border-white/5 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-6 max-w-[1140px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="font-display text-2xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-[2px] transition-opacity hover:opacity-80"
          aria-label="CreatIA — Inicio"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <span>Creat</span>
          <span className="text-[#38BDF8]">IA</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {NAV_LINKS.map(({ key, href }) => (
            <button
              key={key}
              className="font-body text-[14px] font-medium text-neutral-600 dark:text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-white"
              onClick={() => handleNavClick(href)}
            >
              {t(key)}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            className="font-display text-[13px] font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-widest px-3 py-1.5 transition-colors hover:text-neutral-900 dark:hover:text-white"
            onClick={switchLocale}
            aria-label={`Cambiar idioma a ${locale === 'es' ? 'Inglés' : 'Español'}`}
          >
            {t('langSwitch')}
          </button>
          <button
            className="font-body text-[14px] font-medium px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black transition-all hover:opacity-90 active:scale-[0.98]"
            onClick={() => handleNavClick('#contacto')}
          >
            {t('contact')}
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-neutral-900 dark:text-white transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#08090C] border-b border-black/5 dark:border-white/5 flex flex-col px-6 py-4 shadow-xl" role="navigation">
          {NAV_LINKS.map(({ key, href }) => (
            <button
              key={key}
              className="w-full text-left font-display text-xl font-medium text-neutral-900 dark:text-white py-4 border-b border-black/5 dark:border-white/5"
              onClick={() => handleNavClick(href)}
            >
              {t(key)}
            </button>
          ))}
          <div className="flex items-center gap-4 py-4">
            <button className="flex-1 text-center font-display text-sm font-bold bg-neutral-100 dark:bg-white/5 py-3 rounded-lg" onClick={switchLocale}>
              {t('langSwitch')}
            </button>
            {mounted && (
              <button onClick={toggleTheme} className="p-3 bg-neutral-100 dark:bg-white/5 rounded-lg flex items-center justify-center">
                {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
