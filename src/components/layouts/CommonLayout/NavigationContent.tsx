import { Link, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import { Users, Package, UserCheck, TrendingUp } from "lucide-react";

export const NavigationContent = () => {
  const location = useLocation();

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: TrendingUp },
    { to: "/products", label: "Productos", icon: Package },
    { to: "/users", label: "Usuarios", icon: Users },
    { to: "/employees", label: "Empleados", icon: UserCheck },
  ];

  return (
    <nav className="p-4 space-y-2">
      {navItems.map(({ to, label, icon: Icon }) => {
        const isActive = location.pathname.startsWith(to);

        return (
          <Button
            key={to}
            variant={isActive ? "secondary" : "ghost"}
            className="w-full justify-start"
            asChild
          >
            <Link to={to}>
              <Icon className="h-4 w-4 mr-3" />
              {label}
            </Link>
          </Button>
        );
      })}
    </nav>
  );
};
