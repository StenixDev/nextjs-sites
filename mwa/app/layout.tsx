import type { Metadata } from 'next';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'US Military Widows',
  description:
    'Behind every fallen hero is often a spouse whose life has been forever changed. We provide employment opportunities, business startup assistance, emergency financial aid for urgent bills, and other resources designed to bring hope and practical help.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
}
