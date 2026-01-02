'use server';

import { prisma } from '@/libs/prisma';
import { AdminBlog } from '@/types/AdminBlogType';

export async function getAdminBlogs(): Promise<AdminBlog[]> {
  try {
    const blogs = await prisma.blogs.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    const formattedBlogs: AdminBlog[] = blogs.map((blog) => ({
      id: blog.id,
      slug: blog.slug,
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      contentType: blog.contentType,
      published: blog.published,
      category: blog.category,
      author: blog.author,
      featuredImage: blog.featuredImage,
      readingTimeMinutes: blog.readingTimeMinutes,
      labels: typeof blog.labels === 'string' ? JSON.parse(blog.labels) : blog.labels,
      views: blog.views,
      createdAt: blog.createdAt,
      updatedAt: blog.updatedAt,
    }));

    return formattedBlogs;
  } catch (error) {
    console.error('Error fetching admin blogs:', error);
    return [];
  }
}
