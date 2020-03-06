import React from 'react';
import _ from 'lodash';
import HabitList from './components/HabitList';
import { CreateHabitFAB } from '../';

class HabitListContainer extends React.Component {
  state = {
    refetch: null,
  };

  updateHabits = refetch => {
    this.setState({
      refetch,
    });
  };

  render() {
    return (
      <>
        <HabitList updateHabits={this.updateHabits} />
        <CreateHabitFAB refetch={this.state.refetch} />
      </>
    );
  }
}

export default HabitListContainer;
