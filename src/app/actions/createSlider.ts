'use server';

import { prisma } from '@/libs/prisma';
import { revalidatePath } from 'next/cache';

export async function createSlider(photo: string) {
  try {
    // Get the highest sortOrder
    const lastSlider = await prisma.slider.findFirst({
      orderBy: { sortOrder: 'desc' },
      select: { sortOrder: true },
    });

    const newSlider = await prisma.slider.create({
      data: {
        photo,
        sortOrder: (lastSlider?.sortOrder ?? 0) + 1,
      },
    });

    revalidatePath('/admin/slider');
    return { success: true, data: newSlider };
  } catch (error) {
    console.error('Error creating slider:', error);
    return { success: false, error: 'خطا در ایجاد اسلایدر' };
  }
}
