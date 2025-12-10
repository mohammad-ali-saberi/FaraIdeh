// Components
import AddTeamMemberPageWrapper from '@/views/dashboard/admin/ourteam/add/AddTeamMemberPage';

// Actions
import { createTeamMember } from '@/app/actions/createTeamMember';

const AddTeamMemberPage = async () => {
  return <AddTeamMemberPageWrapper createTeamMemberAction={createTeamMember} />;
};

export default AddTeamMemberPage;
