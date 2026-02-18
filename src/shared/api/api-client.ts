import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance } from 'axios';
import { Platform } from 'react-native';
import { useAuthStore } from '../store';

const getBaseUrl = () => {
  return Platform.select({
    ios: 'http://localhost:3000',
    android: 'http://10.0.2.2:3001',
    default: 'http://localhost:3001',
  });
};

export const baseURL = getBaseUrl();

export class ApiClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  getInstance() {
    return this.instance;
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(
      async (config) => {
        const userData = await AsyncStorage.getItem('auth-storage');

        if (userData) {
          const {
            state: { token },
          } = JSON.parse(userData);

          if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
          }
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        alert('CAiu bno revalidate');
        const originalRequest = error.config;

        if (
          error.response?.status === 401 &&
          error.response?.data?.message === 'Token expirado' &&
          !this.isRefreshing
        ) {
          this.isRefreshing = true;

          try {
            const userData = await AsyncStorage.getItem('auth-storage');

            if (!userData) {
              throw new Error('Usuário não autenticado');
            }

            const {
              state: { refreshToken },
            } = JSON.parse(userData);

            if (!refreshToken) {
              throw new Error('Refresh Token não encontrado');
            }

            const { data: response } = await this.instance.post('/auth/refresh', {
              refreshToken,
            });

            const currentUserData = JSON.parse(userData);

            const updatedUserTokens = {
              ...currentUserData,
              token: response.token,
              refreshToken: response.refreshToken,
            };

            await AsyncStorage.setItem('auth-storage', JSON.stringify(updatedUserTokens));

            originalRequest.headers.Authorization = `Bearer ${response.token}`;

            return this.instance(originalRequest);
          } catch {
            this.handleUnauthorized();
            return Promise.reject(new Error('Sessão expirada faça login novamente'));
          } finally {
            this.isRefreshing = false;
          }
        }

        if (error.response && error.response.data) {
          return Promise.reject(new Error(error.response.data.message));
        } else {
          return Promise.reject(new Error('Falha na requisição'));
        }
      }
    );
  }

  private async handleUnauthorized() {
    const { logout } = useAuthStore.getState();

    delete this.instance.defaults.headers.common['Authorization'];

    logout();
  }
}

export const apiClient = new ApiClient().getInstance();
