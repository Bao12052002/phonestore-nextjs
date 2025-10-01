import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppleHeader from '@/components/AppleHeader';

// Apple uses a specific font called San Francisco Pro.
// Inter is a good open-source alternative.
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apple Clone',
  description: 'A clone of the Apple website built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppleHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
