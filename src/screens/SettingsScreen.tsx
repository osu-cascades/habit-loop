import React from 'react';
import { Settings, SignoutButton } from '../components';
import { Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  Container, View
} from 'native-base';
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <Container style={styles.container}>
        <Text>Nice</Text>
        <SignoutButton />
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
