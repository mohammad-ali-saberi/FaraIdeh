'use client';

// Components
import AddBlogForm from './AddBlogForm';

// Types
import { CreateBlogInput, CreateBlogResponse } from '@/types/BlogsType';

interface AddBlogsPageWrapperProps {
  createBlogAction: (data: CreateBlogInput) => Promise<CreateBlogResponse>;
}

const AddBlogsPageWrapper = ({ createBlogAction }: AddBlogsPageWrapperProps) => {
  return <AddBlogForm createBlogAction={createBlogAction} />;
};

export default AddBlogsPageWrapper;
