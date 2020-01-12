import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, CreateGroupScreen, JoinGroupScreen } from '@src/navigation/screens';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="CreateGroup" component={CreateGroupScreen} />
      <Screen name="JoinGroup" component={JoinGroupScreen} />
    </Navigator>
  );
};
