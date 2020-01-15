import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { ButtonText } from '@src/components/basic';
import { Button } from './signup_styles';

const SignupButton = () => {
  const { navigate } = useNavigation();

  return (
    <Button onPress={() => navigate('Signup')}>
      <ButtonText>SIGNUP</ButtonText>
    </Button>
  );
};

export default SignupButton;
