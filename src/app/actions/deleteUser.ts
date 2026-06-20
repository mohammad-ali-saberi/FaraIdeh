'use server';

import { prisma } from '@/libs/prisma';

interface DeleteUserResponse {
  success: boolean;
  message: string;
}

export async function deleteUser(id: number): Promise<DeleteUserResponse> {
  try {
    await prisma.user.delete({
      where: { id },
    });

    return { success: true, message: 'کاربر با موفقیت حذف شد' };
  } catch (error) {
    console.error('Delete user error:', error);
    return { success: false, message: 'خطا در حذف کاربر' };
  }
}
