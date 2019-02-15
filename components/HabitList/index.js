import React, { Fragment } from "react";
import { Text } from "native-base";
import _ from 'lodash';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';

import { GetHabits } from '../../data';
import HabitList from './HabitList';
import { 
  Loading,
  CreateHabitFAB,
 } from '../';

class HabitListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,    
    }
  }


  render() {
    if (this.props.data.loading){
      return <Loading/>
    } else if (this.props.data.error) {
      return <Text>Error Loading Data!!</Text>
    }
    
    const habits = this.props.data.getHabits.map(item => {
      return { 
        name: item.name,
        created_at: item.created_at,
        habit_id: item.habit_id,
        key: item.habit_id,
      }
    });

    return (
        <Fragment>
          <HabitList 
            habits={habits}
            data={this.props.data}
            navigate={this.props.navigation.navigate}
          />
          <CreateHabitFAB refetch={() => this.props.data.refetch()}/>
        </Fragment>
    );
  }
}

export default compose(
  withNavigation,
  GetHabits,
)(HabitListContainer);