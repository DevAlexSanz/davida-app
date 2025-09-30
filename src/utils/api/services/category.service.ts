import type { Category, CreateCategory } from "@/types/Category";
import { axiosInstance } from "../instances/api.instance";

export const getCategories = async () => {
  try {
    return (await axiosInstance.get<SqlResponseArray<Category>>("/categories"))
      .data.records;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const createCategories = async (categories: CreateCategory[]) => {
  try {
    return (
      await axiosInstance.get<BaseSqlResponse>("/categories", {
        data: categories,
      })
    ).data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
