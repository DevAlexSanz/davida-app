import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { AuthContextType } from "@/types/AuthContextType";
import { logout } from "@/api/services/auth.service";

export const useAuthStore = create<AuthContextType>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      isAuthenticated: false,
      setUser: (user) => set({ user, isLoading: false }),
      setLoading: (isLoading) => set({ isLoading }),
      setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      logout: async () => {
        try {
          await logout();

          set({
            user: null,
            isLoading: false,
            isAuthenticated: false,
          });
        } catch (error) {
          console.error("Error logging out:", error);
          throw error;
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
