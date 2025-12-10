'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import DashboardOverview from './DashboardOverview';
import Footer from '@/component/dashboard/Footer';

// Types
import { DashboardStats } from '@/types/DashboardStatsType';
import { NewsletterSubscription } from '@/types/NewsletterSubscriptionType';

interface DashboardPageWrapperProps {
  stats: DashboardStats;
  newsletterSubs: NewsletterSubscription[];
}

const DashboardPageWrapper = ({ stats, newsletterSubs }: DashboardPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <DashboardOverview stats={stats} newsletterSubs={newsletterSubs} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default DashboardPageWrapper;
