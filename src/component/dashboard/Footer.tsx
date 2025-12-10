'use client';

// Next Imports
import Link from 'next/link';

// Components
import GitHubIcon from '@/component/icons/GitHubIcon';
import InstagramIcon from '@/component/icons/InstagramIcon';
import TelegramIcon from '@/component/icons/TelegramIcon';
import LinkedInIcon from '@/component/icons/LinkedInIcon';

const Footer = () => {
  return (
    <footer className="px-12 mt-7 flex justify-between">
      <p className="font-iranYekan text-[#767676]">
        تمامی حقوق مادی و معنوی برای گروه توسعه نرم‌افزار و استارتاپی فراایده محفوظ است.
      </p>

      {/* Social links */}
      <div className="flex gap-2 sm:gap-3 mb-3 ltr">
        <Link href="https://github.com/sb878787" className="group">
          <GitHubIcon
            size={18}
            className={`text-[#4C4C4C] transition-colors duration-300 group-hover:text-primary sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]`}
          />
        </Link>

        <Link href="https://www.instagram.com/mohammad_ali_saberi87" className="group">
          <InstagramIcon
            size={18}
            className={`text-[#4C4C4C] transition-colors duration-300 group-hover:text-primary sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]`}
          />
        </Link>

        <Link href="https://web.telegram.org/k/#@M_sb87_Developer" className="group">
          <TelegramIcon
            size="18"
            className={`text-[#4C4C4C] transition-colors duration-300 group-hover:text-primary sm:w-5 sm:h-5 md:w-[21px] md:h-[21px]`}
          />
        </Link>

        <Link href="https://linkedin.com/in/mohammad-ali-saberi" className="group">
          <LinkedInIcon
            size={18}
            className={`text-[#4C4C4C] transition-colors duration-300 group-hover:text-primary sm:w-5 sm:h-5 md:w-[21px] md:h-[21px]`}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
