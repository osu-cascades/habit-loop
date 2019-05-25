import React from "react";
import { Text } from "react-native";
import _ from 'lodash';
import { compose } from 'react-apollo';

import { GetUserStreak } from '../data';
import Loading from './Loading';

class Streak extends React.Component {
  render() {
    if (this.props.data.loading){
      return <Loading/>
    } else if (this.props.data.error) {
      return <Text>Error Loading Data!</Text>
    }
    const streak = this.props.data.getUserStreak;

    return (
        <Text>Your streak is {streak.score}</Text>
    );
  }
}

export default compose(
  GetUserStreak,
)(Streak);