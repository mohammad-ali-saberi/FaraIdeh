export type User = {
  id: number;
  username: string;
  email?: string | null;
  fullName: string;
  photo?: string | null;
  role: string;
  lastLogin?: Date | null;
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
