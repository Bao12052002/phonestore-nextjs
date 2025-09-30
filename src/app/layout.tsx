// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header'; // Import Header

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PhoneStore',
  description: 'Cửa hàng điện thoại thế hệ mới',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        <Header /> {/* Thêm Header vào đây */}
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}