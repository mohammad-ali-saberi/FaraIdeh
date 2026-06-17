'use server';

import { prisma } from '@/libs/prisma';
import { UserType } from '@/types/UsersType';

export async function getUsers(): Promise<UserType[]> {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return users as UserType[];
}
