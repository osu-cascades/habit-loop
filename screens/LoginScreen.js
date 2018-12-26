import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  Container
} from 'native-base';
import LoginForm from '../components/LoginForm';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'CBT Habit Loop',
  };

  render() {
    return (
      <Container>
        <LoginForm />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    
});
