import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormData, loginSchema } from './loginSchema';

export function useLoginViewModel() {
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
    console.log(data);
  });

  return {
    onSubmit,
    control,
    errors,
  };
}
