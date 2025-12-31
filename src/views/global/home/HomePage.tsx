'use client';

// Components
import Footer from '@/components/Footer';
import Contact from './Contact';
import HeroSection from './HeroSection';
import Information from './Information';
import OurStory from './OurStory';
import Projects from './Projects';
import Services from './Services';

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
