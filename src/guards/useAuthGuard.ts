import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getMe } from "@/api/services/auth.service";
import { useAuthStore } from "@/store/auth";

export const useAuthGuard = () => {
  const { setUser, isAuthenticated, isLoading, setLoading, logout } =
    useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    const validateUser = async () => {
      setLoading(true);

      if (!isAuthenticated) {
        logout();
        navigate("/login");
        return;
      }

      try {
        const userData = await getMe();

        if (!userData.isVerified) {
          navigate("/verify-account");
          return;
        }

        setUser(userData);
      } catch (err) {
        console.error("Error getting user data:", err);
        logout();
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    validateUser();
  }, [isAuthenticated, logout, navigate, setLoading, setUser]);

  return { isLoading };
};
