import { notFound } from 'next/navigation';

// Components
import EditAchievementsPageWrapper from '@/views/dashboard/admin/achievement/edit/_editachievementspage';

// Actions
import { getAchievementById } from '@/app/actions/getAchievements';
import { updateAchievement } from '@/app/actions/updateAchievement';

interface EditAchievementsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const EditAchievementsPage = async ({ params }: EditAchievementsPageProps) => {
  const { id } = await params;
  const achievementId = parseInt(id);

  if (isNaN(achievementId)) {
    notFound();
  }

  const achievement = await getAchievementById(achievementId);

  if (!achievement) {
    notFound();
  }

  return (
    <EditAchievementsPageWrapper
      achievement={achievement}
      updateAchievementAction={updateAchievement}
    />
  );
};

export default EditAchievementsPage;
