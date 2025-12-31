'use server';

import { prisma } from '@/libs/prisma';
import { CreateProjectInput, CreateProjectResponse } from '@/types/ProjectsType';
import { revalidatePath } from 'next/cache';

export async function createProject(data: CreateProjectInput): Promise<CreateProjectResponse> {
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

    // Create project
    const project = await prisma.project.create({
      data: {
        name: data.name,
        description: data.description,
        year: data.year,
        category: data.category,
        projectLink: data.projectLink || null,
        requesterName: data.requesterName || null,
        technologies: data.technologies,
        photos: data.photos,
        isActive: true,
        viewCount: 0,
      },
    });

    // Revalidate paths
    revalidatePath('/admin/projects');
    revalidatePath('/projects');

    return {
      success: true,
      message: 'پروژه با موفقیت ایجاد شد',
      projectId: project.id,
    };
  } catch (error) {
    console.error('Error creating project:', error);
    return {
      success: false,
      message: 'خطا در ایجاد پروژه. لطفاً دوباره تلاش کنید.',
    };
  }
}
