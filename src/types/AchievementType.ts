export interface AchievementType {
  id: number;
  photo: string;
  title: string;
  description: string;
  year: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateAchievementInput {
  photo: string;
  title: string;
  description: string;
  year: number;
}

export interface CreateAchievementResponse {
  success: boolean;
  message: string;
  data?: {
    id: number;
  };
}

export interface UpdateAchievementInput {
  id: number;
  photo: string;
  title: string;
  description: string;
  year: number;
}

export interface UpdateAchievementResponse {
  success: boolean;
  message: string;
}
