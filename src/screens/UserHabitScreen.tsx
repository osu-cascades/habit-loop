import React from 'react';
import EditHabitForm from '../components/EditHabit';

export default class UserHabitScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
      const habit = navigation.getParam('habit', {});

      return {
          title: habit.name,
      }
  };

  
  render() {
    return (
      <EditHabitForm 
        habit={this.props.navigation.getParam('habit', {})}
        refetch={this.props.navigation.getParam('refetch', null)}
      />
    );
  }
}