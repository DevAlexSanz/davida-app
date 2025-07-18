import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import toast from "react-hot-toast";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { verifyAccount } from "@/api/services/auth.service";
import { useAuthStore } from "@/store/auth";

export const VerifyAccount = () => {
  const { logout } = useAuthStore();

  const [codeVerification, setCodeVerification] = useState<string>("");

  const onSubmit = async () => {
    try {
      await verifyAccount(Number(codeVerification));
      toast.success("Account verified successfully! You can now log in.");

      logout();
    } catch (error) {
      console.error("Verification failed:", error);
      toast.error("Verification failed. Please check the code and try again.");
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="absolute w-[400px] h-[300px] bg-[#0099ff] rounded-full blur-3xl opacity-40 z-0 top-1/2 left-1/2 -translate-x-[60%] -translate-y-1/2" />
      <div className="absolute w-[400px] h-[300px] bg-[#3DDC97] rounded-full blur-3xl opacity-40 z-0 top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
        <img src="/src/assets/DaVida.png" alt="Description" className="w-40" />
        <Card className="w-[350px] rounded-lg backdrop-blur">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Verify Account</CardTitle>
            <CardDescription className="text-muted-foreground">
              Enter the verification code sent to your email
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col items-center space-y-8">
            <div>
              <InputOTP
                maxLength={6}
                value={codeVerification}
                onChange={(val) => {
                  if (/^\d*$/.test(val)) {
                    setCodeVerification(val);
                  }
                }}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>

              <div className="text-center text-sm mt-4">
                {codeVerification === "" ? (
                  <>Enter your one-time password.</>
                ) : (
                  <>You entered: {codeVerification}</>
                )}
              </div>
            </div>
            <Button size="sm" className="w-full" onClick={onSubmit}>
              Verify Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
