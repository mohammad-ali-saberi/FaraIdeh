export type TeamMemberType = {
  id: number;
  fullName: string;
  photo: string;
  jobTitles: string[];
  githubLink?: string | null;
  linkedinLink?: string | null;
  instagramLink?: string | null;
  resumeFile?: string | null;
};

export interface CreateTeamMemberInput {
  photo: string;
  firstName: string;
  lastName: string;
  jobTitles: string[];
  githubLink?: string | null;
  linkedinLink?: string | null;
  instagramLink?: string | null;
  resumeFile?: string | null;
}

export interface CreateTeamMemberResponse {
  success: boolean;
  message: string;
  data?: {
    id: number;
  };
}
