// Components
import FeedbacksPageWrapper from '@/views/dashboard/admin/feedbacks/FeedbacksPage';

// Actions
import { getFeedbacks } from '@/app/actions/getFeedbacks';

const FeedbacksPage = async () => {
  const feedbacks = await getFeedbacks();

  return <FeedbacksPageWrapper feedbacks={feedbacks} />;
};

export default FeedbacksPage;
