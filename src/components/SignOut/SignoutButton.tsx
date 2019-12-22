import React from 'react';
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button } from './signout_styles';

import { ButtonText } from '@src/components/basic';

const signOut = async ({ navigate }) => {
  await AsyncStorage.clear();
  navigate('Auth');
};

const SignoutButton = () => {
  const { navigate } = useNavigation();

  return (
    <Button block onPress={() => signOut({ navigate })}>
      <ButtonText>Sign out</ButtonText>
    </Button>
  );
};

export default SignoutButton;
