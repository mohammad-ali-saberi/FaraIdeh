'use server';

import { prisma } from '@/lib/prisma';

export async function trackProjectView(projectId: number): Promise<boolean> {
  try {
    await prisma.project.update({
      where: { id: projectId },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });

    return true;
  } catch (error) {
    console.error('Error incrementing project view:', error);
    return false;
  }
}
