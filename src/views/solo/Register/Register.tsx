import { User, Building2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
      <Card className="border shadow-none ">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 ">
            <User className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-semibold">
            Register as User
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Join our platform to access thousands of pharmacies and get your
            medications delivered
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3 sm:space-y-4 mb-6">
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
              Browse nearby pharmacies
            </div>
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
              Order prescription medications
            </div>
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
              Track your delivery in real-time
            </div>
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
              Manage your health profile
            </div>
          </div>
          <Button
            className="w-full font-semibold py-3 rounded-lg"
            onClick={() => navigate("/register/user")}
          >
            Get Started as User
          </Button>
        </CardContent>
      </Card>

      <Card className="border shadow-none">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4">
            <Building2 className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-semibold">
            Register as Pharmacy
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Partner with us to expand your reach and serve more customers in
            your area
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3 sm:space-y-4 mb-6">
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
              Reach more customers online
            </div>
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
              Manage inventory efficiently
            </div>
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
              Process orders seamlessly
            </div>
            <div className="flex items-center text-xs sm:text-sm">
              <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
              Analytics and reporting tools
            </div>
          </div>
          <Button
            className="w-full font-semibold py-3 rounded-lg"
            onClick={() => navigate("/register/pharmacy")}
          >
            Join as Pharmacy
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
