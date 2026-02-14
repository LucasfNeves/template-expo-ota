import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { AuthStore, createAuthSlice } from './slice/authSlice';

export const useAuthStore = create<AuthStore>()(
  persist(
    devtools(
      immer((...params) => ({
        auth: createAuthSlice(...params),
      })),
      { name: 'AuthStore', enabled: __DEV__ }
    ),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        auth: {
          user: state.auth.user,
          token: state.auth.token,
          refreshToken: state.auth.refreshToken,
        },
      }),
    }
  )
);
