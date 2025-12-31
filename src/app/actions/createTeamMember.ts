'use server';

import { prisma } from '@/libs/prisma';
import { CreateTeamMemberInput, CreateTeamMemberResponse } from '@/types/TeamMemberType';
import { revalidatePath } from 'next/cache';

export async function createTeamMember(
  data: CreateTeamMemberInput,
): Promise<CreateTeamMemberResponse> {
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

    // Create team member
    const teamMember = await prisma.teamMember.create({
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
      message: 'عضو تیم با موفقیت ایجاد شد',
      data: {
        id: teamMember.id,
      },
    };
  } catch (error) {
    console.error('Error creating team member:', error);
    return {
      success: false,
      message: 'خطا در ایجاد عضو تیم',
    };
  }
}
