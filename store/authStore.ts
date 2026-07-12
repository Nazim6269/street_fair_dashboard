"use client";

import { User } from '@/types/auth.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authService } from "@/services/auth.service";
import { setTokens } from "@/lib/session";

interface AuthState {
  // State
  user: User | null;
  isLoading: boolean;
  isHydrated: boolean;

  // Actions
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setHydrated: (hydrated: boolean) => void;
  clear: () => void;

  // Async Logic Actions
  login: (credentials: { email: string; password: string }) => Promise<void>;
  fetchMe: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial State
      user: null,
      isLoading: false,
      isHydrated: false,

      // Base Actions
      setUser: (user) => set({ user }),
      setLoading: (isLoading) => set({ isLoading }),
      setHydrated: (isHydrated) => set({ isHydrated }),
      clear: () => set({ user: null, isLoading: false }),

      // Async Logic
      login: async (credentials) => {
        set({ isLoading: true });
        try {
          // Simulate login for demo credentials
          if (credentials.email === "admin@gmail.com" && credentials.password === "Pass@123") {
            const mockUser: User = {
              id: "1",
              email: "admin@gmail.com",
              name: "Nazim uddin",
              avatar: null,
              country_code: null,
              phone_number: null,
              type: "ADMIN",
              gender: null,
              date_of_birth: null,
              created_at: new Date().toISOString(),
            };
            await setTokens("mock-access-token", "mock-refresh-token");
            set({ user: mockUser });
          } else {
            throw new Error("Invalid email or password");
          }
        } catch (error) {
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      fetchMe: async () => {
        set({ isLoading: true });
        try {
          const user = await authService.me();
          set({ user });
        } catch (error) {
          get().clear(); // Wipe store if token/session is invalid
        } finally {
          set({ isLoading: false });
        }
      },

      logout: async () => {
        set({ isLoading: true });
        try {
          await authService.logout();
          get().clear();
        } catch (error) {
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'auth-store',
      partialize: (state) => ({ user: state.user }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);