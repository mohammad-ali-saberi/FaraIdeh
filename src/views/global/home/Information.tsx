'use client';

// React Imports
import { useEffect, useState } from 'react';

// Next Imports
import Link from 'next/link';

// Components
import AchievementIcon from '@/components/icons/AchievementIcon';
import OrderIcon from '@/components/icons/OrderIcon';
import ProjectIcon from '@/components/icons/ProjectIcon';
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
    <div className="relative [--info-platform:clamp(7rem,14.4vh,9.75rem)] lg:z-20 lg:-mt-[var(--info-platform)]">
      {/* Desktop platform — only from lg up, overlaps the bottom of the hero */}
      <div className="relative hidden w-full lg:block lg:h-[var(--info-platform)]">
        {/* Backdrop shape — fillets overlap the wing and the centre by 1px so no
            sub-pixel seam can show through the dark hero behind them. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {/* Side wings */}
          <div className="absolute inset-x-0 bottom-0 h-[52%] rounded-t-[19px] bg-white" />
          {/* Raised centre */}
          <div className="absolute inset-x-[8.75%] bottom-0 h-full rounded-t-[19px] bg-white" />
          {/* Concave fillets where the centre meets the wings */}
          <div className="absolute bottom-[calc(52%_-_1px)] left-[calc(8.75%_-_19px)] h-[20px] w-[20px] bg-[radial-gradient(circle_19px_at_0_0,transparent_19px,white_19px)]" />
          <div className="absolute right-[calc(8.75%_-_19px)] bottom-[calc(52%_-_1px)] h-[20px] w-[20px] bg-[radial-gradient(circle_19px_at_100%_0,transparent_19px,white_19px)]" />
        </div>

        {/* Stats — vertically centred inside the platform */}
        <div className="absolute inset-0 flex items-center">
          <div className="flex w-full flex-row-reverse items-center justify-between px-[11.75%]">
            {stats.map((stat, index) => (
              <Link key={index} href={stat.href}>
                <div className="flex flex-row-reverse items-center gap-4">
                  <div className="[&_svg]:h-[clamp(2.5rem,3.125vw,4.5rem)] [&_svg]:w-auto">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-right w-full font-yekanBakhFaNum font-bold text-2xl xl:text-3xl">
                      {stat.count}
                    </p>
                    <p className="text-right w-full font-iranYekan text-text-information text-sm xl:text-base">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Divider — same width as the centre block, hugging the bottom */}
        <div className="absolute right-[8.75%] bottom-[5.8%] left-[8.75%] border-b border-[#EBEBEB]" />
      </div>

      {/* Mobile/Tablet */}
      <Container className="lg:hidden">
        <div className="bg-white rounded-t-xl">
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
      </Container>

      <Line className="mt-5 sm:mt-6 lg:hidden" />
    </div>
  );
};

export default Information;
