import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HabitScreen, CreateHabitScreen, UserHabitScreen } from '@src/navigation/screens';

const { Navigator, Screen } = createStackNavigator();

export const HabitStack = () => {
  return (
    <Navigator>
      <Screen name="Habits" component={HabitScreen} />
      <Screen name="CreateHabit" component={CreateHabitScreen} />
      <Screen name="UserHabit" component={UserHabitScreen} />
    </Navigator>
  );
};
