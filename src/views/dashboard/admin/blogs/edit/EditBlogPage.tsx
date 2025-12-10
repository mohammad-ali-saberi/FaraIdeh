'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
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
