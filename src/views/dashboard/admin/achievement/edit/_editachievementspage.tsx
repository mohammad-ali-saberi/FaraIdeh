'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
import MainEditAchievements from './MainEditAchievements';

// Types
import {
  AchievementType,
  UpdateAchievementInput,
  UpdateAchievementResponse,
} from '@/types/AchievementType';

interface EditAchievementsPageWrapperProps {
  achievement: AchievementType;
  updateAchievementAction: (data: UpdateAchievementInput) => Promise<UpdateAchievementResponse>;
}

const EditAchievementsPageWrapper = ({
  achievement,
  updateAchievementAction,
}: EditAchievementsPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <MainEditAchievements
          achievement={achievement}
          updateAchievementAction={updateAchievementAction}
        />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default EditAchievementsPageWrapper;
