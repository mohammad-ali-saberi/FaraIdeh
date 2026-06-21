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
import ArrNewsletterIcon from './icons/ArrNewsletterIcon';
import Decoration from './icons/SVG/FooterDecoration';
import FooterRightDecoration from './icons/SVG/FooterRightDecoration';
import FooterShapeDecoration from './icons/SVG/FooterShapeDecoration';
import ArrToTopIcon from './icons/ArrToTopIcon';
import Toast from './Toast';
import SocialLinks from './SocialLinks';

// Actions
import { createNewsletterSubscription } from '@/app/actions/createNewsletterSubscription';

// Contexts
import { useSocialMedia } from '@/context/SocialMediaContext';

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

      <div className="bg-primary w-full lg:mt-32 mt-16 lg:pt-16 pt-8 pb-4 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-9 rtl items-end">
            {/* Bio */}
            <div>
              <Image src={LogoType} alt="logoType" className="w-60" />

              <p className="text-white font-iranYekan text-justify leading-8 mt-5">
                اینجا جایی‌ست که ایده‌ها جان می‌گیرند. ما کنار شماییم تا مسیر را کوتاه، شفاف و
                هیجان‌انگیز کنیم. با حساسیت به جزئیات در کمترین زمان ایده های شما را اجرایی می‌کنیم.
                نتیجه برای ما فقط تحویل پروژه نیست؛ تجربه‌ای است کارآمد و خاطره انگیز.
              </p>
            </div>

            {/* Site sections */}
            <div className="flex items-start justify-between lg:items-center lg:justify-center">
              <div>
                <p className="text-white font-iranYekan font-semibold text-xl">بخش های سایت</p>

                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      className="text-white font-iranYekan border-b-2 pb-1 border-transparent hover:border-white transition-all"
                      href="/about"
                    >
                      درباره ما
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white font-iranYekan border-b-2 pb-1 border-transparent hover:border-white transition-all"
                      href="/blogs"
                    >
                      وبلاگ
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white font-iranYekan border-b-2 pb-1 border-transparent hover:border-white transition-all"
                      href="/projects"
                    >
                      پروژه ها
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white font-iranYekan border-b-2 pb-1 border-transparent hover:border-white transition-all"
                      href="/about#services"
                    >
                      خدمات فراایده
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social media */}
              <SocialLinks
                socialMedia={socialMedia}
                size={30}
                colorClass="text-white transition-all duration-200"
                direction="col"
                className="lg:hidden"
              />
            </div>

            {/* Newsletter */}
            <div>
              {/* Social media */}
              <SocialLinks
                socialMedia={socialMedia}
                size={40}
                colorClass="text-white transition-all duration-200 group-hover:-translate-y-2"
                className="hidden lg:flex mb-4"
              />

              <div className="md:mt-4">
                <p className="text-white font-iranYekan font-semibold text-xl">خبرنامه</p>

                <p className="rtl text-white font-iranYekan mt-2">
                  عضو خبرنامه فراایده شوید و از جدیدترین مطالب و خدمات ویژه با خبر شوید!
                </p>

                <form onSubmit={handleNewsletterSubmit} className="mt-5">
                  <div className="bg-white rounded overflow-hidden flex items-center">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="لطفا ایمیل خود را وارد کنید..."
                      disabled={isLoading}
                      className="placeholder:text-[#b1b1b1] font-iranYekan rtl outline-none bg-white w-full p-5 disabled:opacity-50"
                    />

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-20 h-16 flex items-center justify-center cursor-pointer group hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrNewsletterIcon
                        className={`transition-all duration-200 ${
                          isLoading ? 'animate-pulse' : 'group-hover:-translate-x-2'
                        }`}
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center lg:mt-24 mt-10">
            <p className="text-white font-iranYekan rtl text-xs md:text-base leading-6 text-center">
              تمامی حقوق مادی و معنوی برای گروه توسعه نرم‌افزار و استارتاپی فراایده محفوظ است.
            </p>
          </div>
        </Container>

        {/* SVGs */}
        <div className="absolute top-0 left-0 hidden xl:block">
          <Decoration />
        </div>

        <div className="absolute bottom-0 right-0 hidden xl:block">
          <FooterRightDecoration />
        </div>

        <div className="absolute top-2 right-60 hidden xl:block">
          <FooterShapeDecoration />
        </div>

        <div className="absolute bottom-0 left-96 hidden xl:block">
          <FooterShapeDecoration />
        </div>

        {/* Desktop Scroll to Top */}
        <button
          type="button"
          onClick={handleScrollTop}
          className="lg:flex items-center justify-center bg-primary p-4 border-4 border-white rounded-full absolute -top-10 right-12 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:bg-white group hidden"
        >
          <ArrToTopIcon className="text-white transition-colors duration-200 group-hover:text-primary" />
        </button>

        {/* Mobile Scroll to Top */}
        <button
          type="button"
          onClick={handleScrollTop}
          className="flex items-center justify-center bg-primary p-3 border-4 border-white rounded-full absolute -top-8 left-8 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:bg-white group lg:hidden"
        >
          <ArrToTopIcon
            size="30"
            className="text-white transition-colors duration-200 group-hover:text-primary"
          />
        </button>
      </div>
    </>
  );
};

export default Footer;
