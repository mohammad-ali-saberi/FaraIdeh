'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export interface CreateAchievementInput {
  photo: string;
  title: string;
  description: string;
  year: number;
}

export interface CreateAchievementResponse {
  success: boolean;
  message: string;
  data?: {
    id: number;
  };
}

export async function createAchievement(
  data: CreateAchievementInput,
): Promise<CreateAchievementResponse> {
  try {
    // Validation
    if (!data.photo || !data.title || !data.description || !data.year) {
      return {
        success: false,
        message: 'لطفاً تمام فیلدهای الزامی را پر کنید',
      };
    }

    // Validate year (supports both Jalali and Gregorian)
    const currentGregorianYear = new Date().getFullYear();
    const currentJalaliYear = currentGregorianYear - 621; // Approximate conversion

    // Check if it's a valid Jalali year (1300-1450) or Gregorian year (1900-2050)
    const isValidJalaliYear = data.year >= 1300 && data.year <= currentJalaliYear + 10;
    const isValidGregorianYear = data.year >= 1900 && data.year <= currentGregorianYear + 10;

    if (!isValidJalaliYear && !isValidGregorianYear) {
      return {
        success: false,
        message:
          'سال وارد شده معتبر نیست (شمسی: 1300-' +
          (currentJalaliYear + 10) +
          ' یا میلادی: 1900-' +
          (currentGregorianYear + 10) +
          ')',
      };
    }

    // Create achievement
    const achievement = await prisma.achievement.create({
      data: {
        photo: data.photo,
        title: data.title,
        description: data.description,
        year: data.year,
      },
    });

    // Revalidate cache
    revalidatePath('/admin/achievement');
    revalidatePath('/about');

    return {
      success: true,
      message: 'دستاورد با موفقیت ثبت شد',
      data: {
        id: achievement.id,
      },
    };
  } catch (error) {
    console.error('Error creating achievement:', error);
    return {
      success: false,
      message: 'خطایی در ثبت دستاورد رخ داد. لطفاً دوباره تلاش کنید.',
    };
  }
}
