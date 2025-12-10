'use client';

// Next Imports
import Image from 'next/image';

// Components
import SearchIcon from '@/component/icons/dashboard/SearchIcon';
import BellIcon from '@/component/icons/dashboard/BellIcon';

const Header = () => {
  return (
    <div className="w-full border-b-1 border-[#CCCCCC] bg-white py-5 px-12 flex items-center justify-between">
      <p className="font-iranYekan text-2xl font-semibold">داشبورد</p>

      <div className="flex items-center gap-10">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 bg-black rounded-full border border-primary relative overflow-hidden">
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
        </div>

        <div className="flex gap-5">
          <SearchIcon />
          <BellIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
