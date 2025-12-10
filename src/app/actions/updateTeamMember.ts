'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { UpdateTeamMemberInput, UpdateTeamMemberResponse } from '@/types/TeamMemberType';

export async function updateTeamMember(
  data: UpdateTeamMemberInput,
): Promise<UpdateTeamMemberResponse> {
  try {
    // Validation
    if (!data.photo || !data.photo.trim()) {
      return {
        success: false,
        message: 'لینک عکس الزامی است',
      };
    }

    if (!data.firstName || !data.firstName.trim()) {
      return {
        success: false,
        message: 'نام الزامی است',
      };
    }

    if (!data.lastName || !data.lastName.trim()) {
      return {
        success: false,
        message: 'نام خانوادگی الزامی است',
      };
    }

    if (!data.jobTitles || data.jobTitles.length === 0) {
      return {
        success: false,
        message: 'حداقل یک عنوان شغلی الزامی است',
      };
    }

    // Check if team member exists
    const existingMember = await prisma.teamMember.findUnique({
      where: { id: data.id },
    });

    if (!existingMember) {
      return {
        success: false,
        message: 'عضو تیم یافت نشد',
      };
    }

    // Update team member
    await prisma.teamMember.update({
      where: { id: data.id },
      data: {
        photo: data.photo.trim(),
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        jobTitles: data.jobTitles,
        githubLink: data.githubLink?.trim() || null,
        linkedinLink: data.linkedinLink?.trim() || null,
        instagramLink: data.instagramLink?.trim() || null,
        resumeFile: data.resumeFile?.trim() || null,
      },
    });

    // Revalidate pages
    revalidatePath('/admin/ourteam');
    revalidatePath('/about');

    return {
      success: true,
      message: 'اطلاعات عضو تیم با موفقیت به‌روزرسانی شد',
    };
  } catch (error) {
    console.error('Error updating team member:', error);
    return {
      success: false,
      message: 'خطا در به‌روزرسانی اطلاعات عضو تیم',
    };
  }
}
