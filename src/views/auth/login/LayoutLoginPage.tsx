'use client';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Images
import Logo from '@/assets/images/Logo.png';

// Components
import CircleSVG38X39 from '@/component/icons/SVG/login/CircleSVG38X39';
import CircleSVG66X63 from '@/component/icons/SVG/login/CircleSVG66X63';
import CircleSVG32X30 from '@/component/icons/SVG/login/CircleSVG32X30';
import CircleSVG79X75 from '@/component/icons/SVG/login/CircleSVG79X75';

const LayoutLoginPage = () => {
  return (
    <div className="grid grid-cols-12 rtl">
      <div className="col-span-9 py-10 px-17 relative">
        {/* Logo */}
        <Link href="/home" className="absolute z-20">
          <Image src={Logo} alt="logo" className="w-11" />
        </Link>
      </div>

      <div className="col-span-3 bg-primary w-full h-screen relative overflow-hidden">
        {/* SVGs */}
        <div className="absolute bottom-32 left-32">
          <CircleSVG38X39 />
        </div>
        <div className="absolute top-22 right-32">
          <CircleSVG66X63 />
        </div>
        <div className="absolute top-14 left-14">
          <CircleSVG32X30 />
        </div>
        <div className="absolute -bottom-10 left-10">
          <CircleSVG79X75 />
        </div>
      </div>
    </div>
  );
};

export default LayoutLoginPage;
