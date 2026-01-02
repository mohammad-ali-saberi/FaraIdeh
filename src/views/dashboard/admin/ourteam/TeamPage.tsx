'use client';

// Components
import Footer from '@/components/dashboard/Footer';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import TeamMembersList from './TeamMembersList';

// Types
import { TeamMemberType } from '@/types/TeamMemberType';

interface OurTeamPageWrapperProps {
  teamMembers: TeamMemberType[];
  onDelete: (id: number) => Promise<{ success: boolean; message: string }>;
}

const OurTeamPageWrapper = ({ teamMembers, onDelete }: OurTeamPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <TeamMembersList teamMembers={teamMembers} onDelete={onDelete} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default OurTeamPageWrapper;
