import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ManualEntryScreen = () => {
  // Implement manual transaction entry form here.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manual Transaction Entry</Text>
      <TextInput style={styles.input} placeholder="Amount" keyboardType="number-pad" />
      <TextInput style={styles.input} placeholder="Merchant" />
      <Button title="Add Transaction" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default ManualEntryScreen;
