'use client';

// React Imports
import { useState, useEffect } from 'react';

// Next Imports
import Link from 'next/link';

// Components
import GitHubIcon from './icons/GitHubIcon';
import InstagramIcon from './icons/InstagramIcon';
import TelegramIcon from './icons/TelegramIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import Navbar from './Navbar';

interface IHeaderProps {
  colorIcon: 'white' | 'black';
  heroSectionHeight?: number;
}

const Header = ({ colorIcon, heroSectionHeight = 600 }: IHeaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      setIsScrolledPastHero(currentScrollY > heroSectionHeight);

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY, heroSectionHeight]);

  const currentColorClass = isScrolledPastHero
    ? 'text-text-link'
    : colorIcon === 'white'
      ? 'text-white'
      : 'text-text-link';

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto">
        {/* Social links */}
        <div className="flex gap-2 sm:gap-3 mb-3">
          <Link href="https://github.com/sb878787" className="group">
            <GitHubIcon
              size={18}
              className={`${currentColorClass} transition-colors duration-300 group-hover:text-primary sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]`}
            />
          </Link>

          <Link href="https://www.instagram.com/mohammad_ali_saberi87" className="group">
            <InstagramIcon
              size={18}
              className={`${currentColorClass} transition-colors duration-300 group-hover:text-primary sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]`}
            />
          </Link>

          <Link href="https://web.telegram.org/k/#@M_sb87_Developer" className="group">
            <TelegramIcon
              size="18"
              className={`${currentColorClass} transition-colors duration-300 group-hover:text-primary sm:w-5 sm:h-5 md:w-[21px] md:h-[21px]`}
            />
          </Link>

          <Link href="https://linkedin.com/in/mohammad-ali-saberi" className="group">
            <LinkedInIcon
              size={18}
              className={`${currentColorClass} transition-colors duration-300 group-hover:text-primary sm:w-5 sm:h-5 md:w-[21px] md:h-[21px]`}
            />
          </Link>
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default Header;
