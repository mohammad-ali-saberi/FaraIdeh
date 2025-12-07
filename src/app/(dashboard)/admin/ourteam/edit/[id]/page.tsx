import { notFound } from 'next/navigation';

// Components
import EditTeamMemberPageWrapper from '@/views/dashboard/admin/ourteam/edit/_editteammemberpage';

// Actions
import { getTeamMemberById } from '@/app/actions/getTeamMembers';
import { updateTeamMember } from '@/app/actions/updateTeamMember';

interface EditTeamMemberPageProps {
  params: {
    id: string;
  };
}

const EditTeamMemberPage = async ({ params }: EditTeamMemberPageProps) => {
  const memberId = parseInt(params.id);

  if (isNaN(memberId)) {
    notFound();
  }

  const member = await getTeamMemberById(memberId);

  if (!member) {
    notFound();
  }

  return <EditTeamMemberPageWrapper member={member} updateTeamMemberAction={updateTeamMember} />;
};

export default EditTeamMemberPage;
