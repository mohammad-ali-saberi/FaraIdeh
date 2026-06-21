'use client';

// Next Imports
import Link from 'next/link';

// Components
import GitHubIcon from '@/components/icons/GitHubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import TelegramIcon from '@/components/icons/TelegramIcon';

// Types
import { SocialMediaData } from '@/types/SocialMediaType';

interface FooterProps {
  socialMedia: SocialMediaData;
}

const Footer = ({ socialMedia }: FooterProps) => {
  const { githubLink, linkedinLink, instagramLink, telegramLink } = socialMedia;

  return (
    <footer className="px-12 mt-7 flex justify-between absolute bottom-5 w-full">
      <p className="font-iranYekan text-[#767676]">
        تمامی حقوق مادی و معنوی برای گروه توسعه نرم‌افزار و استارتاپی فراایده محفوظ است.
      </p>

      {/* Social links */}
      <div className="flex gap-2 sm:gap-3 mb-3 ltr">
        {/* Github Link */}
        {githubLink && (
          <Link href={githubLink} className="group" target="_blank">
            <GitHubIcon
              size={18}
              className="text-[#4C4C4C] transition-colors duration-300 group-hover:text-primary sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]"
            />
          </Link>
        )}

        {/* Instagram Link */}
        {instagramLink && (
          <Link href={instagramLink} className="group" target="_blank">
            <InstagramIcon
              size={18}
              className="text-[#4C4C4C] transition-colors duration-300 group-hover:text-primary sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]"
            />
          </Link>
        )}

        {/* Telegram Link */}
        {telegramLink && (
          <Link href={telegramLink} className="group" target="_blank">
            <TelegramIcon
              size="18"
              className="text-[#4C4C4C] transition-colors duration-300 group-hover:text-primary sm:w-5 sm:h-5 md:w-[21px] md:h-[21px]"
            />
          </Link>
        )}

        {/* LinkedIn Link */}
        {linkedinLink && (
          <Link href={linkedinLink} className="group" target="_blank">
            <LinkedInIcon
              size={18}
              className="text-[#4C4C4C] transition-colors duration-300 group-hover:text-primary sm:w-5 sm:h-5 md:w-[21px] md:h-[21px]"
            />
          </Link>
        )}
      </div>
    </footer>
  );
};

export default Footer;
