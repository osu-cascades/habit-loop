import React from 'react';
import { Button, ButtonText } from '../basic';
import { useNavigation } from '@react-navigation/core';

const CreateGroupButton = () => {
  const { navigate } = useNavigation();

  return (
    <Button onPress={() => navigate('CreateGroup')}>
      <ButtonText>Create Group</ButtonText>
    </Button>
  );
};

export default CreateGroupButton;
