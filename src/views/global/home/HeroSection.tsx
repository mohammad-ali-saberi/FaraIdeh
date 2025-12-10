'use client';

// React Imports
import { useRef, useEffect, useState } from 'react';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Components
import CustomIconEmoji from '@/component/icons/CustomIconEmoji';
import Header from '@/component/Header';
import Information from './Information';

// Images
import heroImage from '@/assets/images/bg-HeroSection.png';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(800);

  useEffect(() => {
    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen w-full">
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        priority
        className="object-cover"
        placeholder="empty"
      />

      <div className="absolute inset-y-0 right-0 bg-[#070707]/75 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 sm:rounded-tl-[35px] md:rounded-tl-[45px] flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-end justify-end">
          <h1 className="font-iranYekan font-extrabold text-white text-right text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-16">
            ایده بسپار؛ اجرا با ما
          </h1>
          <p className="text-text font-iranYekan text-sm sm:text-base md:text-lg mt-3 sm:mt-4 rtl leading-6.5">
            در فراایده، ایده‌ها به تجربۀ واقعی کاربر تبدیل می‌شوند؛ از استراتژی تا اجرا در کنار شما
            هستیم.
          </p>

          <Link
            href="/order-form"
            aria-label="شروع همکاری — رفتن به فرم سفارش"
            className="bg-orange text-white font-iranYekan font-semibold pr-4 rounded mt-4 sm:mt-6 md:mt-7 group hover:bg-orange/90 transition-colors duration-200 flex flex-row-reverse items-center gap-2 sm:gap-3"
          >
            <span className="text-sm sm:text-base">شروع همکاری</span>
            <div className="bg-[#FF8030] py-3 px-4 md:px-5 rounded-l mr-1 group-hover:bg-[#e67329] transition-colors duration-200">
              <CustomIconEmoji size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
          </Link>

          <div className="mt-4 sm:mt-5 text-[11px] sm:text-xs text-white/70 font-iranYekan flex flex-row-reverse gap-2 sm:gap-3">
            <span>پاسخگویی سریع</span>
            <span>•</span>
            <span>تحویل به‌موقع</span>
            <span>•</span>
            <span>پشتیبانی</span>
          </div>
        </div>
      </div>

      <Header colorIcon="white" heroSectionHeight={heroHeight} />

      <Information />
    </div>
  );
};

export default HeroSection;
