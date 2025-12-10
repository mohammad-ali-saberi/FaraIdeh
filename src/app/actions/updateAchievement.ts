'use server';

import { prisma } from '@/lib/prisma';
import { UpdateAchievementInput, UpdateAchievementResponse } from '@/types/AchievementType';
import { revalidatePath } from 'next/cache';

export async function updateAchievement(
  data: UpdateAchievementInput,
): Promise<UpdateAchievementResponse> {
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
    const currentJalaliYear = currentGregorianYear - 621;

    const isValidJalaliYear = data.year >= 1300 && data.year <= currentJalaliYear + 10;
    const isValidGregorianYear = data.year >= 1900 && data.year <= currentGregorianYear + 10;

    if (!isValidJalaliYear && !isValidGregorianYear) {
      return {
        success: false,
        message: 'سال وارد شده معتبر نیست',
      };
    }

    // Check if achievement exists
    const existingAchievement = await prisma.achievement.findUnique({
      where: { id: data.id },
    });

    if (!existingAchievement) {
      return {
        success: false,
        message: 'دستاورد مورد نظر یافت نشد',
      };
    }

    // Update achievement
    await prisma.achievement.update({
      where: { id: data.id },
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
      message: 'دستاورد با موفقیت به‌روزرسانی شد',
    };
  } catch (error) {
    console.error('Error updating achievement:', error);
    return {
      success: false,
      message: 'خطایی در به‌روزرسانی دستاورد رخ داد. لطفاً دوباره تلاش کنید.',
    };
  }
}
