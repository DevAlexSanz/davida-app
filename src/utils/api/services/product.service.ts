import type { Product } from "@/types/Product";
import { axiosInstance } from "../instances/api.instance";

export const getProducts = async () => {
  try {
    return (await axiosInstance.get<SqlResponseArray<Product>>("/products"))
      .data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
