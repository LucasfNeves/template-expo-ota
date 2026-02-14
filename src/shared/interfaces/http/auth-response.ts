import { UserInterface } from '../user/user';

export interface AuthResponse {
  user: UserInterface;
  token: string;
  refreshToken: string;
}
