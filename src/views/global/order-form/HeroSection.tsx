'use client';

// Components
import Container from '@/components/Container';
import Header from '@/components/Header';
import OrderFormHeroDecoration from '@/components/icons/SVG/OrderFormHeroDecoration';

const HeroSection = () => {
  return (
    <div className="relative w-full pt-4 sm:pt-6 md:pt-8">
      <Container>
        <Header colorIcon="black" />

        {/* Hero Section */}
        <div className="xl:mt-52 lg:mt-48 mt-32 sm:mt-40 flex flex-col lg:flex-row items-start justify-between gap-x-28 gap-y-10 relative">
          <div className="absolute top-0 left-0 z-10">
            <OrderFormHeroDecoration className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[372px] xl:h-[372px]" />
          </div>

          <div className="w-full rtl mt-40 sm:mt-0">
            <p className="font-iranYekan text-text-primary text-lg lg:text-xl">ثبت سفارش</p>
            <p className="font-iranYekan font-semibold text-2xl lg:text-4xl leading-9 lg:leading-11 mt-1 lg:mt-3">
              درخواست پیشنهاد همکاری
            </p>
            <p className="text-text-description font-iranYekan text-justify leading-6 lg:leading-7 text-sm lg:text-base mt-3">
              با تکمیل این فرم ساده، تیم ما جهت اجراء پروژه و تکمیل{' '}
              <br className="hidden sm:block" /> مراحل بعدی سریعاً با شما تماس خواهد گرفت.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
