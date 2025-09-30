import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useProductColumns } from "./ProductColumns";
import { useProducts } from "../../hooks/useProducts";
import type { Product } from "@/types/Product";
import { toast } from "react-hot-toast";

const ProductsTable = () => {
  const { products, isLoading, isError, refetch } = useProducts();

  const onEditProduct = (product: Product) => {
    toast.success("Editing");

    console.log(product);
  };

  const onDeleteProduct = (product: Product) => {
    toast.success("Deleting");
    
    console.log(product);
  };

  const columns = useProductColumns({ onEditProduct, onDeleteProduct });

  const table = useReactTable({
    data: products ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {isLoading ? (
        <p className="text-center py-4">Loading...</p>
      ) : isError ? (
        <div className="text-center py-4 text-red-600">
          <p>Error loading products.</p>
          <Button onClick={() => refetch()} className="mt-2">
            Retry
          </Button>
        </div>
      ) : (
        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
};

export { ProductsTable };
