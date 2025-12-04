'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function toggleSliderActive(id: number, isActive: boolean) {
  try {
    await prisma.slider.update({
      where: { id },
      data: { isActive },
    });

    revalidatePath('/admin/slider');
    return { success: true };
  } catch (error) {
    console.error('Error toggling slider active:', error);
    return { success: false, error: 'خطا در تغییر وضعیت اسلایدر' };
  }
}
