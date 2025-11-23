export type TeamMemberType = {
  id: number;
  fullName: string;
  photo: string;
  jobTitles: string[];
  githubLink?: string | null;
  linkedinLink?: string | null;
  instagramLink?: string | null;
  resumeFile: string;
};
