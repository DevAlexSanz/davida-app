import type { Pharmacy } from "./Pharmacy";

export interface AuthUser {
  id: string;
  email: string;
  role: string;
  isVerified: boolean;
  pharmacy?: Pharmacy | null;
}

export interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: AuthUser | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setLoading: (isLoading: boolean) => void;
  logout: () => void;
}
