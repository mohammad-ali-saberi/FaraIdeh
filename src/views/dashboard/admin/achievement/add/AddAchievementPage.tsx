'use client';

// Components
import AddAchievementForm from './AddAchievementForm';

// Types
import { CreateAchievementInput, CreateAchievementResponse } from '@/types/AchievementType';

interface AddAchievementsPageWrapperProps {
  createAchievementAction: (data: CreateAchievementInput) => Promise<CreateAchievementResponse>;
}

const AddAchievementsPageWrapper = ({
  createAchievementAction,
}: AddAchievementsPageWrapperProps) => {
  return <AddAchievementForm createAchievementAction={createAchievementAction} />;
};

export default AddAchievementsPageWrapper;
