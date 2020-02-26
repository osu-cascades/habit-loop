import React from 'react';
import { Text, ListItem, Badge } from 'native-base';
import { FlatList, StyleSheet, Group } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import { Loading } from '@src/components';

const GET_GROUP_LEADERBOARD = gql`
  query getGroupLeaderboard($item_id: String!) {
    getGroupLeaderboard(item_id: $item_id) {
      username
      user_id
      score
    }
  }
`;

export const GroupBoard = ({ itemId }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(GET_GROUP_LEADERBOARD, {
    variables: { item_id: itemId },
  });

  if (loading) return <Loading />;
  if (error) return <Text>`Error loading data! ${error.message}`</Text>;

  const items = data.getGroupLeaderboard.map((item, key) =>
    Object.assign(item, {
      key: key.toString() || '',
    })
  );

  return (
    <FlatList
      data={items}
      onRefresh={refetch}
      refreshing={networkStatus === 4}
      renderItem={row => (
        <ListItem style={styles.listItem}>
          <Badge style={styles.badge}>
            <Text>{row.index + 1}</Text>
          </Badge>
          <Text>{row.item.username}</Text>
          <Badge style={styles.streakBadge}>
            <Text>Streak {row.item.score}</Text>
          </Badge>
        </ListItem>
      )}
    />
  );
};

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
    marginLeft: '15%',
  },
});

export default GroupBoard;
