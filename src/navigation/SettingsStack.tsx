import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '@src/screens';

const { Navigator, Screen } = createStackNavigator();

export const SettingsStack = () => {
  return (
    <Navigator>
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
};
