'use server';

import { prisma } from '@/libs/prisma';
import { UpdateBlogInput, UpdateBlogResponse } from '@/types/BlogsType';
import { revalidatePath } from 'next/cache';

export async function updateBlog(data: UpdateBlogInput): Promise<UpdateBlogResponse> {
  try {
    // Check if blog exists
    const existingBlog = await prisma.blogs.findUnique({
      where: { id: data.id },
    });

    if (!existingBlog) {
      return {
        success: false,
        message: 'بلاگ مورد نظر یافت نشد',
      };
    }

    // Check if slug is being changed and if new slug already exists
    if (data.slug && data.slug !== existingBlog.slug) {
      const slugExists = await prisma.blogs.findUnique({
        where: { slug: data.slug },
      });

      if (slugExists) {
        return {
          success: false,
          message: 'این Slug قبلاً استفاده شده است. لطفاً یک Slug دیگر انتخاب کنید.',
        };
      }
    }

    // Update blog
    const updatedBlog = await prisma.blogs.update({
      where: { id: data.id },
      data: {
        ...(data.title && { title: data.title }),
        ...(data.slug && { slug: data.slug }),
        ...(data.excerpt && { excerpt: data.excerpt }),
        ...(data.content && { content: data.content }),
        ...(data.category && { category: data.category }),
        ...(data.author && { author: data.author }),
        ...(data.featuredImage && { featuredImage: data.featuredImage }),
        ...(data.readingTimeMinutes && { readingTimeMinutes: data.readingTimeMinutes }),
        ...(data.labels && { labels: data.labels }),
        ...(typeof data.published === 'boolean' && { published: data.published }),
      },
    });

    // Revalidate related pages
    revalidatePath('/admin/blogs');
    revalidatePath('/blogs');
    revalidatePath(`/blogs/${updatedBlog.slug}`);

    return {
      success: true,
      message: 'بلاگ با موفقیت به‌روزرسانی شد!',
      data: {
        id: updatedBlog.id,
        slug: updatedBlog.slug,
        title: updatedBlog.title,
        published: updatedBlog.published,
      },
    };
  } catch (error) {
    console.error('Error updating blog:', error);
    return {
      success: false,
      message: 'خطایی در به‌روزرسانی بلاگ رخ داد. لطفاً دوباره تلاش کنید.',
    };
  }
}
