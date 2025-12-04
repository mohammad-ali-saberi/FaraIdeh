'use client';

// Next Imports
import Image from 'next/image';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Types
import { SlidePublic } from '@/types/SlidesType';

// Components
import Container from '@/component/Container';

const Slider = ({ slides }: { slides: SlidePublic[] }) => {
  if (!slides?.length) return null;

  return (
    <Container>
      <div className="w-full mt-8 lg:mt-20 xl:mt-16 lg:rounded-2xl rounded-md relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          className="lg:rounded-2xl rounded-md cursor-pointer"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-52 md:h-64 lg:h-auto aspect-[3/1] overflow-hidden">
                <Image
                  src={slide.photo}
                  alt={slide.caption ?? 'slideImage'}
                  fill
                  sizes="100vw"
                  unoptimized
                  className="object-cover object-center"
                />
                {/* {s.caption && (
                <div className="absolute bottom-3 left-3 right-3 bg-black/40 text-white p-3 rounded">
                  {s.caption}
                </div>
              )} */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Slider;
