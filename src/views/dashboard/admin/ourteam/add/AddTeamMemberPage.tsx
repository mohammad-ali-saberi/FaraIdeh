'use client';

// Components
import Footer from '@/components/dashboard/Footer';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import TeamMemberForm from './TeamMemberForm';

// Types
import { CreateTeamMemberInput, CreateTeamMemberResponse } from '@/types/TeamMemberType';

interface AddTeamMemberPageWrapperProps {
  createTeamMemberAction: (data: CreateTeamMemberInput) => Promise<CreateTeamMemberResponse>;
}

const AddTeamMemberPageWrapper = ({ createTeamMemberAction }: AddTeamMemberPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <TeamMemberForm createTeamMemberAction={createTeamMemberAction} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default AddTeamMemberPageWrapper;
