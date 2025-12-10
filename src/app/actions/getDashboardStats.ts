'use server';
import { prisma } from '@/lib/prisma';
import { getTotalPageViews } from './trackPageView';
import { DashboardStats } from '@/types/DashboardStatsType';

/**
 * Fetches all statistics needed for the admin dashboard
 */
export async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const [teamMembers, projects, blogs, orders, contacts, totalViews] = await Promise.all([
      // Total number of team members
      prisma.teamMember.count(),

      // Number of active projects
      prisma.project.count({
        where: { isActive: true },
      }),

      // Number of published blog posts
      prisma.blogs.count({
        where: { published: true },
      }),

      // Total number of orders
      prisma.order.count(),

      // Total number of contact form submissions (feedback/messages)
      prisma.contact.count(),

      // Total number of unique website visitors
      getTotalPageViews(),
    ]);

    return {
      totalViews,
      teamMembers,
      projects,
      blogs,
      orders,
      contacts,
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return {
      totalViews: 0,
      teamMembers: 0,
      projects: 0,
      blogs: 0,
      orders: 0,
      contacts: 0,
    };
  }
}
