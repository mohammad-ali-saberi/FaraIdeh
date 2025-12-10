'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
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
