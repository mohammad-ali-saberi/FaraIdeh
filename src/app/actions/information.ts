'use server';

import { prisma } from '@/libs/prisma';

export async function getInformationCounts() {
  try {
    const [teamMembers, projects, orders, achievements] = await Promise.all([
      prisma.teamMember.count(),
      prisma.project.count({
        where: {
          isActive: true, // Completed projects
        },
      }),
      prisma.order.count(),
      prisma.achievement.count(),
    ]);

    return {
      teamMembers,
      projects,
      orders,
      achievements,
    };
  } catch (error) {
    console.error('Failed to fetch information counts:', error);
    return {
      teamMembers: 0,
      projects: 0,
      orders: 0,
      achievements: 0,
    };
  }
}
