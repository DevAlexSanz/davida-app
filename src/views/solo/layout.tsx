import { Outlet, useNavigate } from "react-router";
import Logo from "@/assets/Logo.png";
import DavidaLogo from "@/assets/DaVidaLogo.png";
import { ModeToggle } from "@/components/shared/ModeToggle";

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
              className="w-7"
              onClick={() => navigate("/")}
            />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
          </div>
        </div>
      </header>

      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <div className="absolute w-[400px] h-[300px] bg-[#0099ff] rounded-full blur-3xl opacity-40 z-0 top-1/2 left-1/2 -translate-x-[70%] -translate-y-1/2" />
        <div className="absolute w-[400px] h-[300px] bg-[#3DDC97] rounded-full blur-3xl opacity-40 z-0 top-1/2 left-1/2 -translate-x-[30%] -translate-y-1/2" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
          <img src={DavidaLogo} alt="Description" className="w-40 p-4" />
          <Outlet />
        </div>
      </div>
    </>
  );
};
