import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headerOverview}>
        <View style={styles.headerOverviewAvailableBalance}>
          <Text style={styles.headerOverviewAvailableBalanceAmount}>$22,589.76</Text>
          <Text style={styles.headerOverviewAvailableBalanceText}>Available Balance</Text>
        </View>
        <View style={styles.headerOverviewProfileDetails}>
          <View>
            <Ionicons name="ios-notifications" size={33} color="#fff" />
            <Badge
              status="error"
              containerStyle={{ position: 'absolute', top: -6, right: -7 }}
              value={2}
            />
          </View>
          <View>
            <Avatar
              rounded
              source={{
                uri: 'https://randomuser.me/api/portraits/men/36.jpg',
              }}
              size="medium"
              avatarStyle={styles.headerOverviewProfileAvatar}
            />
          </View>
        </View>
      </View>
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
  headerOverview: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  headerOverviewAvailableBalance: {
    flexDirection: 'column',
  },
  headerOverviewAvailableBalanceAmount: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerOverviewAvailableBalanceText: {
    color: '#fff',
  },
  headerOverviewProfileDetails: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerOverviewProfileAvatar: {
    borderWidth: 2,
    borderColor: '#fff',
  },
});
