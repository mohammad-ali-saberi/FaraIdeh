// React Imports
import { Suspense, use } from 'react';

// Next Imports
import type { Metadata } from 'next';

// Components
import WifiLoader from '@/components/WifiLoader';
import LandingPageWrapper from '@/views/global/home/HomePage';

// Actions
import { getProjects } from '@/app/actions/getProjects';

// Types
import type { ProjectsType } from '@/types/ProjectsType';

export const metadata: Metadata = {
  title: 'تیم توسعه نرم‌افزار و استارتاپی',
  description:
    'فراایده یک تیم کوچک توسعه نرم‌افزار و استارتاپی است که خدمات طراحی و توسعه وب، اپلیکیشن موبایل، UI/UX راه اندازی استارتاپ، مدیریت محتوا و مدیریت صفحه اینستاگرام ارائه می‌دهد.',
  openGraph: {
    title: 'فراایده | تیم توسعه نرم‌افزار و استارتاپی',
    description:
      'فراایده یک تیم کوچک توسعه نرم‌افزار و استارتاپی است که خدمات طراحی و توسعه وب، اپلیکیشن موبایل، UI/UX راه اندازی استارتاپ، مدیریت محتوا و مدیریت صفحه اینستاگرام ارائه می‌دهد.',
    url: 'https://fara-ideh.ir/home',
  },
  alternates: {
    canonical: 'https://fara-ideh.ir/home',
  },
};

function ProjectsSection() {
  const rows = use(getProjects());
  const projects: ProjectsType[] = rows.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    requesterName: p.requesterName ?? undefined,
    technologies: p.technologies,
    year: p.year,
    viewCount: p.viewCount,
    projectLink: p.projectLink ?? undefined,
    photo: p.photo,
    category: p.category,
  }));

  return <LandingPageWrapper projects={projects} />;
}

const LandingPage = async () => {
  return (
    <Suspense fallback={<WifiLoader />}>
      <ProjectsSection />
    </Suspense>
  );
};

export default LandingPage;
