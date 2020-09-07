import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { APP_CONTAINER } from './src/styles/styles-variables';
import Home from './src/components/home';
import Header from './src/components/header';
import MaterialBottomNavigation from './src/components/common/material-bottom-navigation';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Home />
      <MaterialBottomNavigation />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_CONTAINER.BACKGROUND_COLOR,
    flex: 1,
  },
});
