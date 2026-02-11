import { Redirect } from 'expo-router';

const token = null;

export default function App() {
  if (!token) {
    return <Redirect href="(public)/login" />;
  }

  return <Redirect href="/(private)/home" />;
}
