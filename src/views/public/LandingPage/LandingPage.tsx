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
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const elements = [
    {
      logo: <Store size={48} color="white" />,
      color: "primary",
      bgClass: "bg-primary",
      bgLightClass: "bg-primary/20",
      borderClass: "border-primary/50",
      title: "landing.elements.management.title",
      description: "landing.elements.management.description",
    },
    {
      logo: <Package size={48} color="white" />,
      color: "secondary",
      bgClass: "bg-secondary",
      bgLightClass: "bg-secondary/20",
      borderClass: "border-secondary/50",
      title: "landing.elements.inventory.title",
      description: "landing.elements.inventory.description",
    },
    {
      logo: <Users size={48} color="white" />,
      color: "accent",
      bgClass: "bg-accent",
      bgLightClass: "bg-accent/20",
      borderClass: "border-accent/50",
      title: "landing.elements.customers.title",
      description: "landing.elements.customers.description",
    },
    {
      logo: <ShoppingCart size={48} color="white" />,
      color: "amber-600",
      bgClass: "bg-amber-600",
      bgLightClass: "bg-amber-600/20",
      borderClass: "border-amber-600/50",
      title: "landing.elements.sales.title",
      description: "landing.elements.sales.description",
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
              {t("landing.badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              {t("landing.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t("landing.description")}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 w-full">
              <Button
                className="w-full sm:flex-1 py-6 text-lg font-semibold cursor-pointer"
                onClick={() => navigate("/register/pharmacy")}
              >
                <Store className="mr-2" />
                {t("landing.button.pharmacy")}
                <ArrowRight className="ml-2" />
              </Button>

              <Button
                className="w-full sm:flex-1 py-6 text-lg font-semibold bg-secondary cursor-pointer"
                onClick={() => navigate("/register/user")}
              >
                <User className="mr-2" />
                {t("landing.button.user")}
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
                            {t(element.title)}
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            {t(element.description)}
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
            {t("landing.section.one.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t("landing.section.one.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full">
          <Card className="flex flex-col items-center rounded-lg bg-transparent shadow-none border border-border">
            <CardContent className="flex flex-col items-center justify-between h-full w-full">
              <div className="rounded-lg w-16 h-16 flex items-center justify-center bg-primary">
                <Store size={32} color="white" />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-lg font-semibold">
                  {t("landing.section.one.card.one.title")}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {t("landing.section.one.card.one.description")}
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
                <h2 className="text-lg font-semibold">
                  {t("landing.section.one.card.two.title")}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {t("landing.section.one.card.two.description")}
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
                <h2 className="text-lg font-semibold">
                  {t("landing.section.one.card.three.title")}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {t("landing.section.one.card.three.description")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="w-full py-4 px-4 sm:px-6 md:px-8 text-sm text-muted-foreground">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:alexander@minimalbyte.dev"
              className="hover:underline transition-colors"
            >
              alexander@minimalbyte.dev
            </a>
          </div>
          <div className="text-xs sm:text-sm">Made in El Salvador 🇸🇻</div>
        </div>
      </footer>
    </>
  );
};
