// React Imports
import { Suspense, use } from 'react';

// Components
import LandingPageWrapper from '@/views/global/home/_homepage';
import WifiLoader from '@/component/WifiLoader';

// Actions
import { getProjects } from '@/app/actions/getProjects';

// Types
import type { ProjectsType } from '@/types/ProjectsType';

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
