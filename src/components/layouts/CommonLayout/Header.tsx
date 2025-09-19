import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import DaVidaLogo from "/DaVidaLogo.png";
import { UserControls } from "./UserControls";
import { NavigationContent } from "./NavigationContent";

export const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-20 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
    <div className="flex h-16 items-center px-4 md:px-6">
      <div className="flex items-center space-x-4">
        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex items-center space-x-2 p-4 border-b">
              <img src={DaVidaLogo} alt="DaVida Logo" className="w-24 h-auto" />
            </div>
            <NavigationContent />
          </SheetContent>
        </Sheet>

        {/* Logo on desktop */}
        <div className="hidden md:flex items-center space-x-2">
          <img src={DaVidaLogo} alt="DaVida Logo" className="w-24 h-auto" />
        </div>
      </div>

      <div className="ml-auto flex items-center space-x-2 md:space-x-4">
        <UserControls />
      </div>
    </div>
  </header>
);
