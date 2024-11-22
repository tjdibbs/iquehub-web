import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { PreloadResources } from '@/lib/preload-resources';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <PreloadResources />
        {children}
        <Footer />
      </body>
    </html>
  );
}
