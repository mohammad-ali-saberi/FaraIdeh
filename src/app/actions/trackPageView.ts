'use server';
import { headers } from 'next/headers';
import { prisma } from '@/lib/prisma';

/**
 * Tracks a new page view based on visitor IP
 * To prevent duplicate counting, we check if this IP has visited in the last 24 hours
 */
export async function trackPageView(): Promise<{ success: boolean }> {
  try {
    const headersList = await headers();

    // Get IP from headers
    const forwarded = headersList.get('x-forwarded-for');
    const realIp = headersList.get('x-real-ip');
    const ipAddress = forwarded?.split(',')[0] || realIp || 'unknown';

    // Get User Agent
    const userAgent = headersList.get('user-agent') || 'unknown';

    // Check if this IP has visited in the last 24 hours
    const oneDayAgo = new Date();
    oneDayAgo.setHours(oneDayAgo.getHours() - 24);

    const recentVisit = await prisma.pageView.findFirst({
      where: {
        ipAddress,
        visitedAt: {
          gte: oneDayAgo,
        },
      },
    });

    // If no recent visit, record a new one
    if (!recentVisit) {
      await prisma.pageView.create({
        data: {
          ipAddress,
          userAgent,
        },
      });
    }

    return { success: true };
  } catch (error) {
    console.error('Error tracking page view:', error);
    return { success: false };
  }
}

/**
 * Gets the total number of unique visitors (ever)
 * Each IP is counted only once regardless of how many times they've visited
 */
export async function getTotalPageViews(): Promise<number> {
  try {
    const uniqueViews = await prisma.pageView.groupBy({
      by: ['ipAddress'],
      _count: {
        id: true,
      },
    });

    return uniqueViews.length;
  } catch (error) {
    console.error('Error getting total page views:', error);
    return 0;
  }
}

/**
 * Gets page view statistics for a specific time range
 * @param days - Number of days to look back (default: 30)
 */
export async function getPageViewsStats(days: number = 30) {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const totalViews = await prisma.pageView.count({
      where: {
        visitedAt: {
          gte: startDate,
        },
      },
    });

    // Unique visitors in this time period
    const uniqueViews = await prisma.pageView.groupBy({
      by: ['ipAddress'],
      where: {
        visitedAt: {
          gte: startDate,
        },
      },
      _count: {
        id: true,
      },
    });

    return {
      total: totalViews,
      unique: uniqueViews.length,
    };
  } catch (error) {
    console.error('Error getting page views stats:', error);
    return { total: 0, unique: 0 };
  }
}
