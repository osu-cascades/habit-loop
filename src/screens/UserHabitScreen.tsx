import React from 'react';
import EditHabitForm from '@src/components/EditHabit';
import { useNavigation } from '@react-navigation/core';

export const UserHabitScreen = () => {
  const { getParam } = useNavigation();
  return <EditHabitForm habit={getParam('habit', {})} refetch={getParam('refetch', null)} />;
};

UserHabitScreen.navigationOptions = ({ navigation }) => {
  const habit = navigation.getParam('habit', {});

  return {
    title: habit.name,
  };
};
