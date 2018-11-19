import React, { Component } from 'react';
import { Button, Text } from 'native-base';

export default class CreateHabitButton extends Component {
  render() {
    return (
          <Button block light>
            <Text>Add New Habit</Text>
          </Button>
    );
  }
}