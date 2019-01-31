import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import HabitScreen from '../screens/HabitScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CreateHabitScreen from '../screens/CreateHabitScreen';
import UserHabitScreen from '../screens/UserHabitScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    focused={focused}
    name={
      Platform.OS === 'ios'
      ? `ios-home${focused ? '' : '-outline'}`
      : 'md-home'
    }
    />
    ),
  };

const HabitStack = createStackNavigator({
  Links: {
     screen: HabitScreen,
  }, 
  CreateHabit: {
    screen: CreateHabitScreen,
  },
  UserHabit: {
    screen: UserHabitScreen,
  }
});

HabitStack.navigationOptions = {
  tabBarLabel: 'Habits',
  tabBarIcon: ({ focused }) => (
  <TabBarIcon
  focused={focused}
  name={Platform.OS === 'ios' ? `ios-list-box${focused ? '' : '-outline'}` : 'md-list-box'}
  />
  ),
};

const LeaderboardStack = createStackNavigator({
  Links: LeaderboardScreen,
});

LeaderboardStack.navigationOptions = {
  tabBarLabel: 'Leaderboard',
  tabBarIcon: ({ focused }) => (
  <TabBarIcon
  focused={focused}
  name={Platform.OS === 'ios' ? `ios-podium${focused ? '' : '-outline'}` : 'md-podium'}
  />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
  <TabBarIcon
  focused={focused}
  name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
  />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  HabitStack,
  LeaderboardStack,
  SettingsStack,
});
