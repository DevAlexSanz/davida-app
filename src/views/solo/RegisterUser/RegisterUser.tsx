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

const formSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must be at most 100 characters"),
});

export const RegisterUser = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await registerUser(data);

      toast.success(
        "Registration successful! Please check your email for the verification code."
      );

      navigate("/verify-email");
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <Card className="w-[350px] rounded-lg backdrop-blur">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Create an Account</CardTitle>
        <CardDescription className="text-muted-foreground">
          Enter your email below to create your account
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
              Sign In with Email
            </Button>
          </form>
        </Form>

        <div className="my-4 flex items-center justify-between w-full">
          <Separator className="flex-1" />
          <span className="px-2 text-sm text-muted-foreground">
            Or continue with
          </span>
          <Separator className="flex-1" />
        </div>

        <Button size="sm" className="w-full bg-secondary">
          Sign Up with Google
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <p className="text-sm">
          Already have an account?{" "}
          <a onClick={() => navigate("/login")} className="underline">
            Sign In
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};
