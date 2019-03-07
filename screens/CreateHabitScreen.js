import React from 'react';
import CreateHabitForm from '../components/CreateHabitForm';


export default class CreateHabitScreen extends React.Component {
  static navigationOptions = {
    title: 'Create a new habit',
  };

  render() {
    return (
        <CreateHabitForm />
    );
  }
}