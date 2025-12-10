import { notFound } from 'next/navigation';

// Components
import EditBlogsPageWrapper from '@/views/dashboard/admin/blogs/edit/EditBlogPage';

// Actions
import { getBlogBySlug } from '@/app/actions/getBlogBySlugAdmin';
import { updateBlog } from '@/app/actions/updateBlog';

interface EditBlogsPageProps {
  params: {
    slug: string;
  };
}

const EditBlogsPage = async ({ params }: EditBlogsPageProps) => {
  const { slug } = params;

  // Fetch blog data
  const result = await getBlogBySlug(slug);

  if (!result.success || !result.data) {
    notFound();
  }

  return <EditBlogsPageWrapper blog={result.data} updateBlogAction={updateBlog} />;
};

export default EditBlogsPage;
