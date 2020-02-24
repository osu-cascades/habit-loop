import React from 'react';
import { Button, ButtonText } from '../basic';
import { useNavigation } from '@react-navigation/core';
import { CreateGroupb } from './CreateGroupButtonStyles';

const CreateGroupButton = () => {
  const { navigate } = useNavigation();

  return (
    <CreateGroupb onPress={() => navigate('CreateGroup')}   >
      <ButtonText>Create Group</ButtonText>
    </CreateGroupb>
  );
};

export default CreateGroupButton;
