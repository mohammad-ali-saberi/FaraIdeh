'use client';

// Types
import { UserType } from '@/types/UsersType';

// Components
import EditUserForm from './EditUserForm';

interface IEditUserPageWrapperProps {
  user: UserType;
}

const EditUserPageWrapper = ({ user }: IEditUserPageWrapperProps) => {
  return <EditUserForm user={user} />;
};

export default EditUserPageWrapper;
