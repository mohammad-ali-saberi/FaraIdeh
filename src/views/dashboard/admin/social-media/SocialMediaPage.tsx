'use client';

// Components
import Footer from '@/components/dashboard/Footer';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import SocialMediaManagement from './SocialMediaManagement';

const SocialMediaPageWrapper = () => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <SocialMediaManagement />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default SocialMediaPageWrapper;
