export type UserType = {
  id: number;
  username: string;
  email?: string | null;
  fullName: string;
  photo?: string | null;
  role: string;
  isActive: boolean;
  isProtected: boolean;
  lastLogin?: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

export interface UpdateProfileData {
  fullName: string;
  username: string;
  email?: string;
  photo?: string;
  password?: string;
}

export interface UpdateProfileResult {
  success: boolean;
  message: string;
}
