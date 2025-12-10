// Types
import type { Metadata } from 'next';
import type { SlidePublic } from '@/types/SlidesType';

// Libs
import { prisma } from '@/lib/prisma';

// Actions
import { getTeamMembers } from '@/app/actions/getTeamMembers';
import { getAchievements } from '@/app/actions/getAchievements';

// Components
import AboutPageWrapper from '@/views/global/about/AboutPage';

export const metadata: Metadata = {
  title: 'درباره ما',
  description:
    'ما ایده‌ها را به تجربه‌های واقعی کاربر تبدیل می‌کنیم و کنار شما می‌مانیم تا کار کند و دیده شود. تیمی کوچک اما مسئول، برای نتیجه‌های پایدار.',
};

const AboutPage = async () => {
  const [slides, members, achievements] = await Promise.all([
    prisma.slider.findMany({
      where: { isActive: true },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
      select: { id: true, photo: true, caption: true },
    }) as Promise<SlidePublic[]>,
    getTeamMembers(),
    getAchievements(),
  ]);

  return <AboutPageWrapper slides={slides} members={members} achievements={achievements} />;
};

export default AboutPage;
