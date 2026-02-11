import '@/styles/global.css';
import { Stack } from 'expo-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/queries/queryClient';

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(public)/login" />
        <Stack.Screen name="(public)/register" />
        <Stack.Screen name="(private)" />
      </Stack>
    </QueryClientProvider>
  );
}
