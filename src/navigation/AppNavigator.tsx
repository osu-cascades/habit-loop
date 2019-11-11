import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { AuthStack, BottomTabStack } from './';
import { AuthLoadingScreen } from '@src/screens';

const { Navigator, Screen } = createStackNavigator();

export const AppStack = () => (
  <Navigator initialRouteName="AuthLoading">
    <Screen name="AuthLoading" component={AuthLoadingScreen} />
    <Screen name="Auth" component={AuthStack} />
    <Screen name="Main" component={BottomTabStack} />
  </Navigator>
);
