'use client';

// React Imports
import { useCallback, useState } from 'react';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Images
import LogoType from '@/assets/images/LogoType.png';

// Components
import Container from './Container';
import ArrToTopIcon from './icons/ArrToTopIcon';
import Decoration from './icons/SVG/FooterDecoration';
import FooterRightDecoration from './icons/SVG/FooterRightDecoration';
import SocialLinks from './SocialLinks';
import Toast from './Toast';

// Actions
import { createNewsletterSubscription } from '@/app/actions/createNewsletterSubscription';

// Contexts
import { useSocialMedia } from '@/context/SocialMediaContext';

const quickLinks = [
  { name: 'صفحه نخست', path: '/' },
  { name: 'درباره ما', path: '/about' },
  { name: 'پروژه ها', path: '/projects' },
  { name: 'خدمات فراایده', path: '/about#services' },
  { name: 'وبلاگ', path: '/blogs' },
  { name: 'تماس با ما', path: '/contact' },
];

const socialChipClass =
  'flex-wrap [&_li>a]:flex [&_li>a]:h-11 [&_li>a]:w-11 [&_li>a]:items-center [&_li>a]:justify-center [&_li>a]:rounded-full [&_li>a]:border [&_li>a]:border-white/15 [&_li>a]:bg-white/10 [&_li>a]:text-white [&_li>a]:backdrop-blur-md [&_li>a]:transition-all [&_li>a]:duration-300 [&_li>a]:ease-out [&_li>a:hover]:-translate-y-1 [&_li>a:hover]:border-white/40 [&_li>a:hover]:bg-white [&_li>a:hover]:text-[#16205f]';

const columnTitleClass = 'font-iranYekan relative pb-3 text-lg font-extrabold text-white';

const ColumnTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className={columnTitleClass}>
    {children}
    <span className="bg-orange absolute bottom-0 right-0 h-0.5 w-8 rounded-full" />
  </h3>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const socialMedia = useSocialMedia();

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage({ type: 'error', text: 'لطفاً ایمیل خود را وارد کنید' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const result = await createNewsletterSubscription(email);

      setMessage({
        type: result.success ? 'success' : 'error',
        text: result.message,
      });

      if (result.success) {
        setEmail('');
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'خطایی رخ داد. لطفاً دوباره تلاش کنید',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {message && (
        <Toast message={message.text} type={message.type} onClose={() => setMessage(null)} />
      )}

      <div className="relative w-full lg:mt-32 mt-16">
        {/* Back to top */}
        <button
          type="button"
          onClick={handleScrollTop}
          aria-label="بازگشت به بالای صفحه"
          className="group absolute -top-6 right-6 z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-primary shadow-[0_16px_32px_-16px_rgba(4,10,30,0.85)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-orange hover:text-white focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none lg:-top-7 lg:right-14 lg:h-14 lg:w-14"
        >
          <ArrToTopIcon size="20" />
        </button>

        <div className="relative w-full overflow-hidden rounded-t-[32px] bg-[linear-gradient(165deg,#0c38d0_0%,#08227f_45%,#04103b_100%)] pt-10 pb-5 lg:rounded-t-[44px] lg:pt-16 lg:pb-7">
          {/* Light and brand colour, kept faint so the text never fights them */}
          <div className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-orange/20 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-white/10 blur-[110px]" />

          {/* Hairline that picks the top edge out of the page */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)]" />

          <div className="pointer-events-none absolute -top-10 left-0 hidden opacity-70 xl:block">
            <Decoration />
          </div>

          <div className="pointer-events-none absolute bottom-0 right-0 hidden opacity-70 xl:block">
            <FooterRightDecoration />
          </div>

          <Container>
            <div className="rtl relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
              {/* Bio */}
              <div className="lg:col-span-5">
                <Image src={LogoType} alt="فراایده" className="w-44 lg:w-52" />

                <p className="text-white/70 font-iranYekan leading-7 mt-5 text-sm lg:text-base lg:leading-8">
                  اینجا جایی‌ست که ایده‌ها جان می‌گیرند. ما کنار شماییم تا مسیر را کوتاه، شفاف و
                  هیجان‌انگیز کنیم. با حساسیت به جزئیات در کمترین زمان ایده های شما را اجرایی
                  می‌کنیم. نتیجه برای ما فقط تحویل پروژه نیست؛ تجربه‌ای است کارآمد و خاطره انگیز.
                </p>

                <SocialLinks
                  socialMedia={socialMedia}
                  size={20}
                  colorClass="text-inherit"
                  className={`mt-7 ${socialChipClass}`}
                />
              </div>

              {/* Site sections */}
              <div className="lg:col-span-3">
                <ColumnTitle>دسترسی سریع</ColumnTitle>

                <ul className="mt-5 space-y-3.5">
                  {quickLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        href={link.path}
                        className="group font-iranYekan flex items-center gap-2.5 text-sm text-white/70 transition-colors duration-300 hover:text-white"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/25 transition-colors duration-300 group-hover:bg-orange" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-4">
                <ColumnTitle>خبرنامه</ColumnTitle>

                <p className="rtl text-white/70 font-iranYekan mt-5 text-sm leading-7">
                  عضو خبرنامه فراایده شوید و از جدیدترین مطالب و خدمات ویژه با خبر شوید!
                </p>

                <form onSubmit={handleNewsletterSubmit} className="mt-5">
                  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 p-1.5 pr-5 backdrop-blur-md transition-colors duration-300 focus-within:border-white/40 focus-within:bg-white/15">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="لطفا ایمیل خود را وارد کنید..."
                      aria-label="ایمیل برای عضویت در خبرنامه"
                      disabled={isLoading}
                      className="placeholder:text-white/40 font-iranYekan rtl min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none disabled:opacity-60"
                    />

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="font-iranYekan shrink-0 cursor-pointer rounded-full bg-orange px-5 py-2.5 text-sm font-bold whitespace-nowrap text-white transition-all duration-300 ease-out hover:shadow-[0_12px_26px_-12px_rgba(255,99,0,0.9)] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 sm:px-6"
                    >
                      {isLoading ? 'در حال ارسال…' : 'عضویت'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Copyright */}
            <div className="relative z-10 mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 lg:mt-16 lg:flex-row">
              <p className="font-iranYekan rtl text-center text-xs leading-6 text-white/60 md:text-sm">
                تمامی حقوق مادی و معنوی برای گروه توسعه نرم‌افزار و استارتاپی فراایده محفوظ است.
              </p>

              <p className="font-iranYekan rtl text-center text-xs leading-6 text-white/40 md:text-sm">
                طراحی و توسعه: تیم فراایده
              </p>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
