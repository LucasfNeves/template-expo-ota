import '@/styles/global.css';
import { Stack } from 'expo-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/queries/queryClient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(public)/login" />
          <Stack.Screen name="(public)/register" />
          <Stack.Screen name="(private)" />
        </Stack>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
