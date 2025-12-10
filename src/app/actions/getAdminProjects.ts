import 'server-only';
import { prisma } from '@/lib/prisma';
import { unstable_noStore as noStore } from 'next/cache';
import { AdminProject } from '@/types/ProjectsType';

/**
 * Fetch all projects for admin dashboard (including inactive ones)
 * Ordered by createdAt desc for newest first
 */
export async function getAdminProjects(): Promise<AdminProject[]> {
  noStore();

  const projects = await prisma.project.findMany({
    orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
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

  return projects.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    requesterName: p.requesterName,
    technologies: Array.isArray(p.technologies) ? (p.technologies as string[]) : [],
    year: p.year,
    viewCount: p.viewCount,
    projectLink: p.projectLink,
    photos: Array.isArray(p.photos) ? (p.photos as string[]) : [],
    category: p.category,
    isActive: p.isActive,
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
  }));
}
