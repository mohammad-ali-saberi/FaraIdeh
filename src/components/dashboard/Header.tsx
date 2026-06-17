'use client';

// React Imports
import { useState } from 'react';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Components
import ArrowDownIcon from '@/components/icons/dashboard/ArrowDownIcon';
// import BellIcon from '@/components/icons/dashboard/BellIcon';
// import SearchIcon from '@/components/icons/dashboard/SearchIcon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full border-b-1 border-[#CCCCCC] bg-white py-5 px-12 flex items-center justify-between">
        <p className="font-iranYekan text-2xl font-semibold">داشبورد</p>

        <div className="flex items-center gap-5 flex-row-reverse relative">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="w-10 h-10 bg-black rounded-full border border-primary relative overflow-hidden">
              <Image
                src="https://s6.uupload.ir/files/16_(2)_-_copy_uv5q.jpg"
                fill
                alt="ProfileImage"
              />
            </div>

            <div>
              <p className="text-[#767676] font-iranYekan text-xs">خوش آمدید</p>
              <p className="text-[#4C4C4C] font-iranYekan line-clamp-1 font-medium">
                سید محمد علی صابری
              </p>
            </div>

            <div
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            >
              <ArrowDownIcon />
            </div>
          </div>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-14 right-0 bg-white rounded-xl shadow-md w-60 z-50 px-4 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <Link href="/profile">
              <p className="font-iranYekan border-b border-gray-300 py-3 text-[#4C4C4C] hover:text-primary hover:border-primary transition-all">
                ویرایش اطلاعات
              </p>
            </Link>
            <Link href="#">
              <p className="font-iranYekan border-b border-gray-300 py-3 text-[#4C4C4C] hover:text-primary hover:border-primary transition-all">
                بازدید های سایت
              </p>
            </Link>
            <Link href="/admin/social-media">
              <p className="font-iranYekan border-b border-gray-300 py-3 text-[#4C4C4C] hover:text-primary hover:border-primary transition-all">
                شبکه های اجتماعی
              </p>
            </Link>
            <Link href="#">
              <p className="font-iranYekan py-3 text-[#4C4C4C] hover:text-primary transition-all">
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
