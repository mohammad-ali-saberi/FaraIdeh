'use server';

import { comparePassword, createToken, setAuthCookie } from '@/libs/auth';
import { prisma } from '@/libs/prisma';
import { checkRateLimit, recordFailedAttempt, clearFailedAttempts } from '@/libs/rateLimit';
import { redirect } from 'next/navigation';

interface LoginResponse {
  success: boolean;
  message: string;
  error?: string;
}

export async function loginUser(username: string, password: string): Promise<LoginResponse> {
  try {
    if (!username || !password) {
      return {
        success: false,
        message: 'فیلدهای نام کاربری و رمز عبور الزامی است',
        error: 'INVALID_INPUT',
      };
    }

    // Check rate limit before anything else
    const rateLimitCheck = checkRateLimit(username);
    if (!rateLimitCheck.allowed) {
      return {
        success: false,
        message: rateLimitCheck.message ?? 'تعداد تلاش‌های شما بیش از حد مجاز است',
        error: 'RATE_LIMITED',
      };
    }

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      recordFailedAttempt(username);
      return {
        success: false,
        message: 'نام کاربری یا رمز عبور اشتباه است',
        error: 'INVALID_CREDENTIALS',
      };
    }

    if (!user.isActive) {
      return {
        success: false,
        message: 'حساب کاربری شما غیرفعال است',
        error: 'USER_INACTIVE',
      };
    }

    const passwordMatch = await comparePassword(password, user.password);

    if (!passwordMatch) {
      recordFailedAttempt(username);
      return {
        success: false,
        message: 'نام کاربری یا رمز عبور اشتباه است',
        error: 'INVALID_CREDENTIALS',
      };
    }

    // Successful login -> clear any previous failed attempts
    clearFailedAttempts(username);

    const token = await createToken({
      id: user.id,
      username: user.username,
      role: user.role,
    });

    await setAuthCookie(token);

    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    const roleDashboards: Record<string, string> = {
      admin: '/admin/dashboard',
      writer: '/writer/dashboard',
      editor: '/editor/dashboard',
      user: '/user/dashboard',
    };

    const dashboardPath = roleDashboards[user.role] ?? '/login';
    redirect(dashboardPath);
  } catch (error) {
    if (error instanceof Error && error.message.includes('NEXT_REDIRECT')) {
      throw error;
    }
    console.error('Login error:', error);
    return {
      success: false,
      message: 'خطای سرور رخ داده است',
      error: 'SERVER_ERROR',
    };
  }
}
