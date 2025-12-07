'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
import MainEditTeamMember from './MainEditTeamMember';

// Types
import {
  AdminTeamMember,
  UpdateTeamMemberInput,
  UpdateTeamMemberResponse,
} from '@/types/TeamMemberType';

interface EditTeamMemberPageWrapperProps {
  member: AdminTeamMember;
  updateTeamMemberAction: (data: UpdateTeamMemberInput) => Promise<UpdateTeamMemberResponse>;
}

const EditTeamMemberPageWrapper = ({
  member,
  updateTeamMemberAction,
}: EditTeamMemberPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <MainEditTeamMember member={member} updateTeamMemberAction={updateTeamMemberAction} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default EditTeamMemberPageWrapper;
