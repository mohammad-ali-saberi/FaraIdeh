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
import type { SocialMediaData } from '@/types/SocialMediaType';

// Context
import { SocialMediaProvider } from '@/context/SocialMediaContext';

const LandingPageWrapper = ({
  projects,
  socialMedia,
}: {
  projects: ProjectsType[];
  socialMedia: SocialMediaData;
}) => {
  return (
    <SocialMediaProvider socialMedia={socialMedia}>
      <HeroSection />
      <Information />
      <OurStory />
      <Services />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </SocialMediaProvider>
  );
};

export default LandingPageWrapper;
