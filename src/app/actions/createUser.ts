'use server';

import { prisma } from '@/libs/prisma';
import { hashPassword } from '@/libs/auth';
import { createUserSchema } from '@/features/users/userSchema';

interface CreateUserResponse {
  success: boolean;
  message: string;
}

export async function createUser(formData: FormData): Promise<CreateUserResponse> {
  try {
    const raw = {
      photo: formData.get('photo') as string,
      fullName: formData.get('fullName') as string,
      username: formData.get('userName') as string,
      password: formData.get('password') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as string,
      isActive: formData.get('isActive') === 'true',
    };

    const parsed = createUserSchema.safeParse(raw);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? 'اطلاعات وارد شده معتبر نیست';
      return { success: false, message: firstError };
    }

    const data = parsed.data;

    const existingUser = await prisma.user.findFirst({
      where: {
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

    const hashedPassword = await hashPassword(data.password);

    await prisma.user.create({
      data: {
        photo: data.photo || null,
        fullName: data.fullName,
        username: data.username,
        password: hashedPassword,
        email: data.email || null,
        role: data.role,
        isActive: data.isActive,
      },
    });

    return { success: true, message: 'کاربر با موفقیت ایجاد شد' };
  } catch (error) {
    console.error('Create user error:', error);
    return { success: false, message: 'خطای سرور رخ داده است' };
  }
}
