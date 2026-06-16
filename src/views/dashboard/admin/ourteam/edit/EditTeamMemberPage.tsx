'use client';

// Components
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
  return <EditTeamMemberForm member={member} updateTeamMemberAction={updateTeamMemberAction} />;
};

export default EditTeamMemberPageWrapper;
