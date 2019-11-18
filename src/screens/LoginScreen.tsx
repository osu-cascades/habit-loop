import React from 'react';
import { LocalAuthentication } from 'expo';
import { LoginForm } from '../components';
import { Logo } from '../components/basic/logo';
import { Container } from '../components/LoginForm/login_styles';

export default class LoginScreen extends React.Component {
  async componentDidMount() {
    // const hasTouchId = await LocalAuthentication.hasHardwareAsync();
    
    // if (hasTouchId) {
    //   await LocalAuthentication.authenticateAsync();
    // }
  }

  render() {
    return (
      <Container behavior='padding'>
          <Logo source={require('../assets/images/lt.png')}/>
          <LoginForm />
      </Container>
    );
  }
}
