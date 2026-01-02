// Types
import type { SlidePublic } from '@/types/SlidesType';
import type { Metadata } from 'next';

// Libs
import { prisma } from '@/libs/prisma';

// Actions
import { getAchievements } from '@/app/actions/getAchievements';
import { getTeamMembers } from '@/app/actions/getTeamMembers';

// Components
import AboutPageWrapper from '@/views/global/about/AboutPage';

export const metadata: Metadata = {
  title: 'درباره ما',
  description:
    'ما ایده‌ها را به تجربه‌های واقعی کاربر تبدیل می‌کنیم و کنار شما می‌مانیم تا کار کند و دیده شود. تیمی کوچک اما مسئول، برای نتیجه‌های پایدار.',
  openGraph: {
    title: 'درباره فراایده',
    description:
      'ما ایده‌ها را به تجربه‌های واقعی کاربر تبدیل می‌کنیم و کنار شما می‌مانیم تا کار کند و دیده شود. تیمی کوچک اما مسئول، برای نتیجه‌های پایدار.',
    url: 'https://fara-ideh.ir/about',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://fara-ideh.ir/about',
  },
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
