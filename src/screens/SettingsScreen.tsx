import React from 'react';
import { Settings, SignoutButton } from '../components';
import { Text } from 'react-native';
import Constants from 'expo-constants';
import { Container } from '../components/styling/SettinngsScreenStyles';
import { from } from 'zen-observable';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <Container>
        <Text>Nice</Text>
        <SignoutButton />
      </Container>
    );
  }
}
