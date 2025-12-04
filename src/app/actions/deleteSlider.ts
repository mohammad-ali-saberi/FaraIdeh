'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function deleteSlider(id: number) {
  try {
    await prisma.slider.delete({
      where: { id },
    });

    revalidatePath('/admin/slider');
    return { success: true };
  } catch (error) {
    console.error('Error deleting slider:', error);
    return { success: false, error: 'خطا در حذف اسلایدر' };
  }
}
