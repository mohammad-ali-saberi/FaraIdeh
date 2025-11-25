'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
import MainAddBlogs from './MainAddBlogs';

// Types
import { CreateBlogInput, CreateBlogResponse } from '@/types/BlogsType';

interface AddBlogsPageWrapperProps {
  createBlogAction: (data: CreateBlogInput) => Promise<CreateBlogResponse>;
}

const AddBlogsPageWrapper = ({ createBlogAction }: AddBlogsPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <MainAddBlogs createBlogAction={createBlogAction} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default AddBlogsPageWrapper;
