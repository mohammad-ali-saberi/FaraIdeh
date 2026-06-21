'use client';

// Components
import SliderManagement from './SliderManagement';

// Types
import type { Slide } from '@/types/SlidesType';

type SliderPageWrapperProps = {
  sliders: Slide[];
};

const SliderPageWrapper = ({ sliders }: SliderPageWrapperProps) => {
  return <SliderManagement initialSliders={sliders} />;
};

export default SliderPageWrapper;
