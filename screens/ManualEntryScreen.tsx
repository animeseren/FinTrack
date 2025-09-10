import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ManualEntryScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [merchant, setMerchant] = useState('');

  const handleSaveTransaction = async () => {
    try {
      const newTransaction = { amount: parseFloat(amount), merchant };
      const storedTransactions = await AsyncStorage.getItem('transactions');
      const transactions = storedTransactions ? JSON.parse(storedTransactions) : [];
      transactions.push(newTransaction);
      await AsyncStorage.setItem('transactions', JSON.stringify(transactions));
      navigation.goBack();
    } catch (error) {
      console.error('Error saving transaction:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manual Transaction Entry</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="number-pad"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Merchant"
        value={merchant}
        onChangeText={setMerchant}
      />
      <Button title="Save Transaction" onPress={handleSaveTransaction} />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... styles
});

export default ManualEntryScreen;
