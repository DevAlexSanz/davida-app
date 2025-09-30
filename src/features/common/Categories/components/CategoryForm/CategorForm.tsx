"use client";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type CategoryCreateManyInput,
  type CategoryUpdateInput,
  CreateManyCategoriesSchema,
  UpdateCategorySchema,
} from "./CategoryFormSchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";

interface Props {
  categoryToUpdate: CategoryUpdateInput | null;
  formMode: "create" | "update";
}

const status = [
  { name: "Active", value: "ACTIVE" },
  { name: "Inactive", value: "INACTIVE" },
  { name: "Deleted", value: "DELETED" },
];

const CategoryForm = ({ categoryToUpdate, formMode }: Props) => {
  const form = useForm<CategoryCreateManyInput | CategoryUpdateInput>({
    resolver: zodResolver(
      formMode === "create" ? CreateManyCategoriesSchema : UpdateCategorySchema
    ),
    defaultValues:
      formMode === "create"
        ? { categories: [{ name: "", description: "" }] }
        : { name: "", description: "", status: "ACTIVE" },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "categories",
  });

  useEffect(() => {
    if (formMode === "update" && categoryToUpdate) {
      form.reset({
        name: categoryToUpdate.name,
        description: categoryToUpdate.description,
        status: categoryToUpdate.status,
      });
    }
  }, [categoryToUpdate, formMode, form]);

  const handleAppend = async () => {
    const lastIndex = fields.length - 1;

    const isValid = await form.trigger(`categories.${lastIndex}.name`);

    if (isValid) {
      append({ name: "", description: "" });
    }
  };

  return (
    <DialogContent className={formMode === "create" ? "max-w-7xl" : ""}>
      <DialogHeader>
        <DialogTitle>
          {formMode === "create" ? "Create Categories" : "Update Category"}
        </DialogTitle>
        <DialogDescription>
          {formMode === "create"
            ? "Puedes crear más de una categoría a la vez"
            : "Actualiza la categoría"}
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => console.log(values))}
          className="space-y-8"
        >
          {formMode === "create" && (
            <>
              <div className="space-y-4">
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="border p-4 rounded-md space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name={`categories.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nombre de la categoría"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`categories.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Descripción</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Descripción (opcional)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {fields.length > 1 && (
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => remove(index)}
                      >
                        Eliminar
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleAppend}
                >
                  + Agregar categoría
                </Button>
                <Button type="submit">Guardar</Button>
              </div>
            </>
          )}

          {formMode === "update" && (
            <>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre de la categoría" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Input placeholder="Descripción (opcional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {status.map(({ name, value }) => (
                          <SelectItem key={value} value={value}>
                            {name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Guardar</Button>
            </>
          )}
        </form>
      </Form>
    </DialogContent>
  );
};

export { CategoryForm };
