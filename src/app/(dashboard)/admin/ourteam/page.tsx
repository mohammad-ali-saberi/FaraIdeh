// Components
import OurTeamPageWrapper from '@/views/dashboard/admin/ourteam/TeamPage';

// Actions
import { getTeamMembers } from '@/app/actions/getTeamMembers';
import { deleteTeamMember } from '@/app/actions/deleteTeamMember';

const OurTeamPage = async () => {
  const teamMembers = await getTeamMembers();

  return <OurTeamPageWrapper teamMembers={teamMembers} onDelete={deleteTeamMember} />;
};

export default OurTeamPage;
