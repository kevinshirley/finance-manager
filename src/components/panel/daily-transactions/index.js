import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-elements';

export default function PanelDailyTransactions() {
  return (
    <View style={styles.container}>
      <Text>daily transactions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
  },
});
