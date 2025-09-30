import type { Category } from "@/types/Category";
import { getCategories } from "@/utils/api/services/category.service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useCategories = () => {
  const [tableOptions, setTableOptions] = useState<{
    page: number;
    items_per_page: number;
  }>({
    page: 1,
    items_per_page: 25,
  });

  const {
    data: categories,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { categories, isLoading, isError, error, refetch, setTableOptions };
};
