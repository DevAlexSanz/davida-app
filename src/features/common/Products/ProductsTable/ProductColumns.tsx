import type { Product } from "@/types/Product";
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";

export const columns: ColumnDef<Product>[] = [
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
            status === "active"
              ? "bg-green-600"
              : status === "inactive"
              ? "bg-red-600"
              : "bg-gray-500"
          }`}
        >
          {status}
        </span>
      );
    },
  },
];
