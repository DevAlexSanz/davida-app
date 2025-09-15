import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Users,
  Package,
  UserCheck,
  TrendingUp,
  Plus,
  Menu,
  LogOut,
} from "lucide-react";
import { Outlet, useNavigate } from "react-router";
import DaVidaLogo from "/DaVidaLogo.png";
import { useAuthStore } from "@/store/auth";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { LangToggle } from "@/components/shared/LangToggle";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { CenterSpinner } from "@/components/shared/CenterSpinner";
import { getMe } from "@/utils/api/services/auth.service";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const CommonLayout = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setUser, user, logout } = useAuthStore();

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

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const NavigationContent = () => (
    <nav className="p-4 space-y-2">
      <Button
        variant="ghost"
        className="w-full justify-start bg-sidebar-accent text-sidebar-accent-foreground"
      >
        <TrendingUp className="h-4 w-4 mr-3" />
        Dashboard
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      >
        <Package className="h-4 w-4 mr-3" />
        Productos
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      >
        <Users className="h-4 w-4 mr-3" />
        Usuarios
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      >
        <UserCheck className="h-4 w-4 mr-3" />
        Empleados
      </Button>
    </nav>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="fixed top-0 left-0 right-0 z-20 border-b bg-card shadow-sm">
        <div className="flex h-16 items-center px-4 md:px-6">
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <div className="flex items-center space-x-2 p-4 border-b">
                  <img
                    src={DaVidaLogo}
                    alt="DaVida Logo"
                    className="w-24 h-auto"
                  />
                </div>
                <NavigationContent />
              </SheetContent>
            </Sheet>

            <div className="hidden md:flex items-center space-x-2">
              <img src={DaVidaLogo} alt="DaVida Logo" className="w-24 h-auto" />
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-2 md:space-x-4">
            {user?.role === "ADMIN" && (
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex bg-transparent"
              >
                <Plus className="h-4 w-4 mr-2" />
                Nuevo
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              className="sm:hidden bg-transparent"
            >
              <Plus className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src="/pharmacist-consultation.png" />
                  <AvatarFallback>FA</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleLogout}
                    className="cursor-pointer"
                  >
                    <LogOut className="h-[1.2rem] w-[1.2rem]" />
                  </Button>
                  {t("dropdown.logout")}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ThemeToggle />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LangToggle />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        <aside className="hidden md:block w-64 border-r bg-sidebar min-h-[calc(100vh-4rem)]">
          <NavigationContent />
        </aside>

        <main className="flex-1 p-4 md:p-6 overflow-auto bg-background min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
