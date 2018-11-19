import React, { Component } from 'react';
import { Button, Text } from 'native-base';

export default class LoginButton extends Component {
  render() {
    return (
          <Button block primary>
            <Text>Log in</Text>
          </Button>
    );
  }
}