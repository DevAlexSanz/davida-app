import type { Product } from "@/types/Product";
import { getProducts } from "@/utils/api/services/product.service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useProducts = () => {
  const [tableOptions, setTableOptions] = useState<{
    page: number;
    items_per_page: number;
  }>({
    page: 1,
    items_per_page: 25,
  });

  const {
    data: products,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { products, isLoading, isError, error, refetch, setTableOptions };
};
