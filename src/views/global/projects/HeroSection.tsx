'use client';

// Components
import Container from '@/component/Container';
import ProjectsHeroDecoration from '@/component/icons/SVG/ProjectsHeroDecoration';
import ProjectsCircleDecoration from '@/component/icons/SVG/ProjectsCircleDecoration';
import ProjectsSquareDecoration from '@/component/icons/SVG/ProjectsSquareDecoration';
import Header from '@/component/Header';

const HeroSection = () => {
  return (
    <div className="relative w-full pt-4 sm:pt-6 md:pt-8">
      <Container>
        <Header colorIcon="black" />

        {/* Hero Section */}
        <div className="lg:mt-56 mt-32 flex flex-col lg:flex-row items-center justify-between gap-x-28 gap-y-10">
          <div className="w-full relative hidden lg:block">
            <ProjectsHeroDecoration />

            <div className="absolute -top-24 right-8">
              <ProjectsSquareDecoration />
            </div>

            <div className="absolute -bottom-3 -left-12">
              <ProjectsCircleDecoration />
            </div>
          </div>

          <div className="w-full rtl">
            <p className="font-iranYekan text-text-primary text-lg lg:text-xl">
              نمونه کارهای فراایده
            </p>
            <p className="font-iranYekan font-semibold lg:font-bold text-xl lg:text-3xl leading-9 lg:leading-11 mt-1 lg:mt-4">
              از ایده تا خروجیِ قابل‌سنجش <br /> وب‌سایت‌ها و تجربه‌هایی که کار می‌کنند
            </p>
            <p className="text-text-description font-iranYekan text-justify leading-7 lg:leading-8 text-sm lg:text-base mt-3 lg:mt-5">
              گزیده‌ای از پروژه‌هایی که با تمرکز بر سرعت، تجربهٔ کاربری و اجرای تمیز انجام شده‌اند.
              اینجا می‌بینید چگونه مسیر طراحی تا لانچ به نتایجی واقعی و پایدار رسیده است.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
