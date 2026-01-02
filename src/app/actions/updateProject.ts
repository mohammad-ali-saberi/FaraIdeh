'use server';

import { prisma } from '@/libs/prisma';
import { UpdateProjectInput, UpdateProjectResponse } from '@/types/ProjectsType';
import { revalidatePath } from 'next/cache';

export async function updateProject(data: UpdateProjectInput): Promise<UpdateProjectResponse> {
  try {
    // Validation
    if (!data.name || !data.description || !data.category) {
      return {
        success: false,
        message: 'لطفاً تمام فیلدهای الزامی را پر کنید',
      };
    }

    if (data.technologies.length === 0) {
      return {
        success: false,
        message: 'لطفاً حداقل یک تکنولوژی وارد کنید',
      };
    }

    if (data.photos.length === 0) {
      return {
        success: false,
        message: 'لطفاً حداقل یک عکس وارد کنید',
      };
    }

    // Check if project exists
    const existingProject = await prisma.project.findUnique({
      where: { id: data.id },
    });

    if (!existingProject) {
      return {
        success: false,
        message: 'پروژه مورد نظر یافت نشد',
      };
    }

    // Update project
    await prisma.project.update({
      where: { id: data.id },
      data: {
        name: data.name,
        description: data.description,
        year: data.year,
        category: data.category,
        projectLink: data.projectLink || null,
        requesterName: data.requesterName || null,
        technologies: data.technologies,
        photos: data.photos,
      },
    });

    // Revalidate paths
    revalidatePath('/admin/projects');
    revalidatePath('/projects');
    revalidatePath(`/admin/projects/edit/${data.id}`);

    return {
      success: true,
      message: 'پروژه با موفقیت به‌روزرسانی شد',
    };
  } catch (error) {
    console.error('Error updating project:', error);
    return {
      success: false,
      message: 'خطا در به‌روزرسانی پروژه. لطفاً دوباره تلاش کنید.',
    };
  }
}
