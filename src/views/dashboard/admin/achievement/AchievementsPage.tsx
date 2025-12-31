'use client';

// Components
import Footer from '@/components/dashboard/Footer';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import AchievementsList from './AchievementsList';

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
        <AchievementsList initialAchievements={achievements} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default AchievementsPageWrapper;
