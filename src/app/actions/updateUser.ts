'use server';

import { prisma } from '@/libs/prisma';
import { hashPassword } from '@/libs/auth';
import { updateUserSchema, UpdateUserInput } from '@/features/users/userSchema';

interface UpdateUserResponse {
  success: boolean;
  message: string;
}

export async function updateUser(
  id: number,
  rawData: UpdateUserInput,
): Promise<UpdateUserResponse> {
  try {
    const parsed = updateUserSchema.safeParse(rawData);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? 'اطلاعات وارد شده معتبر نیست';
      return { success: false, message: firstError };
    }

    const data = parsed.data;

    const existingUser = await prisma.user.findFirst({
      where: {
        id: { not: id },
        OR: [{ username: data.username }, ...(data.email ? [{ email: data.email }] : [])],
      },
    });

    if (existingUser) {
      return {
        success: false,
        message:
          existingUser.username === data.username
            ? 'این نام کاربری قبلاً ثبت شده است'
            : 'این ایمیل قبلاً ثبت شده است',
      };
    }

    await prisma.user.update({
      where: { id },
      data: {
        photo: data.photo || null,
        fullName: data.fullName,
        username: data.username,
        email: data.email || null,
        role: data.role,
        isActive: data.isActive,
        ...(data.password ? { password: await hashPassword(data.password) } : {}),
      },
    });

    return { success: true, message: 'اطلاعات کاربر با موفقیت به‌روزرسانی شد' };
  } catch (error) {
    console.error('Update user error:', error);
    return { success: false, message: 'خطای سرور رخ داده است' };
  }
}
