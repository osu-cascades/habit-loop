import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, CreateGroupScreen, JoinGroupScreen } from '@src/navigation/screens';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => {
  return (
    <Navigator>
      <Screen name="" component={HomeScreen} />
      <Screen name="CreateGroup" component={CreateGroupScreen} options={{ title: '' }} />
      <Screen name="JoinGroup" component={JoinGroupScreen} options={{ title: '' }} />
    </Navigator>
  );
};
