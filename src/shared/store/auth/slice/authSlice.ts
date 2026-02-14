import { UserInterface } from '@/shared/interfaces/user/user';
import { SliceCreator } from '../../types';

interface SetSessionParams {
  user: UserInterface;
  token: string;
  refreshToken: string;
}

interface UpdateTokenParams {
  token: string;
  refreshToken: string;
}

type AuthState = {
  user: UserInterface | null;
  token: string | null;
  refreshToken: string | null;
};

type AuthActions = {
  setSession: (params: SetSessionParams) => void;
  logout: () => void;
  updateTokens: (params: UpdateTokenParams) => void;
};

export type AuthSlice = AuthState & AuthActions;

export type AuthStore = {
  auth: AuthSlice;
};

export const createAuthSlice: SliceCreator<AuthStore, AuthSlice> = (set) => ({
  user: null,
  token: null,
  refreshToken: null,

  setSession: (params: SetSessionParams) =>
    set((state) => {
      state.auth.user = params.user;
      state.auth.token = params.token;
      state.auth.refreshToken = params.refreshToken;
    }),

  logout: () =>
    set((state) => {
      state.auth.user = null;
      state.auth.token = null;
      state.auth.refreshToken = null;
    }),

  updateTokens: (params: UpdateTokenParams) =>
    set((state) => {
      if (state.auth.user) {
        state.auth.token = params.token;
        state.auth.refreshToken = params.refreshToken;
      }
    }),
});
