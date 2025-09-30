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
import {
  type CategoryCreateManyInput,
  CreateManyCategoriesSchema,
} from "./CategoryFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const CreateCategoriesForm = () => {
  const form = useForm<CategoryCreateManyInput>({
    resolver: zodResolver(CreateManyCategoriesSchema),
    defaultValues: {
      categories: [
        {
          name: "",
          description: "",
        },
      ],
    },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "categories",
  });

  const handleAppend = async () => {
    const lastCategory = fields.length - 1;

    const isValid = await form.trigger(`categories.${lastCategory}.name`);

    if (isValid) {
      append({ name: "", description: "" });
    }
  };

  return (
    <DialogContent className="max-w-7xl">
      <DialogHeader>
        <DialogTitle>Create Categories</DialogTitle>
        <DialogDescription>
          Puedes crear más de una categoría a la vez
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => console.log(values))}
          className="space-y-8"
        >
          <div className="space-y-4">
            {fields.map((field, index) => (
              <div key={field.id} className="border p-4 rounded-md space-y-8">
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
            <Button type="button" variant="secondary" onClick={handleAppend}>
              + Agregar categoría
            </Button>
            <Button type="submit">Guardar</Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
};

export { CreateCategoriesForm };
