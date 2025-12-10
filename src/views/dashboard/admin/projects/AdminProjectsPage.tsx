'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
import ProjectsList from './ProjectsList';

// Types
import { AdminProject } from '@/types/ProjectsType';

interface AdminProjectsPageWrapperProps {
  projects: AdminProject[];
}

const AdminProjectsPageWrapper = ({ projects }: AdminProjectsPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <ProjectsList projects={projects} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default AdminProjectsPageWrapper;
