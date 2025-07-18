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
    <>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border shadow-none">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <User className="w-8 h-8" />
            </div>
            <CardTitle className="text-2xl font-semibold">
              Register as User
            </CardTitle>
            <CardDescription className="text-base">
              Join our platform to access thousands of pharmacies and get your
              medications delivered
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
                Browse nearby pharmacies
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
                Order prescription medications
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
                Track your delivery in real-time
              </div>
              <div className="flex items-center text-sm">
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
            <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Building2 className="w-8 h-8" />
            </div>
            <CardTitle className="text-2xl font-semibold">
              Register as Pharmacy
            </CardTitle>
            <CardDescription className="text-base">
              Partner with us to expand your reach and serve more customers in
              your area
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
                Reach more customers online
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
                Manage inventory efficiently
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
                Process orders seamlessly
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 rounded-full mr-3 border border-current"></div>
                Analytics and reporting tools
              </div>
            </div>
            <Button
              className="w-full font-semibold py-3 rounded-lg bg-secondary"
              onClick={() => navigate("/register/pharmacy")}
            >
              Join as Pharmacy
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
