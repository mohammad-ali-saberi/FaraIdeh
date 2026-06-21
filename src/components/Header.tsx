'use client';

// React Imports
import { useState, useEffect } from 'react';

// Components
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';

// Types
import { SocialMediaData } from '@/types/SocialMediaType';

// Contexts
import { useSocialMedia } from '@/context/SocialMediaContext';

interface IHeaderProps {
  colorIcon: 'white' | 'black';
  heroSectionHeight?: number;
  socialMedia: SocialMediaData;
}

const Header = ({ colorIcon, heroSectionHeight = 600 }: Omit<IHeaderProps, 'socialMedia'>) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  const socialMedia = useSocialMedia();

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
        <SocialLinks
          socialMedia={socialMedia}
          size={24}
          colorClass={`${currentColorClass} transition-colors duration-300 group-hover:text-primary`}
          className="mb-3 ltr sm:gap-3"
        />

        <Navbar />
      </div>
    </div>
  );
};

export default Header;
