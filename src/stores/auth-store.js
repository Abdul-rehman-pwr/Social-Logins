import { create } from "zustand";
import { persist } from "zustand/middleware";
import { auth, googleProvider, githubProvider } from "../lib/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      isLoading: false,
      error: null,

      login: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
          set({ user: credentials, isLoggedIn: true, isLoading: false });
        } catch (error) {
          set({ error: "Login failed", isLoading: false });
        }
      },

      loginWithGoogle: async () => {
        set({ isLoading: true, error: null });
        try {
          const result = await signInWithPopup(auth, googleProvider);
          const firebaseUser = result.user;
          set({
            user: {
              uid: firebaseUser.uid,
              displayName: firebaseUser.displayName,
              email: firebaseUser.email,
              photoURL: firebaseUser.photoURL,
              phoneNumber: firebaseUser.phoneNumber || "",
            },
            isLoggedIn: true,
            isLoading: false,
          });
        } catch (error) {
          set({ error: "Google login failed", isLoading: false });
        }
      },

      loginWithGithub: async () => {
        set({ isLoading: true, error: null });
        try {
          const result = await signInWithPopup(auth, githubProvider);
          const firebaseUser = result.user;
          set({
            user: {
              uid: firebaseUser.uid,
              displayName: firebaseUser.displayName,
              email: firebaseUser.email,
              photoURL: firebaseUser.photoURL,
              phoneNumber: firebaseUser.phoneNumber || "",
            },
            isLoggedIn: true,
            isLoading: false,
          });
        } catch (error) {
          set({ error: "GitHub login failed", isLoading: false });
        }
      },

      logout: async (router, locale) => {
        await signOut(auth);
        set({ user: null, isLoggedIn: false, error: null });
        if (router && locale) {
          router.push(`/${locale}/login`);
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        isLoggedIn: state.isLoggedIn,
      }),
    }
  )
);
