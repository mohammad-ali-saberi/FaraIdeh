'use client';

// Types
import { UserType } from '@/types/UsersType';

// Components
import UsersList from './UsersList';

interface IUsersPageWrapperProps {
  users: UserType[];
}

const UsersPageWrapper = ({ users }: IUsersPageWrapperProps) => {
  return <UsersList users={users} />;
};

export default UsersPageWrapper;
