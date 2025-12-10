'use client';

// Components
import Container from '@/component/Container';
import ProjectCard from './ProjectCard';
import Filters from './Filters';

// Types
import type { ProjectsType } from '@/types/ProjectsType';
import { ProjectCategory } from '@/features/projects/categories';

// Utils
import { columnize } from '@/utils/columnize';

const columnOffsetClasses = ['md:mt-16', '', 'md:mt-28'];

interface ProjectsProps {
  projects: ProjectsType[];
  selectedCategory: ProjectCategory;
}

const Projects = ({ projects, selectedCategory }: ProjectsProps) => {
  const hasData = projects.length > 0;
  const columnizedProjects = hasData ? columnize(projects, 3) : [];

  return (
    <>
      <Filters selectedCategory={selectedCategory} />

      <Container>
        {/* Projects */}
        <div className=" mt-11 md:mt-14 lg:mt-20">
          {!hasData ? (
            <div className="flex items-center justify-center">
              <p className="text-center bg-text-description font-iranYekan rtl text-white py-5 lg:py-3 px-5 lg:px-0 rounded w-3/4">
                {selectedCategory === 'all'
                  ? 'به دلیل تازه‌ توسعه بودن سایت، فعلاً پروژه‌ای ثبت نشده است. به‌ زودی پروژه‌های جدید اینجا نمایش داده خواهند شد.'
                  : 'در حال حاضر در این دسته‌بندی پروژه نیست.'}
              </p>
            </div>
          ) : (
            <>
              {/* Mobile */}
              <div className="grid grid-cols-1 gap-10 lg:hidden">
                {projects.map((project) => (
                  <ProjectCard key={`mobile-${project.id}`} {...project} />
                ))}
              </div>

              {/* Desktop */}
              <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-10 rtl">
                {columnizedProjects.map((columnProjects, columnIndex) => (
                  <div
                    key={`column-${columnIndex}`}
                    className={`flex flex-col gap-10 ${columnOffsetClasses[columnIndex]}`}
                  >
                    {columnProjects.map((project) => (
                      <ProjectCard key={`desktop-${project.id}`} {...project} />
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default Projects;
