'use server';

import { prisma } from '@/libs/prisma';

interface DeleteUserResponse {
  success: boolean;
  message: string;
}

export async function deleteUser(id: number): Promise<DeleteUserResponse> {
  try {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      return { success: false, message: 'کاربر یافت نشد' };
    }

    if (user.isProtected) {
      return { success: false, message: 'این کاربر قابل حذف نیست' };
    }

    await prisma.user.delete({ where: { id } });

    return { success: true, message: 'کاربر با موفقیت حذف شد' };
  } catch (error) {
    console.error('Delete user error:', error);
    return { success: false, message: 'خطا در حذف کاربر' };
  }
}
