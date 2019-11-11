import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SignupScreen } from '@src/screens';

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Signup" component={SignupScreen} />
    </Navigator>
  );
};
