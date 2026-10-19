'use client';

// React Imports
import Link from 'next/link';

// Components
import SocialLinks from '@/components/SocialLinks';
import ClockIcon from '@/components/icons/contact/ClockIcon';
import EmailIcon from '@/components/icons/contact/EmailIcon';
import LocationIcon from '@/components/icons/contact/LocationIcon';
import PhoneIcon from '@/components/icons/contact/PhoneIcon';
import TelegramIcon from '@/components/icons/TelegramIcon';

// Contexts
import { useSocialMedia } from '@/context/SocialMediaContext';

// Libs
import { CONTACT_INFO } from '@/libs/contactInfo';

const methods = [
  {
    key: 'phone',
    label: 'تماس تلفنی',
    value: CONTACT_INFO.phoneDisplay,
    hint: CONTACT_INFO.workingHours,
    href: `tel:${CONTACT_INFO.phoneHref}`,
    icon: <PhoneIcon size="22" className="text-text-services-about" />,
  },
  {
    key: 'email',
    label: 'ایمیل',
    value: CONTACT_INFO.email,
    hint: 'برای همکاری، پیشنهاد پروژه و رزومه',
    href: `mailto:${CONTACT_INFO.email}`,
    icon: <EmailIcon width="22" height="22" className="text-text-services-about" />,
  },
  {
    key: 'telegram',
    label: 'تلگرام',
    value: CONTACT_INFO.telegramHandle,
    hint: 'گفت‌وگوی سریع با تیم پشتیبانی',
    href: CONTACT_INFO.telegramUrl,
    icon: <TelegramIcon size="18" className="text-text-services-about" />,
  },
];

const socialChipClass =
  'gap-2 [&_li>a]:flex [&_li>a]:h-9 [&_li>a]:w-9 [&_li>a]:items-center [&_li>a]:justify-center [&_li>a]:rounded-full [&_li>a]:border [&_li>a]:border-[#e9eef7] [&_li>a]:bg-white [&_li>a]:text-[#16205f] [&_li>a]:transition-all [&_li>a]:duration-300 [&_li>a]:ease-out [&_li>a:hover]:border-primary [&_li>a:hover]:bg-primary [&_li>a:hover]:text-white';

const ContactMethods = () => {
  const socialMedia = useSocialMedia();

  return (
    <div className="rtl h-full rounded-[26px] border border-[#e9eef7] bg-[linear-gradient(180deg,#f7f9fd_0%,#ffffff_100%)] p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_20px_45px_-34px_rgba(16,24,40,0.35)] sm:p-6 lg:p-7">
      <div className="flex items-center gap-2.5">
        <span className="bg-orange h-1 w-6 rounded-full" />
        <p className="font-iranYekan text-sm font-extrabold text-primary">راه‌های ارتباطی</p>
      </div>

      <h2 className="font-iranYekan mt-2.5 text-xl font-extrabold text-text-services-about sm:text-2xl">
        از هر راهی که راحت‌ترید
      </h2>

      <p className="font-iranYekan mt-2.5 text-sm leading-7 text-text-description">
        سؤال، پیشنهاد همکاری یا درخواست پشتیبانی دارید؟ از راه‌های زیر با ما در ارتباط باشید؛ همه
        پیام‌ها را خود تیم بررسی می‌کند.
      </p>

      <div className="mt-5 space-y-3">
        {methods.map(({ key, label, value, hint, href, icon }) => (
          <Link
            key={key}
            href={href}
            target={key === 'telegram' ? '_blank' : undefined}
            rel={key === 'telegram' ? 'noopener noreferrer' : undefined}
            className="group flex items-center gap-3.5 rounded-2xl border border-[#e9eef7] bg-white p-3.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_20px_40px_-30px_rgba(10,47,182,0.65)] sm:p-4"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5ff]">
              {icon}
            </span>

            <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3.5">
              <div className="flex min-w-0 flex-col gap-1">
                <span className="font-iranYekan block text-xs font-extrabold text-text-description">
                  {label}
                </span>

                <span className="font-iranYekan block text-xs leading-5 text-[#9aa8c2]">
                  {hint}
                </span>
              </div>

              <span
                className="font-iranYekan block wrap-break-word text-right text-sm font-extrabold text-text-services-about transition-colors duration-300 group-hover:text-primary sm:truncate"
                dir="ltr"
              >
                {value}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Hours and location */}
      <div className="mt-5 space-y-3 rounded-2xl border border-[#e9eef7] bg-white p-4">
        <div className="flex items-start gap-3">
          <ClockIcon className="mt-0.5 shrink-0 text-primary" />

          <div>
            <p className="font-iranYekan text-[11px] font-extrabold text-text-description">
              ساعات پاسخگویی
            </p>
            <p className="font-iranYekan mt-1 text-sm font-extrabold text-text-services-about">
              {CONTACT_INFO.workingHours}
            </p>
          </div>
        </div>

        <div className="h-px bg-[#eef2f8]" />

        <div className="flex items-start gap-3">
          <LocationIcon className="mt-0.5 shrink-0 text-primary" />

          <div>
            <p className="font-iranYekan text-[11px] font-extrabold text-text-description">
              محل فعالیت
            </p>
            <p className="font-iranYekan mt-1 text-sm font-extrabold text-text-services-about">
              {CONTACT_INFO.location}
            </p>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-[#e6ecf5] pt-4">
        <p className="font-iranYekan text-xs font-bold text-text-services-about">
          ما را در شبکه‌های اجتماعی دنبال کنید
        </p>

        <SocialLinks
          socialMedia={socialMedia}
          size={18}
          colorClass="text-inherit"
          className={socialChipClass}
        />
      </div>
    </div>
  );
};

export default ContactMethods;
