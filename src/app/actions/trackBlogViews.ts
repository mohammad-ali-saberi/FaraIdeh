'use server';

import { prisma } from '@/lib/prisma';
import { headers } from 'next/headers';

export async function trackBlogView(blogId: number) {
  try {
    // Get IP address from headers
    const headersList = await headers();
    const ipAddress =
      headersList.get('x-forwarded-for')?.split(',')[0].trim() ||
      headersList.get('x-real-ip') ||
      'unknown';

    const userAgent = headersList.get('user-agent') || undefined;

    // Check if this IP has already viewed this blog today
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existingView = await prisma.blogView.findUnique({
      where: {
        blogId_ipAddress: {
          blogId,
          ipAddress,
        },
      },
    });

    // If view already exists, don't count it again
    if (existingView) {
      return { success: false, message: 'Already viewed' };
    }

    // Create new view record
    await prisma.blogView.create({
      data: {
        blogId,
        ipAddress,
        userAgent,
      },
    });

    // Increment blog view count
    await prisma.blogs.update({
      where: { id: blogId },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    return { success: true, message: 'View tracked successfully' };
  } catch (error) {
    console.error('Error tracking blog view:', error);
    return { success: false, message: 'Failed to track view' };
  }
}
