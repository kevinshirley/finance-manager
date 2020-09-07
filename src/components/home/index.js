import React from 'react';
import { StyleSheet, View } from 'react-native';
import PanelHeader from '../common/panel-header';

export default function Home() {
  return (
    <View style={styles.container}>
      <PanelHeader title='Recent Transactions' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
  },
});
