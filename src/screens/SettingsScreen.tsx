import React from 'react';
import { SignoutButton } from '../components';
import { Container } from '../components/styling/SettingsScreenStyles';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <Container>
        <SignoutButton />
      </Container>
    );
  }
}
