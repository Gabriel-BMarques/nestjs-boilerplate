export interface User {
  readonly id: string;

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  document?: string;
  insertedAt: Date;
  updatedAt: Date;
}
