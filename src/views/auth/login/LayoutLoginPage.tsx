'use client';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Images
import Logo from '@/assets/images/Logo.png';
import LogoType from '@/assets/images/LogoType.png';

// Components
import CircleSVG32X30 from '@/components/icons/SVG/login/CircleSVG32X30';
import CircleSVG38X39 from '@/components/icons/SVG/login/CircleSVG38X39';
import CircleSVG66X63 from '@/components/icons/SVG/login/CircleSVG66X63';
import CircleSVG79X75 from '@/components/icons/SVG/login/CircleSVG79X75';

const LayoutLoginPage = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Brand band — mobile & tablet */}
      <div className="bg-primary absolute inset-x-0 top-0 h-28 overflow-hidden rounded-b-[2.5rem] sm:h-32 lg:hidden">
        <div className="absolute top-3 left-[5%]">
          <CircleSVG32X30 />
        </div>
        <div className="absolute -top-8 left-[22%]">
          <CircleSVG79X75 />
        </div>
        <div className="absolute -bottom-6 left-[12%]">
          <CircleSVG66X63 />
        </div>
        <div className="absolute bottom-2 left-[42%]">
          <CircleSVG38X39 />
        </div>
      </div>

      {/* Brand panel — desktop */}
      <div className="bg-primary absolute inset-y-0 left-0 hidden w-1/4 overflow-hidden lg:block xl:w-1/5">
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

      {/* Logo */}
      <Link
        href="/"
        aria-label="فراایده — بازگشت به صفحه اصلی"
        className="pointer-events-auto absolute top-8 right-6 z-20 sm:top-7 sm:right-10 lg:top-10 lg:right-16"
      >
        <Image src={LogoType} alt="فراایده" priority className="h-12 w-auto sm:h-16 lg:hidden" />
        <Image src={Logo} alt="فراایده" priority className="hidden w-9 lg:block xl:w-11" />
      </Link>
    </div>
  );
};

export default LayoutLoginPage;
