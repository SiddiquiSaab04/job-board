export type Job  = {
  title: string;
  description: string;
  salary: string;
  location: string;
  company: string;
  postedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}