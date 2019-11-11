import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Button, ButtonText } from './basic';

const SignupButton = () => {
  const { navigate } = useNavigation();

  return (
    <Button onPress={() => navigate('Signup')}>
      <ButtonText>SIGNUP</ButtonText>
    </Button>
  );
};

export default SignupButton;
