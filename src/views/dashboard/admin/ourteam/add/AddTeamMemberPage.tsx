'use client';

// Components
import TeamMemberForm from './TeamMemberForm';

// Types
import { CreateTeamMemberInput, CreateTeamMemberResponse } from '@/types/TeamMemberType';

interface AddTeamMemberPageWrapperProps {
  createTeamMemberAction: (data: CreateTeamMemberInput) => Promise<CreateTeamMemberResponse>;
}

const AddTeamMemberPageWrapper = ({ createTeamMemberAction }: AddTeamMemberPageWrapperProps) => {
  return <TeamMemberForm createTeamMemberAction={createTeamMemberAction} />;
};

export default AddTeamMemberPageWrapper;
