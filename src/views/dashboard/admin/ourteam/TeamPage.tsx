'use client';

// Components
import TeamMembersList from './TeamMembersList';

// Types
import { TeamMemberType } from '@/types/TeamMemberType';

interface OurTeamPageWrapperProps {
  teamMembers: TeamMemberType[];
  onDelete: (id: number) => Promise<{ success: boolean; message: string }>;
}

const OurTeamPageWrapper = ({ teamMembers, onDelete }: OurTeamPageWrapperProps) => {
  return <TeamMembersList teamMembers={teamMembers} onDelete={onDelete} />;
};

export default OurTeamPageWrapper;
