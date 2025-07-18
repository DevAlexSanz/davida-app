import { Outlet } from "react-router";

export const SoloLayout = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="absolute w-[400px] h-[300px] bg-[#0099ff] rounded-full blur-3xl opacity-40 z-0 top-1/2 left-1/2 -translate-x-[60%] -translate-y-1/2" />
      <div className="absolute w-[400px] h-[300px] bg-[#3DDC97] rounded-full blur-3xl opacity-40 z-0 top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
        <img src="/src/assets/DaVida.png" alt="Description" className="w-40" />
        <Outlet />
      </div>
    </div>
  );
};
