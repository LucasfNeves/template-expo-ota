import * as AuthService from '@/shared/api/services/authService';
import { RegisterHttpParams } from '@/shared/interfaces/http/register';
import { useMutation } from '@tanstack/react-query';

export const useRegisterMutation = () => {
  const { mutateAsync: registerMutation } = useMutation({
    mutationFn: (userData: RegisterHttpParams) => AuthService.register(userData),
    onSuccess: () => {
      console.log('Registration successful');
    },
    onError: (error) => {
      console.error('Registration failed:', error);
    },
  });

  return {
    registerMutation,
  };
};
