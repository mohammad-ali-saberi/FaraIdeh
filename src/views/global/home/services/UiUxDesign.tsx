'use client';

// Components
import UiUxIcon from '@/components/icons/services/UiUxIcon';

const UiUxDesign = () => {
  return (
    <div className="p-6 sm:p-8 rounded-2xl hover:bg-[#DFFFF2]/30 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
      <div className="bg-[#DFFFF2] w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
        <UiUxIcon fill="#21E696" />
      </div>

      <p className="text-[#343434] font-iranYekan font-semibold text-lg sm:text-xl mt-4 sm:mt-5">
        طراحی UI, UX
      </p>
      <p className="text-[#808080] font-iranYekan mt-2 sm:mt-3 leading-6 sm:leading-7 text-justify rtl text-sm sm:text-base">
        طراحی سیستم دیزاین یکپارچه با تایپوگرافی خوانا و الگوهای آشنا؛ تمرکز بر وضوح، سرعت و کاهش
        خطاهای کاربری.
      </p>
    </div>
  );
};

export default UiUxDesign;
