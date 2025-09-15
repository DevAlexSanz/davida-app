import DaVidaLogo from "/DaVidaLogo.png";
import { Outlet, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { LangToggle } from "@/components/shared/LangToggle";
import { useTranslation } from "react-i18next";

export const PublicLayout = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <header className="w-full px-4 py-3 fixed top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src={DaVidaLogo} alt="DaVida Logo" className="w-24" />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => navigate("/login")}
              className="cursor-pointer"
            >
              {t("register.button.have-account")}
            </Button>
            <Button
              variant="default"
              onClick={() => navigate("/register")}
              className="cursor-pointer"
            >
              {t("login.button.no-account")}
            </Button>
            <LangToggle />
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LangToggle />
            <ThemeToggle />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 px-4">
                <SheetHeader>
                  <SheetTitle className="text-lg">{t("auth.title")}</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    variant="outline"
                    className="w-full cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    {t("register.button.have-account")}
                  </Button>
                  <Button
                    variant="default"
                    className="w-full cursor-pointer"
                    onClick={() => navigate("/register")}
                  >
                    {t("login.button.no-account")}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="relative flex flex-col items-center justify-start min-h-screen overflow-hidden px-4 pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 gap-20">
        <div className="absolute w-[500px] h-[500px] bg-[#00a1ca] rounded-full blur-3xl opacity-20 bottom-[-100px] left-[-200px] z-0" />
        <div className="absolute w-[500px] h-[500px] bg-[#33c364] rounded-full blur-3xl opacity-20 top-[-100px] right-[-200px] z-0" />

        <Outlet />
      </div>
    </>
  );
};
