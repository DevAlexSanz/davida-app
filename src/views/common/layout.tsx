import { Outlet } from "react-router";

export const CustomLayout = () => {
  return (
    <>
      <h1>Custom Layout</h1>

      <Outlet />
    </>
  );
};
