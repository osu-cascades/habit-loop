import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SignupScreen } from '@src/screens';

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerTransparent: true,
      }}>
      <Screen name="" component={LoginScreen} />
      <Screen name="" component={SignupScreen} />
    </Navigator>
  );
};
