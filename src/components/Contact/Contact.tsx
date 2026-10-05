'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { Button } from '@/components/ui/Button/Button';
import type { ContactFormData } from '@/types';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const t      = useTranslations('contact');
  const tf     = useTranslations('contact.form');
  const ti     = useTranslations('contact.info');
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const serviceOptions = tf.raw('serviceOptions') as string[];

  return (
    <section id="contacto" ref={ref} className="py-24 md:py-32 relative bg-neutral-50 dark:bg-[#08090C] border-t border-black/5 dark:border-white/5">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <SectionTitle
          tag={t('tag')}
          title={t('title')}
          highlight={t('titleAccent')}
          description={t('description')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 mt-16">
          {/* Form */}
          <motion.div
            className="p-8 md:p-10 rounded-3xl bg-white dark:bg-white/[0.015] border border-black/5 dark:border-white/5 shadow-xl shadow-black/5 dark:shadow-none"
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
                <CheckCircle size={56} className="text-[#38BDF8]" />
                <h3 className="font-display text-2xl font-semibold text-neutral-900 dark:text-white">{tf('successTitle')}</h3>
                <p className="font-body text-neutral-600 dark:text-neutral-400 max-w-sm">{tf('successMessage')}</p>
                <Button variant="outline" size="md" onClick={() => setStatus('idle')}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-display text-sm font-medium text-neutral-700 dark:text-neutral-300">{tf('name')}</label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 dark:hover:border-neutral-500'} py-3 px-1 font-body text-base text-neutral-900 dark:text-white transition-colors focus:outline-none focus:border-[#38BDF8]`}
                      placeholder={tf('namePlaceholder')}
                      {...register('name', { required: true })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-display text-sm font-medium text-neutral-700 dark:text-neutral-300">{tf('email')}</label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 dark:hover:border-neutral-500'} py-3 px-1 font-body text-base text-neutral-900 dark:text-white transition-colors focus:outline-none focus:border-[#38BDF8]`}
                      placeholder={tf('emailPlaceholder')}
                      {...register('email', {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="font-display text-sm font-medium text-neutral-700 dark:text-neutral-300">{tf('company')}</label>
                    <input
                      id="company"
                      type="text"
                      className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 dark:hover:border-neutral-500 py-3 px-1 font-body text-base text-neutral-900 dark:text-white transition-colors focus:outline-none focus:border-[#38BDF8]"
                      placeholder={tf('companyPlaceholder')}
                      {...register('company')}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="font-display text-sm font-medium text-neutral-700 dark:text-neutral-300">{tf('service')}</label>
                    <select
                      id="service"
                      className={`w-full bg-transparent border-b ${errors.service ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 dark:hover:border-neutral-500'} py-3 px-1 font-body text-base text-neutral-900 dark:text-white transition-colors focus:outline-none focus:border-[#38BDF8] appearance-none`}
                      {...register('service', { required: true })}
                      defaultValue=""
                    >
                      <option value="" disabled className="text-neutral-400">{tf('servicePlaceholder')}</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white dark:bg-[#08090C] text-neutral-900 dark:text-white">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-display text-sm font-medium text-neutral-700 dark:text-neutral-300">{tf('message')}</label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 dark:hover:border-neutral-500'} py-3 px-1 font-body text-base text-neutral-900 dark:text-white transition-colors focus:outline-none focus:border-[#38BDF8] resize-none`}
                    placeholder={tf('messagePlaceholder')}
                    {...register('message', { required: true, minLength: 20 })}
                  />
                </div>

                {status === 'error' && (
                  <p className="font-body text-sm text-red-500 mt-2">{tf('errorMessage')}</p>
                )}

                <div className="mt-6">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={status === 'loading'}
                    rightIcon={<Send size={18} />}
                    className="w-full md:w-auto"
                  >
                    {status === 'loading' ? tf('submitting') : tf('submit')}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-200/50 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 transition-colors group-hover:bg-[#38BDF8]/10 group-hover:text-[#38BDF8]"><Mail size={22} /></div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-sm font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-500">{ti('emailLabel')}</span>
                <a href={`mailto:${ti('email')}`} className="font-body text-lg text-neutral-900 dark:text-white hover:text-[#38BDF8] dark:hover:text-[#38BDF8] transition-colors">{ti('email')}</a>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-200/50 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 transition-colors group-hover:bg-[#38BDF8]/10 group-hover:text-[#38BDF8]">
                <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22} aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-sm font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-500">{ti('whatsappLabel')}</span>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '573001234567'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-lg text-neutral-900 dark:text-white hover:text-[#38BDF8] dark:hover:text-[#38BDF8] transition-colors"
                >
                  {ti('whatsapp')}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-200/50 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 transition-colors group-hover:bg-[#38BDF8]/10 group-hover:text-[#38BDF8]"><MapPin size={22} /></div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-sm font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-500">{ti('locationLabel')}</span>
                <span className="font-body text-lg text-neutral-900 dark:text-white">{ti('location')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
