'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
import MainProjects from './MainProjects';

// Types
import { AdminProject } from '@/types/ProjectsType';

interface ProjectsPageWrapperProps {
  projects: AdminProject[];
}

const ProjectsPageWrapper = ({ projects }: ProjectsPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <MainProjects projects={projects} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default ProjectsPageWrapper;
