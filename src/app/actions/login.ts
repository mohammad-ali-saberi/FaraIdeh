'use server';

import { comparePassword, createToken, setAuthCookie } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

interface LoginResponse {
  success: boolean;
  message: string;
  error?: string;
}

export async function loginUser(username: string, password: string): Promise<LoginResponse> {
  try {
    // Validate input
    if (!username || !password) {
      return {
        success: false,
        message: 'فیلدهای نام کاربری و رمز عبور الزامی است',
        error: 'INVALID_INPUT',
      };
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return {
        success: false,
        message: 'نام کاربری یا رمز عبور اشتباه است',
        error: 'INVALID_CREDENTIALS',
      };
    }

    // Check if user is active
    if (!user.isActive) {
      return {
        success: false,
        message: 'حساب کاربری شما غیرفعال است',
        error: 'USER_INACTIVE',
      };
    }

    // Verify password
    const passwordMatch = await comparePassword(password, user.password);

    if (!passwordMatch) {
      return {
        success: false,
        message: 'نام کاربری یا رمز عبور اشتباه است',
        error: 'INVALID_CREDENTIALS',
      };
    }

    // Create JWT token
    const token = await createToken({
      id: user.id,
      username: user.username,
      role: user.role,
    });

    // Set auth cookie
    await setAuthCookie(token);

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    // Redirect after successful login
    redirect('/admin/dashboard');
  } catch (error) {
    // Re-throw redirect errors
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
