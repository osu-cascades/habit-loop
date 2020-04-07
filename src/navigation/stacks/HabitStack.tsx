import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HabitScreen, CreateHabitScreen, UserHabitScreen } from '@src/navigation/screens';

const { Navigator, Screen } = createStackNavigator();

export const HabitStack = () => {
  return (
    <Navigator>
      <Screen name="" component={HabitScreen} />
      <Screen name="CreateHabit" component={CreateHabitScreen} options={{ title: '' }} />
      <Screen name="UserHabit" component={UserHabitScreen} options={{ title: 'Edit Habit' }} />
    </Navigator>
  );
};
