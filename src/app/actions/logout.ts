'use server';

import { removeAuthCookie } from '@/libs/auth';
import { redirect } from 'next/navigation';

export async function logoutUser(): Promise<void> {
  await removeAuthCookie();
  redirect('/login');
}
