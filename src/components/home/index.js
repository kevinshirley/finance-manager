import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.recentTransactionsHeader}>
        <Text style={styles.recentTransactionsHeaderText}>Recent Transactions</Text>
        <Button title='See all' />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
  },
  recentTransactionsHeader: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderWidth: 1,
  },
  recentTransactionsHeaderText: {
    color: '#0d47a1',
  },
});
