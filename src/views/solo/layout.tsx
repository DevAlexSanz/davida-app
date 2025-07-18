import { Outlet } from "react-router";
import DavidaLogo from "@/assets/DaVidaLogo.png";
import { ModeToggle } from "@/components/shared/ModeToggle";

export const SoloLayout = () => {
  return (
    <>
      <div
        style={{ position: "fixed", top: "2rem", right: "2rem", zIndex: 1000 }}
      >
        <ModeToggle />
      </div>

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
