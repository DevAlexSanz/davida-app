import { Outlet } from "react-router";

export const SoloLayout = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Outlet />
    </div>
  );
};
