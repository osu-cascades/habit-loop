import React from 'react';
import { SignoutButton } from '../../components';
import { useNavigation } from '@react-navigation/core';
import { Button, ButtonText } from '../../components/basic';
import { Container } from '../../components/styling/SettingsScreenStyles';

export const SettingsScreen = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Button onPress={() => navigate('PromoteUser')}>
        <ButtonText>Promote User</ButtonText>
      </Button>
      <SignoutButton />
    </Container>
  );
};

SettingsScreen.navigationOptions = {
  title: 'Settings',
};
