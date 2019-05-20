import React, { Component } from 'react';
import { 
  Text,
  ListItem,
  Badge,
} from 'native-base';
import { compose } from 'react-apollo';
import { FlatList, StyleSheet } from 'react-native';
import { 
  GetTopStreaks,
 } from '../../data';
import { 
  Loading,
} from '../';
import { TopStreakBoard } from './Board'

class TopStreakList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.data.loading) {
      return <Loading/>
    } else if (this.props.data.error) {
      return <Text>Error Loading Data!</Text>
    }

    const items = this.props.data.getTopStreaks.map((item, key) => Object.assign(item, { key: key.toString() }));

    return (
      <TopStreakBoard 
          items={items}
          networkStatus={this.props.data.networkStatus}
          refetch={this.props.data.refetch}
      />
    )
  }
}

export default compose(
  GetTopStreaks,
)(TopStreakList)