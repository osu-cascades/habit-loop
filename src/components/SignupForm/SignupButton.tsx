import React from 'react';
import { useNavigation } from '@react-navigation/core';
//import { ButtonText } from '@src/components/basic';
import { Button, ButtonText } from './signup_styles';

const SignupButton = () => {
  const { navigate } = useNavigation();

  return (
    <Button onPress={() => navigate('Signup')}>
      <ButtonText>Sign Up</ButtonText>
    </Button>
  );
};

export default SignupButton;
