import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormData, loginSchema } from './loginSchema';
import { useLoginMutation } from '@/shared/queries/auth/useLoginMutation';

export function useLoginViewModel() {
  const { loginMutation } = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: 'lucas@teste.com.br',
      password: '1234567',
    },
  });

  const onSubmit = handleSubmit(async (data: LoginFormData) => {
    const userData = await loginMutation(data);
    console.log(userData);
  });

  return {
    onSubmit,
    control,
    errors,
  };
}
