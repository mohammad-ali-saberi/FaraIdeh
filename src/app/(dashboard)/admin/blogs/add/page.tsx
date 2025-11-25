// Components
import AddBlogsPageWrapper from '@/views/dashboard/admin/blogs/add/_addblogspage';

// Actions
import { createBlog } from '@/app/actions/createBlog';

const AddBlogsPage = async () => {
  return <AddBlogsPageWrapper createBlogAction={createBlog} />;
};

export default AddBlogsPage;
