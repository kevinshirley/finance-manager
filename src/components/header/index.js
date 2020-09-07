import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements';

import HeaderOverview from './overview';
import HeaderCtas from './ctas';

export default function Header() {
  return (
    <View style={styles.container}>
      <HeaderOverview />
      <HeaderCtas />
      <Divider style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  footer: {
    marginBottom: 30,
  },
});
