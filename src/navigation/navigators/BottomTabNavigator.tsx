import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Text } from 'react-native';
import { HomeStack, HabitStack, LeaderboardStack, SettingsStack } from '..';
import { FolderIcon } from '@src/assets/svgs';

const { Navigator, Screen } = createBottomTabNavigator();

const getIconName = route => {
  switch (route.name) {
    case 'Home':
      return Platform.OS === 'ios' ? `ios-home` : 'md-home';
    case 'Habits':
      return Platform.OS === 'ios' ? `ios-list-box` : 'md-list-box';
    case 'Leaderboard':
      return Platform.OS === 'ios' ? `ios-podium` : 'md-podium';
    case 'Settings':
      return Platform.OS === 'ios' ? `ios-options` : 'md-options';
    default:
      return Platform.OS === 'ios' ? `ios-home` : 'md-home';
  }
};

const handleAppScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
    } else if (route.name === 'Settings') {
      iconName = focused ? 'ios-list-box' : 'ios-list';
    }

    // You can return any component that you like here!
    return <FolderIcon width={size} />;
  },
});

export const BottomTabNavigator = () => {
  return (
    <Navigator
      screenOptions={handleAppScreenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
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
