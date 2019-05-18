import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Badge, Right } from 'native-base';
import { FlatList } from 'react-native';

import { StyleSheet } from 'react-native';
import { compose } from 'react-apollo';
import { 
  GetTopStreaks,
  GetGroupLeaderboard,
 } from '../../data';
import { 
  Loading,
 } from '../';

class LeaderboardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    if (this.props.data.loading){
      return <Loading/>
    } else if (this.props.data.error) {
      return <Text>Error Loading Data!</Text>
    }

    let items;

    if (this.props.type === 'top25') {
        items = this.props.data.getTopStreaks.map((item, key) => Object.assign(item, { key: key.toString() }));
    } else if (this.props.type === 'group') {
        items = this.props.data.getGroupLeaderboard.map((item, key) => Object.assign(item, { key: key.toString() }));
    }

    return (
      <FlatList 
        data={items}
        onRefresh={this.props.data.refetch}
        refreshing={this.props.data.networkStatus === 4 }
        renderItem={(item) => 
          <ListItem style={styles.listItem}>
            <Badge style={styles.badge}><Text>{item.index + 1}</Text></Badge>
            <Text style={styles.listItemText}>{item.item.username}</Text>
            <Badge><Text>Streak {item.item.score}</Text></Badge>
          </ListItem>
        }
        >
      </FlatList>
    );
  }
}

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

export default compose(
  GetTopStreaks,
  GetGroupLeaderboard,
)(LeaderboardList)