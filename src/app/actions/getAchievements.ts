'use server';

import { prisma } from '@/lib/prisma';
import { AchievementType } from '@/types/AchievementType';
import type { Achievement } from '@prisma/client';

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
  }));
}
