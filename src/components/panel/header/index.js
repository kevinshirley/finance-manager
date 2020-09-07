import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { PANEL_HEADER_TEXT } from '../../../styles/styles-variables';

export default function PanelHeader({ title }) {
  return (
    <View style={styles.panelHeader}>
      <Text style={styles.panelHeaderText}>{title}</Text>
      <Button title='See all' />
    </View>
  );
}

const styles = StyleSheet.create({
  panelHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  panelHeaderText: {
    color: PANEL_HEADER_TEXT.COLOR,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
