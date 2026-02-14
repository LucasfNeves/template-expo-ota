import { RegisterHttpParams } from '@/shared/interfaces/http/register';
import { apiClient } from '../api-client';
import { AuthResponse } from '@/shared/interfaces/http/auth-response';
import { LoginHttpParams } from '@/shared/interfaces/http/login';

export async function register(userData: RegisterHttpParams) {
  const { data } = await apiClient.post<AuthResponse>('/auth/register', userData);
  return data;
}

export async function login({ email, password }: LoginHttpParams) {
  const { data } = await apiClient.post<AuthResponse>('/auth/login', { email, password });
  return data;
}
