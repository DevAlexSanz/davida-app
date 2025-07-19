export type Pharmacy = {
  id: string;
  name: string;
  description: string;
  profilePhoto: string;
  coverPhoto: string;
  address: string;
  phone: string;
  email: string;
  status: "ACTIVE" | "INACTIVE" | "DELETED";
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};
