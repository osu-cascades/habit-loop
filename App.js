import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo'
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
        <AppNavigator />
    );
  }
}


