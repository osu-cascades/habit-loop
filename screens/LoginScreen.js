import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Container
} from 'native-base';
import { Constants } from 'expo';
import LoginForm from '../components/LoginForm';
import LoginButton from '../components/LoginButton';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'CBT Habit Loop',
  };

  render() {
    return (
      <Container>
        <LoginForm />
        <LoginButton />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    
});
