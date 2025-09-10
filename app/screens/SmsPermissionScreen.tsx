import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import { useNavigation } from 'expo-router';
import * as Permissions from 'expo-permissions'; // Corrected import statement

const requestSmsPermission = async () => {
  const { status } = await Permissions.askAsync(Permissions.SMS);
  if (status === 'granted') {
    console.log('SMS permission granted');
    // Navigate to the dashboard after permission is granted.
  } else {
    console.log('SMS permission denied');
    // Handle permission denial appropriately.  Perhaps show an alert or navigate to a screen explaining why permission is needed.
  }
};

const SmsPermissionScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SMS Permission Request</Text>
      <Text style={styles.description}>
        FinTrak needs access to your SMS messages to automatically log transactions.
      </Text>
      <Button title="Grant Permission" onPress={requestSmsPermission} />
      <Button title="Skip" onPress={() => navigation.navigate('dashboard')} /> {/* Added a Skip button */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
});

export default SmsPermissionScreen;
