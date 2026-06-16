'use client';

// Components
import DashboardOverview from './DashboardOverview';

// Types
import { DashboardStats } from '@/types/DashboardStatsType';
import { NewsletterSubscription } from '@/types/NewsletterSubscriptionType';

interface DashboardPageWrapperProps {
  stats: DashboardStats;
  newsletterSubs: NewsletterSubscription[];
}

const DashboardPageWrapper = ({ stats, newsletterSubs }: DashboardPageWrapperProps) => {
  return <DashboardOverview stats={stats} newsletterSubs={newsletterSubs} />;
};

export default DashboardPageWrapper;
