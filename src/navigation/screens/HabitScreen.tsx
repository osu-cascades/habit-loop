import React from 'react';
import HabitList from '@src/components/HabitList';

export const HabitScreen = () => {
  return <HabitList />;
};

HabitScreen.navigationOptions = {
  title: 'Habits',
};
