import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Button } from 'native-base';
import LoginForm from '../components/LoginForm';
import SignupButton from '../components/SignupButton';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'CBT Habit Loop',
  };

  render() {
    return (
      <Container>
        <LoginForm />
        <SignupButton />
      </Container>
      );
    }
  }

  const styles = StyleSheet.create({
    
  });
