'use client';

// Components
import HeroSection from './HeroSection';
import OurStory from './OurStory';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '@/component/Footer';
import Line from '@/component/Line';

// Types
import type { ProjectsType } from '@/types/ProjectsType';

const LandingPageWrapper = ({ projects }: { projects: ProjectsType[] }) => {
  return (
    <>
      <HeroSection />
      <Line className="mt-56 sm:mt-12 md:mt-14 lg:mt-10" />
      <OurStory />
      <Services />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPageWrapper;
