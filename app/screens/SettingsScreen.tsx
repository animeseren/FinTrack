import { View, Text, StyleSheet, Switch } from 'react-native';

const SettingsScreen = () => {
  // Implement settings screen with PIN/biometric toggle here.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.setting}>
        <Text>Biometric/PIN Login</Text>
        <Switch value={false} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});

export default SettingsScreen;
