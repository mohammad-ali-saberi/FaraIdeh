'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function deleteTeamMember(id: number) {
  try {
    await prisma.teamMember.delete({
      where: { id },
    });

    revalidatePath('/admin/ourteam');
    revalidatePath('/about');

    return {
      success: true,
      message: 'عضو تیم با موفقیت حذف شد',
    };
  } catch (error) {
    console.error('Error deleting team member:', error);
    return {
      success: false,
      message: 'خطا در حذف عضو تیم',
    };
  }
}
