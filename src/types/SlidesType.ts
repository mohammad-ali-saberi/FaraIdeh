// Full slider type for admin panel
export type Slide = {
  id: number;
  photo: string;
  caption: string | null;
  linkUrl: string | null;
  sortOrder: number;
  isActive: boolean;
};

// Minimal slider type for public display
export type SlidePublic = {
  id: number;
  photo: string;
  caption: string | null;
};
