'use client';

// Next Imports
import Link from 'next/link';

// Components
import Container from '@/components/Container';
import LargeLabel from '@/components/LargeLabel';
import SmallLabel from '@/components/SmallLabel';
import HomeStoryDecoration from '@/components/icons/SVG/HomeStoryDecoration';

const OurStory = () => {
  return (
    <Container>
      <div className="relative w-full flex flex-col items-center justify-center mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-0">
        <SmallLabel title="OUR STORY" color="#34C759" bgColor="#EAFAEC" />
        <LargeLabel label="OUR STORY" subLabel="ایده‌هایی که به تجربه تبدیل می‌شوند" />

        <p className="text-text-description text-center font-iranYekan leading-5 sm:leading-8 px-4 sm:px-12 md:px-24 lg:px-48 xl:px-96 rtl mt-2 font-light sm:font-medium lg:-mt-8 text-xs sm:text-base">
          ما ایده‌ها را به تجربه‌های واقعی کاربر تبدیل می‌کنیم و کنار شما می‌مانیم تا کار کند و دیده
          شود. تیمی کوچک اما مسئول، برای نتیجه‌های پایدار.
        </p>

        <Link href="/about" className="mt-5 sm:mt-6 md:mt-7">
          <button className="bg-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer font-iranYekan rtl text-sm sm:text-base">
            بیشتر بدانید...
          </button>
        </Link>

        <div className="hidden xl:block absolute top-0 right-0 2xl:right-16 scale-50 lg:scale-100 origin-top-right">
          <HomeStoryDecoration />
        </div>
      </div>
    </Container>
  );
};

export default OurStory;
