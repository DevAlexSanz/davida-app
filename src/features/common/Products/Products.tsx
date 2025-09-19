import { PageHeader } from "@/components/shared/PageHeader";
import { ProductsTable } from "./ProductsTable/ProductsTable";

export const Products = () => {
  return (
    <>
      <PageHeader title="Products" description="Manage your products" />

      <ProductsTable />
    </>
  );
};
