import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen = () => {
  const [transactions, setTransactions] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const storedTransactions = await AsyncStorage.getItem('transactions');
        setTransactions(storedTransactions ? JSON.parse(storedTransactions) : []);
      } catch (error) {
        console.error('Error loading transactions:', error);
      }
    };
    loadTransactions();
  }, []);

  const handleAddTransaction = () => {
    navigation.navigate('ManualEntry');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FinTrak Dashboard</Text>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text>{item.merchant}</Text>
            <Text>${item.amount}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add Transaction" onPress={handleAddTransaction} />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... styles
});

export default DashboardScreen;
