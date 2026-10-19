// Components
import Container from '@/components/Container';
import Header from '@/components/Header';
import TickCircleIcon from '@/components/icons/blogs/TickCircleIcon';
import ContactHeroDecoration from '@/components/icons/SVG/ContactHeroDecoration';

// Libs
import { CONTACT_INFO } from '@/libs/contactInfo';

const highlights = ['پاسخگویی سریع', 'همکاری حضوری و دورکاری', 'پشتیبانی پروژه‌های در حال اجرا'];

const HeroSection = () => {
  return (
    <div className="relative w-full pt-4 sm:pt-6 md:pt-8">
      <Container>
        <Header colorIcon="black" />

        <div className="rtl mt-32 flex flex-col items-center justify-between gap-x-16 gap-y-12 lg:mt-44 lg:flex-row">
          <div className="w-full lg:w-[56%]">
            <h1 className="font-iranYekan text-text-primary text-lg lg:text-xl">
              ارتباط با فراایده
            </h1>

            <h2 className="font-iranYekan mt-1 text-2xl leading-9 font-semibold lg:mt-4 lg:text-3xl lg:leading-11 lg:font-bold">
              بیایید درباره ایده‌تان
              <br className="hidden sm:block" /> گفت‌وگو کنیم
            </h2>

            <p className="text-text-description font-iranYekan mt-3 max-w-xl text-justify text-sm leading-7 lg:mt-5 lg:text-base lg:leading-8">
              از یک سؤال کوچک تا شروع یک پروژه بزرگ، تیم فراایده آماده شنیدن است. فرم را پر کنید یا
              از راه‌های ارتباطی زیر با ما در تماس باشید؛ در{' '}
              <span className="font-extrabold text-text-link">{CONTACT_INFO.responseTime}</span>{' '}
              پاسخ می‌دهیم.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="font-iranYekan flex items-center gap-2 text-xs font-extrabold text-text-services-about sm:text-sm"
                >
                  <TickCircleIcon size="18" className="shrink-0 text-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="hidden w-full lg:block lg:w-[44%]">
            <div className="relative mx-auto aspect-square w-full max-w-[420px]">
              <div className="absolute inset-0 rounded-[44px] border border-[#e9eef7] bg-[linear-gradient(160deg,#f4f8ff_0%,#ffffff_62%)]" />
              <div className="pointer-events-none absolute -top-6 -right-6 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-6 h-44 w-44 rounded-full bg-orange/10 blur-2xl" />

              <div className="absolute inset-0 flex items-center justify-center">
                <ContactHeroDecoration className="h-[264px] w-[280px]" />
              </div>

              {/* Live status */}
              <div className="absolute top-8 right-7 flex items-center gap-2.5 rounded-2xl border border-[#e9eef7] bg-white/90 px-3.5 py-2.5 shadow-[0_14px_30px_-22px_rgba(16,24,40,0.55)] backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span className="font-iranYekan text-xs font-bold text-text-services-about">
                  آماده پاسخگویی
                </span>
              </div>

              {/* Response promise */}
              <div className="absolute bottom-8 left-7 rounded-2xl border border-[#e9eef7] bg-white/90 px-4 py-3 shadow-[0_14px_30px_-22px_rgba(16,24,40,0.55)] backdrop-blur-md">
                <p className="font-iranYekan text-[11px] text-text-description">زمان پاسخ‌دهی</p>
                <p className="font-iranYekan mt-1 text-sm font-extrabold text-text-services-about">
                  {CONTACT_INFO.responseTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
