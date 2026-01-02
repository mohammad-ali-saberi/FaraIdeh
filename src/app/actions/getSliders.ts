'use server';

import { prisma } from '@/libs/prisma';

export async function getSliders() {
  try {
    const sliders = await prisma.slider.findMany({
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      select: {
        id: true,
        photo: true,
        caption: true,
        linkUrl: true,
        sortOrder: true,
        isActive: true,
      },
    });

    return sliders;
  } catch (error) {
    console.error('Error fetching sliders:', error);
    throw new Error('خطا در دریافت اسلایدرها');
  }
}
