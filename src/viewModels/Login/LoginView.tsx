import { AppInputController } from '@/shared/components/AppInputController';
import { AuthFormHeader } from '@/shared/components/AuthFormHeader';
import { KeyBoardContainer } from '@/shared/components/KeyboardContainer';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { useLoginViewModel } from './useLoginViewModel';

export function LoginView() {
  const { onSubmit, control } = useLoginViewModel();
  return (
    <KeyBoardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <AuthFormHeader title="Crie sua conta" subTitle="Informe seus dados de acesso" />
        <AppInputController leftIcon="mail-outline" label="E-MAIL" control={control} name="email" />
        <AppInputController
          leftIcon="lock-closed-outline"
          label="SENHA"
          control={control}
          name="password"
          secureTextEntry
        />

        <TouchableOpacity onPress={onSubmit}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text>Registrar</Text>
        </TouchableOpacity>
      </View>
    </KeyBoardContainer>
  );
}
