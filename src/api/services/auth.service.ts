import type { AuthUser } from "@/types/AuthContextType";
import { axiosInstance } from "../instances/api.instance";

export const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await axiosInstance.post<SqlResponse<{ codeVerification: string }>>(
      "/auth/register",
      {
        email,
        password,
      }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const registerPharmacy = async (formData: FormData) => {
  try {
    await axiosInstance.post("/auth/register/pharmacy", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.error("Error registering pharmacy:", error);
    throw error;
  }
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await axiosInstance.post("/auth/login", {
      email,
      password,
    });
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const getMe = async () => {
  try {
    const { data } = await axiosInstance.get<SqlResponse<AuthUser>>("/auth/me");
    return data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const verifyAccount = async (codeVerification: number) => {
  try {
    const { data } = await axiosInstance.post("/auth/verify-account", {
      codeVerification,
    });
    return data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    await axiosInstance.post("/auth/refresh-token");
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
