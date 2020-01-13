import React from 'react';
import CreateHabitForm from '@src/components/CreateHabitForm';

export const CreateHabitScreen = ({ route }) => {
  const { refetch } = route.params;

  return <CreateHabitForm refetch={refetch} />;
};

CreateHabitScreen.navigationOptions = {
  title: 'Create a new group',
};
