import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { AuthContextType } from "@/types/AuthContextType";

export const useAuthStore = create<AuthContextType>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      isAuthenticated: false,
      setUser: (user) => set({ user, isLoading: false }),
      setLoading: (isLoading) => set({ isLoading }),
      setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      logout: () =>
        set({
          user: null,
          isLoading: false,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
