import moment from "moment";
import { useMemo } from "react";
import type { Product } from "@/types/Product";
import type { ColumnDef } from "@tanstack/react-table";

export const useProductColumns = ({
  onEditProduct,
  onDeleteProduct,
}: {
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (product: Product) => void;
}) => {
  const columns = useMemo<ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Product Name",
      },
      {
        accessorKey: "activeIngredient",
        header: "Active Ingredient",
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: ({ getValue }) => !getValue() && "N/A",
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: ({ getValue }) => `$${getValue<number>().toFixed(2)}`,
      },
      {
        accessorKey: "stock",
        header: "Stock",
      },
      {
        accessorKey: "prescription",
        header: "Prescription",
        cell: ({ getValue }) =>
          getValue<boolean>() ? (
            <span className="text-green-600 font-semibold">Yes</span>
          ) : (
            <span className="text-gray-500">No</span>
          ),
      },
      {
        accessorKey: "expirationDate",
        header: "Expiration",
        cell: ({ getValue }) => moment(getValue<string>()).format("lll"),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => {
          const status = getValue<string>();
          return (
            <span
              className={`px-2 py-1 rounded text-white text-xs ${
                status === "ACTIVE"
                  ? "bg-green-600"
                  : status === "INACTIVE"
                  ? "bg-red-600"
                  : "bg-gray-500"
              }`}
            >
              {status}
            </span>
          );
        },
      },
      {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => {
          return (
            <div className="flex gap-2">
              <button
                className="text-accent"
                onClick={() => onEditProduct(row.original)}
              >
                Edit
              </button>
              <button
                className="text-red-600"
                onClick={() => onDeleteProduct(row.original)}
              >
                Delete
              </button>
            </div>
          );
        },
      },
    ],
    [onEditProduct, onDeleteProduct]
  );

  return columns;
};
