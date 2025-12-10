import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import PageViewTracker from '@/component/PageViewTracker';

const iranYekan = localFont({
  src: [
    { path: '../assets/fonts/iranyekanweblight.ttf', weight: '300', style: 'normal' },
    { path: '../assets/fonts/iranyekanwebregular.ttf', weight: '400', style: 'normal' },
    { path: '../assets/fonts/iranyekanwebmedium.ttf', weight: '500', style: 'normal' },
    { path: '../assets/fonts/iranyekanwebbold.ttf', weight: '600', style: 'normal' },
    { path: '../assets/fonts/iranyekanwebblack.ttf', weight: '700', style: 'normal' },
    { path: '../assets/fonts/iranyekanwebextrabold.ttf', weight: '800', style: 'normal' },
    { path: '../assets/fonts/iranyekanwebextrablack.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-iranYekan',
  display: 'swap',
});

const yekanBakhFaNum = localFont({
  src: [
    { path: '../assets/fonts/numbers/YekanBakhFaNum-Light.ttf', weight: '300', style: 'normal' },
    { path: '../assets/fonts/numbers/YekanBakhFaNum-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../assets/fonts/numbers/YekanBakhFaNum-SemiBold.ttf', weight: '500', style: 'normal' },
    { path: '../assets/fonts/numbers/YekanBakhFaNum-Bold.ttf', weight: '600', style: 'normal' },
    { path: '../assets/fonts/numbers/YekanBakhFaNum-Black.ttf', weight: '700', style: 'normal' },
    {
      path: '../assets/fonts/numbers/YekanBakhFaNum-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/numbers/YekanBakhFaNum-ExtraBlack.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-yekanBakhFaNum',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'FaraIdeh | فراایده',
    template: 'فراایده | %s',
  },
  description: 'فراایده | تیم توسعه نرم افزار و استارتاپی',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${iranYekan.variable} ${yekanBakhFaNum.variable}`}>
      <body>
        <PageViewTracker />
        {children}
      </body>
    </html>
  );
}
