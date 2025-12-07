// Components
import AddTeamMemberPageWrapper from '@/views/dashboard/admin/ourteam/add/_addteammemberpage';

// Actions
import { createTeamMember } from '@/app/actions/createTeamMember';

const AddTeamMemberPage = async () => {
  return <AddTeamMemberPageWrapper createTeamMemberAction={createTeamMember} />;
};

export default AddTeamMemberPage;
