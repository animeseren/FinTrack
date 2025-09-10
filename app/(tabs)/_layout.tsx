import { StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="smsPermission" />
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="transactions" />
      <Stack.Screen name="manualEntry" />
      <Stack.Screen name="settings" />
    </Stack>
  );
}

const styles = StyleSheet.create({});
