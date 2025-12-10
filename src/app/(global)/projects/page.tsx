// Components
import ProjectsPageWrapper from '@/views/global/projects/ProjectsPage';

// Actions
import { getProjects } from '@/app/actions/getProjects';

// Types
import type { ProjectsType } from '@/types/ProjectsType';
import { ProjectCategory } from '@/features/projects/categories';
import { Metadata } from 'next';

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export const metadata: Metadata = {
  title: 'پروژه ‌ها',
  description:
    'گزیده‌ای از پروژه‌هایی که با تمرکز بر سرعت، تجربهٔ کاربری و محتوای هدفمند اجرا شده‌اند.اینجا می‌بینید چگونه ایده‌ها به خروجی‌های قابل‌سنجش تبدیل شده‌اند.',
};

const ProjectsPage = async ({ searchParams }: PageProps) => {
  const params = await searchParams;
  const selectedCategory = (params.category as ProjectCategory) || 'all';

  const rows = await getProjects();

  const filteredRows =
    selectedCategory === 'all' ? rows : rows.filter((p) => p.category === selectedCategory);

  const projects: ProjectsType[] = filteredRows.map((p) => ({
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

  return <ProjectsPageWrapper projects={projects} selectedCategory={selectedCategory} />;
};

export default ProjectsPage;
