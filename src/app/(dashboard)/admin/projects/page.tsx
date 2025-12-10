// Components
import AdminProjectsPageWrapper from '@/views/dashboard/admin/projects/AdminProjectsPage';

// Actions
import { getAdminProjects } from '@/app/actions/getAdminProjects';

const AdminProjectsPage = async () => {
  const projects = await getAdminProjects();

  return <AdminProjectsPageWrapper projects={projects} />;
};

export default AdminProjectsPage;
