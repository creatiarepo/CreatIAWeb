import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://creatia.co'),
  title: {
    default: 'CreatIA — Desarrollo Web, IA y Automatizaciones',
    template: '%s | CreatIA',
  },
  description:
    'Transformamos ideas en soluciones inteligentes. Desarrollo de apps web, automatizaciones, integraciones con IA y chatbots agénticos.',
  keywords: [
    'desarrollo web',
    'inteligencia artificial',
    'automatizaciones',
    'chatbots agénticos',
    'CreatIA',
    'Colombia',
  ],
  authors: [{ name: 'CreatIA' }],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://creatia.co',
    siteName: 'CreatIA',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CreatIA' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
