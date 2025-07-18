import { Outlet } from "react-router";
import { Loader } from "@/components/shared/Loader";
import { useAuthGuard } from "@/guards/useAuthGuard";

export const CommonLayout = () => {
  const { isLoading } = useAuthGuard();

  if (isLoading) return <Loader />;

  return <Outlet />;
};
