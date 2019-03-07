import React from 'react';
import { SignupForm } from '../components';

export default class SignupScreen extends React.Component {
  static navigationOptions = {
    title: 'CBT Habit Loop',
  };

  render() {
    return (
        <SignupForm />
      );
  }
}
