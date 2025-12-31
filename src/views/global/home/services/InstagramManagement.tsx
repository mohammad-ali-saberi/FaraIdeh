'use client';

// Components
import InstagramIcon from '@/components/icons/services/InstagramIcon';

const InstagramManagement = () => {
  return (
    <div className="p-6 sm:p-8 rounded-2xl hover:bg-[#FFFADC]/30 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
      <div className="bg-[#FFFADC] w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
        <InstagramIcon fill="#FBDA01" />
      </div>

      <p className="text-[#343434] font-iranYekan font-semibold text-lg sm:text-xl mt-4 sm:mt-5">
        مدیریت صفحه اینستاگرام
      </p>
      <p className="text-[#808080] font-iranYekan mt-2 sm:mt-3 leading-6 sm:leading-7 text-justify rtl text-sm sm:text-base">
        تقویم محتوایی، تولید پست و ریلز، کپشنِ هدفمند و هشتگ‌گذاری هوشمند؛ با تحلیل مداوم، تعامل
        واقعی می‌سازیم و مسیر رشد را پایدار می‌کنیم.
      </p>
    </div>
  );
};

export default InstagramManagement;
