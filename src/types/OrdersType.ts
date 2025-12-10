export interface OrderUser {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
}

export interface Order {
  id: number;
  category: string;
  users: OrderUser[];
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
