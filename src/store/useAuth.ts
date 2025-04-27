import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface useAuthProps {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const useAuth = create(
  persist<useAuthProps>(
    set => ({
      isLoggedIn: false,
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false }),
    }),
    {
      name: 'auth-storage',
    },
  ),
);

export default useAuth;
