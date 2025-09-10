import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from 'expo-router';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FinTrak!</Text>
      <Text style={styles.description}>
        FinTrak helps you track your finances easily and securely.
      </Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('smsPermission')}
      />
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

export default OnboardingScreen;
