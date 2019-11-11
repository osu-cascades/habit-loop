import React, { Component } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button, ButtonText } from './basic';

const signOut = async ({ navigate }) => {
  await AsyncStorage.clear();
  navigate('Auth');
};

const SignoutButton = () => {
  const { navigate } = useNavigation();

  return (
    <Button block onPress={() => signOut({ navigate })} style={styles.signOut}>
      <ButtonText>Sign out</ButtonText>
    </Button>
  );
};

const styles = StyleSheet.create({
  signOut: {
    backgroundColor: '#F78E2A',
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
});

export default SignoutButton;
