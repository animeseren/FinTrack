import { View, Text, StyleSheet, FlatList } from 'react-native';

// Placeholder data for the transaction list. Replace with actual data.
const transactions = [
  { amount: 10.99, merchant: 'Starbucks', date: '2024-03-08', type: 'debit', category: 'Food' },
  { amount: 25.50, merchant: 'Uber', date: '2024-03-08', type: 'debit', category: 'Transport' },
  // Add more placeholder transactions here...
];

const TransactionListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction List</Text>
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
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default TransactionListScreen;
