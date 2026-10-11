'use client';

// React Imports
import { useRef, useState } from 'react';

// Swiper Imports
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';

// Components
import Header from '@/components/Header';
import BlogSlide from './BlogSlide';

// Types
import { BlogPost } from '@/types/BlogsType';

interface IHeroSectionProps {
  latestBlogs: BlogPost[];
}

const navButtonClass =
  'flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-[#e9eef7] bg-white text-[#16205f] shadow-[0_10px_24px_-18px_rgba(16,24,40,0.6)] cursor-pointer transition-all duration-300 ease-out hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_12px_28px_-12px_rgba(10,47,182,0.7)] active:scale-95 disabled:pointer-events-none disabled:border-[#e9eef7] disabled:bg-white disabled:text-[#adb8cc] disabled:shadow-none disabled:opacity-50';

const NavChevron = ({ direction }: { direction: 'prev' | 'next' }) => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d={direction === 'prev' ? 'M9 19l7-7-7-7' : 'M15 19l-7-7 7-7'} />
  </svg>
);

const HeroSection = ({ latestBlogs }: IHeroSectionProps) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const trackState = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="relative w-full pt-4 sm:pt-6 md:pt-8">
      <Header colorIcon="black" />

      <h1 className="sr-only">وبلاگ فراایده | مقالات طراحی سایت، اپلیکیشن، UI/UX و رشد کسب‌وکار</h1>

      {/* Hero Section */}
      {latestBlogs.length !== 0 ? (
        <div className="relative w-full mt-32 sm:mt-36 lg:mt-44 pr-4 lg:pr-10 xl:pr-20">
          {/* Slider */}
          <Swiper
            modules={[Navigation]}
            dir="rtl"
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              trackState(swiper);
            }}
            onSlideChange={trackState}
            className="!pl-4 lg:!pl-10 xl:!pl-20"
          >
            {latestBlogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <BlogSlide blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="rtl flex items-center justify-start gap-3 mt-5 lg:mt-7">
            {/* Previous Button */}
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={navButtonClass}
              aria-label="اسلاید قبلی"
            >
              <NavChevron direction="prev" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={navButtonClass}
              aria-label="اسلاید بعدی"
            >
              <NavChevron direction="next" />
            </button>

            {/* Page Indicator */}
            <p className="font-yekanBakhFaNum mr-1 text-sm font-semibold text-[#adb8cc]">
              <span className="text-[#16205f]">{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="mx-1.5 text-[#e9eef7]">/</span>
              <span>{String(latestBlogs.length).padStart(2, '0')}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-30 sm:mt-36 lg:mt-50"></div>
      )}
    </div>
  );
};

export default HeroSection;
