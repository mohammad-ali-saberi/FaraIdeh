'use server';

import { prisma } from '@/lib/prisma';
import { Feedback } from '@/types/FeedbacksType';

export async function getFeedbacks(): Promise<Feedback[]> {
  try {
    const feedbacks = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return feedbacks;
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    return [];
  }
}
