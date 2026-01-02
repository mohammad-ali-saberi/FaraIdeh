import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import PageViewTracker from '@/components/PageViewTracker';
import OrganizationSchema from '@/components/OrganizationSchema';

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
  metadataBase: new URL('https://fara-ideh.ir'),
  title: {
    default: 'فراایده | تیم توسعه نرم‌افزار و استارتاپی',
    template: '%s | فراایده',
  },
  description:
    'فراایده یک تیم کوچک توسعه نرم‌افزار و استارتاپی است که خدمات طراحی و توسعه وب، اپلیکیشن موبایل، UI/UX راه اندازی استارتاپ، مدیریت محتوا و مدیریت صفحه اینستاگرام را ارائه می‌دهد.',
  keywords: [
    'توسعه نرم افزار',
    'طراحی وب سایت',
    'طراحی اپلیکیشن',
    'استارتاپ',
    'UI/UX',
    'فراایده',
    'فراایده تیم',
    'تیم فراایده',
    'مدیریت اینستاگرام',
    'مدیریت محتوا',
    'faraideh',
    'Faraideh',
    'fara-ideh',
    'Fara-ideh',
  ],
  authors: [{ name: 'فراایده' }],
  creator: 'فراایده',
  publisher: 'فراایده',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://fara-ideh.ir',
    siteName: 'فراایده',
    title: 'فراایده | تیم توسعه نرم‌افزار و استارتاپی',
    description:
      'فراایده یک تیم کوچک توسعه نرم‌افزار و استارتاپی است که خدمات طراحی و توسعه وب، اپلیکیشن موبایل، UI/UX راه اندازی استارتاپ، مدیریت محتوا و مدیریت صفحه اینستاگرام را ارائه می‌دهد.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'فراایده',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'فراایده | تیم توسعه نرم‌افزار و استارتاپی',
    description:
      'فراایده یک تیم کوچک توسعه نرم‌افزار و استارتاپی است که خدمات طراحی و توسعه وب، اپلیکیشن موبایل، UI/UX راه اندازی استارتاپ، مدیریت محتوا و مدیریت صفحه اینستاگرام را ارائه می‌دهد.',
    images: ['/images/og-image.png'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification
  // verification: {
  //   google: 'کد تایید گوگل',
  // },

  // Alternate languages
  alternates: {
    canonical: 'https://fara-ideh.ir',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className={`${iranYekan.variable} ${yekanBakhFaNum.variable}`}>
      <body>
        <PageViewTracker />
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}
