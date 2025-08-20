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
  isAuthenticated: boolean;
  setUser: (user: AuthUser | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  logout: () => Promise<void>;
}
