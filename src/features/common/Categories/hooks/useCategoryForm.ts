import { useState } from "react";

import type { CategoryUpdateInput } from "../components/CategoryForm/CategoryFormSchema";

export const useCategoryForm = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<"create" | "update">("create");
  const [categoryToUpdate, setCategoryToUpdate] =
    useState<CategoryUpdateInput | null>(null);

  const handleCreate = () => {
    setFormMode("create");

    setCategoryToUpdate(null);

    setModalOpen(true);
  };

  const handleEdit = (category: CategoryUpdateInput) => {
    setFormMode("update");

    setCategoryToUpdate({
      name: category.name,
      description: category.description,
      status: category.status,
    });

    setModalOpen(true);
  };

  return {
    modalOpen,
    setModalOpen,
    formMode,
    categoryToUpdate,
    handleCreate,
    handleEdit,
  };
};
