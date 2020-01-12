import React from 'react';
import EditHabitForm from '@src/components/EditHabit';

export const UserHabitScreen = ({ route }) => {
  const { habit, refetch } = route.params;

  return <EditHabitForm habit={habit} refetch={refetch} />;
};

UserHabitScreen.navigationOptions = ({ navigation, route }) => {
  const { habit } = route.params;
  return {
    title: habit.name,
  };
};
