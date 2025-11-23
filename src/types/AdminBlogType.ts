export interface AdminBlog {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  contentType: string;
  published: boolean;
  category: string;
  author: string;
  featuredImage: string | null;
  readingTimeMinutes: number;
  labels: string[];
  views: number;
  createdAt: Date;
  updatedAt: Date;
}
