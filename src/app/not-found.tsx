// Next Imports
import type { Metadata } from 'next';
import Link from 'next/link';

// Components
import NotFoundDecoration from '@/components/icons/SVG/NotFoundDecoration';

export const metadata: Metadata = {
  title: 'صفحه پیدا نشد - 404',
  description: 'متأسفانه صفحه مورد نظر شما یافت نشد.',
  robots: {
    index: false,
    follow: true,
  },
};

const notFound = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex flex-col items-center justify-center w-full h-screen">
        <NotFoundDecoration size="550" />

        <p className="font-iranYekan text-black rtl text-lg mt-1">
          متاسفانه صفحه مورد نظر پیدا نشد!
        </p>

        <Link
          href="/home"
          className="font-iranYekan text-white rtl bg-primary px-10 py-4 rounded-md mt-6 hover:bg-white hover:text-primary border border-transparent hover:border-primary transition-all duration-200"
        >
          بازگشت به خانه
        </Link>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center justify-center w-full h-screen">
        <NotFoundDecoration size="250" />

        <p className="font-iranYekan text-black rtl mt-2">متاسفانه صفحه مورد نظر پیدا نشد!</p>

        <Link
          href="/home"
          className="font-iranYekan text-white rtl bg-primary px-8 py-3 text-sm rounded-md mt-5 hover:bg-white hover:text-primary border border-transparent hover:border-primary transition-all duration-200"
        >
          بازگشت به خانه
        </Link>
      </div>
    </>
  );
};

export default notFound;
