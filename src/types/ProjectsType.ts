export type ProjectsType = {
  id: number;
  name: string;
  description: string;
  requesterName?: string | null;
  technologies: string; // the display label (joined by " | ")
  year: string;
  viewCount: string;
  projectLink?: string | null;
  photo: string;
  category: string;
};

export type AdminProject = {
  id: number;
  name: string;
  description: string;
  requesterName: string | null;
  technologies: string[];
  year: number;
  viewCount: number;
  projectLink: string | null;
  photos: string[];
  category: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export interface CreateProjectInput {
  name: string;
  description: string;
  year: number;
  category: string;
  projectLink: string | null;
  requesterName: string | null;
  technologies: string[];
  photos: string[];
}

export interface CreateProjectResponse {
  success: boolean;
  message: string;
  projectId?: number;
}

export interface UpdateProjectInput {
  id: number;
  name: string;
  description: string;
  year: number;
  category: string;
  projectLink: string | null;
  requesterName: string | null;
  technologies: string[];
  photos: string[];
}

export interface UpdateProjectResponse {
  success: boolean;
  message: string;
}
