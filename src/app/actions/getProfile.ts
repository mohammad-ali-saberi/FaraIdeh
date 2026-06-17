'use server';

import { prisma } from '@/libs/prisma';
import { getAuthUser } from '@/libs/auth';

export async function getProfile() {
  const user = await getAuthUser();
  if (!user?.id) return null;

  return prisma.user.findUnique({
    where: { id: user.id },
    select: {
      id: true,
      username: true,
      email: true,
      fullName: true,
      photo: true,
      role: true,
      lastLogin: true,
    },
  });
}
