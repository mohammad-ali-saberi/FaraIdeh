// Actions
import { getUserById } from '@/app/actions/getUserById';

// Components
import EditUserPageWrapper from '@/views/dashboard/admin/users/edit/EditUserPage';

interface EditUserPageProps {
  params: Promise<{ id: string }>;
}

const EditUserPage = async ({ params }: EditUserPageProps) => {
  const { id } = await params;
  const user = await getUserById(Number(id));

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500 font-iranYekan">
        کاربر مورد نظر یافت نشد
      </div>
    );
  }

  return <EditUserPageWrapper user={user} />;
};

export default EditUserPage;
