'use client';

// Components
import EditProjectForm from './EditProjectForm';

// Types
import { AdminProject, UpdateProjectInput, UpdateProjectResponse } from '@/types/ProjectsType';

interface EditProjectsPageWrapperProps {
  project: AdminProject;
  updateProjectAction: (data: UpdateProjectInput) => Promise<UpdateProjectResponse>;
}

const EditProjectsPageWrapper = ({
  project,
  updateProjectAction,
}: EditProjectsPageWrapperProps) => {
  return <EditProjectForm project={project} updateProjectAction={updateProjectAction} />;
};

export default EditProjectsPageWrapper;
