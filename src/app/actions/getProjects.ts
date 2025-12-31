import { prisma } from '@/libs/prisma';
import { ProjectsType } from '@/types/ProjectsType';
import { Prisma } from '@prisma/client';
import { unstable_noStore as noStore } from 'next/cache';
import 'server-only';

/**
 * Fetch active projects with an optional category filter.
 * - When `category` is 'all' or undefined, the filter is ignored.
 * - Uses `select` to minimize payload.
 * - Ordered by `createdAt desc, id desc` for stable pagination if needed later.
 *
 * DB index recommendation (optional but good for performance):
 *   @@index([isActive, category, createdAt])
 */
export async function getProjects(category?: string): Promise<ProjectsType[]> {
  noStore();

  // Strongly-typed where to satisfy ESLint rule: no-explicit-any
  const where: Prisma.ProjectWhereInput = {
    isActive: true,
    ...(category && category !== 'all' ? { category } : {}),
  };

  const rows = await prisma.project.findMany({
    where,
    orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
    select: {
      id: true,
      name: true,
      description: true,
      requesterName: true,
      technologies: true, // Json -> string[]
      year: true,
      viewCount: true,
      projectLink: true,
      photos: true, // Json -> string[]
      category: true,
    },
  });

  return rows.map((p) => {
    const photos = Array.isArray(p.photos) ? (p.photos as string[]) : [];
    const techs = Array.isArray(p.technologies) ? (p.technologies as string[]) : [];

    const rn = p.requesterName;
    const requesterName = typeof rn === 'string' || rn === null ? rn : null;

    return {
      id: p.id,
      name: p.name,
      description: p.description,
      requesterName,
      technologies: techs.join(' | '),
      year: String(p.year),
      viewCount: String(p.viewCount ?? 0),
      projectLink: p.projectLink ?? null,
      photo: photos[0] || 'https://s6.uupload.ir/files/images_eusf.png',
      category: p.category,
    };
  });
}
