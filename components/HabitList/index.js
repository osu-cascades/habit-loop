import React from "react";
import { Text } from "native-base";
import _ from 'lodash';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';

import { GetHabits } from '../../data';
import HabitList from './components/HabitList';
import { 
  Loading,
  CreateHabitFAB,
 } from '../';

class HabitListContainer extends React.Component {
  render() {
    if (this.props.data.loading){
      return <Loading/>
    } else if (this.props.data.error) {
      return <Text>Error Loading Data!</Text>
    }

    const habits = this.props.data.getHabits.map(item => ({
        name: item.habit_name,
        created_at: item.created_at,
        habit_id: item.item_id,
        key: item.item_id,
        type: item.type,
        completed_today: item.completed_today || false,
        recurrence: item.recurrence,
        user_id: item.user_id,
    }));

    return (
        <>
          <HabitList 
            habits={habits}
            data={this.props.data}
            navigate={this.props.navigation.navigate}
            refetch={() => this.props.data.refetch()}
          />
          <CreateHabitFAB refetch={() => this.props.data.refetch()}/>
        </>
    );
  }
}

export default compose(
  withNavigation,
  GetHabits,
)(HabitListContainer);