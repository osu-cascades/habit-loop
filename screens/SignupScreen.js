import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import { SignupForm } from '../components';

export default class SignupScreen extends React.Component {
  static navigationOptions = {
    title: 'CBT Habit Loop',
  };

  render() {
    return (
      <Container>
        <SignupForm />
      </Container>
      );
    }
  }

  const styles = StyleSheet.create({
    
  });
