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
      tab: props.type,
    };
  }

  render() {
    if (this.props.loadingOne || this.props.loadingTwo) {
      return <Loading/>
    } else if (this.props.tsError || this.props.glError) {
      return <Text>Error Loading Data!</Text>
    }

    let topStreaks = this.props.topStreaks.map((item, key) => Object.assign(item, { key: key.toString() }));
    let groupStreaks = this.props.groupLeaderboard.map((item, key) => Object.assign(item, { key: key.toString() }));;
    let data = [];
    if (this.state.tab === 'top25') {
      data = topStreaks;
    } else if (this.state.tab == 'groups') {
      data = groupStreaks;
    }
    console.log(this.state.tab);
    return (
      <FlatList 
        data={data}
        // onRefresh={this.props.data.refetch}
        // refreshing={this.props.data.networkStatus === 4 }
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
  GetGroupLeaderboard
)(LeaderboardList)