import { create } from 'zustand';
import { Store } from './Store';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';
import { createUserSlice } from './slice/UserSlice';

export const useStore = create<Store>()(
  persist(
    devtools(
      immer((...params) => ({
        user: createUserSlice(...params),
      })),
      { enabled: true }
    ),
    { name: 'store' }
  )
);
