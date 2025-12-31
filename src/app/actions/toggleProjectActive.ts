'use server';

import { prisma } from '@/libs/prisma';
import { revalidatePath } from 'next/cache';

export async function toggleProjectActive(projectId: number, currentStatus: boolean) {
  try {
    await prisma.project.update({
      where: { id: projectId },
      data: { isActive: !currentStatus },
    });

    // Revalidate relevant paths
    revalidatePath('/admin/projects');
    revalidatePath('/projects');

    return { success: true };
  } catch (error) {
    console.error('Error toggling project status:', error);
    return { success: false, error: 'خطا در تغییر وضعیت پروژه' };
  }
}
