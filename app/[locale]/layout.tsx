// app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { CustomThemeProvider } from './theme/ThemeProvider'; 
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Boburmirzo Ergashev',
  icons: {
    icon: '/icons8-coding-96.png',
  },
  description: 'Boburmirzo Ergashev - Full Stack Developer Portfolio',
  keywords: [
    'Boburmirzo Ergashev',
    'Dasturchi',
    'Full Stack Developer',
    'Portfolio',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Next.js',
    'Websayt ishlab chiquvchi',
  ],
  authors: [{ name: 'Boburmirzo Ergashev', url: 'https://bobur-dev.uz' }],
  openGraph: {
    title: 'Boburmirzo Ergashev',
    description: 'Boburmirzo Ergashev - Full Stack Developer Portfolio',
    url: 'https://bobur-dev.uz',
    siteName: 'Boburmirzo Ergashev Portfolio',
    images: [
      {
        url: 'https://bobur-dev.uz/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Boburmirzo Ergashev Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boburmirzo Ergashev',
    description: 'Boburmirzo Ergashev - Full Stack Developer Portfolio',
    images: ['https://bobur-dev.uz/og-image.png'],
    creator: '@boburmirzo'
  }
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale }); // or just getMessages()

  return (
    <div className={inter.variable}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <CustomThemeProvider>
          {children}
          <SpeedInsights />
        </CustomThemeProvider>
      </NextIntlClientProvider>
    </div>
  );
}
