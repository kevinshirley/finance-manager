import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { HEADER_CTA_ICON } from '../../../styles/styles-variables';

const Tab = createBottomTabNavigator();

const SendIcon = () => (
  <FontAwesome name='send' size={24} color={HEADER_CTA_ICON.COLOR} />
);

const SendIcon2 = () => (
  <MaterialIcons name='attach-money' size={24} color={HEADER_CTA_ICON.COLOR} />
);

export default function MaterialBottomNavigation() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={SendIcon} />
          <Tab.Screen name="Settings" component={SendIcon2} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
