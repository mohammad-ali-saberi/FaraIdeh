'use client';

// Components
import Footer from '@/components/dashboard/Footer';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardOverview from './DashboardOverview';

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
