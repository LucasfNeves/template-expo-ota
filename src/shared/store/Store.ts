import { StateCreator } from 'zustand';
import { UserSlice } from './slice/UserSlice';

export type Store = {
  user: UserSlice;
};

export type StoreSlice<TSlice> = StateCreator<
  Store,
  [['zustand/devtools', never], ['zustand/immer', never], ['zustand/persist', unknown]],
  [],
  TSlice
>;
