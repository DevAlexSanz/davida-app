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
import { login } from "@/api/services/auth.service";
import { useAuthStore } from "@/store/auth";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must be at most 100 characters"),
});

export const Login = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { setIsAuthenticated } = useAuthStore();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await login(data);

      setIsAuthenticated(true);

      toast.success("Login successful!");

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <Card className="w-[350px] rounded-lg backdrop-blur">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Welcome Back</CardTitle>
        <CardDescription className="text-muted-foreground">
          Login with your Google Account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Button size="sm" className="w-full bg-secondary">
          Login with Google
        </Button>

        <div className="my-4 flex items-center justify-between w-full">
          <Separator className="flex-1" />
          <span className="px-2 text-sm text-muted-foreground">
            Or continue with
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
                  <FormLabel>Email</FormLabel>
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" autoComplete="off" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <p className="text-sm">
          Don't have an account?{" "}
          <a
            onClick={() => navigate("/register")}
            className="underline cursor-pointer"
          >
            Sign up
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};
