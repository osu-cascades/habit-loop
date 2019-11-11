import React, { useState, useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { LocalAuthentication } from 'expo';

import { LoginForm } from '../components';
import { Logo } from '../components/basic';

export const LoginScreen = () => {
  const [setTouchId, hasTouchId] = useState(false);
  useEffect(() => {
    // const hasTouchId = await LocalAuthentication.hasHardwareAsync();
    // if (hasTouchId) {
    //   await LocalAuthentication.authenticateAsync();
    // }
  });

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Logo source={require('../assets/images/lt.png')} />
      <LoginForm />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#E9E9E9',
  },
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
});
