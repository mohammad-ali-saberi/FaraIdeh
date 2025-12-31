'use client';

// Components
import Footer from '@/components/dashboard/Footer';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import FeedbacksList from './FeedbacksList';

// Types
import { Feedback } from '@/types/FeedbacksType';

interface FeedbacksPageWrapperProps {
  feedbacks: Feedback[];
}

const FeedbacksPageWrapper = ({ feedbacks }: FeedbacksPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <FeedbacksList feedbacks={feedbacks} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default FeedbacksPageWrapper;
