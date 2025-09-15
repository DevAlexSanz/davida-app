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
      logo: <Store size={32} />,
      title: "landing.elements.management.title",
      description: "landing.elements.management.description",
    },
    {
      logo: <Package size={32} />,
      title: "landing.elements.inventory.title",
      description: "landing.elements.inventory.description",
    },
    {
      logo: <Users size={32} />,
      title: "landing.elements.customers.title",
      description: "landing.elements.customers.description",
    },
    {
      logo: <ShoppingCart size={32} />,
      title: "landing.elements.sales.title",
      description: "landing.elements.sales.description",
    },
  ];

  const features = [
    {
      icon: <Store size={28} />,
      title: "landing.section.one.card.one.title",
      description: "landing.section.one.card.one.description",
    },
    {
      icon: <Package size={28} />,
      title: "landing.section.one.card.two.title",
      description: "landing.section.one.card.two.description",
    },
    {
      icon: <ShoppingCart size={28} />,
      title: "landing.section.one.card.three.title",
      description: "landing.section.one.card.three.description",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="flex flex-col items-start text-left max-w-lg">
            <Badge
              variant="outline"
              className="bg-secondary/10 border-secondary/20 text-secondary text-md h-10 rounded-3xl px-4 mb-6"
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
                className="w-full sm:flex-1 py-6 text-lg font-semibold"
                onClick={() => navigate("/register/pharmacy")}
              >
                <Store className="mr-2" />
                {t("landing.button.pharmacy")}
                <ArrowRight className="ml-2" />
              </Button>

              <Button
                variant="secondary"
                className="w-full sm:flex-1 py-6 text-lg font-semibold"
                onClick={() => navigate("/register/user")}
              >
                <User className="mr-2" />
                {t("landing.button.user")}
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Grid de elementos */}
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {elements.map((element, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-center border rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <CardContent className="flex flex-col items-center justify-between h-full p-6">
                    <div className="rounded-full bg-secondary/10 text-secondary w-14 h-14 flex items-center justify-center mb-4">
                      {element.logo}
                    </div>
                    <h2 className="text-lg font-semibold text-center mb-2">
                      {t(element.title)}
                    </h2>
                    <p className="text-sm text-muted-foreground text-center">
                      {t(element.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            {t("landing.section.one.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t("landing.section.one.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="flex flex-col items-center border rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <CardContent className="flex flex-col items-center p-6">
                <div className="rounded-full bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">
                  {t(feature.title)}
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  {t(feature.description)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto py-6 px-4 sm:px-6 md:px-8 text-sm text-muted-foreground">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
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
