import { Outlet, useNavigate } from "react-router";
import DavidaLogo from "/DaVidaLogo.png";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { LangToggle } from "@/components/shared/LangToggle";

export const SoloLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="w-full px-4 py-3 fixed top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={DavidaLogo}
              alt="DaVida Logo"
              className="w-25 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex items-center gap-4">
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="min-h-screen pt-20 pb-8 px-4 relative flex flex-col">
        <div className="absolute w-[50vw] h-[40vh] bg-[#00a1ca] rounded-full blur-3xl opacity-40 z-0 top-1/2 left-1/2 -translate-x-[70%] -translate-y-1/2" />
        <div className="absolute w-[50vw] h-[40vh] bg-[#33c364] rounded-full blur-3xl opacity-40 z-0 top-1/2 left-1/2 -translate-x-[30%] -translate-y-1/2" />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};
