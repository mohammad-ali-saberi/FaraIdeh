// Components
import BlogsPageWrapper from '@/views/dashboard/admin/blogs/_blogspage';

// Actions
import { getAdminBlogs } from '@/app/actions/getAdminBlogs';

const BlogsPage = async () => {
  const blogs = await getAdminBlogs();

  return <BlogsPageWrapper blogs={blogs} />;
};

export default BlogsPage;
