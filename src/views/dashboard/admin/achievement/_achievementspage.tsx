'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
import MainAchievements from './MainAchievements';

// Types
import { AchievementType } from '@/types/AchievementType';

interface AchievementsPageWrapperProps {
  achievements: AchievementType[];
}

const AchievementsPageWrapper = ({ achievements }: AchievementsPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <MainAchievements initialAchievements={achievements} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default AchievementsPageWrapper;
