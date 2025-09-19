import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, LogOut } from "lucide-react";
import { useAuthStore } from "@/store/auth";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { LangToggle } from "@/components/shared/LangToggle";

export const UserControls = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      {/* Botón de "Nuevo" solo para admins */}
      {user?.role === "ADMIN" && (
        <Button variant="default" size="sm" className="hidden sm:flex">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo
        </Button>
      )}
      <Button variant="default" size="icon" className="sm:hidden">
        <Plus className="h-4 w-4" />
      </Button>

      {/* Avatar y menú de usuario */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-8 w-8 cursor-pointer">
            <AvatarImage src="/pharmacist-consultation.png" />
            <AvatarFallback>FA</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
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
    </>
  );
};
