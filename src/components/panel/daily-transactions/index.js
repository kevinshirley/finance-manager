import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-elements';

export default function PanelDailyTransactions() {
  const dailyTransactions = [
    {
      date: 'Today',
      transactions: [
        {
          transactionEvent: 'Grocery',
          name: 'Maxi Terrebonne',
          amount: '64.28',
          transactionType: 'expense',
          date: 'Sept 7',
        },
        {
          transactionEvent: 'Pharmaprix',
          name: 'Jean Coutu1',
          amount: '12.64',
          transactionType: 'expense',
          date: 'Sept 7',
        },
      ],
    },
    {
      date: 'Yesterday',
      transactions: [
        {
          transactionEvent: 'Grocery',
          name: 'Maxi Terrebonne',
          amount: '64.28',
          transactionType: 'expense',
          date: 'Sept 6',
        },
        {
          transactionEvent: 'Pharmaprix',
          name: 'Jean Coutu2',
          amount: '12.64',
          transactionType: 'expense',
          date: 'Sept 6',
        },
      ],
    },
    {
      date: 'Saturday',
      transactions: [
        {
          transactionEvent: 'Grocery',
          name: 'Maxi Terrebonne',
          amount: '64.28',
          transactionType: 'expense',
          date: 'Sept 5',
        },
        {
          transactionEvent: 'Pharmacie',
          name: 'Jean Coutu3',
          amount: '12.64',
          transactionType: 'expense',
          date: 'Sept 5',
        },
      ],
    },
    {
      date: 'Friday',
      transactions: [
        {
          transactionEvent: 'Grocery',
          name: 'Maxi Terrebonne',
          amount: '64.28',
          transactionType: 'expense',
          date: 'Sept 4',
        },
        {
          transactionEvent: 'Pharmacie',
          name: 'Jean Coutu4',
          amount: '12.64',
          transactionType: 'expense',
          date: 'Sept 4',
        },
      ],
    },
    {
      date: 'Thursday',
      transactions: [
        {
          transactionEvent: 'Grocery',
          name: 'Maxi Terrebonne',
          amount: '64.28',
          transactionType: 'expense',
          date: 'Sept 3',
        },
        {
          transactionEvent: 'Pharmacie',
          name: 'Jean Coutu4',
          amount: '12.64',
          transactionType: 'expense',
          date: 'Sept 3',
        },
      ],
    },
    {
      date: 'Wednesday',
      transactions: [
        {
          transactionEvent: 'Grocery',
          name: 'Maxi Terrebonne',
          amount: '64.28',
          transactionType: 'expense',
          date: 'Sept 2',
        },
        {
          transactionEvent: 'Pharmacie',
          name: 'Jean Coutu4',
          amount: '12.64',
          transactionType: 'expense',
          date: 'Sept 2',
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {dailyTransactions.map(day => (
          <View style={styles.dailyTransactions}>
            <Text style={styles.dailyDate}>{day.date}</Text>
            <View style={styles.transactionContainer}>
              {day.transactions.map(transaction => (
                <View style={styles.transaction}>
                  <View style={styles.transactionColumn}>
                    <Text>icon</Text>
                  </View>
                  <View style={styles.transactionColumn}>
                    <Text>{transaction.transactionEvent}</Text>
                    <Text>{transaction.name}</Text>
                  </View>
                  <View style={styles.transactionColumn}>
                    <Text>{transaction.amount}</Text>
                    <Text>{transaction.date}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dailyTransactions: {
    marginBottom: 20,
  },
  dailyDate: {
    marginBottom: 10,
    fontSize: 17,
  },
  transactionContainer: {
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 10,
  },
  transactionColumn: {

  },
});
