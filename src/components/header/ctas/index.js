import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function HeaderCtas() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{}}>
        <Text>header ctas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'orange',
    // marginTop: 20,
    alignSelf: 'stretch',
  },
});
