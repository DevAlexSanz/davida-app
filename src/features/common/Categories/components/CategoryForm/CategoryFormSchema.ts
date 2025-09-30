import z from "zod";

const CategorySchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  description: z.string().optional(),
});

export const CreateManyCategoriesSchema = z.object({
  categories: z
    .array(CategorySchema)
    .min(1, "Debes agregar al menos una categoría"),
});

export const UpdateCategorySchema = CategorySchema.extend({
  status: z.enum(["ACTIVE", "INACTIVE", "DELETED"]),
});

export type CategoryCreateManyInput = z.infer<
  typeof CreateManyCategoriesSchema
>;
export type CategoryUpdateInput = z.infer<typeof UpdateCategorySchema>;
