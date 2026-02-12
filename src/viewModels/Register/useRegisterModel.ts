import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormValues, RegisterSchema } from './RegisterSchema';
import { useRegisterMutation } from '@/shared/queries/auth/useRegisterMutation';
import { useStore } from '@/shared/store';
import { useShallow } from 'zustand/shallow';

export type RegisterViewProps = ReturnType<typeof useRegisterViewModel>;

export function useRegisterViewModel() {
  const { registerMutation } = useRegisterMutation();

  const { setSession } = useStore(
    useShallow((state) => ({
      setSession: state.user.setSession,
    }))
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(RegisterSchema),
    defaultValues: {
      name: 'Lucas Farias',
      email: 'lucas@teste.com.br',
      phone: '11913302042',
      password: '1234567',
      confirmPassword: '1234567',
    },
  });

  const onSubmit = handleSubmit(async (data: RegisterFormValues) => {
    const { confirmPassword: _, ...registerData } = data;
    const { user, token, refreshToken } = await registerMutation(registerData);
    setSession({ user, token, refreshToken });
  });

  return {
    onSubmit,
    control,
    errors,
  };
}
