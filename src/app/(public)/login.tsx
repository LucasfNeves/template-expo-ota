import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Login() {
  return (
    <View className="flex items-center justify-center h-screen">
      <TouchableOpacity
        className="flex items-center justify-center bg-blue-500 px-4 py-2 rounded"
        onPress={() => router.push('/register')}
      >
        <Text className="text-white text-lg">Go to Register</Text>
      </TouchableOpacity>
    </View>
  );
}
