// Components
import SliderPageWrapper from '@/views/dashboard/admin/slider/SliderPage';

// Actions
import { getSliders } from '@/app/actions/getSliders';

const SliderPage = async () => {
  const sliders = await getSliders();

  return <SliderPageWrapper sliders={sliders} />;
};

export default SliderPage;
