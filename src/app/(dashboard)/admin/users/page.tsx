// Actions
import { getUsers } from '@/app/actions/getUsers';

// Components
import UsersPageWrapper from '@/views/dashboard/admin/users/UsersPage';

const UsersPage = async () => {
  const users = await getUsers();

  return <UsersPageWrapper users={users} />;
};

export default UsersPage;
