import { Slot, Stack } from 'expo-router';
import { AuthProvider } from '../src/AuthContext';




export default function Layout() {
  return (
    <AuthProvider>
    <Stack
      screenOptions={{
        headerShown: false,   
        gestureEnabled: false, 
      }}
    >
         
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Slot />
    </Stack>
    </AuthProvider>
  );
}
