import { notFound } from 'next/navigation';

// Components
import EditProjectsPageWrapper from '@/views/dashboard/admin/projects/edit/EditProjectPage';

// Actions
import { getProjectByIdAdmin } from '@/app/actions/getProjectByIdAdmin';
import { updateProject } from '@/app/actions/updateProject';

interface EditProjectsPageProps {
  params: {
    id: string;
  };
}

const EditProjectsPage = async ({ params }: EditProjectsPageProps) => {
  const projectId = parseInt(params.id);

  if (isNaN(projectId)) {
    notFound();
  }

  const project = await getProjectByIdAdmin(projectId);

  if (!project) {
    notFound();
  }

  return <EditProjectsPageWrapper project={project} updateProjectAction={updateProject} />;
};

export default EditProjectsPage;
