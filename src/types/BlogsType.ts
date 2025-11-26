// Blog Post (Output from database)
export interface BlogPost {
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
  labels: string; // JSON string from database
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

// Blog Post with parsed labels
export interface BlogPostWithLabels extends Omit<BlogPost, 'labels'> {
  labels: string[];
}

// Create Blog Input (for form submission)
export interface CreateBlogInput {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  featuredImage: string;
  readingTimeMinutes: number;
  labels: string[];
}

// Update Blog Input (all fields optional except id)
export interface UpdateBlogInput {
  id: number;
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  category?: string;
  author?: string;
  featuredImage?: string;
  readingTimeMinutes?: number;
  labels?: string[];
  published?: boolean;
}

// Query params
export interface GetBlogsParams {
  limit?: number;
  skip?: number;
  published?: boolean;
  category?: string;
}

// Server Action Response Types
export interface CreateBlogResponse {
  success: boolean;
  message: string;
  data?: {
    id: number;
    slug: string;
    title: string;
    published: boolean;
  };
}

export interface UpdateBlogResponse {
  success: boolean;
  message: string;
  data?: {
    id: number;
    slug: string;
    title: string;
    published: boolean;
  };
}

export interface GetBlogResponse {
  success: boolean;
  message: string;
  data: BlogPostWithLabels | null;
}
