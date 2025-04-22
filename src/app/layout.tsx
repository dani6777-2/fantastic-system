import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {SiteHeader} from '@/components/site-header';
import {SiteFooter} from '@/components/site-footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cloud Comparator',
  description: 'Compare cloud providers like GCP, AWS, and Azure.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          <main className="container mx-auto py-8 flex-grow">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
