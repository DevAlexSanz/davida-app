import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Package,
  ShoppingCart,
  Store,
  User,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router";

export const LandingPage = () => {
  const navigate = useNavigate();

  const elements = [
    {
      logo: <Store size={48} color="white" />,
      color: "primary",
      bgClass: "bg-primary",
      bgLightClass: "bg-primary/20",
      borderClass: "border-primary/50",
      title: "Management",
      description: "Complete Control Panel",
    },
    {
      logo: <Package size={48} color="white" />,
      color: "secondary",
      bgClass: "bg-secondary",
      bgLightClass: "bg-secondary/20",
      borderClass: "border-secondary/50",
      title: "Inventory",
      description: "Smart Control",
    },
    {
      logo: <Users size={48} color="white" />,
      color: "accent",
      bgClass: "bg-accent",
      bgLightClass: "bg-accent/20",
      borderClass: "border-accent/50",
      title: "Customers",
      description: "User Management",
    },
    {
      logo: <ShoppingCart size={48} color="white" />,
      color: "amber-600",
      bgClass: "bg-amber-600",
      bgLightClass: "bg-amber-600/20",
      borderClass: "border-amber-600/50",
      title: "Sales",
      description: "Integrated E-commerce",
    },
  ];

  return (
    <>
      <section className="flex flex-col items-center justify-center text-center w-full max-w-7xl mx-auto gap-20 py-8 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="flex flex-col items-start text-left max-w-lg">
            <Badge
              variant="outline"
              className="bg-accent/10 border-secondary/20 text-secondary text-md h-10 rounded-3xl px-4 mb-6"
            >
              The new era of digital pharmacies
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              The future of pharmacies is digital
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We connect pharmacies with customers through our innovative
              platform. Smart management, online sales, and an exceptional
              experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 w-full">
              <Button
                className="w-full sm:flex-1 py-6 text-lg font-semibold cursor-pointer"
                onClick={() => navigate("/register/pharmacy")}
              >
                <Store className="mr-2" />
                Register as Pharmacy
                <ArrowRight className="ml-2" />
              </Button>

              <Button
                className="w-full sm:flex-1 py-6 text-lg font-semibold bg-secondary cursor-pointer"
                onClick={() => navigate("/register/user")}
              >
                <User className="mr-2" />
                Register as User
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <Card className="rounded-xl w-full max-w-full">
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {elements.map((element, index) => (
                    <Card
                      key={index}
                      className={`flex flex-col items-center rounded-lg ${element.bgLightClass} ${element.borderClass} border w-full`}
                    >
                      <CardContent className="flex flex-col items-center justify-between h-full w-full">
                        <div
                          className={`rounded-lg w-16 h-16 flex items-center justify-center ${element.bgClass}`}
                        >
                          {element.logo}
                        </div>
                        <div className="text-center">
                          <h2 className="text-lg font-semibold">
                            {element.title}
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            {element.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center text-center w-full max-w-7xl mx-auto gap-20 py-8 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center text-center w-full max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            How Davida works
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            In just 3 simple steps, your pharmacy will be ready to operate in
            the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full">
          <Card className="flex flex-col items-center rounded-lg bg-transparent shadow-none border border-border">
            <CardContent className="flex flex-col items-center justify-between h-full w-full">
              <div className="rounded-lg w-16 h-16 flex items-center justify-center bg-primary">
                <Store size={32} color="white" />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-lg font-semibold">Sign Up</h2>
                <p className="text-sm text-muted-foreground">
                  Create your account and set up your pharmacy profile with
                  basic information.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center rounded-lg bg-transparent shadow-none border border-border">
            <CardContent className="flex flex-col items-center justify-between h-full w-full">
              <div className="rounded-lg w-16 h-16 flex items-center justify-center bg-secondary">
                <Package size={32} color="white" />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-lg font-semibold">Set Up</h2>
                <p className="text-sm text-muted-foreground">
                  Add your products, set prices, and personalize your online
                  store.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center rounded-lg bg-transparent shadow-none border border-border">
            <CardContent className="flex flex-col items-center justify-between h-full w-full">
              <div className="rounded-lg w-16 h-16 flex items-center justify-center bg-accent">
                <ShoppingCart size={32} color="white" />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-lg font-semibold">Start Selling</h2>
                <p className="text-sm text-muted-foreground">
                  Start receiving orders and manage your pharmacy from the
                  control panel.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};
