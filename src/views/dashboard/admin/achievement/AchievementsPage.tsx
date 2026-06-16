'use client';

// Components
import AchievementsList from './AchievementsList';

// Types
import { AchievementType } from '@/types/AchievementType';

interface AchievementsPageWrapperProps {
  achievements: AchievementType[];
}

const AchievementsPageWrapper = ({ achievements }: AchievementsPageWrapperProps) => {
  return <AchievementsList initialAchievements={achievements} />;
};

export default AchievementsPageWrapper;
