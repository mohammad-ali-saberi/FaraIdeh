'use client';

// React Imports
import { cloneElement } from 'react';

// Next Imports
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Components
import HamburgerMenuIcon from '@/component/icons/dashboard/HamburgerMenuIcon';
import DashboardIcon from '@/component/icons/dashboard/DashboardIcon';
import ProjectsIcon from '@/component/icons/dashboard/ProjectsIcon';
import BlogsIcon from '@/component/icons/dashboard/BlogsIcon';
import SliderIcon from '@/component/icons/dashboard/SliderIcon';
import TeamIcon from '@/component/icons/dashboard/TeamIcon';
import OrdersIcon from '@/component/icons/dashboard/OrdersIcon';
import FeedbackIcon from '@/component/icons/dashboard/FeedbackIcon';
import LogOutIcon from '@/component/icons/dashboard/LogOutIcon';
import AchievementIcon from '@/component/icons/dashboard/AchievementIcon';

// Actions
import { logoutUser } from '@/app/actions/logout';

// Images
import Logo from '@/assets/images/Logo.png';

const Sidebar = () => {
  const pathname = usePathname();

  const routes = [
    {
      icon: <DashboardIcon />,
      title: 'داشبورد',
      link: '/admin/dashboard',
    },
    {
      icon: <ProjectsIcon />,
      title: 'پروژه ها',
      link: '/admin/projects',
    },
    {
      icon: <BlogsIcon />,
      title: 'وبلاگ',
      link: '/admin/blogs',
    },
    {
      icon: <SliderIcon />,
      title: 'اسلایدر',
      link: '/admin/slider',
    },
    {
      icon: <TeamIcon />,
      title: 'تیم فراایده',
      link: '/admin/ourteam',
    },
    {
      icon: <OrdersIcon />,
      title: 'سفارشات',
      link: '/admin/orders',
    },
    {
      icon: <FeedbackIcon />,
      title: 'بازخورد ها',
      link: '/admin/feedbacks',
    },
    {
      icon: <AchievementIcon />,
      title: 'دستاوردها',
      link: '/admin/achievement',
    },
  ];

  return (
    <div className="col-span-2 rtl p-6 px-9 shadow-xl relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/home">
          <Image src={Logo} alt="logo" className="w-5 sm:w-6" />
        </Link>

        <HamburgerMenuIcon />
      </div>

      <div className="mt-16">
        {routes.map((route, index) => {
          const isActive = route.link === pathname;
          return (
            <Link
              key={index}
              href={route.link}
              className={`flex font-iranYekan gap-6 items-center group hover:text-primary transition-all duration-200 w-full mt-5 ${
                isActive ? 'text-primary' : ''
              }`}
            >
              {cloneElement(route.icon, {
                className: `transition-all ${
                  isActive ? 'text-primary' : 'text-[#BBBBBB] group-hover:text-primary'
                }`,
              })}
              {route.title}
            </Link>
          );
        })}

        <div className="absolute bottom-9">
          <form action={logoutUser}>
            <button
              type="submit"
              className="flex font-iranYekan gap-6 items-center group hover:text-[#DC3545] transition-all duration-200 w-full bg-transparent border-none cursor-pointer"
            >
              <LogOutIcon className="text-[#BBBBBB] group-hover:text-[#DC3545] transition-all" />
              خروج از حساب کاربری
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
