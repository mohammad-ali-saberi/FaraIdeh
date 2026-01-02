'use client';

// Components
import Footer from '@/components/dashboard/Footer';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import EditBlogForm from './EditBlogForm';

// Types
import { BlogPostWithLabels, UpdateBlogInput, UpdateBlogResponse } from '@/types/BlogsType';

interface EditBlogsPageWrapperProps {
  blog: BlogPostWithLabels;
  updateBlogAction: (data: UpdateBlogInput) => Promise<UpdateBlogResponse>;
}

const EditBlogsPageWrapper = ({ blog, updateBlogAction }: EditBlogsPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <EditBlogForm blog={blog} updateBlogAction={updateBlogAction} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default EditBlogsPageWrapper;
