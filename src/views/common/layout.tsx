import { useEffect } from "react";
import { getMe } from "@/api/services/auth.service";
import { useAuthStore } from "@/store/auth";
import { Outlet, useNavigate } from "react-router";
import { Loader } from "@/components/shared/Loader";

export const CommonLayout = () => {
  const { setUser, isAuthenticated, isLoading, setLoading, logout } =
    useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);

      if (!isAuthenticated) {
        logout();

        navigate("/login");

        return;
      }

      try {
        const userData = await getMe();

        setUser(userData);
      } catch (err) {
        console.error("getMe failed:", err);

        logout();

        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [setUser, isAuthenticated, setLoading, logout, navigate]);

  if (isLoading) return <Loader />;

  return <Outlet />;
};
