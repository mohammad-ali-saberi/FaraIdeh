'use client';

// Components
import Footer from '@/components/dashboard/Footer';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
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
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <EditProjectForm project={project} updateProjectAction={updateProjectAction} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default EditProjectsPageWrapper;
