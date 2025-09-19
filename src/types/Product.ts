export interface Product {
  id: string;
  name: string;
  description: string;
  activeIngredient: string;
  code: string;
  manufacturer: string;
  form: string;
  image: string;
  requiresPrescription: boolean;
  stock: number;
  price: number;
  discount: number;
  status: string;
  expirationDate: string;
  batchNumber: string;
  createdAt: string;
  updatedAt: string;
  pharmacyId: string;
  categoryId: string;
}
