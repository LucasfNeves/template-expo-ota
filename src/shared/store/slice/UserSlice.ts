import { UserInterface } from '@/shared/interfaces/user/user';
import { StoreSlice } from '../Store';

interface SetSessionParams {
  user: UserInterface;
  token: string;
  refreshToken: string;
}

interface UpdateTokenParams {
  token: string;
  refreshToken: string;
}

type UserStore = {
  user: UserInterface | null;
  token: string | null;
  refreshToken: string | null;
};

type UserActions = {
  setSession: (params: SetSessionParams) => void;
  logout: () => void;
  updateTokens: (params: UpdateTokenParams) => void;
};

export type UserSlice = UserStore & UserActions;

export const createUserSlice: StoreSlice<UserSlice> = (set) => ({
  user: null,
  token: null,
  refreshToken: null,

  setSession: (params: SetSessionParams) =>
    set((state) => {
      state.user.user = params.user;
      state.user.token = params.token;
      state.user.refreshToken = params.refreshToken;
    }),

  logout: () =>
    set((state) => {
      state.user.user = null;
      state.user.token = null;
      state.user.refreshToken = null;
    }),

  updateTokens: (params: UpdateTokenParams) =>
    set((state) => {
      if (state.user) {
        state.user.token = params.token;
        state.user.refreshToken = params.refreshToken;
      }
    }),
});
