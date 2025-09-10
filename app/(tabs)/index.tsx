import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from 'expo-router';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FinTrak</Text>
      <View style={styles.buttonContainer}>
        <Button title="Onboarding" onPress={() => navigation.navigate('onboarding')} />
        <Button title="SMS Permission" onPress={() => navigation.navigate('smsPermission')} />
        <Button title="Dashboard" onPress={() => navigation.navigate('dashboard')} />
        <Button title="Transactions" onPress={() => navigation.navigate('transactions')} />
        <Button title="Manual Entry" onPress={() => navigation.navigate('manualEntry')} />
        <Button title="Settings" onPress={() => navigation.navigate('settings')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
  },
});
