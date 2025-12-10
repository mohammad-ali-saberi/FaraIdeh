'use client';

// React Imports
import { useState, useRef } from 'react';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';

// Components
import SiteIcon from '@/component/icons/services/SiteIcon';
import PhoneIcon from '@/component/icons/services/PhoneIcon';
import StartUpIcon from '@/component/icons/services/StartUpIcon';
import InstagramIcon from '@/component/icons/services/InstagramIcon';
import UiUxIcon from '@/component/icons/services/UiUxIcon';
import ContentManagementIcon from '@/component/icons/services/ContentManagementIcon';

interface SelectCategoryProps {
  selectedCategories: string[];
  onCategoriesChange: (categories: string[]) => void;
}

const SelectCategory = ({ selectedCategories, onCategoriesChange }: SelectCategoryProps) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const services = [
    { id: 'website', name: 'وب سایت', icon: SiteIcon },
    { id: 'application', name: 'اپلیکیشن', icon: PhoneIcon },
    { id: 'startup', name: 'استارت آپ', icon: StartUpIcon },
    { id: 'instagram', name: 'صفحه اینستاگرام', icon: InstagramIcon },
    { id: 'uiux', name: 'طراحی UI, UX', icon: UiUxIcon },
    { id: 'content', name: 'مدیریت محتوا', icon: ContentManagementIcon },
  ];

  const handleCheckboxChange = (serviceId: string) => {
    const updated = selectedCategories.includes(serviceId)
      ? selectedCategories.filter((id) => id !== serviceId)
      : [...selectedCategories, serviceId];
    onCategoriesChange(updated);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between xl:pl-32 lg:gap-x-44">
      <div className="relative w-full lg:w-44 flex-shrink-0">
        <p className="font-iranYekan text-[#D9D9D9] text-[140px] h-44 lg:h-auto lg:text-[200px] pr-7 lg:pr-0 text-right lg:text-center">
          ۱
        </p>
        <div className="absolute top-16 lg:top-24 right-0 w-44 lg:w-52">
          <div className="border-2 border-primary rounded-full w-8 lg:w-11"></div>
          <p className="font-iranYekan font-semibold text-lg lg:text-2xl mt-4">
            دسته‌بندی پروژه‌ را انتخاب کنید
          </p>
        </div>
      </div>

      {/* Slider*/}
      <div className="w-full flex-1 min-w-0 relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={1}
          dir="rtl"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          style={{ padding: '8px 0' }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isChecked = selectedCategories.includes(service.id);

            return (
              <SwiperSlide key={service.id} style={{ height: 'auto' }}>
                <div className="relative bg-white flex flex-col items-center justify-center rounded-xl w-full h-58 px-4">
                  <Icon width="75" height="75" />
                  <p className="font-iranYekan font-semibold text-lg absolute bottom-5 text-center px-2">
                    {service.name}
                  </p>

                  {/* Custom Checkbox */}
                  <label className="absolute top-4 right-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckboxChange(service.id)}
                      className="sr-only"
                    />

                    {/* Custom Checkbox UI */}
                    <div
                      className={`w-6 h-6 rounded transition-all duration-200 flex items-center justify-center ${
                        isChecked
                          ? 'bg-[#FF6300]/[0.42] border-2 border-[#FF6300]'
                          : 'bg-white border-2 border-[#BBBBBB]'
                      }`}
                    >
                      {isChecked && (
                        <svg
                          className="w-4 h-4 text-[#FF6300]"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </div>
                  </label>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation Buttons Desktop */}
        {/* Prev */}
        {!isBeginning && (
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-[#F9F9F9] text-black w-12 h-12 rounded-full lg:flex items-center justify-center cursor-pointer border-4 border-white hover:translate-x-1.5 transition-all duration-200 absolute top-25 -right-6 z-10 hidden"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 19l7-7-7-7"></path>
            </svg>
          </button>
        )}

        {/* Next */}
        {!isEnd && (
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-[#F9F9F9] text-black w-12 h-12 rounded-full lg:flex items-center justify-center cursor-pointer border-4 border-white hover:-translate-x-1.5 transition-all duration-200 absolute top-25 -left-6 z-10 hidden"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
        )}

        {/* Navigation Buttons Mobile */}
        <div className="flex items-center justify-end gap-2 lg:hidden">
          {/* Prev */}
          {!isBeginning && (
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-[#F9F9F9] text-black w-12 h-12 rounded-full flex items-center justify-center cursor-pointer border-4 border-white hover:translate-x-1.5 transition-all duration-200 lg:absolute lg:top-25 lg:-right-6 z-10"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 19l7-7-7-7"></path>
              </svg>
            </button>
          )}

          {/* Next */}
          {!isEnd && (
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-[#F9F9F9] text-black w-12 h-12 rounded-full flex items-center justify-center cursor-pointer border-4 border-white hover:-translate-x-1.5 transition-all duration-200 lg:absolute lg:top-25 lg:-left-6 z-10"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCategory;
