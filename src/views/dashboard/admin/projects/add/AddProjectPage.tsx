'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
import AddProjectForm from './AddProjectForm';

// Types
import { CreateProjectInput, CreateProjectResponse } from '@/types/ProjectsType';

interface AddProjectsPageWrapperProps {
  createProjectAction: (data: CreateProjectInput) => Promise<CreateProjectResponse>;
}

const AddProjectsPageWrapper = ({ createProjectAction }: AddProjectsPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <AddProjectForm createProjectAction={createProjectAction} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default AddProjectsPageWrapper;
