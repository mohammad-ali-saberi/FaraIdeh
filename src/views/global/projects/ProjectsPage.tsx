'use client';

// Components
import Footer from '@/components/Footer';
import PlaceAnOrder from '@/components/PlaceAnOrder';
import HeroSection from './HeroSection';
import Projects from './Projects';

// Types
import { ProjectCategory } from '@/features/projects/categories';
import type { ProjectsType } from '@/types/ProjectsType';

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
