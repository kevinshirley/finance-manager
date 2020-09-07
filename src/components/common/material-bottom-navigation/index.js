import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { HEADER_CTA_ICON } from '../../../styles/styles-variables';

const Tab = createBottomTabNavigator();

const SendIcon = () => (
  <View>
    <FontAwesome name='send' size={24} color={HEADER_CTA_ICON.COLOR} />
  </View>
);

export default function MaterialBottomNavigation() {
  return (
    <View>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={SendIcon} />
          <Tab.Screen name="Settings" component={SendIcon} />
        </Tab.Navigator>
      </NavigationContainer>
      {/* <Text>navigation test</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
