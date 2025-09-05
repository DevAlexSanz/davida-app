import { Outlet, useNavigate } from "react-router";
import DaVidaLogo from "@/assets/DaVidaLogo.png";
import { useAuthStore } from "@/store/auth";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { LangToggle } from "@/components/shared/LangToggle";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { CenterSpinner } from "@/components/shared/CenterSpinner";
import { getMe } from "@/api/services/auth.service";
import clsx from "clsx";

interface CommonLayoutProps {
  fullWidth?: boolean;
}

export const CommonLayout = ({ fullWidth = false }: CommonLayoutProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setUser, logout } = useAuthStore();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const validateUser = async () => {
      try {
        const userData = await getMe();

        if (!userData.isVerified) {
          navigate("/verify-account");
          setLoading(false);
          return;
        }

        setUser(userData);
        setLoading(false);
      } catch (err) {
        console.error("Error getting user data:", err);
        logout();
        navigate("/login");
      }
    };

    validateUser();
  }, [logout, navigate, setUser]);

  if (loading) {
    return <CenterSpinner />;
  }

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full backdrop-blur-md  px-6 py-4 bg-background/80">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <img src={DaVidaLogo} alt="DaVida Logo" className="w-24 h-auto" />
          <div className="flex items-center gap-3">
            <Button
              onClick={handleLogout}
              variant="secondary"
              className="w-[120px]"
            >
              {t("layout.common.navbar.logout")}
            </Button>
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="pt-28 px-6 pb-12 flex flex-col min-h-screen">
        <div
          className={clsx(
            "mx-auto w-full flex-grow",
            fullWidth ? "max-w-full" : "max-w-screen-lg"
          )}
        >
          <Outlet />
        </div>
      </main>
    </>
  );
};
