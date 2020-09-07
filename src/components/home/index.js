import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PANEL } from '../../styles/styles-variables';
import PanelHeader from '../panel/header';
import PanelBreadcrumbs from '../panel/breadcrumbs';

export default function Home() {
  return (
    <View style={styles.container}>
      <PanelHeader title='Recent Transactions' />
      <PanelBreadcrumbs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
    backgroundColor: PANEL.BACKGROUND_COLOR,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
  },
});
