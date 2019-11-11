import React from 'react';
import { Button, ButtonText } from '../basic';
import { useNavigation } from '@react-navigation/core';

const JoinGroupButton = () => {
  const { navigate } = useNavigation();

  return (
    <Button onPress={() => navigate('CreateGroup')}>
      <ButtonText>Join Group</ButtonText>
    </Button>
  );
};

export default JoinGroupButton;
