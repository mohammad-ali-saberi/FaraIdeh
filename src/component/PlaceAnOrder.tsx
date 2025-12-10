'use client';

// Next Imports
import Link from 'next/link';

// Components
import Container from './Container';
import PlusIcon from './icons/PlusIcon';
import OrderCenterDecoration from './icons/SVG/OrderCenterDecoration';
import OrderLeftDecoration from './icons/SVG/OrderLeftDecoration';

const PlaceAnOrder = () => {
  return (
    <Container>
      <div className="bg-[#2E58D1] w-full rounded-2xl rtl mt-16 lg:mt-24 p-6 lg:p-10 xl:p-16 flex flex-col lg:flex-row items-end gap-x-16 xl:gap-x-44 gap-y-5 relative">
        <div className="flex flex-col lg:flex-row items-start gap-x-16 xl:gap-x-44 gap-y-5">
          <p className="text-white font-iranYekan font-semibold text-2xl lg:text-3xl w-full leading-9 lg:leading-12">
            ایده‌ای برای پروژه دارید یا به همکاری فکر می‌کنید؟ ما آماده‌ایم بشنویم
          </p>
          <p className="text-white font-iranYekan font-light w-full text-justify text-sm sm:text-base leading-7">
            چند خط دربارهٔ نیازتان بنویسید تا سریع بررسی کنیم؛ شفاف جلو می‌ریم، زمان‌بندی و مراحل رو
            روشن می‌کنیم، نسخهٔ اولیه رو زود به دستتون می‌رسونیم و با بازخورد شما سریع‌تر بهترش
            می‌کنیم.
          </p>
        </div>

        <Link
          href="/order-form"
          className="bg-orange text-white font-iranYekan font-semibold pr-3 sm:pr-4 rounded group hover:bg-orange/90 transition-colors duration-200 flex flex-row-reverse items-center gap-2 sm:gap-3"
        >
          <div className="bg-[#FF8030] py-3 px-4 sm:py-4 sm:px-5 rounded-l mr-1 group-hover:bg-[#e67329] transition-colors duration-200">
            <PlusIcon size="15px" className="sm:w-5 sm:h-5" />
          </div>
          <span className="text-sm sm:text-base text-nowrap">ثبت سفارش</span>
        </Link>

        <div className="absolute bottom-3 right-96 2xl:right-[500px] hidden xl:block">
          <OrderCenterDecoration />
        </div>

        <div className="absolute top-12 2xl:top-8 left-24 hidden xl:block">
          <OrderLeftDecoration />
        </div>
      </div>
    </Container>
  );
};

export default PlaceAnOrder;
