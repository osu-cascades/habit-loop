import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Text } from 'react-native';
import { HomeStack, HabitStack, LeaderboardStack, SettingsStack, MedalsStack } from '../stacks';
import { HomeIconIOS, PodiumIcon, ListIconIOS, SettingsIconIOS, MedalsIcon } from '@src/assets/svgs';

const { Navigator, Screen } = createBottomTabNavigator();

const getIcon = route => {
  switch (route.name) {
    case 'Home':
      return Platform.OS === 'ios' ? HomeIconIOS : 'md-home';
    case 'Habits':
      return Platform.OS === 'ios' ? ListIconIOS : 'md-list-box';
    case 'Leaderboard':
      return PodiumIcon;
    case 'Medals':
      return MedalsIcon;
    case 'Settings':
      return Platform.OS === 'ios' ? SettingsIconIOS : 'md-options';
    default:
      return Platform.OS === 'ios' ? HomeIconIOS : 'md-home';
  }
};

const handleAppScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    const Icon = getIcon(route);

    // You can return any component that you like here!
    return <Icon width={size} />;
  },
});

export const BottomTabNavigator = () => {
  return (
    <Navigator
      screenOptions={handleAppScreenOptions}
      tabBarOptions={{
        inactiveTintColor: 'gray',
        activeTintColor: '#E6B43C',
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 13,
        },
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
        name="Medals"
        component={MedalsStack}
        options={{
          tabBarLabel: 'Medals',
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
