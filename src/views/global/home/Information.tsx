'use client';

// React Imports
import { useEffect, useState } from 'react';

// Next Imports
import Link from 'next/link';

// Components
import AchievementIcon from '@/components/icons/AchievementIcon';
import OrderIcon from '@/components/icons/OrderIcon';
import ProjectIcon from '@/components/icons/ProjectIcon';
// import InformationBackdrop from '@/component/icons/SVG/InformationBackdrop';
import Container from '@/components/Container';
import UsersIcon from '@/components/icons/UsersIcon';
import Line from '@/components/Line';

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
    <>
      <Container>
        <div>
          {/* Desktop SVG Background */}
          {/* <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none">
            <InformationBackdrop />
          </div> */}

          {/* Mobile/Tablet */}
          <div className="lg:hidden bg-white rounded-t-xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
          <div className="hidden lg:flex relative flex-row-reverse items-center justify-between mt-8">
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
      </Container>

      <Line className="mt-5 sm:mt-6 lg:mt-10" />
    </>
  );
};

export default Information;
