import { User, Building2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export const Register = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
      <Card className="border shadow-none h-full flex flex-col">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4">
            <User className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-semibold">
            {t("register.options.user.title")}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            {t("register.options.user.subtitle")}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0 flex flex-col grow justify-between">
          <div className="space-y-3 sm:space-y-4 mb-6">
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current" />
              {t("register.options.user.list.one")}
            </div>
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current" />
              {t("register.options.user.list.two")}
            </div>
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current" />
              {t("register.options.user.list.three")}
            </div>
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current" />
              {t("register.options.user.list.four")}
            </div>
          </div>
          <Button
            className="w-full font-semibold py-3 rounded-lg"
            onClick={() => navigate("/register/user")}
          >
            {t("register.options.user.button")}
          </Button>
        </CardContent>
      </Card>

      <Card className="border shadow-none h-full flex flex-col">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4">
            <Building2 className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-semibold">
            {t("register.options.pharmacy.title")}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            {t("register.options.pharmacy.subtitle")}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0 flex flex-col grow justify-between">
          <div className="space-y-3 sm:space-y-4 mb-6">
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current" />
              {t("register.options.pharmacy.list.one")}
            </div>
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current" />
              {t("register.options.pharmacy.list.two")}
            </div>
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current" />
              {t("register.options.pharmacy.list.three")}
            </div>
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current" />
              {t("register.options.pharmacy.list.four")}
            </div>
          </div>
          <Button
            className="w-full font-semibold py-3 rounded-lg"
            onClick={() => navigate("/register/pharmacy")}
          >
            {t("register.options.pharmacy.button")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
