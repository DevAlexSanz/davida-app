import moment from "moment";
import { useMemo } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Category } from "@/types/Category";
import type { CategoryUpdateInput } from "../CategoryForm/CategoryFormSchema";

export const CategoryColumns = ({
  handleEdit,
}: {
  handleEdit: (category: CategoryUpdateInput) => void;
}) => {
  const columns = useMemo<ColumnDef<Category>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "description",
        header: "Description",
      },
      {
        accessorKey: "createdAt",
        header: "Created",
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
                onClick={() => handleEdit(row.original)}
              >
                Edit
              </button>
              <button className="text-red-600">Delete</button>
            </div>
          );
        },
      },
    ],
    [handleEdit]
  );

  return columns;
};
