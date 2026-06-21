'use client';

// Components
import ProjectsList from './ProjectsList';

// Types
import { AdminProject } from '@/types/ProjectsType';

interface AdminProjectsPageWrapperProps {
  projects: AdminProject[];
}

const AdminProjectsPageWrapper = ({ projects }: AdminProjectsPageWrapperProps) => {
  return <ProjectsList projects={projects} />;
};

export default AdminProjectsPageWrapper;
