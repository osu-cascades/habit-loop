import React from "react";
import _ from 'lodash';
import HabitListContainer from './components/HabitListContainer';

import { 
  CreateHabitFAB,
} from '../';


class HabitList extends React.Component {
  state = {
    refetch: null,
  }

  updateHabits = (refetch) => {
    this.setState({ 
      refetch,
    })
  }

  render() {
    return (
        <>
          <HabitListContainer updateHabits={this.updateHabits}/>
          <CreateHabitFAB refetch={this.state.refetch} />
        </>
    );
  }
}

export default HabitList;
