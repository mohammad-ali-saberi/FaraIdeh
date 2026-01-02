'use client';

// Components
import Container from '@/components/Container';
import Header from '@/components/Header';
import AboutHandIcon from '@/components/icons/SVG/AboutHandIcon';
import AboutHeroDecoration from '@/components/icons/SVG/AboutHeroDecoration';

const HeroSection = () => {
  return (
    <div className="relative w-full pt-4 sm:pt-6 md:pt-8">
      <Container>
        <Header colorIcon="black" />

        {/* Hero Section */}
        <div className="lg:mt-30 mt-32 flex flex-col lg:flex-row items-center justify-between gap-x-28 gap-y-10">
          {/* Desktop */}
          <div className="flex-1 hidden xl:block">
            <AboutHeroDecoration />
          </div>

          {/* Tablet */}
          <div className="flex-1 hidden lg:block xl:hidden">
            <AboutHeroDecoration width="450" height="450" />
          </div>

          {/* Mobile */}
          <div className="flex-1 lg:hidden">
            <AboutHeroDecoration width="300" height="300" />
          </div>

          <div className="rtl flex-1">
            <div className="flex items-end">
              <h5 className="text-text-primary font-iranYekan">سلام! ما تیم فراایده هستیم.</h5>
              <AboutHandIcon />
            </div>

            <p className="font-iranYekan text-2xl lg:text-3xl font-extrabold text-justify leading-10 lg:leading-12 w-full xl::w-3/4 mt-4">
              ما تیمی کوچک و چابک در ایرانیم که ایده‌ها را به تجربه‌ای واقعی تبدیل می‌کنیم. از کشف
              مسئله و استراتژی تا طراحی و توسعه، کنار شما هستیم.
            </p>
            <p className="text-text-description font-iranYekan leading-7 text-justify lg:mt-6 mt-4">
              برای ما نتیجه فقط تحویل نیست؛ تجربه‌ای است که کار کند و در خاطر بماند. با گفت‌وگوی
              شفاف، مستندسازی و بهبودِ مستمر پیش می‌رویم؛ هر قدم قابل‌سنجش و همسو با اهداف شماست. در
              جزئیات حساس هستیم، به زمان کاربر احترام می‌گذاریم و راه‌حل‌های ساده و قابلِ نگهداری را
              ترجیح می‌دهیم.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
