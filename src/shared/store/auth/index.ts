import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
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
      storage: createJSONStorage(() => AsyncStorage),
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
