import React, { useState, useEffect } from 'react';
import { LocalAuthentication } from 'expo';

import { LoginForm } from '../components';
import { Logo } from '../components/basic';
import { Container } from '../components/LoginForm/login_styles';

export const LoginScreen = () => {
  // const [setTouchId, hasTouchId] = useState(false);

  // useEffect(() => {
  // const hasTouchId = await LocalAuthentication.hasHardwareAsync();
  // if (hasTouchId) {
  //   await LocalAuthentication.authenticateAsync();
  // }
  // });

  return (
    <Container behavior="padding">
      <Logo source={require('../assets/images/lt.png')} />
      <LoginForm />
    </Container>
  );
};
