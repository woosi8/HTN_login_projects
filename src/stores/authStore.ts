// stores/authStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  provider?: string; // 구글인지 카카오인지 구분
}

interface AuthState {
  user: User | null;
  status: "authenticated" | "unauthenticated" | "loading";

  setUser: (user: User | null) => void;
  setStatus: (status: "authenticated" | "unauthenticated" | "loading") => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      status: "loading",

      setUser: (user) => set({ user }),
      setStatus: (status) => set({ status }),
      clearAuth: () => set({ user: null, status: "unauthenticated" }),
    }),
    {
      name: "auth-storage",
    }
  )
);
