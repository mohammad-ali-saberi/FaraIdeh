// Components
import AdminBlogsPageWrapper from '@/views/dashboard/admin/blogs/AdminBlogsPage';

// Actions
import { getAdminBlogs } from '@/app/actions/getAdminBlogs';

const BlogsPage = async () => {
  const blogs = await getAdminBlogs();

  return <AdminBlogsPageWrapper blogs={blogs} />;
};

export default BlogsPage;
