// Components
import AddProjectsPageWrapper from '@/views/dashboard/admin/projects/add/_addprojectspage';

// Actions
import { createProject } from '@/app/actions/createProject';

const AddProjectsPage = async () => {
  return <AddProjectsPageWrapper createProjectAction={createProject} />;
};

export default AddProjectsPage;
