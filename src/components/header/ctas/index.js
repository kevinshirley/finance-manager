import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { HEADER_CTA_ICON } from '../../../styles/styles-variables';

export default function HeaderCtas() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{}}>
        <View style={styles.cta}>
          <View style={styles.ctaIconBadge}>
            <FontAwesome name='send' size={24} color={HEADER_CTA_ICON.COLOR} />
          </View>
          <Text style={styles.ctaText}>Balance</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}}>
        <View style={styles.cta}>
          <View style={styles.ctaIconBadge}>
            <AntDesign name='select1' size={24} color={HEADER_CTA_ICON.COLOR} />
          </View>
          <Text style={styles.ctaText}>Payments</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}}>
        <View style={styles.cta}>
          <View style={styles.ctaIconBadge}>
            <MaterialIcons name='attach-money' size={24} color={HEADER_CTA_ICON.COLOR} />
          </View>
          <Text style={styles.ctaText}>Debt</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}}>
        <View style={styles.cta}>
          <View style={styles.ctaIconBadge}>
            <FontAwesome name='level-up' size={24} color={HEADER_CTA_ICON.COLOR} />
          </View>
          <Text style={styles.ctaText}>Invesments</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cta: {
    alignItems: 'center',

  },
  ctaIconBadge: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 13,
    justifyContent: 'center',
    marginBottom: 8,
  },
  ctaText: {
    color: '#fff',
  },
});
