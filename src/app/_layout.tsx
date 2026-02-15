import '@/styles/global.css';
import { Stack } from 'expo-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/queries/queryClient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppModal } from '@/shared/components/AppModal';
import ToastManager from 'toastify-react-native';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(public)" />
          <Stack.Screen name="(private)" />
        </Stack>
      </QueryClientProvider>
      <AppModal />
      <ToastManager useModal={false} />
    </SafeAreaProvider>
  );
}
