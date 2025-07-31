import { Outlet } from "react-router";
import { Loader } from "@/components/shared/Loader";
import { useAuthGuard } from "@/guards/useAuthGuard";
import DaVidaLogo from "@/assets/DaVidaLogo.png";
import { useAuthStore } from "@/store/auth";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { VerifyAccount } from "./VerifyAccount/VerifyAccount";
import { LangToggle } from "@/components/shared/LangToggle";
import { useTranslation } from "react-i18next";

export const CommonLayout = () => {
  const { isLoading } = useAuthGuard();
  const { logout, user } = useAuthStore();
  const { t } = useTranslation();

  if (isLoading) return <Loader />;

  const shouldVerify = user && !user.isVerified;

  if (shouldVerify) {
    return (
      <main className="h-screen w-full flex items-center justify-center">
        <VerifyAccount />
      </main>
    );
  }

  return (
    <>
      <header className="fixed top-0 z-50 w-full backdrop-blur-sm px-6 py-4">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <img src={DaVidaLogo} alt="DaVida Logo" className="w-24 h-auto" />
          <div className="flex items-center gap-3">
            <Button onClick={logout} className="w-[120px]">{t("layout.common.navbar.logout")}</Button>
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="pt-28 px-6 pb-12 flex flex-col min-h-screen">
        <div className="mx-auto w-full max-w-screen-lg flex-grow">
          <Outlet />
        </div>
      </main>
    </>
  );
};
