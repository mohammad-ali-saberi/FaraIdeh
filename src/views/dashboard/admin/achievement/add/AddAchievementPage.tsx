'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
import AddAchievementForm from './AddAchievementForm';

// Types
import { CreateAchievementInput, CreateAchievementResponse } from '@/types/AchievementType';

interface AddAchievementsPageWrapperProps {
  createAchievementAction: (data: CreateAchievementInput) => Promise<CreateAchievementResponse>;
}

const AddAchievementsPageWrapper = ({
  createAchievementAction,
}: AddAchievementsPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <AddAchievementForm createAchievementAction={createAchievementAction} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default AddAchievementsPageWrapper;
