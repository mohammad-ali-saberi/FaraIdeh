import { prisma } from '@/libs/prisma';
import { AdminProject } from '@/types/ProjectsType';
import { unstable_noStore as noStore } from 'next/cache';
import 'server-only';

/**
 * Fetch a single project by ID for admin editing
 */
export async function getProjectByIdAdmin(id: number): Promise<AdminProject | null> {
  noStore();

  const project = await prisma.project.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      description: true,
      requesterName: true,
      technologies: true,
      year: true,
      viewCount: true,
      projectLink: true,
      photos: true,
      category: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!project) {
    return null;
  }

  return {
    id: project.id,
    name: project.name,
    description: project.description,
    requesterName: project.requesterName,
    technologies: Array.isArray(project.technologies) ? (project.technologies as string[]) : [],
    year: project.year,
    viewCount: project.viewCount,
    projectLink: project.projectLink,
    photos: Array.isArray(project.photos) ? (project.photos as string[]) : [],
    category: project.category,
    isActive: project.isActive,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt,
  };
}
