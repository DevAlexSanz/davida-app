import { z } from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { login } from "@/utils/api/services/auth.service";
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

export const Login = () => {
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
    mutationFn: login,
    onSuccess: () => {
      toast.success("Login successful!");
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Login failed. Please check your credentials.");
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutate(data);
  };

  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  return (
    <Card className="w-full max-w-sm rounded-lg backdrop-blur">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{t("login.title")}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {t("login.subtitle")}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Button
          variant="secondary"
          size="sm"
          className="w-full cursor-pointer"
          onClick={handleLogin}
        >
          Login with Google
        </Button>

        <div className="my-4 flex items-center justify-between w-full">
          <Separator className="flex-1" />
          <span className="px-2 text-sm text-muted-foreground">
            {t("login.or")}
          </span>
          <Separator className="flex-1" />
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("login.textfield.email")}</FormLabel>
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
                  <FormLabel>{t("login.textfield.password")}</FormLabel>
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
              {isPending ? <Spinner /> : t("login.button")}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <p className="text-sm">
          {t("login.label.no-account")}{" "}
          <a
            onClick={() => navigate("/register")}
            className="underline cursor-pointer"
          >
            {t("login.button.no-account")}
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};
