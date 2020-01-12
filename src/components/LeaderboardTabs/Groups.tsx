import React from 'react';
import { Text, ListItem } from 'native-base';
import { FlatList } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { Loading } from '@src/components';

const GET_USER_GROUPS = gql`
  query getUserGroups {
    getUserGroups {
      item_id
      group_name
    }
  }
`;

const Groups = ({ handleGroupChange }) => {
  const { data, error, loading, refetch, networkStatus } = useQuery(GET_USER_GROUPS, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <Loading />;

  const items = data.getUserGroups.map(item => Object.assign(item, { key: item.item_id.toString() }));

  return (
    <FlatList
      data={items}
      onRefresh={refetch}
      refreshing={networkStatus === 4}
      renderItem={row => (
        <ListItem onPress={() => handleGroupChange(row.item.group_name, row.item.item_id)}>
          <Text>{row.item.group_name}</Text>
        </ListItem>
      )}
    />
  );
};

export default Groups;
