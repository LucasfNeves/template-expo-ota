import { AppInput } from '@/shared/components/AppInput';
import { AuthFormHeader } from '@/shared/components/AuthFormHeader';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export function LoginView() {
  return (
    <View className="items-center justify-center flex-1">
      <AuthFormHeader title="Acesse sua conta" subTitle="Informe seu e-mail e senha para entrar" />

      <AppInput leftIcon="mail-outline" label="E-MAIL" />
      <AppInput leftIcon="lock-closed-outline" label="SENHA" secureTextEntry />

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text>Registro</Text>
      </TouchableOpacity>
    </View>
  );
}
