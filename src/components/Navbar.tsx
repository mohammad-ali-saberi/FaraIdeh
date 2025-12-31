'use client';

// React Import
import { useState } from 'react';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Images
import Logo from '@/assets/images/Logo.png';

// Components
import PlaceOrderIcon from './icons/PlaceOrderIcon';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const routeLinks = [
    { name: 'صفحه نخست', path: '/home' },
    { name: 'درباره ما', path: '/about' },
    { name: 'پروژه ها', path: '/projects' },
    { name: 'خدمات فراایده', path: '/about#services' },
    { name: 'وبلاگ', path: '/blogs' },
  ];

  return (
    <>
      <div className="w-full bg-white mt-3 rounded-md shadow shadow-black/10 py-3 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-row-reverse items-center justify-between">
        {/* Hamburger Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block w-full h-0.5 bg-gray-600 transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[10px]' : ''
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-gray-600 transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-gray-600 transition-transform duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </div>
        </button>

        {/* Logo */}
        <Link href="/home">
          <Image src={Logo} alt="logo" className="w-5 sm:w-6" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex flex-row-reverse items-center gap-6 xl:gap-10">
            {routeLinks.map((link, index) => (
              <li key={index} className="group">
                <Link
                  href={link.path}
                  className={`font-iranYekan font-medium text-sm xl:text-base ${
                    pathname === link.path ? 'text-text-primary' : 'text-text-link'
                  } group-hover:text-text-primary transition-colors`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile/Desktop CTA Button */}
        <div className="flex items-center gap-2">
          <Link href="/order-form" className="hidden lg:block">
            <button
              type="button"
              className="bg-orange text-white border border-white font-iranYekan font-medium px-5 py-2.5 rounded-md hover:bg-white hover:text-orange hover:border-orange transition-all duration-200 text-sm whitespace-nowrap cursor-pointer"
            >
              ثبت سفارش
            </button>
          </Link>

          <Link href="/order-form" className="lg:hidden">
            <button type="button" className="bg-orange p-2.5 rounded-md">
              <PlaceOrderIcon size="24" className="text-white" />
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden bg-white rounded-md shadow shadow-black/10 mt-2 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="py-3 px-4">
          {routeLinks.map((link, index) => (
            <li key={index} className="py-2 border-b border-gray-100 last:border-0">
              <Link
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-iranYekan block text-right py-1 ${
                  pathname === link.path ? 'text-text-primary' : 'text-text-link'
                } hover:text-text-primary transition-colors`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
