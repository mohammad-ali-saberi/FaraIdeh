'use server';

import { prisma } from '@/lib/prisma';
import { NewsletterSubscription } from '@/types/NewsletterSubscriptionType';
import { formatJalaliDateShort } from '@/utils/formatDate';

export async function getLatestNewsletterSubscriptions(
  limit = 10,
): Promise<NewsletterSubscription[]> {
  try {
    const subscriptions = await prisma.newsletter.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        subscribedAt: 'desc',
      },
      take: limit,
      select: {
        email: true,
        subscribedAt: true,
      },
    });

    return subscriptions.map((sub) => ({
      email: sub.email,
      subscribedAt: formatJalaliDateShort(sub.subscribedAt),
    }));
  } catch (error) {
    console.error('Error fetching newsletter subscriptions:', error);
    return [];
  }
}
