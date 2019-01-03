import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class CreateHabitButton extends Component {
  render() {
    return (
          <Button block light
            onPress={() => this.props.navigation.navigate('CreateHabit', {
              refetch: this.props.refetch
            })}
          >
            <Text>Add New Habit</Text>
          </Button>
    );
  }
}

export default withNavigation(CreateHabitButton);
