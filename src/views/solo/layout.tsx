import { Outlet, useNavigate } from "react-router";
import Logo from "@/assets/Logo.png";
import DavidaLogo from "@/assets/DaVidaLogo.png";
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
              src={Logo}
              alt="DaVida Logo"
              className="w-7 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex items-center gap-4">
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="min-h-screen flex items-center justify-center px-4 pt-16 pb-8 relative">
        <div className="absolute w-[50vw] h-[40vh] bg-[#0099ff] rounded-full blur-3xl opacity-40 z-0 top-1/2 left-1/2 -translate-x-[70%] -translate-y-1/2" />
        <div className="absolute w-[50vw] h-[40vh] bg-[#3DDC97] rounded-full blur-3xl opacity-40 z-0 top-1/2 left-1/2 -translate-x-[30%] -translate-y-1/2" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto min-h-[60vh]">
          <img src={DavidaLogo} alt="DaVida Brand Logo" className="w-48 p-4" />
          <div className="w-full flex justify-center">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
