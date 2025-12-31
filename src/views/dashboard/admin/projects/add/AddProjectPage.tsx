'use client';

// Components
import Footer from '@/components/dashboard/Footer';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
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
