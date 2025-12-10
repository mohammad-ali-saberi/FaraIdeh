export interface Feedback {
  id: number;
  firstName: string;
  lastName: string;
  phone: string | null;
  email: string | null;
  message: string;
  createdAt: Date;
}
