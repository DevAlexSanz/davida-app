import DaVidaLogo from "@/assets/DaVidaLogo.png";
import { Outlet, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/shared/ModeToggle";

export const PublicLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="w-full px-4 py-3 fixed top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src={DaVidaLogo} alt="DaVida Logo" className="w-24" />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate("/login")}>
              Sign In
            </Button>
            <Button variant="default" onClick={() => navigate("/register")}>
              Sign Up
            </Button>
            <ModeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 px-4">
                <SheetHeader>
                  <SheetTitle className="text-lg">Authentication</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate("/login")}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => navigate("/register")}
                  >
                    Sign Up
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="relative flex flex-col items-center justify-start min-h-screen overflow-hidden px-4 pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 gap-20">
        <div className="absolute w-[500px] h-[500px] bg-[#0099ff] rounded-full blur-3xl opacity-20 bottom-[-100px] left-[-200px] z-0" />
        <div className="absolute w-[500px] h-[500px] bg-[#3DDC97] rounded-full blur-3xl opacity-20 top-[-100px] right-[-200px] z-0" />

        <Outlet />
      </div>
    </>
  );
};
