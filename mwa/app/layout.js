import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Military Widows Advocacy',
  description:
    'Behind every fallen hero is often a spouse whose life has been forever changed. We provide employment opportunities, business startup assistance, emergency financial aid for urgent bills, and other resources designed to bring hope and practical help.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
