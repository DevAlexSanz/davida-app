import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/api/services/auth.service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/shadcn-io/spinner";

const formSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must be at most 100 characters"),
});

export const RegisterUser = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success(
        "Registration successful! Please check your email for the verification code."
      );

      navigate("/login");
    },
    onError: () => {
      toast.error("Registration failed. Please try again.");
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutate(data);
  };

  return (
    <Card className="w-full max-w-sm rounded-lg backdrop-blur">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{t("register.user.title")}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {t("register.user.subtitle")}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("register.textfield.email")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="m@example.com"
                      type="email"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("register.textfield.password")}</FormLabel>
                  <FormControl>
                    <Input type="password" autoComplete="off" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={isPending}
            >
              {isPending ? <Spinner /> : t("register.user.button")}
            </Button>
          </form>
        </Form>

        <div className="my-4 flex items-center justify-between w-full">
          <Separator className="flex-1" />
          <span className="px-2 text-sm text-muted-foreground">
            {t("register.or")}
          </span>
          <Separator className="flex-1" />
        </div>

        <Button size="sm" className="w-full bg-secondary cursor-pointer">
          Sign Up with Google
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <p className="text-sm">
          {t("register.label.have-account")}{" "}
          <a
            onClick={() => navigate("/login")}
            className="underline cursor-pointer"
          >
            {t("register.button.have-account")}
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};
