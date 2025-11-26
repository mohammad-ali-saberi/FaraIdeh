'use server';

import { prisma } from '@/lib/prisma';
import { BlogPostWithLabels } from '@/types/BlogsType';

export async function getBlogBySlug(slug: string) {
  try {
    const blog = await prisma.blogs.findUnique({
      where: { slug },
    });

    if (!blog) {
      return {
        success: false,
        message: 'بلاگ مورد نظر یافت نشد',
        data: null,
      };
    }

    // Parse labels from JSON
    const parsedBlog: BlogPostWithLabels = {
      ...blog,
      labels: Array.isArray(blog.labels) ? blog.labels : JSON.parse(blog.labels as string),
    };

    return {
      success: true,
      message: 'بلاگ با موفقیت دریافت شد',
      data: parsedBlog,
    };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return {
      success: false,
      message: 'خطا در دریافت اطلاعات بلاگ',
      data: null,
    };
  }
}
