'use client';

// React Imports
import { useEffect, useState } from 'react';

// Next Imports
import Link from 'next/link';

// Components
import AchievementIcon from '@/component/icons/AchievementIcon';
import OrderIcon from '@/component/icons/OrderIcon';
import ProjectIcon from '@/component/icons/ProjectIcon';
import InformationBackdrop from '@/component/icons/SVG/InformationBackdrop';
import UsersIcon from '@/component/icons/UsersIcon';

// Server Actions
import { getInformationCounts } from '@/app/actions/information';

const Information = () => {
  const [counts, setCounts] = useState({
    teamMembers: 0,
    projects: 0,
    orders: 0,
    achievements: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      const data = await getInformationCounts();
      setCounts(data);
    };
    fetchCounts();
  }, []);

  const stats = [
    {
      icon: <UsersIcon />,
      count: counts.teamMembers,
      label: 'اعضای تیم',
      href: '/about#ourteam',
    },
    {
      icon: <ProjectIcon />,
      count: counts.projects > 0 ? `+${counts.projects}` : '0',
      label: 'پروژه های انجام شده',
      href: '/projects',
    },
    {
      icon: <OrderIcon />,
      count: counts.orders,
      label: 'سفارشات',
      href: '/order-form',
    },
    {
      icon: <AchievementIcon />,
      count: counts.achievements,
      label: 'دستاورد ها',
      href: '/about#achievements',
    },
  ];

  return (
    <div className="absolute inset-x-0 -bottom-52 sm:-bottom-10 h-auto lg:h-[156px] z-10">
      {/* Desktop SVG Background */}
      <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none">
        <InformationBackdrop />
      </div>

      {/* Mobile/Tablet */}
      <div className="lg:hidden bg-white rounded-t-xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6">
          {stats.map((stat, index) => (
            <Link key={index} href={stat.href}>
              <div className="flex flex-col items-center justify-between text-center p-2">
                <div className="scale-75 md:scale-90">{stat.icon}</div>
                <div>
                  <p className="font-yekanBakhFaNum font-bold text-xl sm:text-2xl md:text-3xl">
                    {stat.count}
                  </p>
                  <p className="font-iranYekan text-text-information text-xs sm:text-sm mt-1 text-nowrap">
                    {stat.label}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex relative flex-row-reverse items-center justify-between 2xl:mt-8 2xl:max-[1768px]:mt-10 xl:mt-12 lg:mt-13 2xl:px-56 2xl:max-[1768px]:px-42 xl:px-36 lg:px-30">
        {stats.map((stat, index) => (
          <Link key={index} href={stat.href}>
            <div className="flex flex-row-reverse items-center gap-4">
              <div className="lg:scale-80 xl:scale-95">{stat.icon}</div>
              <div className="flex flex-col items-start">
                <p className="text-right w-full font-yekanBakhFaNum font-bold text-3xl">
                  {stat.count}
                </p>
                <p className="text-right w-full font-iranYekan text-text-information">
                  {stat.label}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Information;
