import React from 'react';
import { Text, ListItem, Badge, Right } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';

export const TopStreakBoard = props => (
  <FlatList
    data={props.items}
    onRefresh={props.refetch}
    refreshing={props.networkStatus === 4}
    renderItem={item => (
      <ListItem style={styles.listItem}>
        <Badge style={styles.badge}>
          <Text>{item.index + 1}</Text>
        </Badge>
        <Text>{item.item.username}</Text>
        <Badge style={styles.streakBadge}>
          <Text>Streak {item.item.score}</Text>
        </Badge>
      </ListItem>
    )}></FlatList>
);

const styles = StyleSheet.create({
  items: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
  },
  listItem: {
    width: '100%',
    justifyContent: 'flex-start',
    borderRightColor: '#222222',
    borderRightWidth: 5,
  },
  badge: {
    backgroundColor: '#E6B43C',
    marginRight: '5%',
  },
  streakBadge: {
    backgroundColor: '#E6B43C',
    marginLeft: 'auto',
  },

});
