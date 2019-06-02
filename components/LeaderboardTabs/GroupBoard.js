import React, { Component } from 'react';
import { 
    Text,
    ListItem,
    Badge,
} from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import { compose, Query } from 'react-apollo';

import { 
  Loading,
} from '../';
import gql from "graphql-tag";

const GET_GROUP_LEADERBOARD = gql`
  query getGroupLeaderboard($item_id: String!) { 
    getGroupLeaderboard(item_id: $item_id) {
      username
      user_id
      score
    }
  }
`;

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

class GroupBoard extends Component {
  render() {      
    return (
        <Query 
            query={GET_GROUP_LEADERBOARD}
            variables={{ item_id: this.props.itemId }}
            notifyOnNetworkStatusChange
        >
            {({ loading, error, data, refetch, networkStatus }) => {
                if (loading) return <Loading />;
                if (error) return <Text>`Error loading data! ${error.message}`</Text>;

                const items = data.getGroupLeaderboard.map((item, key) => 
                  Object.assign(item, {
                    key: key.toString() || '',
                  }));

                  return (
                    <FlatList 
                        data={items}
                        onRefresh={refetch}
                        refreshing={networkStatus === 4 }
                        renderItem={(item) => 
                            <ListItem style={styles.listItem}>
                                <Badge style={styles.badge}><Text>{item.index + 1}</Text></Badge>
                                <Text style={styles.listItemText}>{item.item.username}</Text>
                                <Badge><Text>Streak {item.item.score}</Text></Badge>
                            </ListItem>
                        }
                    >
                    </FlatList>
                )
            }}
        </Query>
    );
  }
}

export default GroupBoard;