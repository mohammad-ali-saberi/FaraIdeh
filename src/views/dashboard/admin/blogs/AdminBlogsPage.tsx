'use client';

// Components
import BlogsList from './BlogsList';

// Types
import { AdminBlog } from '@/types/AdminBlogType';

interface AdminBlogsPageWrapperProps {
  blogs: AdminBlog[];
}

const AdminBlogsPageWrapper = ({ blogs }: AdminBlogsPageWrapperProps) => {
  return <BlogsList blogs={blogs} />;
};

export default AdminBlogsPageWrapper;
