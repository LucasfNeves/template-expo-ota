import { StateCreator } from 'zustand';

/**
 * Tipo para criar slices com namespace (state.auth.user).
 * @template TStore - Tipo da store completa
 * @template TSlice - Tipo do slice (estado + ações)
 */
export type SliceCreator<TStore, TSlice> = StateCreator<
  TStore,
  [['zustand/persist', unknown], ['zustand/devtools', never], ['zustand/immer', never]],
  [],
  TSlice
>;
