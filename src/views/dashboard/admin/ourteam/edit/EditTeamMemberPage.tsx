'use client';

// Components
import Footer from '@/components/dashboard/Footer';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import EditTeamMemberForm from './EditTeamMemberForm';

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
        <EditTeamMemberForm member={member} updateTeamMemberAction={updateTeamMemberAction} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default EditTeamMemberPageWrapper;
