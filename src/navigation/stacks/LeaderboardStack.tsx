import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LeaderboardScreen } from '@src/navigation/screens';

const { Navigator, Screen } = createStackNavigator();

export const LeaderboardStack = () => {
  return (
    <Navigator>
      <Screen name="Leaderboard" component={LeaderboardScreen} />
    </Navigator>
  );
};
