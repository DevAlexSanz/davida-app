import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DavidaLogo from "/DaVidaLogo.png";

import toast from "react-hot-toast";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { resendCode, verifyAccount } from "@/utils/api/services/auth.service";
import { useAuthStore } from "@/store/auth";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { useTranslation } from "react-i18next";
import { normalizeError } from "@/utils/normalizeErrors";
import { useNavigate } from "react-router";

export const VerifyAccount = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [codeVerification, setCodeVerification] = useState<string>("");

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const { mutate, isPending } = useMutation({
    mutationFn: verifyAccount,
    onSuccess: () => {
      toast.success("Account verified successfully! You can now log in.");
      handleLogout();
    },
    onError: (error) => {
      const normalized = normalizeError(error);
      toast.error(normalized.message);
    },
  });

  const { mutate: mutateResend } = useMutation({
    mutationFn: resendCode,
    onSuccess: () => {
      toast.success(
        "Verification code resent successfully! Please check your email."
      );
    },
    onError: (error) => {
      const normalized = normalizeError(error);
      toast.error(normalized.message);
    },
  });

  const onSubmit = () => {
    mutate(Number(codeVerification));
  };

  const onSubmitResend = () => {
    mutateResend();
  };

  return (
    <div className="flex-grow flex items-center justify-center relative px-4">
      <div className="absolute w-[50vw] h-[40vh] bg-[#00a1ca] rounded-full blur-3xl opacity-40 z-0 top-1/2 left-1/2 -translate-x-[70%] -translate-y-1/2" />
      <div className="absolute w-[50vw] h-[40vh] bg-[#33c364] rounded-full blur-3xl opacity-40 z-0 top-1/2 left-1/2 -translate-x-[30%] -translate-y-1/2" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-md">
        <img src={DavidaLogo} alt="Description" className="w-40 p-4" />
        <Card className="w-full rounded-lg backdrop-blur">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {t("verify-account.title")}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {t("verify-account.subtitle")}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="flex flex-col items-center w-full space-y-8">
              <div className="w-full flex flex-col items-center">
                <InputOTP
                  maxLength={6}
                  value={codeVerification}
                  onChange={(val) => {
                    if (/^\d*$/.test(val)) setCodeVerification(val);
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
                    t("verify-account.indication")
                  ) : (
                    <span>
                      {t("verify-account.is-entered")}{" "}
                      <span className="font-bold">{codeVerification}</span>
                    </span>
                  )}
                </div>
              </div>

              <Button
                size="sm"
                className="w-full cursor-pointer"
                onClick={onSubmit}
                disabled={isPending || codeVerification.length !== 6}
              >
                {isPending ? <Spinner /> : t("verify-account.actions.confirm")}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <p className="text-sm">
              {t("verify-account.actions.label")}{" "}
              <a onClick={onSubmitResend} className="underline cursor-pointer">
                {t("verify-account.actions.resend")}
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
