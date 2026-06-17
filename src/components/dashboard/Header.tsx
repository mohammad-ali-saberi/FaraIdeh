'use client';

// React Imports
import { useState, useRef, useEffect } from 'react';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Components
import BellIcon from '@/components/icons/dashboard/BellIcon';
import SearchIcon from '@/components/icons/dashboard/SearchIcon';
// import ArrowDownIcon from '@/components/icons/dashboard/ArrowDownIcon';

interface Profile {
  fullName: string;
  photo?: string | null;
}

interface HeaderProps {
  profile: Profile | null;
}

const Header = ({ profile }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="w-full border-b-1 border-[#CCCCCC] bg-white py-5 px-12 flex items-center justify-between">
        <p className="font-iranYekan text-2xl font-semibold">داشبورد</p>

        <div ref={dropdownRef} className="flex items-center gap-7 relative">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="w-10 h-10 bg-black rounded-full border border-primary relative overflow-hidden">
              {profile?.photo ? (
                <Image src={profile.photo} fill alt="ProfileImage" />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-white font-iranYekan text-sm font-bold">
                    {profile?.fullName?.charAt(0) ?? 'A'}
                  </span>
                </div>
              )}
            </div>

            <div>
              <p className="text-[#767676] font-iranYekan text-xs">خوش آمدید</p>
              <p className="text-[#4C4C4C] font-iranYekan line-clamp-1 font-medium">
                {profile?.fullName ?? '---'}
              </p>
            </div>

            {/* <div
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            >
              <ArrowDownIcon />
            </div> */}
          </div>

          <div className="flex gap-4">
            <SearchIcon />
            <BellIcon />
          </div>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-14 bg-white rounded-xl shadow-md w-56 z-50 px-4 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <Link href="/admin/profile">
              <p className="font-iranYekan border-b border-gray-300 py-4 text-[#4C4C4C] hover:text-primary transition-all">
                ویرایش اطلاعات
              </p>
            </Link>
            <Link href="#">
              <p className="font-iranYekan border-b border-gray-300 py-4 text-[#4C4C4C] hover:text-primary transition-all">
                بازدید های سایت
              </p>
            </Link>
            <Link href="/admin/social-media">
              <p className="font-iranYekan border-b border-gray-300 py-4 text-[#4C4C4C] hover:text-primary transition-all">
                شبکه های اجتماعی
              </p>
            </Link>
            <Link href="#">
              <p className="font-iranYekan py-4 text-[#4C4C4C] hover:text-primary transition-all">
                قوانین و مقررات
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
