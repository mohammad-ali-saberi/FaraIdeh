// Components
import Container from '@/components/Container';
import Header from '@/components/Header';
import TermsHeroDecoration from '@/components/icons/SVG/TermsHeroDecoration';

const HeroSection = () => {
  return (
    <div className="relative w-full pt-4">
      <Container>
        <Header colorIcon="black" />

        <div className="mt-32 flex flex-col items-center justify-between gap-x-28 gap-y-10 lg:mt-56 lg:flex-row">
          <div className="relative hidden w-full lg:block">
            <TermsHeroDecoration className="h-auto w-full max-w-[440px]" />
          </div>

          <div className="rtl w-full">
            <h1 className="font-iranYekan text-text-primary text-lg lg:text-xl">قوانین فراایده</h1>

            <h2 className="font-iranYekan mt-1 text-xl leading-9 font-semibold lg:mt-4 lg:text-3xl lg:leading-11 lg:font-bold">
              قواعد روشن برای همکاری
              <br className="hidden sm:block" /> از ثبت سفارش تا تحویل پروژه
            </h2>

            <p className="font-iranYekan text-text-description mt-3 text-justify text-sm leading-7 lg:mt-5 lg:text-base lg:leading-8">
              شرایط استفاده از خدمات فراایده، مسئولیت‌ها، مالکیت معنوی و روند لغو یا بازگشت وجه را
              شفاف و یکجا بخوانید.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
