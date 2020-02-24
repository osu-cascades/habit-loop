import React from 'react';
import { Button, ButtonText } from '../basic';
import { useNavigation } from '@react-navigation/core';
import { JoinGroupb } from './JoinGroupButtonStyles';

const JoinGroupButton = () => {
  const { navigate } = useNavigation();

  return (
    <JoinGroupb onPress={() => navigate('JoinGroup')} >
      <ButtonText>Join Group</ButtonText>
    </JoinGroupb>
  );
};

export default JoinGroupButton;
