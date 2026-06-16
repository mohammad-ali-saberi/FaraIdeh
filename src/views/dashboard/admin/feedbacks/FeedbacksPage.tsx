'use client';

// Components
import FeedbacksList from './FeedbacksList';

// Types
import { Feedback } from '@/types/FeedbacksType';

interface FeedbacksPageWrapperProps {
  feedbacks: Feedback[];
}

const FeedbacksPageWrapper = ({ feedbacks }: FeedbacksPageWrapperProps) => {
  return <FeedbacksList feedbacks={feedbacks} />;
};

export default FeedbacksPageWrapper;
