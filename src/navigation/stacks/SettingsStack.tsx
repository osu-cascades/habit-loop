import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '@src/navigation/screens';

const { Navigator, Screen } = createStackNavigator();

export const SettingsStack = () => {
  return (
    <Navigator>
      <Screen name=" " component={SettingsScreen} />
    </Navigator>
  );
};
