import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from 'expo-router';

// Placeholder data for the dashboard. Replace with actual data.
const transactions = [
  { amount: 10.99, merchant: 'Starbucks', date: '2024-03-08', type: 'debit', category: 'Food' },
  { amount: 25.50, merchant: 'Uber', date: '2024-03-08', type: 'debit', category: 'Transport' },
  // Add more placeholder transactions here...
];

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FinTrak Dashboard</Text>
      <Text style={styles.totalSpend}>Total Spend: $100</Text>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text>{item.merchant}</Text>
            <Text>${item.amount}</Text>
          </View>
        )}
        keyExtractor={(item) => item.merchant}
      />
      <Button title="View Transactions" onPress={() => navigation.navigate('transactions')} />
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
  totalSpend: {
    fontSize: 18,
    marginBottom: 16,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default DashboardScreen;
