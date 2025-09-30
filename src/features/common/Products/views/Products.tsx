import { PageHeader } from "@/components/shared/PageHeader";
import { ProductsTable } from "../components/ProductsTable/ProductsTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SearchProducts } from "../components/ProductFilters/SearchProducts";
import { CategoryFilter } from "../components/ProductFilters/CategoryFilter";
import { StatusFilter } from "../components/ProductFilters/StatusFilter";

export const Products = () => {
  return (
    <>
      <PageHeader title="Inventory" description="Manage your products" />

      <Card>
        <CardHeader>
          <div className="flex flex-row items-center justify-between gap-4">
            <CardTitle className="text-2xl font-bold">
              Product Catalog
            </CardTitle>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4" />
              <span className="hidden md:inline">Add Product</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
            <div className="lg:col-span-8">
              <SearchProducts />
            </div>

            <div className="lg:col-span-2">
              <CategoryFilter />
            </div>

            <div className="lg:col-span-2">
              <StatusFilter />
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <ProductsTable />
        </CardContent>
      </Card>
    </>
  );
};
