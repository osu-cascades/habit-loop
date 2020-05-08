import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MedalsScreen } from '@src/navigation/screens';

const { Navigator, Screen } = createStackNavigator();

export const MedalsStack = () => {
  return (
    <Navigator>
      <Screen name=" " component={MedalsScreen} />
    </Navigator>
  );
};
