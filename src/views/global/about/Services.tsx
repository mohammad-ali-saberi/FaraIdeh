'use client';

// Next Imports
import Link from 'next/link';

// Components
import Container from '@/component/Container';
import ContentManagementIcon from '@/component/icons/services/ContentManagementIcon';
import InstagramIcon from '@/component/icons/services/InstagramIcon';
import PhoneIcon from '@/component/icons/services/PhoneIcon';
import SiteIcon from '@/component/icons/services/SiteIcon';
import StartUpIcon from '@/component/icons/services/StartUpIcon';
import UiUxIcon from '@/component/icons/services/UiUxIcon';
import AboutServicesDecoration from '@/component/icons/SVG/AboutServicesDecoration';

const Services = () => {
  const services = [
    {
      icon: <SiteIcon width="52" height="52" />,
      title: 'طراحی سایت',
    },
    {
      icon: <StartUpIcon width="45" height="45" />,
      title: 'راه‌اندازی استارت آپ',
    },
    {
      icon: <PhoneIcon width="45" height="45" />,
      title: 'طراحی اپلیکیشن',
    },
    {
      icon: <InstagramIcon width="45" height="45" />,
      title: 'مدیریت صفحه اینستاگرام',
    },
    {
      icon: <UiUxIcon width="45" height="45" />,
      title: 'طراحی UI, UX',
    },
    {
      icon: <ContentManagementIcon width="52" height="52" />,
      title: 'مدیریت محتوا',
    },
  ];

  return (
    <div className="bg-[#F9F9F9] mt-10 lg:mt-22 xl:mt-32 rtl py-10 lg:py-20 relative" id="services">
      <Container>
        <h1 className="font-iranYekan font-semibold text-3xl">خدمات فراایده</h1>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mt-6 lg:mt-10 xl:mt-12">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-5 pr-5 bg-white shadow-md rounded-xl border-r-[12px] border-orange"
              >
                {service.icon}
                <p className="text-text-services-about font-iranYekan font-medium text-xl">
                  {service.title}
                </p>
              </div>
            ))}

            <div className="xl:col-span-2 flex flex-col-reverse lg:flex-row gap-3 lg:gap-5 justify-end mt-6 lg:mt-8">
              <Link href="/projects">
                <button
                  type="button"
                  className="w-full lg:w-auto font-iranYekan font-semibold cursor-pointer bg-white text-primary rounded-md text-center px-12 py-4 shadow-[0_2px_6px_1px_rgba(0,0,0,0.1)] hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-200"
                >
                  مشاهده نمونه کار ها
                </button>
              </Link>

              <Link href="/home#contact">
                <button
                  type="button"
                  className="text-white w-full lg:w-auto font-iranYekan font-semibold cursor-pointer bg-primary rounded-md text-center px-12 py-4 hover:bg-[#00229b] hover:-translate-y-1 transition-all duration-200"
                >
                  در تماس باشید
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full">
            <div className="xl:pr-20">
              <p className="text-text-primary font-iranYekan text-lg">آنچه انجام می‌دهیم</p>
              <p className="font-iranYekan font-semibold text-2xl lg:text-4xl leading-8 lg:leading-14 pt-2">
                از ایده تا محصولی که کار می‌کند
              </p>
              <p className="text-text-description font-iranYekan leading-7 text-justify mt-3 lg:mt-5">
                مسیر ما روشن است: شناخت مسئله و مخاطب (تحقیق اولیه، تعریف اهداف و معیارهای موفقیت)،
                تدوین استراتژی و نقشه‌راه، ساخت نمونهٔ اولیه و آزمون با کاربر. سپس معماری اطلاعات و
                وایرفریم‌ها را به رابط و سیستم دیزاین یکپارچه تبدیل می‌کنیم، محتوا را هم‌راستا
                می‌نویسیم و اجرا را با تمرکز بر سرعت، سئو و دسترس‌پذیری پیش می‌بریم. مرحلهٔ بعد،
                تضمین کیفیت و پایش با آنالیتیکس است تا فرضیه‌ها سنجیده و بهینه‌سازی‌ها انجام شود.
                خروجی نهایی: محصولی سبک، قابل‌اعتماد و همسو با اهداف شما که واقعاً کار می‌کند و دیده
                می‌شود، به‌همراه مستندات و پشتیبانی برای رشد مستمر.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute right-0 -top-20 hidden xl:block">
        <AboutServicesDecoration />
      </div>
    </div>
  );
};

export default Services;
