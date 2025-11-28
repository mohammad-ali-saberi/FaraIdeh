// Components
import AddAchievementsPageWrapper from '@/views/dashboard/admin/achievement/add/_addachievementspage';

// Actions
import { createAchievement } from '@/app/actions/createAchievement';

const AddAchievementPage = async () => {
  return <AddAchievementsPageWrapper createAchievementAction={createAchievement} />;
};

export default AddAchievementPage;
