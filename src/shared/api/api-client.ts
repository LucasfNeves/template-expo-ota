import axios, { AxiosInstance } from 'axios';
import { Platform } from 'react-native';

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
  }

  getInstance() {
    return this.instance;
  }
}

export const apiClient = new ApiClient().getInstance();
