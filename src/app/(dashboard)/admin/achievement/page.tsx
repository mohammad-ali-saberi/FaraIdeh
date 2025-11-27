// Components
import AchievementsPageWrapper from '@/views/dashboard/admin/achievement/_achievementspage';

// Actions
import { getAchievements } from '@/app/actions/getAchievements';

const AchievementsPage = async () => {
  const achievements = await getAchievements();

  return <AchievementsPageWrapper achievements={achievements} />;
};

export default AchievementsPage;
