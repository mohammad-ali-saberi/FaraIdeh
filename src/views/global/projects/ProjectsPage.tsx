'use client';

// Components
import HeroSection from './HeroSection';
import Projects from './Projects';
import Footer from '@/component/Footer';
import PlaceAnOrder from '@/component/PlaceAnOrder';

// Types
import type { ProjectsType } from '@/types/ProjectsType';
import { ProjectCategory } from '@/features/projects/categories';

interface ProjectsPageWrapperProps {
  projects: ProjectsType[];
  selectedCategory: ProjectCategory;
}

const ProjectsPageWrapper = ({ projects, selectedCategory }: ProjectsPageWrapperProps) => {
  return (
    <>
      <HeroSection />
      <Projects projects={projects} selectedCategory={selectedCategory} />
      <PlaceAnOrder />
      <Footer />
    </>
  );
};

export default ProjectsPageWrapper;
