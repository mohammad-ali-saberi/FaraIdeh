'use client';

// React Imports
import { useEffect, useState } from 'react';

// Actions
import { getUsers } from '@/app/actions/getUsers';

// Components
import UsersList from './UsersList';

// Types
import { UserType } from '@/types/UsersType';

const UsersPageWrapper = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-400 font-iranYekan">
        در حال بارگذاری...
      </div>
    );
  }

  return <UsersList users={users} />;
};

export default UsersPageWrapper;
