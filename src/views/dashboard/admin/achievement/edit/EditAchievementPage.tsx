'use client';

// Components
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
    <EditAchievementForm
      achievement={achievement}
      updateAchievementAction={updateAchievementAction}
    />
  );
};

export default EditAchievementsPageWrapper;
