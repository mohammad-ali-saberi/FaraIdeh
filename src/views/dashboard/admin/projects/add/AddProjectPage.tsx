'use client';

// Components
import AddProjectForm from './AddProjectForm';

// Types
import { CreateProjectInput, CreateProjectResponse } from '@/types/ProjectsType';

interface AddProjectsPageWrapperProps {
  createProjectAction: (data: CreateProjectInput) => Promise<CreateProjectResponse>;
}

const AddProjectsPageWrapper = ({ createProjectAction }: AddProjectsPageWrapperProps) => {
  return <AddProjectForm createProjectAction={createProjectAction} />;
};

export default AddProjectsPageWrapper;
