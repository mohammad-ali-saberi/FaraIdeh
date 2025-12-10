'use client';

// Next Imports
import Link from 'next/link';

// Components
import DashboardCircleDecoration from '@/component/icons/SVG/DashboardCircleDecoration';
import HomeStoryDecoration from '@/component/icons/SVG/HomeStoryDecoration';
import ThreeWingsSVG from '@/component/icons/SVG/ThreeWingsSVG';
import BlogsIcon from '@/component/icons/dashboard/BlogsIcon';
import EyeIcon from '@/component/icons/dashboard/EyeIcon';
import FeedbackIcon from '@/component/icons/dashboard/FeedbackIcon';
import OrdersIcon from '@/component/icons/dashboard/OrdersIcon';
import ProjectsIcon from '@/component/icons/dashboard/ProjectsIcon';

// Types
import { DashboardStats } from '@/types/DashboardStatsType';
import { NewsletterSubscription } from '@/types/NewsletterSubscriptionType';

// Utils
import TeamIcon from '@/component/icons/dashboard/TeamIcon';
import { formatNumberShort } from '@/utils/formatNumber';

interface DashboardOverviewProps {
  stats: DashboardStats;
  newsletterSubs: NewsletterSubscription[];
}

const DashboardOverview = ({ stats, newsletterSubs }: DashboardOverviewProps) => {
  const dashboardData = [
    {
      icon: <EyeIcon />,
      title: 'بازدید ها',
      count: formatNumberShort(stats.totalViews, 'en'),
      link: '#',
    },
    {
      icon: <TeamIcon size="40" />,
      title: 'اعضای تیم',
      count: formatNumberShort(stats.teamMembers, 'en'),
      link: '/admin/ourteam',
    },
    {
      icon: <ProjectsIcon size="40" />,
      title: 'پروژه ها',
      count: formatNumberShort(stats.projects, 'en'),
      link: '/admin/projects',
    },
    {
      icon: <BlogsIcon size="40" />,
      title: 'وبلاگ',
      count: formatNumberShort(stats.blogs, 'en'),
      link: '/admin/blogs',
    },
    {
      icon: <OrdersIcon size="40" />,
      title: 'سفارشات',
      count: formatNumberShort(stats.orders, 'en'),
      link: '/admin/orders',
    },
    {
      icon: <FeedbackIcon size="40" />,
      title: 'بازخورد ها',
      count: formatNumberShort(stats.contacts, 'en'),
      link: '/admin/feedbacks',
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-x-20 gap-y-10 px-12 mt-12 relative">
        {dashboardData.map((item, index) => (
          <div key={index} className="w-full bg-white shadow rounded-xl z-40">
            <div className="py-8 px-8 flex items-center justify-between">
              <div>
                {item.icon}
                <p className="font-iranYekan font-semibold text-xl pt-3">{item.title}</p>
              </div>

              <div className="font-yekanBakhFaNum font-semibold text-7xl pt-2 relative">
                <div className="absolute -top-5 -right-9">
                  <ThreeWingsSVG />
                </div>
                {item.count}
              </div>
            </div>

            <div className="border-t border-[#D7D7D7] py-4 pl-8 text-left">
              <Link href={item.link} className="font-iranYekan text-[#0259FA] hover:underline">
                مشاهده بیشتر
              </Link>
            </div>
          </div>
        ))}

        <div className="absolute top-14 left-0">
          <DashboardCircleDecoration />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="px-12 mt-16 relative">
        <div className="absolute -top-5 right-6">
          <HomeStoryDecoration width="124" height="104" />
        </div>

        <p className="font-iranYekan font-semibold text-2xl pr-27">خبرنامه</p>

        <div className="w-full bg-white rounded-xl border border-[#D7D7D7] h-36 mt-3 overflow-y-scroll text-left px-5 py-3">
          {newsletterSubs.length > 0 ? (
            newsletterSubs.map((sub, index) => (
              <p
                key={index}
                className="font-semibold border-b border-[#D7D7D7] pb-4 mt-3 last:border-b-0 last:pb-0"
              >
                {sub.email}{' '}
                <span className="font-yekanBakhFaNum text-xs text-gray-400 mr-3">
                  {sub.subscribedAt}
                </span>
              </p>
            ))
          ) : (
            <div>
              <p className="text-center font-iranYekan rtl text-gray-500 mt-12">
                هیچ عضوی در خبرنامه ثبت‌نام نکرده است.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;
