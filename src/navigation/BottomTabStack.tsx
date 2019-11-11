import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import TabBarIcon from '@src/components/TabBarIcon';
import { HomeStack, HabitStack, LeaderboardStack, SettingsStack } from './';

const { Navigator, Screen } = createBottomTabNavigator();

const getIconName = route => {
  switch (route.name) {
    case 'home':
      return Platform.OS === 'ios' ? `ios-home` : 'md-home';
    case 'habits':
      return Platform.OS === 'ios' ? `ios-list-box` : 'md-list-box';
    case 'leaderboard':
      return Platform.OS === 'ios' ? `ios-podium` : 'md-podium';
    case 'settings':
      return Platform.OS === 'ios' ? `ios-options` : 'md-options';
    default:
      return Platform.OS === 'ios' ? `ios-home` : 'md-home';
  }
};

const handleAppScreenOptions = ({ route }) => {
  const iconName = getIconName(route);
  return {
    tabBarIcon: ({ focused, color, size }) => <TabBarIcon focused={focused} name={iconName} />,
  };
};

export const BottomTabStack = () => {
  return (
    <Navigator screenOptions={handleAppScreenOptions}>
      <Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Screen
        name="Habits"
        component={HabitStack}
        options={{
          tabBarLabel: 'Habits',
        }}
      />
      <Screen
        name="Leaderboard"
        component={LeaderboardStack}
        options={{
          tabBarLabel: 'Leaderboard',
        }}
      />
      <Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </Navigator>
  );
};
