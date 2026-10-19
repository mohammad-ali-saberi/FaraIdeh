// Next Imports
import Link from 'next/link';

// Components
import Container from '@/components/Container';
import BlogShortcutIcon from '@/components/icons/contact/BlogShortcutIcon';
import OrderShortcutIcon from '@/components/icons/contact/OrderShortcutIcon';
import ProjectsShortcutIcon from '@/components/icons/contact/ProjectsShortcutIcon';

const shortcuts = [
  {
    title: 'پروژه‌ای در ذهن دارید؟',
    description: 'فرم سفارش را پر کنید تا نیازتان را بررسی کنیم و پیشنهاد و زمان‌بندی روشن بگیرید.',
    href: '/order-form',
    cta: 'ثبت سفارش',
    icon: <OrderShortcutIcon />,
  },
  {
    title: 'دنبال نمونه‌کار هستید؟',
    description: 'گزیده‌ای از پروژه‌های اجراشده فراایده را ببینید و با مسیر کار ما آشنا شوید.',
    href: '/projects',
    cta: 'مشاهده پروژه‌ها',
    icon: <ProjectsShortcutIcon />,
  },
  {
    title: 'دنبال راهنما می‌گردید؟',
    description: 'در بلاگ فراایده درباره طراحی، محتوا و رشد محصول، نکته‌های عملی و کوتاه بخوانید.',
    href: '/blogs',
    cta: 'ورود به بلاگ',
    icon: <BlogShortcutIcon />,
  },
];

const QuickLinks = () => {
  return (
    <div className="relative w-full py-12 lg:py-16">
      <Container>
        <div className="rtl">
          <div className="flex items-center gap-2.5">
            <span className="bg-orange h-1 w-6 rounded-full" />
            <p className="font-iranYekan text-sm font-extrabold text-primary">
              شاید این‌ها کمک کند
            </p>
          </div>

          <h2 className="font-iranYekan mt-2.5 text-xl font-extrabold text-text-services-about sm:text-2xl">
            قبل از نوشتن، یک نگاه سریع بیندازید
          </h2>
        </div>

        <div className="rtl mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shortcuts.map(({ title, description, href, cta, icon }) => (
            <Link
              key={href}
              href={href}
              className="group relative flex flex-col overflow-hidden rounded-[24px] border border-[#e9eef7] bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_1px_2px_rgba(16,24,40,0.04),0_26px_48px_-30px_rgba(10,47,182,0.55)] sm:p-6"
            >
              <span className="bg-primary/5 group-hover:bg-primary/8 pointer-events-none absolute -top-10 -left-10 h-28 w-28 rounded-full transition-colors duration-300" />

              <div className="relative flex items-center justify-between gap-3">
                <span className="bg-[#f0f5ff] text-primary group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ease-out group-hover:text-white">
                  {icon}
                </span>

                <span className="bg-orange h-1 w-9 rounded-full" />
              </div>

              <h3 className="font-iranYekan text-text-services-about group-hover:text-primary relative mt-5 text-lg font-extrabold transition-colors duration-300">
                {title}
              </h3>

              <p className="font-iranYekan text-text-description relative mt-2 flex-1 text-sm leading-7">
                {description}
              </p>

              <span className="font-iranYekan text-primary relative mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold">
                {cta}
                <svg
                  className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default QuickLinks;
