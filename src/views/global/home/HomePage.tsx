'use client';

// Components
import HeroSection from './HeroSection';
import OurStory from './OurStory';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '@/component/Footer';
import Information from './Information';

// Types
import type { ProjectsType } from '@/types/ProjectsType';

const LandingPageWrapper = ({ projects }: { projects: ProjectsType[] }) => {
  return (
    <>
      <HeroSection />
      <Information />
      <OurStory />
      <Services />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPageWrapper;
