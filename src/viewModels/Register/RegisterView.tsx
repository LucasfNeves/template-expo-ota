import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { AppInputController } from '../../shared/components/AppInputController';
import { useRegisterViewModel } from './useRegisterViewModel';
import { AuthFormHeader } from '@/shared/components/AuthFormHeader';
import { router } from 'expo-router';
import { KeyBoardContainer } from '@/shared/components/KeyboardContainer';

export function RegisterView() {
  const { onSubmit, control } = useRegisterViewModel();
  return (
    <KeyBoardContainer>
      <ScrollView
        className="flex-1"
        contentContainerClassName="items-center justify-center px-[40px]"
      >
        <AuthFormHeader title="Crie sua conta" subTitle="Informe seus dados de acesso" />
        <AppInputController
          leftIcon="person-outline"
          label="NOME"
          control={control}
          placeholder="Seu nome completo"
          name="name"
        />
        <AppInputController
          leftIcon="mail-outline"
          label="E-MAIL"
          control={control}
          placeholder="email@exemplo.com"
          name="email"
        />
        <AppInputController
          leftIcon="call-outline"
          label="TELEFONE"
          control={control}
          placeholder="(00) 0000-0000"
          name="phone"
        />
        <AppInputController
          leftIcon="lock-closed-outline"
          label="SENHA"
          control={control}
          name="password"
          placeholder="Sua senha"
          secureTextEntry
        />
        <AppInputController
          leftIcon="lock-closed-outline"
          label="CONFIRMAR SENHA"
          control={control}
          name="confirmPassword"
          placeholder="Confirme sua senha"
          secureTextEntry
        />

        <TouchableOpacity onPress={onSubmit}>
          <Text>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyBoardContainer>
  );
}
