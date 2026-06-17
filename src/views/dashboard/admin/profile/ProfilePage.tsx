'use client';

// Components
import ProfileEdit from './ProfileEdit';

// Types
import { UserType } from '@/types/UsersType';

const ProfilePageWrapper = ({ user }: { user: UserType | null }) => {
  return <ProfileEdit user={user} />;
};

export default ProfilePageWrapper;
