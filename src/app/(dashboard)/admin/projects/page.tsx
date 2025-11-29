// Components
import ProjectsPageWrapper from '@/views/dashboard/admin/projects/_projectspage';

// Actions
import { getAdminProjects } from '@/app/actions/getAdminProjects';

const ProjectsPage = async () => {
  const projects = await getAdminProjects();

  return <ProjectsPageWrapper projects={projects} />;
};

export default ProjectsPage;
