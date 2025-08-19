import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Upload,
  Building2,
  User,
  Mail,
  Lock,
  MapPin,
  Camera,
} from "lucide-react";
import { useNavigate } from "react-router";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { registerPharmacy } from "@/api/services/auth.service";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { PhoneInput } from "@/components/shared/PhoneInput";
import { RegisterPharmacyFormSchema } from "./RegisterPharmacyForm";

export const RegisterPharmacy = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
  const [profilePhotoError, setProfilePhotoError] = useState("");
  const [coverPhotoError, setCoverPhotoError] = useState("");

  const form = useForm({
    resolver: zodResolver(RegisterPharmacyFormSchema),
    defaultValues: {
      name: "",
      description: "",
      address: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: registerPharmacy,
    onSuccess: () => {
      toast.success(
        "Registration successful! Please check your email for the verification code."
      );

      navigate("/login");
    },
    onError: () => {
      toast.error("Failed to register pharmacy. Please try again.");
    },
  });

  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePhoto(file);
      setProfilePhotoError("");
    }
  };

  const handleCoverPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverPhoto(file);
      setCoverPhotoError("");
    }
  };

  const onSubmit = async (data: z.infer<typeof RegisterPharmacyFormSchema>) => {
    let valid = true;

    if (!profilePhoto) {
      setProfilePhotoError("Profile photo is required");
      valid = false;
    }

    if (!coverPhoto) {
      setCoverPhotoError("Cover photo is required");
      valid = false;
    }

    if (!valid) return;

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description ?? "");
    formData.append("address", data.address);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("password", data.password);

    formData.append("profilePhoto", profilePhoto!);
    formData.append("coverPhoto", coverPhoto!);

    mutate(formData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <CardHeader className="text-left">
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                {t("register.pharmacy.card.pharmacy-information.title")}
              </CardTitle>
              <CardDescription>
                {t("register.pharmacy.card.pharmacy-information.subtitle")}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {t(
                        "register.pharmacy.card.pharmacy-information.textfield.name"
                      )}{" "}
                      *
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., San Jose Pharmacy" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {t(
                        "register.pharmacy.card.pharmacy-information.textfield.description"
                      )}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder={t(
                          "register.pharmacy.card.pharmacy-information.textarea.placeholder"
                        )}
                        className="min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t(
                          "register.pharmacy.card.pharmacy-information.textfield.address"
                        )}{" "}
                        *
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4" />
                          <Input
                            {...field}
                            placeholder={t(
                              "register.pharmacy.card.pharmacy-information.textfield.placeholder"
                            )}
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t(
                          "register.pharmacy.card.pharmacy-information.textfield.phone"
                        )}{" "}
                        *
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <PhoneInput defaultCountry="SV" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  {t("register.pharmacy.card.pharmacy-information.images")}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="profile-photo">
                      {t(
                        "register.pharmacy.card.pharmacy-information.images.profile-photo"
                      )}{" "}
                      *
                    </Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <input
                        id="profile-photo"
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePhotoChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="profile-photo"
                        className="cursor-pointer block"
                      >
                        {profilePhoto ? (
                          <img
                            src={URL.createObjectURL(profilePhoto)}
                            alt="Profile preview"
                            className="mx-auto h-24 w-24 object-cover rounded-full mb-2"
                          />
                        ) : (
                          <>
                            <Upload className="h-8 w-8 mx-auto mb-2" />
                            <p className="text-sm">
                              {t(
                                "register.pharmacy.card.pharmacy-information.images.upload"
                              )}
                            </p>
                          </>
                        )}
                      </label>
                      {profilePhotoError && (
                        <p className="text-sm text-red-500 mt-1">
                          {profilePhotoError}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cover-photo">
                      {t(
                        "register.pharmacy.card.pharmacy-information.images.cover-photo"
                      )}{" "}
                      *
                    </Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <input
                        id="cover-photo"
                        type="file"
                        accept="image/*"
                        onChange={handleCoverPhotoChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="cover-photo"
                        className="cursor-pointer block"
                      >
                        {coverPhoto ? (
                          <img
                            src={URL.createObjectURL(coverPhoto)}
                            alt="Cover preview"
                            className="mx-auto h-24 w-full object-cover rounded mb-2"
                          />
                        ) : (
                          <>
                            <Upload className="h-8 w-8 mx-auto mb-2" />
                            <p className="text-sm">
                              {t(
                                "register.pharmacy.card.pharmacy-information.images.upload"
                              )}
                            </p>
                          </>
                        )}
                      </label>
                      {coverPhotoError && (
                        <p className="text-sm text-red-500 mt-1">
                          {coverPhotoError}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-left">
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {t("register.pharmacy.card.user-information.title")}
              </CardTitle>
              <CardDescription>
                {t("register.pharmacy.card.user-information.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {t(
                        "register.pharmacy.card.user-information.textfield.email"
                      )}{" "}
                      *
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4" />
                        <Input
                          placeholder="m@example.com"
                          type="email"
                          autoComplete="email"
                          {...field}
                          className="pl-10"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {t(
                        "register.pharmacy.card.user-information.textfield.password"
                      )}{" "}
                      *
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4" />
                        <Input
                          className="pl-10"
                          type="password"
                          autoComplete="off"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => navigate("/register")}
            >
              {t("register.pharmacy.actions.cancel")}
            </Button>
            <Button type="submit" className="flex-1" disabled={isPending}>
              {isPending ? (
                <Spinner />
              ) : (
                t("register.pharmacy.actions.register")
              )}
            </Button>
          </div>
        </form>
      </Form>

      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          {t("register.label.have-account")}{" "}
          <a
            className="hover:underline font-medium cursor-pointer"
            onClick={() => navigate("/login")}
          >
            {t("register.button.have-account")}
          </a>
        </p>
      </div>
    </div>
  );
};
