import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "@/store/auth";
import { useEffect, useState } from "react";
import { CenterSpinner } from "@/components/shared/CenterSpinner";
import { getMe } from "@/utils/api/services/auth.service";
import { Header } from "./Header";
import { NavigationContent } from "./NavigationContent";

export const CommonLayout = () => {
  const navigate = useNavigate();
  const { setUser, logout } = useAuthStore();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const validateUser = async () => {
      try {
        const userData = await getMe();

        if (!userData.isVerified) {
          navigate("/verify-account");
          setLoading(false);
          return;
        }

        setUser(userData);
        setLoading(false);
      } catch (err) {
        console.error("Error getting user data:", err);
        logout();
        navigate("/login");
      }
    };

    validateUser();
  }, [logout, navigate, setUser]);

  if (loading) {
    return <CenterSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 border-r bg-sidebar">
          <NavigationContent />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
