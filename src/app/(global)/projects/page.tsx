// Components
import ProjectsPageWrapper from '@/views/global/projects/_projectspage';

// Actions
import { getProjects } from '@/app/actions/getProjects';

// Types
import type { ProjectsType } from '@/types/ProjectsType';
import { ProjectCategory } from '@/features/projects/categories';

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

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
