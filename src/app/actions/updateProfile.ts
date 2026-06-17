'use server';

import { prisma } from '@/libs/prisma';
import { getAuthUser, hashPassword } from '@/libs/auth';
import { revalidatePath } from 'next/cache';
import { UpdateProfileData, UpdateProfileResult } from '@/types/UsersType';

export async function updateProfile(data: UpdateProfileData): Promise<UpdateProfileResult> {
  const user = await getAuthUser();
  if (!user?.id) return { success: false, message: 'احراز هویت نشدید' };

  try {
    const updateData: {
      fullName: string;
      username: string;
      email: string | null;
      photo: string | null;
      password?: string;
    } = {
      fullName: data.fullName,
      username: data.username,
      email: data.email?.trim() || null,
      photo: data.photo?.trim() || null,
    };

    if (data.password && data.password.trim() !== '') {
      updateData.password = await hashPassword(data.password);
    }

    await prisma.user.update({
      where: { id: user.id },
      data: updateData,
    });

    revalidatePath('/admin/profile');
    return { success: true, message: 'اطلاعات با موفقیت ذخیره شد' };
  } catch (error: unknown) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as { code: string }).code === 'P2002'
    ) {
      return { success: false, message: 'نام کاربری یا ایمیل قبلاً استفاده شده' };
    }
    return { success: false, message: 'خطا در ذخیره اطلاعات' };
  }
}
