'use client';

// Components
import PhoneIcon from '@/components/icons/services/PhoneIcon';

const ApplicationDesign = () => {
  return (
    <div className="p-6 sm:p-8 rounded-2xl hover:bg-[#DEFCFC]/30 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
      <div className="bg-[#DEFCFC] w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
        <PhoneIcon fill="#12D6D5" />
      </div>

      <p className="text-[#343434] font-iranYekan font-semibold text-lg sm:text-xl mt-4 sm:mt-5">
        طراحی اپلیکیشن
      </p>
      <p className="text-[#808080] font-iranYekan mt-2 sm:mt-3 leading-6 sm:leading-7 text-justify rtl text-sm sm:text-base">
        از وایرفریم تا پروتوتایپ تعاملی؛ طراحی iOS/Android با تمرکز بر سادگی مسیر کاربر، سرعت، و یک
        سیستم طراحی منسجم برای توسعهٔ سریع‌تر.
      </p>
    </div>
  );
};

export default ApplicationDesign;
