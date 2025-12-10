'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
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
