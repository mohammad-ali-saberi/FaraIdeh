'use client';

// Components
import Footer from '@/components/Footer';
import Line from '@/components/Line';
import Achievements from './Achievements';
import HeroSection from './HeroSection';
import OurTeam from './OurTeam';
import Services from './Services';
import Slider from './Slider';

// Types
import { AchievementType } from '@/types/AchievementType';
import { SlidePublic } from '@/types/SlidesType';
import { TeamMemberType } from '@/types/TeamMemberType';

const AboutPageWrapper = ({
  slides,
  members,
  achievements,
}: {
  slides: SlidePublic[];
  members: TeamMemberType[];
  achievements: AchievementType[];
}) => {
  if (!slides?.length) return null;

  return (
    <>
      <HeroSection />
      <Slider slides={slides} />
      <Services />
      <OurTeam members={members} />
      {achievements?.length > 0 && (
        <>
          <Line className="lg:mt-20 lg:mb-16 mt-14 mb-10" />
          <Achievements achievements={achievements} />
        </>
      )}
      <Footer />
    </>
  );
};

export default AboutPageWrapper;
