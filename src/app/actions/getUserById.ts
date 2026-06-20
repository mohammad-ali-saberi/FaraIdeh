'use server';

import { prisma } from '@/libs/prisma';
import { UserType } from '@/types/UsersType';

export async function getUserById(id: number): Promise<UserType | null> {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) return null;

  return user as UserType;
}
