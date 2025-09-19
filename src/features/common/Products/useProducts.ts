import type { Product } from "@/types/Product";
import { getProducts } from "@/utils/api/services/product.service";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
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

  return { products, isLoading, isError, error, refetch };
};
