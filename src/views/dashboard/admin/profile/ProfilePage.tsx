'use client';

// Components
import ProfileEdit from './ProfileEdit';

// Types
import { User } from '@/types/UsersType';

const ProfilePageWrapper = ({ user }: { user: User | null }) => {
  return <ProfileEdit user={user} />;
};

export default ProfilePageWrapper;
