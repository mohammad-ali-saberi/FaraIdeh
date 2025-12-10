'use server';

import { prisma } from '@/lib/prisma';

export async function toggleBlogPublish(
  blogId: number,
  currentStatus: boolean,
): Promise<{ success: boolean; message: string }> {
  try {
    await prisma.blogs.update({
      where: { id: blogId },
      data: { published: !currentStatus },
    });

    return {
      success: true,
      message: !currentStatus ? 'وبلاگ منتشر شد' : 'وبلاگ غیرفعال شد',
    };
  } catch (error) {
    console.error('Error toggling blog publish status:', error);
    return {
      success: false,
      message: 'خطا در تغییر وضعیت وبلاگ',
    };
  }
}
