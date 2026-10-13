// Next Imports
import Link from 'next/link';

// Components
import Container from '@/components/Container';
import SmallLabel from '@/components/SmallLabel';
import TickCircleIcon from '@/components/icons/blogs/TickCircleIcon';
import ContentManagementIcon from '@/components/icons/services/ContentManagementIcon';
import InstagramIcon from '@/components/icons/services/InstagramIcon';
import PhoneIcon from '@/components/icons/services/PhoneIcon';
import SiteIcon from '@/components/icons/services/SiteIcon';
import StartUpIcon from '@/components/icons/services/StartUpIcon';
import UiUxIcon from '@/components/icons/services/UiUxIcon';
import AboutServicesDecoration from '@/components/icons/SVG/AboutServicesDecoration';

const services: {
  Icon: React.ComponentType<{ fill?: string; width?: string; height?: string }>;
  title: string;
}[] = [
  { Icon: SiteIcon, title: 'طراحی سایت' },
  { Icon: StartUpIcon, title: 'راه‌اندازی استارت آپ' },
  { Icon: PhoneIcon, title: 'طراحی اپلیکیشن' },
  { Icon: InstagramIcon, title: 'مدیریت صفحه اینستاگرام' },
  { Icon: UiUxIcon, title: 'طراحی UI, UX' },
  { Icon: ContentManagementIcon, title: 'مدیریت محتوا' },
];

const deliverables = [
  'واقعاً کار می‌کند',
  'توسط مخاطبان دیده می‌شود',
  'با کسب‌وکار شما رشد می‌کند',
];

const secondaryCtaClass =
  'font-iranYekan flex w-full items-center justify-center rounded-full border border-[#e9eef7] bg-white px-8 py-3.5 font-extrabold text-primary transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_16px_30px_-18px_rgba(10,47,182,0.8)] focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none sm:w-auto';

const primaryCtaClass =
  'font-iranYekan flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 font-extrabold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_30px_-16px_rgba(10,47,182,0.9)] focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none sm:w-auto';

const Services = () => {
  return (
    <div
      id="services"
      className="rtl relative mt-8 bg-[linear-gradient(180deg,#f7f9fd_0%,#ffffff_100%)] py-10 lg:mt-14 lg:py-16 xl:mt-20"
    >
      {/* Hints of light blue on the inside, so the grey block reads as a panel */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#e9eef7]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#e9eef7]" />

      <Container>
        <div className="flex flex-col items-start">
          <h2 className="font-iranYekan text-2xl font-extrabold text-[#16205f] sm:text-3xl lg:text-4xl">
            خدمات فراایده
          </h2>

          <div className="bg-orange mt-3 h-1 w-12 rounded-full" />
        </div>

        <div className="mt-6 flex flex-col gap-6 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 xl:gap-10">
          {/* Services */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 xl:gap-4">
              {services.map(({ Icon, title }) => (
                <div
                  key={title}
                  className="group relative flex items-center gap-3.5 overflow-hidden rounded-[22px] border border-[#e9eef7] bg-white p-3.5 pr-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_45px_-30px_rgba(10,47,182,0.6)] sm:p-4 sm:pr-6"
                >
                  {/* Icon tile */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5ff] text-[#16205f] transition-colors duration-500 ease-out group-hover:bg-primary group-hover:text-white">
                    <Icon width="24" height="24" fill="currentColor" />
                  </span>

                  <p className="font-iranYekan text-base font-extrabold text-[#16205f] sm:text-lg">
                    {title}
                  </p>

                  <span className="bg-orange absolute inset-y-4 right-0 w-[3px] rounded-l-full opacity-70 transition-all duration-500 ease-out group-hover:inset-y-2 group-hover:opacity-100" />
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end lg:mt-7">
              <Link href="/projects" className={secondaryCtaClass}>
                مشاهده نمونه کار ها
              </Link>

              <Link href="/#contact" className={primaryCtaClass}>
                در تماس باشید
              </Link>
            </div>
          </div>

          {/* How we work */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-[26px] border border-[#e9eef7] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_20px_45px_-34px_rgba(16,24,40,0.35)] lg:p-6">
              <div className="flex items-center gap-2.5">
                <span className="bg-orange h-1 w-6 rounded-full" />
                <p className="font-iranYekan text-sm font-bold text-primary">آنچه انجام می‌دهیم</p>
              </div>

              <h3 className="font-iranYekan mt-2.5 text-xl font-extrabold text-[#16205f] sm:text-2xl lg:leading-[1.6]">
                چطور ایده شما را زنده می‌کنیم؟
              </h3>

              <div className="font-iranYekan mt-3.5 space-y-3 text-sm leading-7 text-[#7d8fb3] lg:text-base">
                <p>
                  ما با <span className="font-extrabold text-[#16205f]">گوش دادن</span> شروع
                  می‌کنیم. مسئله واقعی شما چیست؟ مخاطب‌تان کیست؟ موفقیت برای شما چه معنایی دارد؟
                </p>

                <p>
                  سپس با <span className="font-extrabold text-[#16205f]">طراحی هوشمند</span> و
                  آزمون‌های واقعی، نمونه‌ای می‌سازیم که احساس و عملکرد محصول نهایی را نشان دهد.
                </p>

                <p>
                  بعد از تأیید شما، وارد مرحله{' '}
                  <span className="font-extrabold text-[#16205f]">توسعه</span> می‌شویم: کدی تمیز،
                  سریع و مقیاس‌پذیر که هم امروز و هم فردا پاسخگوی نیازهای شماست.
                </p>

                <p>
                  اما کار ما اینجا تمام نمی‌شود. با{' '}
                  <span className="font-extrabold text-[#16205f]">
                    تست، بهینه‌سازی و پایش مستمر
                  </span>{' '}
                  اطمینان می‌دهیم که محصول شما بهترین نتیجه را می‌دهد.
                </p>
              </div>

              <p className="font-iranYekan mt-4 text-sm font-extrabold text-[#16205f] lg:text-base">
                در نهایت، محصولی تحویل می‌دهیم که:
              </p>

              {/* Was three bare "- item" lines inside a paragraph */}
              <ul className="mt-2.5 space-y-2">
                {deliverables.map((item) => (
                  <li
                    key={item}
                    className="font-iranYekan flex items-center gap-2.5 text-sm text-[#7d8fb3] lg:text-base"
                  >
                    <TickCircleIcon size="18" className="shrink-0 text-orange" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="font-iranYekan mt-4 border-t border-dashed border-[#e6ecf5] pt-4 text-sm leading-7 text-[#7d8fb3] lg:text-base">
                همراه با <span className="font-extrabold text-[#16205f]">مستندات</span> کامل و{' '}
                <span className="font-extrabold text-[#16205f]">پشتیبانی</span>، تا مطمئن شویم شما
                برای قدم بعدی آماده‌اید.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute -top-20 right-0 hidden xl:block">
        <AboutServicesDecoration />
      </div>
    </div>
  );
};

export default Services;
