'use client';

// Components
import Footer from '@/component/Footer';
import HeroSection from './HeroSection';
import Slider from './Slider';
import Services from './Services';
import OurTeam from './OurTeam';
import Line from '@/component/Line';
import Achievements from './Achievements';

// Types
import { Slide } from '@/types/SlidesType';
import { TeamMemberType } from '@/types/TeamMemberType';
import { AchievementType } from '@/types/AchievementType';

const AboutPageWrapper = ({
  slides,
  members,
  achievements,
}: {
  slides: Slide[];
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
