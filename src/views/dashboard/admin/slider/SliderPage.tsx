'use client';

// Components
import Footer from '@/components/dashboard/Footer';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import SliderManagement from './SliderManagement';

// Types
import type { Slide } from '@/types/SlidesType';

type SliderPageWrapperProps = {
  sliders: Slide[];
};

const SliderPageWrapper = ({ sliders }: SliderPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <SliderManagement initialSliders={sliders} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default SliderPageWrapper;
