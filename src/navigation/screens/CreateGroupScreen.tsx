import React from 'react';
import { CreateGroup } from '@src/components/Groups';

export const CreateGroupScreen = () => {
  return <CreateGroup />;
};

CreateGroupScreen.navigationOptions = {
  title: 'Create a new group',
};
