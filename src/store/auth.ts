import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { AuthContextType } from "@/types/AuthContextType";
import { logout } from "@/utils/api/services/auth.service";

export const useAuthStore = create<AuthContextType>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: async () => {
        try {
          await logout();
          set({
            user: null,
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
