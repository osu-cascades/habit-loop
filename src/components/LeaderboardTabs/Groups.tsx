import React from 'react';
import { Text, ListItem } from 'native-base';
import { FlatList } from 'react-native';
import { compose } from 'react-apollo';
import { GetUserGroups } from '@src/data';
import { renderForError, renderWhileLoading } from '@src/components';

const Groups = props => {
  const items = props.data.getUserGroups.map(item => Object.assign(item, { key: item.item_id.toString() }));

  return (
    <FlatList
      data={items}
      onRefresh={props.data.refetch}
      refreshing={props.data.networkStatus === 4}
      renderItem={item => (
        <ListItem onPress={() => props.handleGroupChange(item.item.group_name, item.item.item_id)}>
          <Text>{item.item.group_name}</Text>
        </ListItem>
      )}></FlatList>
  );
};

export default compose(
  GetUserGroups,
  renderForError(),
  renderWhileLoading()
)(Groups);
