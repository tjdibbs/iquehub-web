import type { Metadata } from 'next';
import '../globals.css';
import { Montserrat } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import Footer from '@/components/layout/footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IQ Hub',
  description:
    'IQ Hub is a premier tech academy dedicated to equipping learners with the skills necessary to thrive in the digital age. Whether it’s backend/frontend development, digital marketing, UI/UX design, or cybersecurity, our courses are designed to deliver hands-on learning experiences that lead to real-world success.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'IQ Hub',
  },
  icons: {
    icon: '/identity/favicon.png',
    apple: '/identity/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.iquehub.com',
    title: 'IQ Hub',
    description:
      'IQ Hub is a premier tech academy dedicated to equipping learners with the skills necessary to thrive in the digital age. Whether it’s backend/frontend development, digital marketing, UI/UX design, or cybersecurity, our courses are designed to deliver hands-on learning experiences that lead to real-world success.',
    images: [
      {
        url: '/identity/logo.png',
        width: 800,
        height: 600,
        alt: 'IQ Hub',
      },
    ],
  },
  keywords: [
    'IQ Hub',
    'Tech Academy',
    'Tech',
    'Academy',
    'Digital Age',
    'Backend Development',
    'Frontend Development',
    'Digital Marketing',
    'UI/UX Design',
    'Cybersecurity',
    'Courses',
    'Learning',
    'Experiences',
    'Success',
  ],
  robots: 'index, follow',
  metadataBase: new URL('https://www.iquehub.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} antialiased grid min-h-screen grid-rows-[1fr_auto]`}>
        <NextTopLoader shadow={false} color='#e7d3ae' showSpinner={false} />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
