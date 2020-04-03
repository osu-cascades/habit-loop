import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen, PromoteUserScreen } from '@src/navigation/screens';

const { Navigator, Screen } = createStackNavigator();

export const SettingsStack = () => {
  return (
    <Navigator>
      <Screen name="Settings" component={SettingsScreen} />
      <Screen name="PromoteUser" component={PromoteUserScreen} />
    </Navigator>
  );
};
