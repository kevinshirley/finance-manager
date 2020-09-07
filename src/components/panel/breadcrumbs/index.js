import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-elements';

export default function PanelBreadcrumbs() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{}}>
        <View style={styles.breadcrumb}>
          <Text>All</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}}>
        <View style={styles.breadcrumb}>
          <Badge status='success'  badgeStyle={styles.breadcrumbBadge} />
          <Text>Income</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}}>
        <View style={styles.breadcrumb}>
          <Badge status='error' badgeStyle={styles.breadcrumbBadge} />
          <Text>Expense</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
  },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginRight: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 30,
    minWidth: 55,
    justifyContent: 'center',
  },
  breadcrumbBadge: {
    marginRight: 5,
  },
});
