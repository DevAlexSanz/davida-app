import type { Status } from "./Status";

export interface Category {
  id: string;
  name: string;
  description: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}

export type CreateCategory = {
  name: string;
  description?: string;
};

export type UpdateCategory = {
  name: string;
  description?: string;
  status: Status;
};
