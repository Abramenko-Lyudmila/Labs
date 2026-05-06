import { create } from 'zustand';

type User = {
  name: string;
};

type AuthState = {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
  user: null,

  login: (name) => set({ user: { name } }),

  logout: () => set({ user: null }),
}));

export default useAuthStore;