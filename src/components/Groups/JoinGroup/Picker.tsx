import React from 'react';
import { Text, ListItem } from 'native-base';
import { FlatList } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const GET_ALL_GROUPS = gql`
  query getAllGroups {
    getAllGroups {
      group_name
      item_id
      user_id
    }
  }
`;

const GroupPicker = props => {
  const { data, error, loading, refetch, networkStatus } = useQuery(GET_ALL_GROUPS, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading data! {error}</Text>;

  const groups = data.getAllGroups.map(group => ({
    label: group.group_name,
    value: group.user_id,
    key: group.item_id,
  }));

  return (
    <FlatList
      data={groups}
      onRefresh={refetch}
      refreshing={networkStatus === 4}
      renderItem={item => (
        <ListItem
          onPress={() => {
            props.setFieldValue('group_id', item.item.value);
            props.setFieldValue('group_name', item.item.label);
          }}>
          <Text>{item.item.label}</Text>
        </ListItem>
      )}></FlatList>
  );
};

export default GroupPicker;
