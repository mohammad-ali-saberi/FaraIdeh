'use server';

import { prisma } from '@/libs/prisma';
import { AchievementType } from '@/types/AchievementType';
import type { Achievement } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export async function getAchievements(): Promise<AchievementType[]> {
  const rows: Achievement[] = await prisma.achievement.findMany({
    orderBy: [{ year: 'desc' }, { createdAt: 'desc' }],
  });

  return rows.map((a) => ({
    id: a.id,
    photo: a.photo,
    title: a.title,
    description: a.description,
    year: a.year,
    createdAt: a.createdAt,
    updatedAt: a.updatedAt,
  }));
}

interface DeleteAchievementResult {
  success: boolean;
  message?: string;
}

export async function deleteAchievement(id: number): Promise<DeleteAchievementResult> {
  try {
    // Check if achievement exists
    const achievement = await prisma.achievement.findUnique({
      where: { id },
    });

    if (!achievement) {
      return {
        success: false,
        message: 'دستاورد مورد نظر یافت نشد',
      };
    }

    // Delete the achievement
    await prisma.achievement.delete({
      where: { id },
    });

    // Revalidate paths
    revalidatePath('/admin/achievement');
    revalidatePath('/about');

    return {
      success: true,
      message: 'دستاورد با موفقیت حذف شد',
    };
  } catch (error) {
    console.error('Error deleting achievement:', error);
    return {
      success: false,
      message: 'خطا در حذف دستاورد',
    };
  }
}

export async function getAchievementById(id: number): Promise<AchievementType | null> {
  try {
    const achievement = await prisma.achievement.findUnique({
      where: { id },
    });

    if (!achievement) {
      return null;
    }

    return {
      id: achievement.id,
      photo: achievement.photo,
      title: achievement.title,
      description: achievement.description,
      year: achievement.year,
      createdAt: achievement.createdAt,
      updatedAt: achievement.updatedAt,
    };
  } catch (error) {
    console.error('Error fetching achievement:', error);
    return null;
  }
}
