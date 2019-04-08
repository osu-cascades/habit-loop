import React from 'react';

import HabitList from '../components/HabitList';

export default class HabitScreen extends React.Component {
  static navigationOptions = {
    title: 'Habits',
  };

  render() {
    return (
        <HabitList/>
    );
  }
}

