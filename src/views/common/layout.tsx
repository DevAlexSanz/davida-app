import { Outlet } from "react-router";
import { Loader } from "@/components/shared/Loader";
import { useAuthGuard } from "@/guards/useAuthGuard";
import DaVidaLogo from "@/assets/DaVidaLogo.png";
import { useAuthStore } from "@/store/auth";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/shared/ModeToggle";

export const CommonLayout = () => {
  const { isLoading } = useAuthGuard();
  const { logout } = useAuthStore();

  if (isLoading) return <Loader />;

  return (
    <>
      <header className="w-full px-4 py-3 fixed top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src={DaVidaLogo} alt="DaVida Logo" className="w-24" />
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="default"
              onClick={() => logout()}
              className="cursor-pointer"
            >
              Logout
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      <div className="relative flex flex-col items-center justify-start min-h-screen overflow-hidden px-4 pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 gap-20">
        <Outlet />
      </div>
    </>
  );
};
