import { Plus } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCategoryForm } from "../hooks/useCategoryForm";
import { PageHeader } from "@/components/shared/PageHeader";
import { CategoryForm } from "../components/CategoryForm/CategorForm";
import { CategoriesTable } from "../components/CategoriesTable/CategoriesTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchCategories } from "../components/CategoryFilters/SearchCategories";

const Categories = () => {
  const {
    modalOpen,
    setModalOpen,
    handleCreate,
    handleEdit,
    categoryToUpdate,
    formMode,
  } = useCategoryForm();

  return (
    <>
      <PageHeader
        title="Categories"
        description="Manage your product categories and organize your inventory efficiently"
      />

      <Card>
        <CardHeader>
          <div className="flex flex-row items-center justify-between gap-4">
            <CardTitle className="text-2xl font-bold">
              Category Management
            </CardTitle>

            <Button
              className="bg-primary hover:bg-primary/90"
              onClick={handleCreate}
            >
              <Plus className="h-4 w-4" />
              <span className="hidden md:inline">Add</span>
            </Button>
          </div>

          <div className="flex flex-row gap-4 mt-4">
            <SearchCategories />
          </div>
        </CardHeader>

        <CardContent>
          <CategoriesTable handleEdit={handleEdit} />
        </CardContent>
      </Card>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <CategoryForm categoryToUpdate={categoryToUpdate} formMode={formMode} />
      </Dialog>
    </>
  );
};

export { Categories };
