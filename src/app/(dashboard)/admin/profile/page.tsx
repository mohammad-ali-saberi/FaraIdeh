// Components
import ProfilePageWrapper from '@/views/dashboard/admin/profile/ProfilePage';

// Actions
import { getProfile } from '@/app/actions/getProfile';

const ProfilePage = async () => {
  const user = await getProfile();
  return <ProfilePageWrapper user={user} />;
};

export default ProfilePage;
