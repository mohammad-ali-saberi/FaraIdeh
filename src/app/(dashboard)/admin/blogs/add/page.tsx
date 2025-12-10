// Components
import AddBlogsPageWrapper from '@/views/dashboard/admin/blogs/add/AddBlogPage';

// Actions
import { createBlog } from '@/app/actions/createBlog';

const AddBlogsPage = async () => {
  return <AddBlogsPageWrapper createBlogAction={createBlog} />;
};

export default AddBlogsPage;
