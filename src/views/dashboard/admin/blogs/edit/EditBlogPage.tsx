'use client';

// Components
import EditBlogForm from './EditBlogForm';

// Types
import { BlogPostWithLabels, UpdateBlogInput, UpdateBlogResponse } from '@/types/BlogsType';

interface EditBlogsPageWrapperProps {
  blog: BlogPostWithLabels;
  updateBlogAction: (data: UpdateBlogInput) => Promise<UpdateBlogResponse>;
}

const EditBlogsPageWrapper = ({ blog, updateBlogAction }: EditBlogsPageWrapperProps) => {
  return <EditBlogForm blog={blog} updateBlogAction={updateBlogAction} />;
};

export default EditBlogsPageWrapper;
