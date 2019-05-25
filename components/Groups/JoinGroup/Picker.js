import React, { Component } from 'react';
import { Picker } from '../../basic';
import { Query } from 'react-apollo';
import { 
    Text,
    ListItem,
    Badge,
} from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import { 
  Loading,
} from '../../Loading';
import gql from 'graphql-tag';

const GET_ALL_GROUPS = gql`
  query getAllGroups { 
    getAllGroups {
      group_name
      item_id
      user_id
    }
  }
`;

const GroupPicker = props => (
    <Query 
        query={GET_ALL_GROUPS}
    >
        {({ loading, error, data, refetch, networkStatus }) => {
            if (loading) return <Text>Loading...</Text>;
            if (error) return <Text>Error loading data! {error}</Text>;

            const items = data.getAllGroups.map((item) => ({ label: item.group_name, value: item.user_id, key: item.item_id }));
            return (
                <FlatList 
                    data={items}
                    onRefresh={refetch}
                    refreshing={networkStatus === 4 }
                    renderItem={(item) => 
                        <ListItem onPress={() => { 
                          props.setFieldValue('group_id', item.item.value);
                          props.setFieldValue('group_name', item.item.label);
                        }}>
                            <Text>{item.item.label}</Text>
                        </ListItem>
                    }
                >
                </FlatList>
            );
        }}
    </Query>
);

const styles = StyleSheet.create({
    items: {
      display: 'flex',
      alignItems: 'flex-start',
      width: '100%'
    },
    listItem: {
      width: '100%',
      justifyContent: 'flex-start',
      borderRightColor: '#222222',
      borderRightWidth: 5
    },
    badge: {
      backgroundColor: '#F78E2A',
      marginRight: '5%'
    },
    listItemText: {
      alignSelf: 'flex-start',
    }
});

export default GroupPicker;
