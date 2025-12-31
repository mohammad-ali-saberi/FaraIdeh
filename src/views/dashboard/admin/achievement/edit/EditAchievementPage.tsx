'use client';

// Components
import Footer from '@/components/dashboard/Footer';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import EditAchievementForm from './EditAchievementForm';

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
        <EditAchievementForm
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
