// Components
import DashboardPageWrapper from '@/views/dashboard/admin/dashboard/DashboardPage';

// Actions
import { getDashboardStats } from '@/app/actions/getDashboardStats';
import { getLatestNewsletterSubscriptions } from '@/app/actions/getNewsletterSubscriptions';

const DashboardPage = async () => {
  const [stats, newsletterSubs] = await Promise.all([
    getDashboardStats(),
    getLatestNewsletterSubscriptions(10),
  ]);

  return <DashboardPageWrapper stats={stats} newsletterSubs={newsletterSubs} />;
};

export default DashboardPage;
