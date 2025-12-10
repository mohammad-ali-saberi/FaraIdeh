'use client';

// Components
import HeroSection from './HeroSection';
import Footer from '@/component/Footer';
import SubmitRequest from './SubmitRequest';

const OrderFormPageWrapper = () => {
  return (
    <>
      <HeroSection />
      <SubmitRequest />
      <Footer />
    </>
  );
};

export default OrderFormPageWrapper;
